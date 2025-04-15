import React, { useState } from "react";

const FAQ = () => {
  const [chatInput, setChatInput] = useState("");
  const [chatHistory, setChatHistory] = useState([
    {
      role: "system",
      content:
        "You are a helpful assistant trained only on DcisionAI. Only answer based on the provided context.",
    },
  ]);
  const [chatResponse, setChatResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const newMessage = { role: "user", content: chatInput };
    const updatedHistory = [...chatHistory, newMessage];
    setChatHistory(updatedHistory);
    setChatInput("");
    setChatResponse("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ messages: updatedHistory }),
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

      // Push assistant message to history
      setChatHistory((prev) => [...prev, { role: "assistant", content: chatResponse }]);
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
