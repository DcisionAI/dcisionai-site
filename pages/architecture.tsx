// ArchitecturePage — Wedge-First Version with 4-Part Walkthrough
import React from "react";

export default function ArchitecturePage() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 font-sans">
      <h1 className="text-4xl md:text-5xl font-semibold text-center tracking-tight mb-4">
        Under the Hood of Fleet Optimization
      </h1>
      <p className="text-center text-neutral-600 mb-8 max-w-2xl mx-auto">
        How DcisionAI turns real-time operational complexity into fast, explainable, and adaptive dispatch decisions.
      </p>

      {/* Section 1: How It Works — From Data to Decision */}
      <div className="bg-[var(--tw-brand-light)] rounded-2xl p-8 shadow-sm mb-16">
        <h2 className="text-2xl font-semibold mb-4">1. From Data to Decision</h2>
        <p className="text-neutral-700 text-lg mb-6">
          DcisionAI integrates directly into your fleet tech stack — ingesting live data from GPS, incidents, SLAs, and traffic systems. Agentic workflows orchestrate decisions like routing, dispatch, and triage within milliseconds.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-neutral-800">
          <li><strong>Live ingestion:</strong> GPS, traffic, weather, incidents</li>
          <li><strong>Context awareness:</strong> SLAs, driver status, fuel constraints</li>
          <li><strong>Decision orchestration:</strong> Agent runtime computes optimal dispatch plan</li>
          <li><strong>Human-in-the-loop:</strong> Managers can audit, approve, or override decisions</li>
        </ul>
      </div>

      {/* Section 2: MCP Overview */}
      <div className="bg-[var(--tw-brand-light)] rounded-2xl p-8 shadow-sm mb-16">
        <h2 className="text-2xl font-semibold mb-4">2. The Framework</h2>
        <p className="text-neutral-700 text-lg mb-4 max-w-3xl">
          Every decision in DcisionAI is governed by a structured orchestration protocol we call MCP — Model, Context, and Protocol:
        </p>
        <ul className="list-disc pl-6 text-neutral-800 space-y-2">
          <li><strong>Model:</strong> Plug-in modules for optimization, AI, or scoring logic</li>
          <li><strong>Context:</strong> Real-time variables like location, status, constraints</li>
          <li><strong>Protocol:</strong> Rules for approval, override, explanation, and feedback</li>
        </ul>
        <p className="mt-4 text-neutral-500 italic">
          MCP lets us compose decisions that adapt to live data — while maintaining full governance and traceability.
        </p>
      </div>

      {/* Section 3: Plugin Architecture Visual */}
     

      {/* Section 4: Expansion Roadmap */}
      <div className="bg-[var(--tw-brand-light)] rounded-2xl p-8 shadow-sm mb-16">
        <h2 className="text-2xl font-semibold mb-4">3. Roadmap: From Dispatch to Enterprise Decisions</h2>
        <p className="text-neutral-700 text-lg">
          Dispatch is just the beginning. Our platform can orchestrate any high-impact operational decision — from inventory replenishment to pricing and workforce planning — with the same explainable, plugin-driven architecture.
        </p>
        <p className="mt-4 text-sm text-neutral-500">
          Start narrow. Scale wide. One decision at a time.
        </p>
      </div>
    </section>
  );
}
