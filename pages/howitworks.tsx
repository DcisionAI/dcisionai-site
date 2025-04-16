import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TABS = [
  "Plug-in Architecture",
  "MCP Framework",
  "Fleet Example",
  "Explainability",
  "Live Ops"
];

export default function HowItWorksPage() {
  const [activeTab, setActiveTab] = useState("Plug-in Architecture");

  return (
    <section className="max-w-6xl mx-auto px-6 py-20 font-sans">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl font-semibold text-center text-brand-accent mb-6"
      >
        How It Works
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 0.3 }}
        className="text-lg text-center max-w-2xl mx-auto text-brand-muted mb-10"
      >
        From architecture to agentic execution, explore how DcisionAI powers decision-making that is adaptive, explainable, and continuously improving.
      </motion.p>

      <div className="flex justify-center space-x-6 mb-8 border-b pb-2 text-sm font-medium text-neutral-600">
        {TABS.map((tab) => (
          <span
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`cursor-pointer hover:text-black transition ${
              activeTab === tab ? "bg-[var(--tw-brand-light)] text-black px-3 py-1 rounded-full shadow-sm" : ""
            }`}
          >
            {tab}
          </span>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {activeTab === "Plug-in Architecture" && (
          <motion.div 
            key="plugin"
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, y: -10 }} 
            transition={{ duration: 0.4 }}
            className="bg-[var(--tw-brand-light)] rounded-2xl p-6 shadow-sm text-md text-neutral-800 space-y-6"
          >
            <h3 className="text-xl font-semibold text-brand-accent">Plug-in Architecture</h3>
            <p>DcisionAI’s architecture is designed to plug directly into existing enterprise infrastructure without requiring data migration or system replacement. Integration points include ERPs, CRMs, data warehouses, and live event streams. Our plugin connectors are secure, configurable, and align with enterprise IT policies.</p>
            <p>Adapters normalize incoming data — whether from APIs, batch uploads, or pub/sub streams — and convert them into context packets for agents to consume. The same architecture supports real-time streaming or scheduled batch runs, enabling use cases from instant pricing to daily workforce scheduling.</p>
            <p>All plugins are monitored for uptime, latency, and schema drift. When schema mismatches or delayed data is detected, fallback logic or human intervention protocols are triggered. This makes deployment safe and operations resilient.</p>
          </motion.div>
        )}

{activeTab === "MCP Framework" && (
          <motion.div 
            key="mcp"
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, y: -10 }} 
            transition={{ duration: 0.4 }}
            className="bg-[var(--tw-brand-light)] rounded-2xl p-6 shadow-sm text-md text-neutral-800 space-y-6"
          >
            <h3 className="text-xl font-semibold text-brand-accent">MCP Framework — Model, Context, Protocol</h3>
            <p>The MCP Framework is the core abstraction that governs every decision in DcisionAI. It separates what is being optimized (Model), the state of the world (Context), and how decisions are governed (Protocol). This separation ensures clarity, control, and composability across decision flows.</p>
            <p><strong>Model:</strong> DcisionAI supports both optimization models (LP, MIP, stochastic) and reasoning agents (LLMs, custom rule engines). Each model is modular and version-controlled, enabling A/B testing and rollback.</p>
            <p><strong>Context:</strong> Structured real-time variables (demand, constraints, user overrides) are streamed into the engine and cached with TTL and traceability metadata. Agents subscribe to context frames aligned to decision cycles (e.g., hourly pricing refresh).</p>
            <p><strong>Protocol:</strong> Each decision flow is governed by a protocol — a declarative object specifying trigger conditions, execution frequency, override logic, escalation chains, and explainability settings. Protocols are editable, versioned, and observed for drift.</p>
            <p>By making every decision a function of these three parts, enterprises get repeatability, safety, and the ability to continuously evolve logic without rewriting code or retraining models.</p>
          </motion.div>
        )}

        {activeTab === "Fleet Example" && (
          <motion.div 
            key="fleet"
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, y: -10 }} 
            transition={{ duration: 0.4 }}
            className="bg-[var(--tw-brand-light)] rounded-2xl p-6 shadow-sm text-md text-neutral-800 space-y-6"
          >
            <h3 className="text-xl font-semibold text-brand-accent">Fleet Optimization in Action — Real-Time, Context-Aware Routing</h3>

            <div>
              <p><strong>1. Secure Data Ingestion</strong></p>
              <p>
                DcisionAI connects to a variety of real-time and historical data streams from customer systems — including fleet telematics (vehicle location, fuel usage, idle time), weather APIs, delivery time windows, and traffic conditions.<br />
                <em>→ Example:</em> A delivery fleet management system pushes GPS and ETA data every 30 seconds.
              </p>
            </div>

            <div>
              <p><strong>2. Contextual Optimization</strong></p>
              <p>
                Each route is optimized using constraints like service-level agreements (SLAs), cost per mile, driver availability, and delivery deadlines. Agents apply mathematical models (e.g., VRP solvers, multi-objective optimization) and reference enterprise-defined policies for edge cases.<br />
                <em>→ Example:</em> Avoid routes that cross heavy traffic zones if delay risk exceeds threshold OR escalate to dispatch override.
              </p>
            </div>

            <div>
              <p><strong>3. Adaptive Agentic Loop</strong></p>
              <p>
                As real-world variables change — a vehicle breaks down, a weather alert is issued, or a customer modifies a time slot — the system automatically re-routes affected deliveries. Agents log the decision rationale, trigger override workflows if needed, and surface updated suggestions via UI or API.<br />
                <em>→ Example:</em> If a new thunderstorm alert is detected, the routing agent recalculates routes avoiding unsafe highways, while requesting manager confirmation for rerouting high-priority shipments.
              </p>
            </div>
          </motion.div>
        )}

        {activeTab === "Explainability" && (
          <motion.div 
            key="explain"
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, y: -10 }} 
            transition={{ duration: 0.4 }}
            className="bg-[var(--tw-brand-light)] rounded-2xl p-6 shadow-sm text-md text-neutral-800 space-y-6"
          >
            <h3 className="text-xl font-semibold text-brand-accent">Explainability — From Reasoning to Override</h3>
            <p>Every agent decision is logged with full context: model version, data frame, outcome, and rationale. These logs are queryable via dashboard or API for auditing or scenario replay.</p>
            <p>Human reviewers can view a decision’s impact analysis, trace upstream variables, and override outcomes using defined workflows. Overrides are versioned, attributed, and used to improve future protocols.</p>
            <p>This ensures DcisionAI can operate under strict governance and remain aligned with evolving business goals and compliance frameworks.</p>
          </motion.div>
        )}

        {activeTab === "Live Ops" && (
          <motion.div 
            key="ops"
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, y: -10 }} 
            transition={{ duration: 0.4 }}
            className="bg-[var(--tw-brand-light)] rounded-2xl p-6 shadow-sm text-md text-neutral-800 space-y-6"
          >
            <h3 className="text-xl font-semibold text-brand-accent">Live Operations & Continuous Learning</h3>
            <p>Deployed in active production environments, DcisionAI agents operate under SLA targets and system constraints. Latency, response accuracy, and decision throughput are continuously monitored.</p>
            <p>Live data pipelines feed operational metrics back into monitoring dashboards, and any anomalies trigger alerts or corrective workflows. Metrics can include decision coverage, override rates, and agent stability.</p>
            <p>Feedback loops — both human and machine — inform retraining schedules, protocol tuning, and agent redeployment. This architecture supports high-frequency adaptation with low operational risk.</p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
