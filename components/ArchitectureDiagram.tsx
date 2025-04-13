export default function ArchitectureDiagram({ activeIndex = 0, onClick = () => {} }) {
  const components = [
    'Agentic Flow',
    'Optimization Core',
    'Plugin Runtime',
    'Context Engine',
    'Decision Log',
    'Enterprise Infra',
  ];

  return (
    <div className="w-full h-full p-4 rounded-lg bg-[var(--tw-brand-light)] shadow-inner border border-[var(--tw-brand-muted)]/40">
      <h3 className="text-lg font-semibold text-[var(--tw-brand-accent)] mb-4">System Diagram</h3>
      <div className="grid grid-cols-2 gap-4 text-sm text-center">
        {components.map((comp, i) => (
          <div
            key={i}
            onClick={() => onClick(i)}
            className={
              "cursor-pointer p-4 rounded shadow transition-all " +
              (i === activeIndex
                ? "bg-[var(--tw-brand-primary)] scale-105 text-[var(--tw-brand-accent)] font-semibold"
                : "bg-white/60 backdrop-blur-md")
            }
          >
            {comp}
          </div>
        ))}
      </div>
    </div>
  );
}
