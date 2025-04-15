// /pages/api/chat.ts
import { NextApiRequest, NextApiResponse } from "next";
import { OpenAI } from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

export const config = {
  api: {
    responseLimit: false,
  },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).end();

  const { messages } = req.body;

  try {
    const stream = await openai.chat.completions.create({
      model: "gpt-4",
      stream: true,
      messages,
    });

    res.setHeader("Content-Type", "text/event-stream");
    res.setHeader("Cache-Control", "no-cache, no-transform");
    res.setHeader("Connection", "keep-alive");

    for await (const chunk of stream) {
      const content = chunk.choices?.[0]?.delta?.content;
      if (content) {
        res.write(`data: ${content}\n\n`);
      }
    }

    res.write("data: [DONE]\n\n");
    res.end();
  } catch (err) {
    console.error("Stream error:", err);
    res.status(500).json({ error: "Streaming failed" });
  }
}
