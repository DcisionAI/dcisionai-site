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
    const elements = document.querySelectorAll('.fade-section');
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="min-h-screen w-full px-6 py-20 space-y-20">
      <div className="text-center fade-section opacity-0 transition-all duration-1000">
        <h1 className="text-5xl font-serif font-semibold text-[var(--tw-brand-accent)]">
          Agentic Decision Architecture for Enterprises
        </h1>
        <p className="mt-6 text-lg text-[var(--tw-brand-muted)] max-w-3xl mx-auto">
          DcisionAI blends agentic autonomy, contextual optimization, and composable intelligence
          into a single decision execution platform — grounded in the MCP model and built for
          enterprise scale.
        </p>
      </div>

      <div className="max-w-5xl mx-auto fade-section opacity-0 transition-all duration-1000 space-y-12 text-[var(--tw-brand-muted)]">
        <div>
          <h2 className="text-2xl font-semibold text-[var(--tw-brand-accent)]">
            From MCP to Execution: Structured Decision Plans
          </h2>
          <p className="mt-2">
            DcisionAI extends Anthropic’s MCP (Model, Context, Protocol) paradigm by enabling
            autonomous agents to construct and execute decision flows dynamically. Each agent
            receives a Decision Plan that defines model selection, constraint logic, fallback
            routes, and explainability hooks — enabling rich, adaptive decision behavior.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-[var(--tw-brand-accent)]">
            Optimization is Native, Not Optional
          </h2>
          <p className="mt-2">
            At its core, DcisionAI treats decisions as optimization problems. We natively support LP,
            MIP, simulation heuristics, and domain-specific solvers. Agents choose optimal solving
            strategies based on context — balancing speed, accuracy, and interpretability.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-[var(--tw-brand-accent)]">Plugin-Driven Runtime</h2>
          <p className="mt-2">
            Every model, solver, data connector, and logic function is registered via our plugin
            system. This gives customers fine-grained control over which agents, tools, and
            constraints they run — with hot-swappable extensions and scoped environments.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-[var(--tw-brand-accent)]">Context Transformer Engine</h2>
          <p className="mt-2">
            Our agents operate on semantically tagged real-time context pulled from enterprise data
            lakes, APIs, and operational systems. Inputs are normalized and diffed to avoid
            recomputation, ensuring decisions are fresh, complete, and constraint-consistent.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-[var(--tw-brand-accent)]">Explainability & Traceability</h2>
          <p className="mt-2">
            Every decision emits a structured log: inputs, constraints, solver type, fallback
            triggers, and tradeoff explanations. These are versioned and indexable — enabling
            audits, simulation, and learning.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-[var(--tw-brand-accent)]">Enterprise Grade by Design</h2>
          <p className="mt-2">
            Multi-tenant runtime. Secure plugin registry. Scoped observability. Autonomous and
            human-in-the-loop control loops. DcisionAI is built to power live ops without tradeoffs.
          </p>
        </div>
      </div>
    </section>
  );
}
