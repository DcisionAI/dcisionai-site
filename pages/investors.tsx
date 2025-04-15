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
        <p className="mt-3 max-w-2xl text-md text-brand-muted">
          Founded by a former enterprise product leader, a PhD optimization expert, and a strategic engineering partner, we bring deep technical and domain expertise to a clear market wedge — and are already piloting with high-intensity enterprise use cases.
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
              Our entry point is vertical operational use cases — where optimization meets complexity.
              From pricing and routing to inventory and workforce planning, enterprises still rely on brittle spreadsheets and static solvers.
              We’re embedding agentic orchestration into these decision layers — not to replace people, but to give them real leverage.
            </p>
          </div>

          <div className="bg-[var(--tw-brand-light)] rounded-xl p-5 shadow-sm">
            <h3 className="text-lg font-semibold mb-2">The Strategic Moment</h3>
            <p className="text-neutral-700 text-sm leading-relaxed">
              Enterprises are AI-curious, but skeptical of black boxes. LLMs are powerful, but raw. Optimization is proven, but inflexible.
              We believe the future lies in combining optimization models with agentic protocols — governed, traceable, composable decision flows that plug into real ops.
              This is a unique convergence moment, and DcisionAI is purpose-built to meet it.
            </p>
          </div>

          <div className="bg-[var(--tw-brand-light)] rounded-xl p-5 shadow-sm">
            <h3 className="text-lg font-semibold mb-2">The Execution Advantage</h3>
            <p className="text-neutral-700 text-sm leading-relaxed">
              We’ve assembled a founding team that understands both the math and the machinery of enterprise software.
              With optimization PhDs, product leaders, and a strategic engineering partner embedded from day one, we’re shipping fast and building for real-world constraints.
              We’re not just theorizing the architecture — we’re deploying it with customers.
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
