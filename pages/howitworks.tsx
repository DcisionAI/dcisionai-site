import React from "react";

export default function HowItWorks() {
  const cards = [
    {
      title: "Start with Operational Complexity",
      content:
        "Our first wedge: fleet dispatch. A real-world challenge where live signals, constraints, and tradeoffs collide. DcisionAI integrates with your systems to orchestrate real-time, explainable decisions.",
      bullets: [
        "Live signals: GPS, traffic, weather, incidents",
        "Constraint handling: SLAs, driver fatigue, cost factors",
        "Agentic decisions: Optimal plans based on real-world tradeoffs",
        "Human-in-the-loop: Managers can audit, approve, or override decisions"
      ]
    },
    {
      title: "MCP: Model, Context, Protocol",
      content:
        "At the core of DcisionAI is MCP — a modular framework that separates decision logic (Model), real-world inputs (Context), and governance constraints (Protocol). This structure powers agentic workflows that are explainable, controllable, and enterprise-ready.",
      bullets: [
        "Model: Optimization logic or generative agent",
        "Context: Structured real-time signals and constraints",
        "Protocol: Guardrails for override, audit, and improvement"
      ]
    },
    {
      title: "Composable by Design — Powered by Plugins",
      content:
        "Every decision module in DcisionAI is a plugin. From model logic to override triggers, each component is swappable and composable — enabling fast deployment into one wedge, and seamless expansion to others.",
      bullets: [
        "Model Plugins: Route scoring, field dispatch, demand forecasting",
        "Policy Plugins: SLA rules, escalation logic, compliance triggers",
        "Override Plugins: Manual reviews, audit trails, safety protocols"
      ]
    },
    {
      title: "Scale from Wedge to Platform",
      content:
        "Once live in one domain, DcisionAI can be extended across any decision flow — from workforce scheduling to inventory, pricing, and finance — using the same agentic engine.",
      bullets: [
        "Same engine. New domain.",
        "Same protocol. New inputs.",
        "From fleet to finance — one platform."
      ]
    }
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-16 font-sans">
      <h1 className="text-4xl md:text-5xl font-semibold text-center tracking-tight mb-4">
        Built for the Wedge. Architected for Scale.
      </h1>
      <p className="text-center text-neutral-600 mb-12 max-w-2xl mx-auto">
        DcisionAI starts with high-intensity ops like dispatch and field scheduling — then scales across the enterprise through a modular agentic architecture.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {cards.map(({ title, content, bullets }) => (
          <div
            key={title}
            className="bg-[var(--tw-brand-light)] rounded-2xl shadow-sm p-6 transition hover:-translate-y-1 hover:shadow-md"
          >
            <h2 className="text-xl font-semibold mb-2">{title}</h2>
            <p className="text-neutral-700 mb-3 text-sm">{content}</p>
            <ul className="list-disc pl-5 space-y-1 text-sm text-neutral-800">
              {bullets.map((b, idx) => (
                <li key={idx}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
