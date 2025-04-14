import React, { useState } from "react";
import * as Accordion from "@radix-ui/react-accordion";

const FAQ = () => {
  const [chatInput, setChatInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (chatInput.trim()) {
      window.open(`https://chat.openai.com/?q=${encodeURIComponent('Answer ONLY questions about DcisionAI. ' + chatInput)}`, "_blank");
    }
  };

  return (
    <section id="faq" className="max-w-5xl mx-auto px-6 py-20 bg-transparent">
      {/* OpenAI Chat Box */}
      <form onSubmit={handleSubmit} className="mb-16 border border-[#e9e4dc] bg-[#f9f5ef] p-6 rounded-2xl shadow-sm">
        <label htmlFor="chat-question" className="block text-[#1a1a1a] text-sm font-medium mb-3">Ask about DcisionAI</label>
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

      <h2 className="text-[36px] leading-tight font-semibold tracking-[-0.015em] mb-12 text-black">Frequently Asked Questions</h2>
      <Accordion.Root type="single" collapsible className="space-y-6">
        {[{
          value: "integration",
          question: "How does DcisionAI ensure seamless integration with legacy systems?",
          answer: "DcisionAI uses a modular plugin architecture that connects to your existing data sources and operational systems without requiring disruptive migrations. Integration typically completes in 2–4 weeks depending on system complexity."
        }, {
          value: "security",
          question: "What data security measures are in place?",
          answer: "We follow industry best practices with end-to-end encryption, role-based access control, and rigorous compliance with GDPR, CCPA, and SOC2 requirements. Customer data remains in your secure cloud or on-prem environment."
        }, {
          value: "scalability",
          question: "Can DcisionAI scale as our business grows?",
          answer: "Yes. Our architecture is cloud-native and horizontally scalable. It’s built to handle thousands of concurrent decision flows across departments, with dynamic resource allocation and performance monitoring."
        }, {
          value: "roi",
          question: "How do you measure ROI from DcisionAI?",
          answer: "ROI is measured using KPIs such as time-to-decision, error reduction, throughput, and business-specific metrics like cost savings, revenue uplift, and efficiency gains. We provide built-in analytics dashboards to track these improvements."
        }, {
          value: "training",
          question: "What kind of training is provided?",
          answer: "We offer role-specific onboarding, interactive demos, documentation, and support for in-house enablement. Enterprise customers also receive personalized training sessions and access to our solution engineering team."
        }, {
          value: "support",
          question: "What support and maintenance options are available?",
          answer: "Our standard plan includes 24/7 email support and regular product updates. Enterprise SLAs are available with dedicated account managers, priority bug resolution, and custom integration support."
        }, {
          value: "acquisition",
          question: "How has the DataRobot acquisition influenced the roadmap?",
          answer: "Post-acquisition, DcisionAI benefits from DataRobot’s infrastructure, customer base, and R&D resources. Our product roadmap now includes tighter integration with DataRobot’s MLOps stack and expanded enterprise capabilities."
        }, {
          value: "competition",
          question: "What differentiates DcisionAI in a competitive landscape?",
          answer: "Unlike generic AI tools, DcisionAI is decision-centric with built-in explainability and plug-and-play deployment. Our agentic framework allows enterprises to orchestrate intelligent action across systems with human-in-the-loop oversight."
        }, {
          value: "revenue",
          question: "What is DcisionAI’s business model and growth strategy?",
          answer: "We operate on a subscription SaaS model with usage-based pricing tiers. Growth is driven by enterprise expansion, integrations with strategic partners, and embedding into mission-critical decision workflows."
        }].map(({ value, question, answer }) => (
          <Accordion.Item key={value} value={value} className="border-b border-neutral-300">
            <Accordion.Header>
              <Accordion.Trigger className="flex items-center justify-between w-full text-left text-base font-normal text-black py-2 hover:opacity-90 focus:outline-none transition-all group">
                <span>{question}</span>
                <span className="ml-4 text-sm text-black group-data-[state=open]:rotate-180 transition-transform">⌄</span>
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="mt-2 text-sm text-black pb-4 leading-relaxed">
              {answer}
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </section>
  );
};

export default FAQ;
