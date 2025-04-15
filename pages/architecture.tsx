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
              Legacy tools emphasized reporting or static optimization. Today’s decisions require real-time, interdependent, and explainable orchestration — where decisions evolve alongside the business.
            </p>
            <p className="mt-2 italic text-sm text-neutral-500">
              We combine decades of operations research with the latest in AI agents — giving enterprises adaptive control without losing traceability.
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
              While most platforms stop at forecasting, DcisionAI is prescriptive by design — embedding intelligence directly into operational decisions, governed by transparent protocols.
            </p>
          </div>
        )}

        {activeStage === "Optimization" && (
          <div>
            <h2 className="text-2xl font-semibold">Why Optimization Still Matters</h2>
            <p>
              Optimization is the foundation of intelligent operations. From logistics and pricing to inventory and resource planning, mathematical optimization has proven reliable — but often inaccessible or static.
            </p>
            <p className="mt-4">
              DcisionAI wraps proven optimization techniques (LP, MIP, simulation) inside agentic wrappers — making them adaptable, explainable, and safe for continuous enterprise deployment.
            </p>
          </div>
        )}

        {activeStage === "AI Agents" && (
          <div>
            <h2 className="text-2xl font-semibold">The Rise of AI Agents</h2>
            <p>
              AI agents are the next evolution in enterprise automation. These are not just LLMs — some agents wrap traditional solvers or custom business logic. What defines them is their autonomy, memory, and ability to adapt.
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li><strong>Models:</strong> Handle reasoning and generation</li>
              <li><strong>Memory:</strong> Store state and evolving context</li>
              <li><strong>Tools:</strong> Invoke APIs, solvers, internal systems</li>
              <li><strong>Protocols:</strong> Define how decisions are made, approved, and overridden</li>
            </ul>
            <p className="mt-4">
              DcisionAI enables enterprises to configure and deploy agents that align with operational policy, data governance, and evolving business logic — all within a secure, explainable, and human-in-the-loop framework.
            </p>
          </div>
        )}

        {activeStage === "Architecture" && (
          <div id="Architecture" className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="text-2xl font-semibold">The DcisionAI Architecture</h2>
              <p className="mt-2">
                At its core, DcisionAI is a plug-in platform governed by the MCP framework:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-1">
                <li><strong>Model:</strong> Composable AI/optimization modules</li>
                <li><strong>Context:</strong> Real-time inputs, constraints, and user signals</li>
                <li><strong>Protocol:</strong> Governance layer for overrides, traceability, and improvement</li>
              </ul>
              <p className="mt-4">
                The architecture is plugin-native — it connects to customer data sources via secure, configurable adapters. Whether it's ERP, warehouse, or CRM data, agents operate contextually without requiring data migration.
              </p>
              <p className="mt-4">
                This allows DcisionAI to plug into enterprise systems, ingest real-time context, invoke optimization or reasoning agents, and route outputs through governed protocols — with traceability and human oversight.
              </p>
              <p className="mt-4 text-sm text-neutral-600">
                Example features include millisecond-level latency for pricing updates, stream-based context ingestion, plugin-based architecture for enterprise data, and policy-governed override logic.
              </p>
            </div>

            <div className="flex flex-col items-center gap-8">
              <img
                src="/images/architecture-1.png"
                alt="DcisionAI Architecture Diagram"
                className="rounded-xl shadow-md w-full max-w-xl"
              />

              {/* Sample Protocol */}
              <div className="w-full">
                <h3 className="text-lg font-semibold mb-1">Sample Protocol</h3>
                <div className="text-xs font-medium bg-zinc-800 text-zinc-300 px-3 py-1 rounded-t-md w-fit">
                  adaptive-pricing.json
                </div>
                <pre className="bg-zinc-900 text-green-200 text-sm font-mono rounded-b-md p-4 whitespace-pre overflow-x-auto max-w-full">
{`{
  "name": "adaptive-pricing",
  "model": "pricing-optimizer-v3",
  "context": ["sku", "inventory", "region", "demand-forecast"],
  "protocol": {
    "onTrigger": "every 15 mins",
    "constraints": ["no price drop >10%"],
    "overrideRule": "manager-approval-if > $1000 impact"
  }
}`}
                </pre>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="mt-12 flex justify-center">
        <a
          href="/use-cases"
          className="inline-block bg-[var(--tw-brand-accent)] text-white font-medium px-6 py-3 rounded-full hover:opacity-90 transition"
        >
          Explore Use Cases
        </a>
      </div>
    </section>
  );
}