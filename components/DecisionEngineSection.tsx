export default function DecisionEngineSection() {
  const pillars = [
    { title: 'Intelligence', subtitle: 'The Thinking Layer', text: 'LLMs trained on internal and external data model your enterprise logic.' },
    { title: 'Awareness', subtitle: 'The Sensing Layer', text: 'Real-time context and signals inform decisions and create dynamic understanding.' },
    { title: 'Action', subtitle: 'The Execution Layer', text: 'Protocols turn intelligence into results through coordinated execution.' }
  ];

  return (
    <section className="py-28 px-6 md:px-16 text-center">
      <h2 className="text-4xl md:text-5xl font-serif mb-8 text-neutral-900">The Decision Engine</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pillars.map((pillar, i) => (
          <div key={i} className="p-8 rounded-2xl bg-white/70 backdrop-blur-md shadow-lg transition hover:shadow-xl hover:scale-105">
            <h3 className="text-2xl font-semibold text-purple-700 mb-2 uppercase tracking-wide">{pillar.title}</h3>
            <h4 className="text-sm font-medium text-neutral-600 mb-2">{pillar.subtitle}</h4>
            <p className="text-neutral-800 leading-relaxed">{pillar.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}