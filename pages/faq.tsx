import React, { useState } from "react";

const FAQ = () => {
  const [chatInput, setChatInput] = useState("");
  const [chatResponse, setChatResponse] = useState("");
  const [loading, setLoading] = useState(false);

 
const FAQ_CONTEXT = `
You are an expert assistant for the DcisionAI website. Answer ONLY questions about DcisionAI.

If the question is off-topic (not related to DcisionAI), politely respond: "Sorry, I can only answer questions about DcisionAI."

Otherwise, respond based on the following knowledge about DcisionAI:

DcisionAI is a cloud-native decision intelligence platform that integrates with existing enterprise systems and data sources. It enables organizations to automate and optimize complex decision workflows using agentic AI, plugin architecture, and human-in-the-loop explainability.

Key features include:
- Modular plugin-based integration
- Agentic orchestration (MCP architecture: Model, Context, Protocol)
- Human-in-the-loop overrides and explainability
- Cloud-native, horizontally scalable backend
- ROI tracking via analytics dashboards
- SaaS pricing with usage-based tiers

FAQs:
Q: How does DcisionAI integrate with legacy systems?
A: It uses a plugin architecture to connect with existing data lakes and operational systems without requiring replatforming.

Q: What security measures are in place?
A: Data is encrypted end-to-end, and the platform complies with SOC2, GDPR, and other industry standards.

Q: Can DcisionAI scale?
A: Yes, it scales horizontally and supports thousands of concurrent decision flows.

Q: What is the business model?
A: DcisionAI is a subscription SaaS offering with usage-based pricing. Growth is driven through enterprise integration and decision automation.

Always answer in a clear, confident, business-facing tone. Do NOT apologize for relevant questions.
`;



  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    setChatResponse("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: [
            {
              role: "system",
              content: FAQ_CONTEXT,
            },
            {
              role: "user",
              content: chatInput,
            },
          ],
        }),
      });

      const reader = res.body?.getReader();
      const decoder = new TextDecoder("utf-8");

      let done = false;
      while (!done && reader) {
        const { value, done: doneReading } = await reader.read();
        done = doneReading;
        const chunk = decoder.decode(value);
        const lines = chunk.split("\n").filter(Boolean);

        for (const line of lines) {
          if (line === "data: [DONE]") {
            done = true;
            break;
          }

          if (line.startsWith("data: ")) {
            const token = line.replace("data: ", "");
            setChatResponse((prev) => prev + token);
          }
        }
      }
    } catch (err) {
      console.error("Client error:", err);
      setChatResponse("An error occurred while contacting the assistant.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="faq" className="max-w-5xl mx-auto px-6 py-20 bg-transparent">
      <form
        onSubmit={handleSubmit}
        className="mb-16 border border-[#e9e4dc] bg-[#f9f5ef] p-6 rounded-2xl shadow-sm"
      >
        <label
          htmlFor="chat-question"
          className="block text-[#1a1a1a] text-sm font-medium mb-3"
        >
          Ask about DcisionAI
        </label>
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            id="chat-question"
            type="text"
            value={chatInput}
            onChange={(e) => setChatInput(e.target.value)}
            placeholder="Ask something specific about DcisionAI..."
            className="flex-1 px-4 py-3 border border-[#d6cec2] bg-[#fcfaf7] rounded-lg text-[#1a1a1a] text-sm focus:outline-none focus:ring-2 focus:ring-[#1a1a1a]"
          />
          <button
            type="submit"
            className="px-5 py-3 bg-[#1a1a1a] text-white rounded-lg text-sm hover:bg-[#3c3c3c] transition"
          >
            Ask
          </button>
        </div>
      </form>

      {loading && <p className="text-sm text-neutral-500 mt-4">Typing response...</p>}
      {chatResponse && (
        <div className="mt-6 p-4 bg-[#fcfaf7] border border-[#e9e4dc] rounded-lg text-sm text-[#1a1a1a] whitespace-pre-wrap">
          {chatResponse}
        </div>
      )}
    </section>
  );
};

export default FAQ;
