import React from "react";

export default function UseCasesPage() {
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
      before: "Pricing based on static tiers or manual inputs.",
      after: "Real-time contextual signals and AI models set adaptive prices to match local demand and supply.",
    },
    {
      title: "Operational Insight",
      before: "Decisions delayed due to fragmented, stale reporting.",
      after: "Live dashboards powered by intelligent agents surface recommendations and risks instantly.",
    },
  ];

  return (
    <section >
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-serif font-semibold">
          Real Problems. Intelligent Solutions.
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-neutral-600">
          Explore how DcisionAI powers smarter operations across supply chain,
          mobility, finance, and workforce planning.
        </p>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">
          {useCases.map(({ title, before, after }) => (
            <div
              key={title}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col gap-4 hover:shadow-lg transition duration-300"
            >
              <h2 className="text-xl font-semibold">{title}</h2>
              <div className="grid grid-cols-2 gap-4 text-sm md:text-base">
                <div className="bg-red-50 border border-red-200 p-4 rounded-md text-left">
                  <p className="text-red-700 font-semibold mb-1">Before</p>
                  <p className="text-neutral-700">{before}</p>
                </div>
                <div className="bg-green-50 border border-green-200 p-4 rounded-md text-left">
                  <p className="text-green-700 font-semibold mb-1">After</p>
                  <p className="text-neutral-700">{after}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
