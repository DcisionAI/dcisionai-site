import { NextApiRequest, NextApiResponse } from "next";
import path from "path";
import fs from "fs";
import { OpenAI } from "openai";
import { HNSWLib } from "@langchain/community/vectorstores/hnswlib";
import { OpenAIEmbeddings } from "@langchain/openai";

export const config = {
  api: {
    responseLimit: false,
  },
};

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).end();

  const { messages } = req.body;
  const latestQuestion = messages?.[messages.length - 1]?.content || "";

  try {
    const persistPath = path.resolve("data/hnswlib");

    if (!fs.existsSync(persistPath)) {
      return res.status(500).json({ error: "Vector store not found." });
    }

    const vectorStore = await HNSWLib.load(
      persistPath,
      new OpenAIEmbeddings({
        openAIApiKey: process.env.OPENAI_API_KEY,
      })
    );

    const results = await vectorStore.similaritySearch(latestQuestion, 4);
    const context = results.map((r) => r.pageContent).join("\n\n");

    // Stream headers
    res.setHeader("Content-Type", "text/event-stream");
    res.setHeader("Cache-Control", "no-cache, no-transform");
    res.setHeader("Connection", "keep-alive");

    const stream = await openai.chat.completions.create({
      model: "gpt-4",
      stream: true,
      messages: [
        {
          role: "system",
          content: `
You are a helpful assistant trained on the DcisionAI knowledgebase.

Only use the context provided below to answer the user's question. If the information is not found in context, respond with:
"Sorry, I don’t have information about that."

Context:
${context}
          `.trim(),
        },
        ...messages,
      ],
    });

    for await (const chunk of stream) {
      const content = chunk.choices?.[0]?.delta?.content;
      if (content) {
        res.write(`data: ${content}\n\n`);
      }
    }

    res.write("data: [DONE]\n\n");
    res.end();
  } catch (error) {
    console.error("Chat API error:", error);
    res.status(500).json({ error: "Error generating response." });
  }
}
