import React from "react";
import Navbar from "./Navbar";

export default function Hero() {
  return (
    <div className="relative h-screen overflow-hidden">
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
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center px-4 bg-black bg-opacity-40 text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Make Every Decision Count
        </h1>
        <p className="text-lg md:text-xl mb-6 max-w-2xl">
          DcisionAI plugs into your business, learns from your data, and delivers real-time, intelligent actions.
        </p>
        

        {/* Value Props */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl w-full text-center text-white">
        {[
            {
                title: "Fast",
                desc: "DcisionAI plugs into your systems — no rip-and-replace required — and delivers decisions in milliseconds. Its plug-in architecture reads signals across your stack, while agentic AI modules orchestrate the optimal action in real time.",
            },
            {
                title: "Adaptive",
                desc: "Every business context is unique — and DcisionAI adapts to yours. Our agentic architecture learns from your data, constraints, and outcomes, evolving its strategy with every cycle to align with shifting goals and live feedback.",
            },
            {
                title: "Explainable",
                desc: "Enterprise AI today is too often a black box — brittle and unauditable. DcisionAI changes that. Every recommendation includes the data used, tradeoffs made, and rationale behind the decision — so you're always in control.",
            },
            ]
            .map(({  title, desc }) => (
            <div key={title} className="p-2 transition-transform duration-300 hover:scale-105">
            
            <h3 className="text-2xl font-bold mb-1 drop-shadow">{title}</h3>
            <p className="text-md leading-relaxed drop-shadow-sm text-zinc-100">{desc}</p>
            </div>
        ))}
        </div>
        <button className="px-6 py-3 bg-white text-black rounded-md font-semibold hover:bg-gray-200 transition">
          Request Demo
        </button>
      </div>
    </div>
  );
}
