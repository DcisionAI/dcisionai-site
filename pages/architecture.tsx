import Image from 'next/image';

export default function ArchitecturePage() {
  const sections = [
    {
      title: 'MCP-Orchestrated Architecture',
      body: `DcisionAI implements an evolved MCP (Model–Context–Protocol) architecture to coordinate intelligent decision-making across composable agents. Each layer is modular, auditable, and adaptable to enterprise constraints and goals.`
    },
    {
      title: 'Model Layer',
      body: `Encapsulates decision logic, mathematical optimization (LP, MIP), heuristics, ML/AI models, business rules, and forecasting modules. Models are plug-ins that can be injected, composed, and swapped.

Example: A cost optimization model, a staff allocation heuristic, or an LLM fine-tuned for planning language.`
    },
    {
      title: 'Context Layer',
      body: `Aggregates structured and unstructured data in real time. Context transforms raw data from data lakes, APIs, and external signals into actionable state variables and constraints.

Example: Real-time demand signals, supply constraints, labor availability, forecast uncertainty.`
    },
    {
      title: 'Protocol Layer',
      body: `Defines flow logic — which model to use, how agents coordinate, and what fallback paths to take. Protocols are declarative, auditable, and composable.

Example: “If forecast confidence > 90%, use LP optimizer; else fallback to rule-based plan and flag uncertainty for review.”`
    },
    {
      title: 'Agent Composition',
      body: `Specialized agents execute parts of the MCP cycle:
- Perception agents: ingest and process data
- Planning agents: invoke models
- Execution agents: follow protocols
- Governance agents: enforce rules and explainability

Agents coordinate over shared memory with a protocol-aware runtime.`
    },
    {
      title: 'Plug-In Runtime',
      body: `The architecture is built on a plug-in framework. Customers can register new models, customize context pipelines, and override protocols without modifying core logic.`
    },
    {
      title: 'Explainability by Construction',
      body: `Every decision is explainable by default:
1. Protocol = why
2. Model = how
3. Context = what

Logs are versioned and auditable — making trust and traceability native to the system.`
    }
  ];

  return (
    <section className="w-full px-6 py-20 space-y-16">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-sans antialiased font-semibold text-[var(--tw-brand-accent)]">
          DcisionAI System Architecture
        </h1>
        <p className="mt-6 text-lg text-[var(--tw-brand-muted)] max-w-3xl mx-auto">
          A modern agentic architecture grounded in Model–Context–Protocol (MCP) principles and built for composability, explainability, and intelligent enterprise execution.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 max-w-7xl mx-auto items-start">
        <div className="space-y-8">
          {sections.map((item, i) => (
            <div key={i} className="bg-white/60 backdrop-blur-md rounded-lg p-5 shadow-md">
              <h3 className="text-xl font-semibold text-[var(--tw-brand-accent)]">{item.title}</h3>
              <p className="mt-2 text-sm text-[var(--tw-brand-muted)] whitespace-pre-line">{item.body}</p>
            </div>
          ))}
        </div>

        <div className="w-full">
          <Image
            src="/images/architecture.png"
            alt="DcisionAI MCP Architecture Diagram"
            width={900}
            height={600}
            className="rounded-lg shadow-lg w-full h-auto"
          />
          <Image
            src="/images/how-it-works.png"
            alt="DcisionAI MCP Architecture Diagram"
            width={900}
            height={600}
            className="rounded-lg shadow-lg w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
