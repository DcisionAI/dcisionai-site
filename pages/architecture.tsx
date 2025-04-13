import { useEffect } from 'react';

export default function ArchitecturePage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0');
            entry.target.classList.add('animate-fadeInUp');
          }
        }),
      { threshold: 0.1 }
    );
    const sections = document.querySelectorAll('.fade-section');
    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const sections = [
{ title: "MCP-Inspired Agentic Flow", body: `DcisionAI extends Anthropic’s MCP (Model, Context, Protocol) by enabling autonomous agents to interpret structured Decision Plans. Each plan guides model use, constraint logic, fallback handling, and explanation tracking—ensuring adaptive, explainable decisions.` },{ title: "Optimization Is Native", body: `Decisions aren’t just generated—they’re solved. Agents select LP, MIP, simulation heuristics, or domain-specific solvers depending on context complexity, tradeoffs, and required optimality. Optimization is central to how DcisionAI reasons.` },{ title: "Plugin-Based Runtime", body: `Every tool—model, solver, connector, rule—is implemented as a plug-in. Customers can extend capabilities dynamically without changing core code, enabling highly customized and composable decision layers.` },{ title: "Context Transformer Engine", body: `Inputs are pulled live from internal data lakes, APIs, and third-party feeds. The Context Engine normalizes, tags, and enriches them—ensuring decisions operate with clean, up-to-date variables and constraints.` },{ title: "Explainability & Decision Logs", body: `All decision steps are captured in structured logs: input state, solver selected, constraints triggered, and tradeoffs made. These logs power audit trails, simulations, and trust.` },{ title: "Enterprise Ready Execution", body: `Scoped plugin registries, tenant isolation, secure runtimes, and autonomous or human-in-loop decision cycles. The infrastructure is built for real-world deployment across critical ops functions.` }
  ];

  return (
    <section className="w-full px-6 py-20">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-serif font-semibold text-[var(--tw-brand-accent)]">
          Agentic Decision Architecture
        </h1>
        <p className="mt-6 text-lg text-[var(--tw-brand-muted)] max-w-3xl mx-auto">
          A modular runtime for optimization-driven, explainable enterprise decisions.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {sections.map((section, index) => (
          <div key={index} className="fade-section opacity-0 transition-all duration-1000 bg-white/60 backdrop-blur-md rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold text-[var(--tw-brand-accent)]">{section.title}</h3>
            <p className="mt-2 text-[var(--tw-brand-muted)] text-sm whitespace-pre-line">{section.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
