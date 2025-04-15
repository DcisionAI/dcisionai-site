import React from "react";

export default function UseCasesPage() {
  const useCases = [
    {
      industry: "Logistics & Transportation",
      title: "Fleet Optimization",
      challenge:
        "Fleet operations relied on static routes and fixed schedules, often leading to underutilized vehicles, missed delivery windows, and unexpected breakdowns due to reactive maintenance.",
      solution:
        "DcisionAI enables real-time route optimization based on traffic, weather, and delivery constraints. Predictive servicing reduces downtime, while dynamic asset deployment increases fleet utilization and delivery reliability.",
      impact:
        "Planners now focus on approvals instead of calculations. Routes are generated dynamically with fewer late deliveries and better fleet utilization.",
      howItWorks:
        "DcisionAI connects to logistics systems via plugins and pulls real-time delivery constraints. It continuously generates and refines route plans using adaptive AI models, while allowing human operators to adjust and override as needed."
    },
    {
      industry: "Enterprise IT & Security",
      title: "Access Management",
      challenge:
        "Access to vehicles, tools, or data was controlled through static rules and manual provisioning, creating bottlenecks and increasing the risk of unauthorized usage or data breaches.",
      solution:
        "DcisionAI applies context-aware permissioning using role, location, and usage history. Access is granted or revoked dynamically, improving both operational agility and enterprise security.",
      impact:
        "Organizations gain real-time control over access while reducing overhead from manual approvals. Security posture is improved with adaptive governance.",
      howItWorks:
        "Through integrations with identity systems and contextual sensors, DcisionAI enforces access policies that change based on operational conditions, without sacrificing usability or compliance."
    },
    {
      industry: "Retail",
      title: "Demand-Driven Pricing",
      challenge:
        "Pricing decisions were made using predefined tiers or periodic reviews, often lagging behind actual demand shifts. This led to missed revenue opportunities and excess inventory.",
      solution:
        "With DcisionAI, pricing adapts continuously based on real-time demand signals, competitor pricing, and inventory position. Enterprises can respond to micro-trends with precision and increase pricing effectiveness.",
      impact:
        "Merchandisers make fewer manual overrides, pricing stays aligned with customer behavior, and inventory moves more efficiently.",
      howItWorks:
        "DcisionAI integrates with pricing engines and POS data to dynamically simulate and apply pricing decisions, complete with explainability and scenario testing."
    },
    {
      industry: "Cross-Industry",
      title: "Operational Insight",
      challenge:
        "Decision-makers lacked visibility due to delayed reporting, fragmented data, and manual analysis, resulting in reactive and suboptimal responses.",
      solution:
        "DcisionAI synthesizes live data from multiple systems and surfaces intelligent recommendations, forecasts, and alerts — all accessible through explainable, real-time dashboards.",
      impact:
        "Executives and operators can act on insights immediately rather than wait for periodic reports. Decisions are now proactive and data-driven.",
      howItWorks:
        "The platform plugs into ERP, CRM, IoT, and custom data sources to provide a unified operational layer that surfaces alerts, trends, and decisions through agentic workflows."
    },
    {
      industry: "Retail",
      title: "Inventory Planning",
      challenge:
        "Stockouts and overstocks were common due to coarse forecasts and infrequent replenishment cycles, impacting customer satisfaction and working capital.",
      solution:
        "DcisionAI connects to POS, weather, and event signals to continuously adjust replenishment plans. Retailers maintain leaner inventories with higher availability and fewer markdowns.",
      impact:
        "Inventory levels are more balanced across stores, reducing waste and improving shelf availability without overstocking.",
      howItWorks:
        "DcisionAI syncs to replenishment systems and external demand drivers to automatically generate reorder suggestions aligned with store-specific trends."
    },
    {
      industry: "SaaS & Technology",
      title: "Workforce Planning",
      challenge:
        "Hiring plans were reactive and driven by lagging KPIs, causing delays in staffing critical roles and disrupting product or sales execution.",
      solution:
        "DcisionAI aligns hiring with business forecasts, team velocity, and product milestones. Leaders can simulate headcount scenarios and act early to prevent resourcing gaps.",
      impact:
        "Cross-functional planning improves, recruiting becomes more proactive, and hiring bottlenecks are minimized.",
      howItWorks:
        "The platform integrates with finance, HRIS, and product roadmaps to produce explainable hiring recommendations tied to business outcomes."
    },
    {
      industry: "Manufacturing",
      title: "Supplier Allocation",
      challenge:
        "Suppliers were chosen based on outdated contracts or fixed allocations, limiting agility when costs, lead times, or risks shifted.",
      solution:
        "DcisionAI scores suppliers continuously using cost, lead time, and performance data. It recommends reallocations in response to market or operational shifts.",
      impact:
        "Procurement teams gain agility in sourcing without compromising compliance or cost-effectiveness.",
      howItWorks:
        "By plugging into procurement systems and external pricing feeds, DcisionAI dynamically updates supplier allocations and justifies recommendations with scenario impact analysis."
    },
    {
      industry: "Banking",
      title: "Branch Staffing",
      challenge:
        "Branches were over- or under-staffed based on historical averages, failing to account for local patterns or peak days.",
      solution:
        "DcisionAI analyzes transaction volumes, customer behaviors, and service demand to recommend optimal staffing for each branch in real time.",
      impact:
        "Customers experience shorter wait times and employees are better distributed across peak and off-peak hours.",
      howItWorks:
        "The system connects to transaction logs and branch schedules to forecast demand and generate daily staffing suggestions. Overrides can be applied by regional managers on the fly."
    }
  ];

  const [selectedIndustry, setSelectedIndustry] = React.useState("Logistics & Transportation");
  const filtered = useCases.filter(u => !selectedIndustry || u.industry === selectedIndustry);

  return (
    <section className="animate-fade-in-up">
      <div className="max-w-6xl mx-auto text-center mt-10">
        <h1 className="text-4xl md:text-5xl font-sans font-semibold">
          Real Problems. Intelligent Solutions.
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-neutral-600">
          Explore how DcisionAI powers smarter operations across industries — from supply chain and finance to retail and workforce planning.
        </p>

        {/* Filter Toggle Bar */}
        <div className="flex justify-center mt-8">
          <div className="flex flex-wrap justify-center gap-3 bg-[var(--tw-brand-light)] rounded-full px-4 py-2 shadow-sm">
            {Array.from(new Set(useCases.map(u => u.industry))).map(industry => (
              <button
                key={industry}
                className={`px-4 py-1.5 text-sm font-medium rounded-full transition-colors duration-200 ${
                  selectedIndustry === industry
                    ? 'bg-[var(--tw-brand-accent)] text-white'
                    : 'bg-transparent text-neutral-600 hover:text-black'
                }`}
                onClick={() => setSelectedIndustry(industry)}
              >
                {industry}
              </button>
            ))}
            <button
              className={`px-4 py-1.5 text-sm font-medium rounded-full transition-colors duration-200 ${
                !selectedIndustry ? 'bg-[var(--tw-brand-accent)] text-white' : 'bg-transparent text-neutral-600 hover:text-black'
              }`}
              onClick={() => setSelectedIndustry(null)}
            >
              All
            </button>
          </div>
        </div>

        {/* Use Case Cards */}
        <div className={`mt-16 grid gap-8 ${
          filtered.length === 1 ? 'grid-cols-1 justify-center' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
        }`} data-aos="fade-up" data-aos-delay="100" data-aos-once="true">
          {filtered.length === 0 ? (
            <div className="col-span-full text-center text-neutral-500 py-12 animate-fade-in">
              No use cases found for this industry.
            </div>
          ) : (
            filtered.map(({ industry, title, challenge, solution, impact, howItWorks }) => (
              <div
                key={title}
                className="relative group rounded-2xl border border-neutral-200 bg-[var(--tw-brand-light)] p-6 text-left shadow-sm hover:shadow-lg transition-all duration-300 ease-in-out overflow-hidden hover:-translate-y-1 hover:border-brand-accent animate-fade-in-up"
              >
                <p className="text-sm uppercase text-neutral-400 font-semibold">{industry}</p>
                <h2 className="text-2xl font-serif font-semibold text-neutral-800 group-hover:text-brand-accent transition">{title}</h2>
                <div className="space-y-2 text-sm md:text-base text-neutral-700">
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
                  <div>
                    <p className="font-semibold text-neutral-800 mb-1">How It Works</p>
                    <p>{howItWorks}</p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
