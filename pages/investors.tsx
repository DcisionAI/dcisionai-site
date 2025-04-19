export default function InvestorsPage() {
  return (
    <main>
      <section className="py-12 px-4 text-center flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl font-sans font-semibold text-brand-accent">
          Back the Future of Enterprise Intelligence
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-brand-muted">
          DcisionAI is redefining decision-making infrastructure — combining agentic AI, mathematical optimization, and plug-in architecture to power the next generation of enterprise operations.
        </p>
        
      </section>

      <section className="py-8 px-4 max-w-6xl mx-auto text-center space-y-12">
        <h2 className="text-3xl md:text-4xl font-sans font-semibold text-brand-accent">
          Why This Market. Why This Team. Why Now.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="bg-[var(--tw-brand-light)] rounded-xl p-5 shadow-sm">
            <h3 className="text-lg font-semibold mb-2">The Wedge: Operational Optimization</h3>
            <p className="text-neutral-700 text-sm leading-relaxed">
              Our entry point is fleet dispatch — where decisions are frequent, time-sensitive, and measurable. It's the perfect proving ground for explainable agentic orchestration.
              Once deployed in this wedge, our plug-in architecture and MCP protocol allow rapid expansion into finance, inventory, and workforce use cases — all built on the same decision infrastructure.
            </p>
          </div>
          <div className="bg-[var(--tw-brand-light)] rounded-xl p-5 shadow-sm">
            <h3 className="text-lg font-semibold mb-2">The Founding Team</h3>
            <p className="text-neutral-700 text-sm leading-relaxed">
              Founded by a former enterprise product leader, a PhD optimization expert, and an established product partner with a proven track record in enterprise products, we bring deep technical and domain expertise to a clear market wedge — and are already piloting with high-intensity enterprise use cases.We’re not a research lab or a consultancy. We’re builders — with a technical founding team, real deployments underway, and a plug-in system ready to scale.
              Our architecture isn’t theoretical. It’s live, explainable, and extensible from day one.
            </p>
          </div>
          <div className="bg-[var(--tw-brand-light)] rounded-xl p-5 shadow-sm">
            <h3 className="text-lg font-semibold mb-2">The Strategic Moment</h3>
            <p className="text-neutral-700 text-sm leading-relaxed">
              Enterprises are deploying AI in isolated pockets — but lack a system for governed, adaptive decision-making at scale.
              LLMs are impressive, but brittle. Optimization works, but needs context. Agentic infrastructure bridges that gap — and DcisionAI is positioned to lead the shift.
            </p>
          </div>
          
          
        </div>
      </section>

      <div className="py-10 text-center">
        <a
          href="mailto:founder@dcisionai.com?subject=Investor Inquiry"
          className="inline-block bg-[var(--tw-brand-accent)] text-white font-semibold px-5 py-2.5 rounded-full shadow hover:opacity-90 transition"
        >
          Request Investor Memo
        </a>
      </div>
    </main>
  );
}
