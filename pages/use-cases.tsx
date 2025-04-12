import React from "react";

export default function UseCases() {
  return (
    <div className="animate-fade-in">
      <div className="max-w-6xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-8 text-center">Use Cases</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-neutral-700">
          <div className="border border-neutral-300 p-6 rounded-lg bg-white">
            <h3 className="text-xl font-semibold mb-2">Supply Chain Optimization</h3>
            <p>Adaptive planning using AI agents with internal & external signals.</p>
          </div>
          <div className="border border-neutral-300 p-6 rounded-lg bg-white">
            <h3 className="text-xl font-semibold mb-2">Dynamic Pricing</h3>
            <p>Real-time pricing strategy using LLM-driven optimization.</p>
          </div>
          <div className="border border-neutral-300 p-6 rounded-lg bg-white">
            <h3 className="text-xl font-semibold mb-2">Protocol Execution</h3>
            <p>Human-in-the-loop agents that translate decisions into automated workflows.</p>
          </div>
        </div>
      </div>
    </div>
  );
}