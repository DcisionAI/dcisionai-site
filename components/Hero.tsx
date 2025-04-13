import React from 'react';

export default function Hero() {
  return (
    <div className="relative h-screen overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/videos/chess.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Intelligent Decision-Making for the Enterprise
          </h1>
          <p className="text-lg md:text-xl mb-6">
            DcisionAI integrates LLMs, real-time data, and optimization models to deliver intelligent, explainable decisions.
          </p>
          <button className="px-6 py-3 bg-white text-black rounded-md font-semibold hover:bg-gray-200 transition">
            Request Demo
          </button>
        </div>
      </div>
    </div>
  );
}
