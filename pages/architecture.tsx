import React from "react";
import Image from "next/image";

export default function Architecture() {
  return (
    <div className="bg-zinc-50 text-zinc-800">
      {/* Hero Section */}
      <section className="min-h-[60vh] flex items-center justify-center text-center px-6 bg-gradient-to-br from-zinc-100 to-white">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            A New Architecture<br />
            <span className="text-blue-600">for Enterprise Intelligence</span>
          </h1>
          <p className="text-xl text-zinc-600">
            Designed for explainability, built for performance, and ready for your real-world complexity.
          </p>
        </div>
      </section>

      {/* Architecture Visual */}
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <div className="flex justify-center">
          <Image
            src="/images/architecture-decision-core.png"
            alt="Decision Core Architecture Diagram"
            width={1200}
            height={800}
            className="rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* Highlights */}
      <section className="px-6 py-16 max-w-5xl mx-auto grid md:grid-cols-3 gap-8 text-center">
        <div>
          <h3 className="text-xl font-semibold mb-2">Decision Core</h3>
          <p className="text-zinc-600">The adaptive engine that turns enterprise data, constraints, and goals into real-time decisions.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Optimization Intelligence</h3>
          <p className="text-zinc-600">Solves complex trade-offs using proven operations research and decision science techniques.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Signal Responsiveness</h3>
          <p className="text-zinc-600">Adapts to changing inputs, real-time signals, and system feedback — always in context.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center bg-zinc-100 border-t">
        <h3 className="text-2xl font-semibold mb-4">Want to see it in action?</h3>
        <p className="text-lg text-zinc-600 mb-6">We’ll show you how this architecture plugs into your environment to deliver value fast.</p>
        <a
          href="/use-cases"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Explore Use Cases
        </a>
      </section>
    </div>
  );
}