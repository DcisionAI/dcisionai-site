import { NextApiRequest, NextApiResponse } from "next";
import { OpenAI } from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Keywords that indicate it's related to DcisionAI
const allowedTopics = [
  "dcisionai",
  "decision intelligence",
  "plugin",
  "agent",
  "context",
  "model",
  "protocol",
  "architecture",
  "explainability",
  "use case",
  "optimization",
  "agentic"
];

const isOnTopic = (messages: any[]) => {
  const content = messages.map((m) => m.content.toLowerCase()).join(" ");
  return allowedTopics.some((kw) => content.includes(kw));
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).end();

  const { messages } = req.body;

  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ reply: "Invalid request format." });
  }

  // Topic filter — reject unrelated questions
  if (!isOnTopic(messages)) {
    return res.status(200).json({
      reply: "Sorry, I can only answer questions related to DcisionAI.",
    });
  }

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages,
    });

    const reply = completion.choices[0]?.message?.content || "No response from AI.";
    res.status(200).json({ reply });
  } catch (err) {
    console.error("OpenAI API error:", err);
    res.status(500).json({ reply: "Sorry, an error occurred while fetching response." });
  }
}
