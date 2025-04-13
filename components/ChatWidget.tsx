
import React, { useState } from "react";

export default function ChatWidget() {
  const [messages, setMessages] = useState([{ role: "system", content: "Ask me anything about DcisionAI!" }]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: updatedMessages }),
      });

      const data = await res.json();
      setMessages([...updatedMessages, { role: "assistant", content: data.reply }]);
    } catch (err) {
      setMessages([...updatedMessages, { role: "assistant", content: "Sorry, something went wrong." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 w-full max-w-sm p-4 rounded-lg shadow-xl bg-white border border-zinc-200 z-50">
      <div className="max-h-64 overflow-y-auto mb-2 space-y-2 text-sm">
        {messages.slice(1).map((msg, i) => (
          <div key={i} className={`p-2 rounded-md ${msg.role === "user" ? "bg-blue-100 text-right" : "bg-zinc-100"}`}>
            {msg.content}
          </div>
        ))}
        {loading && <div className="text-zinc-400">Thinking...</div>}
      </div>
      <div className="flex space-x-2">
        <input
          className="flex-1 border rounded px-3 py-2 text-sm"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about DcisionAI..."
        />
        <button
          onClick={sendMessage}
          className="bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700 transition"
        >
          Send
        </button>
      </div>
    </div>
  );
}
