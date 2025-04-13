import { useEffect } from 'react';
import JourneyMap from '../components/JourneyMap';

export default function VisionPage() {
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

    const elements = document.querySelectorAll('.fade-section');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="min-h-screen w-full px-6 py-20 space-y-20">
      <div className="text-center fade-section opacity-0 transition-all duration-1000">
        <h1 className="text-5xl font-serif font-semibold text-[var(--tw-brand-accent)]">
          Shaping the Future of Enterprise Intelligence
        </h1>
        <p className="mt-4 text-xl text-[var(--tw-brand-muted)]">
          Smarter decisions. Transparent logic. Agentic operations.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto fade-section opacity-0 transition-all duration-1000">
        <div className="bg-white/50 backdrop-blur-md rounded-lg p-6 shadow-md hover:shadow-lg transition-all">
          <h3 className="text-xl font-semibold text-[var(--tw-brand-accent)]">The Problem</h3>
          <p className="mt-2 text-[var(--tw-brand-muted)] text-sm">
            Enterprises are drowning in complexity — fragmented tools, opaque logic, outdated forecasts, brittle rules.
            Decision-making today is reactive and disconnected. It’s often reduced to dashboards and gut calls.
          </p>
        </div>

        <div className="bg-white/50 backdrop-blur-md rounded-lg p-6 shadow-md hover:shadow-lg transition-all">
          <h3 className="text-xl font-semibold text-[var(--tw-brand-accent)]">Why Now?</h3>
          <p className="mt-2 text-[var(--tw-brand-muted)] text-sm">
            The explosion of real-time data and LLMs has outpaced the decision infrastructure of most enterprises.
            Agentic systems and composable architectures are creating a new frontier for decision intelligence.
          </p>
        </div>

        <div className="bg-white/50 backdrop-blur-md rounded-lg p-6 shadow-md hover:shadow-lg transition-all">
          <h3 className="text-xl font-semibold text-[var(--tw-brand-accent)]">Our Solution</h3>
          <p className="mt-2 text-[var(--tw-brand-muted)] text-sm">
            DcisionAI connects real-time data, models, constraints, and human judgment into a transparent decision layer.
            Every decision becomes explainable, adaptive, and optimized — powering intelligent enterprise operations.
          </p>
        </div>
      </div>

      <JourneyMap />
    </section>
  );
}
