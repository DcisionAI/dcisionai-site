import React from "react";

export default function UseCasesPage() {
  const useCases = {
    "Fleet Operations": [
      {
        title: "Dispatch Triage",
        challenge:
          "Manual dispatch decisions led to delays, inconsistent outcomes, and operator fatigue during peak hours.",
        solution:
          "DcisionAI recommends optimal dispatch decisions in real time based on location, severity, traffic, and team capacity — all explainable and overrideable.",
        impact:
          "Dispatchers save time, decisions are consistent, and response times improve across the board.",
      },
      {
        title: "Route Optimization",
        challenge:
          "Static routing often failed to account for real-time factors like traffic, weather, or delivery urgency.",
        solution:
          "DcisionAI generates adaptive routes that optimize for cost, time, and compliance — with full transparency on tradeoffs.",
        impact:
          "Fleet utilization improves, fewer deliveries are late, and rerouting is intelligent, not reactive.",
      },
      {
        title: "Predictive Maintenance",
        challenge:
          "Breakdowns and downtime were frequent due to reactive servicing and manual schedules.",
        solution:
          "DcisionAI learns from usage patterns and sensor data to predict maintenance needs before failures occur.",
        impact:
          "Fewer breakdowns, lower maintenance costs, and increased vehicle availability.",
      },
      {
        title: "Fleet Rebalancing",
        challenge:
          "Vehicle distribution across service zones was inefficient, with surpluses in some areas and shortages in others.",
        solution:
          "DcisionAI continuously analyzes demand, availability, and utilization to suggest proactive reallocation of assets.",
        impact:
          "Better asset utilization and faster response across regions — without increasing fleet size.",
      },
    ],
    "Smart Scheduling — From Field Crews to Factory Floors": [
      {
        title: "Demand-Based Shift Scheduling",
        challenge:
          "Static shift templates couldn’t keep up with fluctuating demand and staff availability.",
        solution:
          "DcisionAI auto-generates shift schedules that match demand patterns, employee availability, skills, and compliance rules.",
        impact:
          "Higher coverage, better employee satisfaction, and lower absenteeism.",
      },
      {
        title: "Crew & Task Matching at Scale",
        challenge:
          "Tasks were often assigned without matching technician skills, leading to delays and rework.",
        solution:
          "DcisionAI matches jobs with qualified personnel based on certifications, proximity, and workload — and explains every recommendation.",
        impact:
          "Higher first-time fix rates and more efficient service delivery across locations.",
      },
    ],
  };

  return (
    <section className="animate-fade-in-up px-6 py-20 max-w-6xl mx-auto text-center">
      {/* Hero Section */}
      <h1 className="text-4xl md:text-5xl font-sans font-semibold">
        From Fleet Complexity to Cross-Industry Intelligence
      </h1>
      <p className="mt-4 max-w-2xl mx-auto text-lg text-neutral-600">
        DcisionAI starts with high-impact operations — optimizing dispatch, routing, and workforce scheduling through intelligent, explainable decisioning. From delivery networks to factory shifts and field service teams, every use case builds on the same adaptive engine, designed to scale.
      </p>

      {/* Wedge Grouped Use Cases */}
      <div className="mt-16 space-y-20">
        {Object.entries(useCases).map(([category, cards]) => (
          <div key={category}>
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-neutral-800">
              {category}
            </h2>
            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
              {cards.map(({ title, challenge, solution, impact }) => (
                <div
                  key={title}
                  className="rounded-2xl border border-neutral-200 bg-[var(--tw-brand-light)] p-6 text-left shadow-sm hover:shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-brand-accent animate-fade-in-up flex flex-col justify-between h-full"
                >
                  <h3 className="text-xl font-sans font-semibold text-neutral-800 mb-2">
                    {title}
                  </h3>
                  <div className="space-y-3 text-sm md:text-base text-neutral-700">
                    <div>
                      <p className="font-semibold text-neutral-800 mb-1">The Challenge</p>
                      <p>{challenge}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-neutral-800 mb-1">The Solution</p>
                      <p>{solution}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-neutral-800 mb-1">The Result</p>
                      <p>{impact}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
