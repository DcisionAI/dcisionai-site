import React from "react";

export default function Home() {
  return (
    <div className="animate-fade-in">
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight max-w-3xl">
          Intelligent Decision-Making<br />for the Enterprise
        </h1>
        <p className="text-neutral-600 text-lg md:text-xl max-w-2xl mb-8">
          DcisionAI integrates LLMs, real-time data, and optimization models to deliver intelligent, explainable decisions.
        </p>
        <button className="px-6 py-3 bg-black text-white rounded-md font-semibold hover:opacity-90 transition">
          Request Demo
        </button>
      </section>
    </div>
  );
}