import React from "react";
import Navbar from "./Navbar";

export default function Hero() {
  return (
    <div className="relative min-h-screen overflow-hidden font-sans">
      <Navbar />

      {/* Background Video */}
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
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-start pt-16 text-center px-4 bg-black/60 backdrop-blur-sm text-white overflow-y-auto">
        {/* Headline */}
        <h1 className="text-4xl md:text-5xl font-sans font-semibold mb-4 max-w-3xl drop-shadow-xl">
            Make Every Decision Count.
        </h1> 

        {/* Subheadline */}
        <p className="text-lg md:text-xl mb-20 max-w-2xl text-zinc-200 drop-shadow-md">
            From optimizing routes to scheduling field teams, DcisionAI plugs into your systems to deliver decisions that adapt
        </p>

        {/* Optional supporting tagline 
        <p className="text-sm md:text-base mb-6 text-zinc-300 italic">
          Make every decision count — from the ground to the cloud.
        </p>
        */}
        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-24">
          <a
            href="/use-cases"
            className="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition"
          >
            Explore Use Cases
          </a>
          <a
            href="https://platform.dcisionai.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white border border-white px-6 py-3 rounded-full font-medium hover:bg-white hover:text-black transition"
          >
            See How It Works
          </a>
        </div>

       {/* Microtrust 
        <div className="text-sm font-medium flex flex-wrap justify-center gap-3 mb-12">
          {[
            "Enterprise-ready integration",
            "API-first, plugin-driven",
            "Real-world ROI, fast",
            "Scales with your operations",
          ].map((label) => (
            <span
              key={label}
              className="px-4 py-1.5 rounded-full bg-white/15 text-white backdrop-blur-md border border-white/20 shadow-sm hover:shadow-md transition"
            >
              {label}
            </span>
          ))}
        </div>
        */}
        {/* Value Props */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full text-white mb-20 text-center">
          {[
            {
              title: "Effortless Integration",
              desc:
                "Deploy into your existing systems without disruption. No rewrites. No retraining.",
            },
            {
              title: "Context-Aware Intelligence",
              desc:
                "Every decision adapts to real-world operational constraints — from routing and scheduling to resource availability and service commitments.",
            },
            {
              title: "Transparent by Design",
              desc:
                "Every outcome includes rationale, tradeoffs, and override history — combining agentic workflow with human oversight.",
            },
          ].map(({ title, desc }) => (
            <div
              key={title}
              className="flex flex-col justify-start items-center text-center p-4 bg-transparent transition-transform duration-300 hover:scale-105 h-full"
            >
              <h3 className="text-2xl font-bold mb-2 drop-shadow-lg">{title}</h3>
              <p className="text-md leading-relaxed drop-shadow-sm text-zinc-100 max-w-xs">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
