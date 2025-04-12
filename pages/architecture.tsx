import React from "react";
import Image from "next/image";

export default function Architecture() {
  return (
    <div className="animate-fade-in">
      <div className="max-w-4xl mx-auto p-6 text-center">
        <h1 className="text-3xl font-bold mb-4">Architecture</h1>
        <p className="text-neutral-600 text-lg mb-6">
          Our architecture connects to internal systems, ingests real-time data, and delivers optimization through a human-readable protocol layer.
        </p>
        <Image src="/logo.png" alt="Architecture Diagram Placeholder" width={400} height={300} className="mx-auto opacity-50" />
      </div>
    </div>
  );
}