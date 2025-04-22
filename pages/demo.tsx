// pages/demo.tsx
import React, { useState, useEffect } from 'react';

const contextOptions = [
  { label: "Driver fatigue risk", group: "Driver Constraints" },
  { label: "Fuel constraints", group: "Vehicle Constraints" },
  { label: "Time-window delivery commitments", group: "Service Commitments" },
  { label: "Vehicle maintenance overdue", group: "Vehicle Constraints" },
  { label: "Hazardous cargo handling", group: "Cargo Constraints" },
  { label: "Weather-based rerouting", group: "Environmental Factors" },
  { label: "Customer priority tier", group: "Service Commitments" },
  { label: "Real-time incident zones", group: "Environmental Factors" },
  { label: "Driver hours-of-service compliance", group: "Driver Constraints" }
];

const modelOptions = ["Fleet Dispatch Optimizer", "Shift Scheduler"];
const overrideReasons = [
  "Manual override due to on-ground intel",
  "Customer request priority",
  "Emergency route clearance",
  "System recommendation mismatch"
];

export default function DemoMCPPage() {
  const [model, setModel] = useState("Fleet Dispatch Optimizer");
  const [context, setContext] = useState<string[]>([]);
  const [decision, setDecision] = useState("");
  const [protocol, setProtocol] = useState("");
  const [overrideSelected, setOverrideSelected] = useState("");
  const [externalData, setExternalData] = useState({ traffic: "", weather: "" });
  const [startLocation, setStartLocation] = useState("Atlanta, GA");
  const [endLocation, setEndLocation] = useState("Hartsfield-Jackson Airport");
  const [typedLog, setTypedLog] = useState<string[]>([]);
  const [typingIndex, setTypingIndex] = useState(0);
  const [logQueue, setLogQueue] = useState<string[]>([]);
  const [decisionMade, setDecisionMade] = useState(false);

  useEffect(() => {
    const trafficSamples = [
      `Heavy congestion on I-85 between ${startLocation} and ${endLocation}.`,
      `Moderate flow with occasional slowdowns near ${endLocation}.`,
      `Clear traffic on primary routes.`
    ];
    const weatherSamples = [
      `Light rain near ${endLocation}, visibility slightly reduced.`,
      `Clear skies throughout route.`,
      `Fog patches near ${startLocation}.`
    ];
    const randomTraffic = trafficSamples[Math.floor(Math.random() * trafficSamples.length)];
    const randomWeather = weatherSamples[Math.floor(Math.random() * weatherSamples.length)];
    setExternalData({ traffic: randomTraffic, weather: randomWeather });
  }, [startLocation, endLocation]);

  useEffect(() => {
    if (typingIndex < logQueue.length) {
      const timeout = setTimeout(() => {
        setTypedLog((prev) => [...prev, logQueue[typingIndex]]);
        setTypingIndex((i) => i + 1);
      }, 600);
      return () => clearTimeout(timeout);
    }
  }, [typingIndex, logQueue]);

  const startTyping = (logs: string[]) => {
    setTypedLog([]);
    setLogQueue(logs);
    setTypingIndex(0);
    setDecisionMade(true);
  };

  const handleDecision = () => {
    const contextSummary = context.length ? context.join(", ") : "None (default runtime applied)";
    const outcome = model === "Fleet Dispatch Optimizer"
      ? `Dispatch Driver A via safest route from ${startLocation} to ${endLocation}.`
      : `Assign Technician B for AM shift near ${endLocation} (low fatigue risk, weather accounted).`;
    const externalSummary = `External signals:\n- Traffic: ${externalData.traffic}\n- Weather: ${externalData.weather}`;
    const fullReason = `Model: ${model}\nContext: ${contextSummary}\n\n${externalSummary}`;
    const logs = [
      `Model selected: ${model}`,
      `Context applied: ${contextSummary}`,
      `Live data used: ${externalData.traffic} | ${externalData.weather}`
    ];
    setDecision(`${outcome}\n\n${fullReason}`);
    setProtocol("");
    setOverrideSelected("");
    startTyping(logs);
  };

  const handleOverride = () => {
    if (!overrideSelected) return;
    const overrideLog = `Override: ${overrideSelected} → escalated for review.`;
    const updatedLogs = [...typedLog, overrideLog];
    setProtocol(`Override executed: ${overrideSelected}. Escalation triggered and logged for review.`);
    startTyping(updatedLogs);
  };

  const groupedContext = contextOptions.reduce((acc, item) => {
    acc[item.group] = [...(acc[item.group] || []), item.label];
    return acc;
  }, {} as Record<string, string[]>);

  return (
    <>
      <section className="max-w-4xl mx-auto px-6 py-20 space-y-10 font-sans">
        <h1 className="text-4xl font-semibold text-center text-[var(--tw-brand-accent)]">
          Try the MCP in Action
        </h1>
        <p className="text-center text-neutral-600">
          Simulate real-time context and Atlanta traffic conditions to see how DcisionAI drives explainable decisions.
        </p>

        <div className="bg-white rounded-xl shadow-md p-6 space-y-6">
          <div>
            <label className="block font-semibold mb-1">Start Location</label>
            <input
              type="text"
              className="border p-2 rounded w-full"
              value={startLocation}
              onChange={(e) => setStartLocation(e.target.value)}
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">End Location</label>
            <input
              type="text"
              className="border p-2 rounded w-full"
              value={endLocation}
              onChange={(e) => setEndLocation(e.target.value)}
            />
          </div>

          <div>
            <label className="block font-semibold mb-2">Select Constraints</label>
            {Object.entries(groupedContext).map(([group, items]) => (
              <div key={group} className="mb-3">
                <p className="text-sm font-semibold text-gray-700 mb-1">{group}</p>
                <div className="grid grid-cols-2 gap-2">
                  {items.map((item) => (
                    <label key={item} className="flex items-center space-x-2 text-sm">
                      <input
                        type="checkbox"
                        checked={context.includes(item)}
                        onChange={() =>
                          setContext((prev) =>
                            prev.includes(item)
                              ? prev.filter((c) => c !== item)
                              : [...prev, item]
                          )
                        }
                      />
                      <span>{item}</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={handleDecision}
              className="mt-4 px-6 py-2 bg-[var(--tw-brand-accent)] text-white rounded-full"
            >
              Generate Decision
            </button>
          </div>

          {decision && (
            <div className="bg-gray-50 p-4 rounded border">
              <h3 className="font-semibold mb-1">Decision Outcome</h3>
              <pre className="whitespace-pre-wrap text-sm text-neutral-800">{decision}</pre>
              <div className="mt-4 space-y-2">
                <select
                  value={overrideSelected}
                  onChange={(e) => setOverrideSelected(e.target.value)}
                  className="border p-2 rounded w-full"
                >
                  <option value="">Select override reason...</option>
                  {overrideReasons.map((reason) => (
                    <option key={reason} value={reason}>{reason}</option>
                  ))}
                </select>
                <button
                  onClick={handleOverride}
                  className="w-full px-4 py-1 bg-red-600 text-white rounded-full"
                >
                  Override
                </button>
              </div>
              {protocol && <p className="mt-3 italic text-sm text-neutral-700">{protocol}</p>}
            </div>
          )}
        </div>
      </section>

      {decisionMade && typedLog.length > 0 && (
        <section className="max-w-4xl mx-auto px-6 pt-10 pb-20 space-y-6 animate-fade-in-up">
            <h2 className="text-2xl font-semibold text-center text-[var(--tw-brand-accent)]">Behind the Scenes</h2>
            <ul className="list-disc pl-6 text-sm text-neutral-800 space-y-2">
            {typedLog.map((item, idx) => (
                <li key={idx}>{item}</li>
            ))}
            </ul>
            <div className="mt-8 border-t pt-6">
            <h3 className="text-lg font-semibold mb-2 text-center">How DcisionAI Makes This Possible</h3>
            <ul className="list-disc pl-6 text-sm text-neutral-800 space-y-2">
                <li><strong>Plugin Architecture:</strong> Models, rules, and integrations are modular and reusable across domains.</li>
                <li><strong>Multiple Agents:</strong> Each decision type can be handled by dedicated optimization or generative agents.</li>
                <li><strong>MCP Orchestration:</strong> Model, Context, and Protocol layers work together to ensure decisions are adaptive, explainable, and governed.</li>
            </ul>
            </div>
            <p className="text-center text-neutral-600 text-sm italic">
            This isn’t just a demo. It’s how intelligent operations scale in the real world.
            </p>
        </section>
        )}
    </>
  );
}
