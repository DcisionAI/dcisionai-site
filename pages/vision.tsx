import React from "react";
import Image from "next/image";

export default function Vision() {
  return (
    <div className="bg-zinc-50 text-zinc-800">
      {/* Hero */}
      <section className="min-h-[70vh] flex items-center justify-center text-center px-6 bg-gradient-to-br from-zinc-100 to-white">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            We believe<br />
            <span className="text-blue-600">decisions shape destiny.</span>
          </h1>
          <p className="text-xl text-zinc-600">
            So we’re rebuilding how they’re made — with agents, data, and protocol-based intelligence.
          </p>
        </div>
      </section>

      {/* Illustration section */}
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-semibold mb-4">From Complexity to Clarity</h2>
            <p className="text-lg text-zinc-700 leading-relaxed">
              DcisionAI turns fragmented, high-velocity enterprise data into intelligent action. We remove bottlenecks in strategy, planning, and operations by connecting AI agents to optimization models and live context.
            </p>
          </div>
          <div>
            <Image
              src="/images/vision-clean-illustration.png"
              alt="Enterprise clarity system"
              width={1200}
              height={800}
              className="w-full h-auto rounded-lg shadow"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center">
        <h3 className="text-2xl font-semibold mb-4">This is the new decision layer.</h3>
        <p className="text-lg mb-6 text-zinc-600">Built for scale. Designed for trust. Powered by your data.</p>
        <a
          href="/architecture"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Explore the Architecture
        </a>
      </section>
    </div>
  );
}