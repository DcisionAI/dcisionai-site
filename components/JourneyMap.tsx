import { useState, useEffect } from 'react';

const steps = [
  {
    title: 'Fragmented Operations',
    summary: 'Disconnected tools, brittle rules, inconsistent logic.',
    before: 'Dozens of tools, disconnected logic, human glue.',
    after: 'One protocolized layer connecting ops, data, and intent.',
  },
  {
    title: 'Reactive Chaos',
    summary: 'Gut-driven decisions, firefighting mode, zero explainability.',
    before: 'Decisions made in war rooms, no documentation or repeatability.',
    after: 'Decisions are transparent, contextual, and reproducible.',
  },
  {
    title: 'DcisionAI Onboarded',
    summary: 'Data, models, and protocols integrated in one decision layer.',
    before: 'Data, models, and rules live in different silos.',
    after: 'DcisionAI brings them together into agentic workflows.',
  },
  {
    title: 'Agentic Decisions',
    summary: 'Context-aware agents optimize, explain, and adapt continuously.',
    before: 'Human bottlenecks, no understanding of tradeoffs.',
    after: 'Agents surface best options, rationale, and alternatives in real-time.',
  },
  {
    title: 'Operational Clarity',
    summary: 'Teams align, strategies execute, decisions are transparent.',
    before: 'Teams react, KPIs fluctuate, nobody knows why.',
    after: 'Decisions are shared, aligned, and measurable across the org.',
  },
];

export default function JourneyMap() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0');
            entry.target.classList.add('animate-fadeInUp');
          }
        });
      },
      { threshold: 0.1 }
    );
    const sections = document.querySelectorAll('.journey-step');
    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full px-6 py-16 bg-[var(--tw-brand-primary)]/40 backdrop-blur-sm">
      <h2 className="text-3xl font-serif font-semibold text-center text-[var(--tw-brand-accent)] mb-8">
        The Evolution of Enterprise Decision-Making
      </h2>
      <div className="flex overflow-x-auto space-x-6 snap-x snap-mandatory px-2 md:px-10">
        {steps.map((step, index) => (
          <div
            key={index}
            className="journey-step min-w-[260px] md:min-w-[300px] bg-white/50 backdrop-blur-lg shadow-md rounded-lg p-6 snap-center opacity-0 transition-all duration-1000 cursor-pointer"
            onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
          >
            <h3 className="text-lg font-semibold text-[var(--tw-brand-accent)]">{step.title}</h3>
            <p className="mt-2 text-sm text-[var(--tw-brand-muted)]">{step.summary}</p>

            {expandedIndex === index && (
              <div className="mt-4 text-sm text-[var(--tw-brand-muted)] space-y-2">
                <div>
                  <strong className="block text-[var(--tw-brand-accent)]">Before</strong>
                  <p>{step.before}</p>
                </div>
                <div>
                  <strong className="block text-[var(--tw-brand-accent)]">After</strong>
                  <p>{step.after}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
