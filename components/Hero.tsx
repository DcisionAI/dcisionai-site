import React from "react";
import Navbar from "./Navbar";

export default function Hero() {
  return (
    <div className="relative min-h-screen overflow-hidden font-sans">
      <Navbar />

      {/* Background Video with Sepia */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none select-none filter sepia brightness-75"
        src="/videos/chess.mp4"
        autoPlay
        loop
        muted
        playsInline
        controls={false}
      />

      {/* Overlay Content */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-start pt-16 text-center px-4 bg-black bg-opacity-40 text-white overflow-y-auto">
        <h1 className="text-4xl md:text-5xl font-sans font-semibold mb-4 max-w-3xl">
          Automate Complex Decisions with AI-Driven Agents
        </h1>
        <p className="text-lg md:text-xl mb-6 max-w-2xl text-zinc-200">
          DcisionAI plugs into your enterprise systems and orchestrates pricing, planning, inventory, and routing — using optimization, agentic AI, and explainable protocols.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <a
            href="/use-cases"
            className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
          >
            Explore Use Cases
          </a>
          <a
            href="/architecture#Architecture"
            className="text-white border border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition"
          >
            See How It Works
          </a>
        </div>

        {/* Value Props */}
        <div className="mt-4 text-white text-center max-w-3xl">
          <h2 className="text-2xl font-bold mb-3 drop-shadow">How It Works</h2>
          <p className="text-md mb-6 drop-shadow-sm text-zinc-100">
            DcisionAI integrates via plugins, deploys intelligent agents, and orchestrates human-in-the-loop decisions through structured protocols that define how agents act, adapt, and explain their reasoning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl w-full text-center text-white">
          {[
            {
              title: "Fast",
              desc:
                "DcisionAI plugs into your systems — no rip-and-replace required — and delivers decisions in milliseconds. Its plug-in architecture reads signals across your stack, while agentic AI modules orchestrate the optimal action in real time.",
            },
            {
              title: "Adaptive",
              desc:
                "Every business context is unique — and DcisionAI adapts to yours. Our agentic architecture learns from your data, constraints, and outcomes, evolving its strategy with every cycle to align with shifting goals and live feedback.",
            },
            {
              title: "Explainable",
              desc:
                "Enterprise AI today is too often a black box — brittle and unauditable. DcisionAI changes that. Every recommendation includes the data used, tradeoffs made, and rationale behind the decision — so you're always in control.",
            },
          ].map(({ title, desc }) => (
            <div key={title} className="p-2 transition-transform duration-300 hover:scale-105">
              <h3 className="text-2xl font-bold mb-1 drop-shadow">{title}</h3>
              <p className="text-md leading-relaxed drop-shadow-sm text-zinc-100">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
