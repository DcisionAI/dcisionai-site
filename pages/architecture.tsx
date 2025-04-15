import { useState } from "react";

const STAGES = [
  "History",
  "Analytics",
  "Optimization",
  "AI Agents",
  "Architecture",
];

export default function ArchitecturePage() {
  const [activeStage, setActiveStage] = useState("History");

  return (
    <section className="max-w-6xl mx-auto px-6 py-16 font-sans">
      <h1 className="text-4xl md:text-5xl font-semibold text-center tracking-tight mb-4">
        Built for Complexity. Designed for Control.
      </h1>
      <p className="text-center text-neutral-600 mb-8 max-w-2xl mx-auto">
        Walk through the evolution of enterprise decision-making — from static rules to agentic orchestration.
      </p>

      {/* TOGGLE BAR */}
      <div className="flex flex-wrap justify-center gap-3 bg-[var(--tw-brand-light)] rounded-full px-4 py-2 mb-12 shadow-sm">
        {STAGES.map((stage) => (
          <button
            key={stage}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition ${
              activeStage === stage
                ? "bg-[var(--tw-brand-accent)] text-white"
                : "text-neutral-700 hover:text-black"
            }`}
            onClick={() => setActiveStage(stage)}
          >
            {stage}
          </button>
        ))}
      </div>

      {/* CONTENT */}
      <div className="transition-all duration-300 ease-in-out space-y-6 text-lg text-neutral-800 bg-[var(--tw-brand-light)] rounded-2xl p-6 shadow-sm">
        {activeStage === "History" && (
          <div>
            <h2 className="text-2xl font-semibold">The Evolution of Decision Systems</h2>
            <p>
              From rule-based expert systems in the 1980s to today’s agentic architectures, enterprise decision-making has followed a recognizable arc:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li><strong>1980s–1990s:</strong> Rules & Heuristics — brittle under complexity</li>
              <li><strong>2000s:</strong> BI & Dashboards — descriptive but not actionable</li>
              <li><strong>2010s:</strong> Optimization & Forecasting — powerful but siloed</li>
              <li><strong>2020s:</strong> ML & AI Agents — adaptive, composable, explainable</li>
            </ul>
            <p className="mt-4">
              Legacy tools emphasized reporting or static optimization. Today’s decisions require real-time, interdependent, and explainable orchestration.
            </p>
          </div>
        )}

        {activeStage === "Analytics" && (
          <div>
            <h2 className="text-2xl font-semibold">The Analytics Continuum</h2>
            <p className="mb-2">
              Analytics has matured through three primary layers — each offering increasing leverage:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li><strong>Descriptive:</strong> What happened?</li>
              <li><strong>Predictive:</strong> What is likely to happen?</li>
              <li><strong>Prescriptive:</strong> What should we do?</li>
            </ul>
            <p className="mt-4">
              While most platforms stop at forecasting, DcisionAI is prescriptive by design — embedding AI into operational flows with governance and explainability.
            </p>
          </div>
        )}

        {activeStage === "Optimization" && (
          <div>
            <h2 className="text-2xl font-semibold">Why Optimization Still Matters</h2>
            <p>
              Optimization has long been the core of operations research — powering decisions across supply chains, finance, logistics, and workforce planning.
            </p>
            <p className="mt-4">
              From linear programming and MIP to scenario simulation and stochastic planning, DcisionAI wraps these capabilities in agentic wrappers that make optimization reusable, explainable, and safe.
            </p>
          </div>
        )}

        {activeStage === "AI Agents" && (
          <div>
            <h2 className="text-2xl font-semibold">The Rise of AI Agents</h2>
            <p>
              Today’s LLMs are not just chat interfaces — they’re reasoning engines capable of workflows, tool use, and protocol execution.
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li><strong>Models:</strong> Perform reasoning and generation</li>
              <li><strong>Memory:</strong> Track state and context</li>
              <li><strong>Tools:</strong> Connect to APIs, solvers, or databases</li>
              <li><strong>Protocols:</strong> Govern how agents behave and improve</li>
            </ul>
            <p className="mt-4">
              DcisionAI lets enterprises deploy safe, business-aligned agents grounded in real-time data, approved logic, and operational context.
            </p>
          </div>
        )}

        {activeStage === "Architecture" && (
  <div className="grid md:grid-cols-2 gap-8 items-start">
    <div>
      <h2 className="text-2xl font-semibold">The DcisionAI Architecture</h2>
      <p className="mt-2">
        The core of DcisionAI is a plug-in platform governed by the MCP framework:
      </p>
      <ul className="list-disc pl-6 mt-4 space-y-1">
        <li><strong>Model:</strong> Optimization and AI functions, composable and reusable</li>
        <li><strong>Context:</strong> Real-time variables, constraints, and user signals</li>
        <li><strong>Protocol:</strong> Rules, overrides, traceability, and decision governance</li>
      </ul>
      <p className="mt-4">
        This architecture powers agents that don’t just automate — they adapt, learn, and remain under human oversight.
      </p>
      <div className="mt-8">
        <a
          href="/use-cases"
          className="inline-block bg-[var(--tw-brand-accent)] text-white font-medium px-6 py-3 rounded-full hover:opacity-90 transition"
        >
          Explore Use Cases
        </a>
      </div>
    </div>
    <div className="flex justify-center">
      <img src="/images/architecture.png" alt="DcisionAI Architecture Diagram" className="rounded-xl shadow-md w-full max-w-md" />
    </div>
  </div>
)}
      </div>
    </section>
  );
}
