import { useEffect } from 'react';

const steps = [
  {
    title: 'Fragmented Operations',
    description: 'Disconnected tools, brittle rules, inconsistent logic.',
  },
  {
    title: 'Reactive Chaos',
    description: 'Gut-driven decisions, firefighting mode, zero explainability.',
  },
  {
    title: 'DcisionAI Onboarded',
    description: 'Data, models, and protocols integrated in one decision layer.',
  },
  {
    title: 'Agentic Decisions',
    description: 'Context-aware agents optimize, explain, and adapt continuously.',
  },
  {
    title: 'Operational Clarity',
    description: 'Teams align, strategies execute, decisions are transparent.',
  },
];

export default function JourneyMap() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeInUp');
            entry.target.classList.remove('opacity-0');
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
    <section className="w-full px-6 py-24 bg-[var(--tw-brand-primary)]/40 backdrop-blur-sm">
      <h2 className="text-3xl font-serif font-semibold text-center text-[var(--tw-brand-accent)] mb-12">
        From Chaos to Clarity — A Decision Journey
      </h2>
      <div className="flex overflow-x-auto space-x-6 snap-x snap-mandatory px-2 md:px-10">
        {steps.map((step, index) => (
          <div
            key={index}
            className="journey-step min-w-[260px] md:min-w-[300px] bg-white/50 backdrop-blur-lg shadow-md rounded-lg p-6 snap-center opacity-0 transition-all duration-1000"
          >
            <h3 className="text-lg font-semibold text-[var(--tw-brand-accent)]">{step.title}</h3>
            <p className="mt-2 text-sm text-[var(--tw-brand-muted)]">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
