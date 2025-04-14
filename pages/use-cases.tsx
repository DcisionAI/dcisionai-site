import React from "react";

const useCases = [
  {
    title: "Fleet Optimization",
    before: "Static routing, underutilized assets, and high maintenance downtime.",
    after: "Real-time decisioning enables dynamic rebalancing, predictive servicing, and optimized fleet deployment.",
  },
  {
    title: "Access Management",
    before: "Manual, rule-based access with limited visibility and security risks.",
    after: "Agentic control logic enforces context-aware permissions, sharing, and revocation across fleets and roles.",
  },
  {
    title: "Demand-Driven Pricing",
    before: "Flat pricing fails to adapt to usage patterns or inventory constraints.",
    after: "Intelligent pricing adjusts based on location, seasonality, and customer behavior to maximize yield.",
  },
  {
    title: "Operational Insight",
    before: "Siloed dashboards and delayed reports result in reactive decisions.",
    after: "DcisionAI delivers explainable recommendations, linking insights to optimized, real-time actions.",
  },
];

export default function UseCasesPage() {
  return (
    <section className="min-h-screen px-6 py-20 bg-stone-100 text-neutral-800">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl font-serif font-semibold text-brand-accent">
          Real Problems. Intelligent Solutions.
        </h1>
        <p className="mt-6 max-w-xl mx-auto text-lg text-brand-muted">
          Explore how DcisionAI powers smarter operations across supply chain, mobility, finance, and workforce planning.
        </p>
      </div>

      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {useCases.map(({ title, before, after }) => (
          <div
            key={title}
            className="bg-white p-6 rounded-xl border border-neutral-200 hover:shadow-md transition duration-300"
          >
            <h3 className="text-2xl font-semibold text-brand-accent mb-4">{title}</h3>
            <div className="grid grid-cols-2 gap-4 text-left text-sm">
              <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                <p className="font-bold text-red-600 mb-2">Before</p>
                <p className="text-neutral-700">{before}</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <p className="font-bold text-green-600 mb-2">After</p>
                <p className="text-neutral-700">{after}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
