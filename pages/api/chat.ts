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
  const question = messages?.[messages.length - 1]?.content || "";

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

    const results = await vectorStore.similaritySearch(question, 4);

    // If no relevant chunks found, return a graceful fallback
    if (!results.length) {
      res.setHeader("Content-Type", "text/event-stream");
      res.setHeader("Cache-Control", "no-cache, no-transform");
      res.setHeader("Connection", "keep-alive");
      res.write(`data: Sorry, I don’t have information about that.\n\ndata: [DONE]\n\n`);
      return res.end();
    }

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

Use only the context provided below to answer. If the context does not cover the user's question, reply with:
"Sorry, I don’t have information about that."

Context:
${context}
          `.trim(),
        },
        {
          role: "user",
          content: question,
        },
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
