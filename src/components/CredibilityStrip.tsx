

export default function CredibilityStrip() {
  const authorities = [
    "Strategic expertise across workflow, CX, AI, and operations.",
    "Operational leadership across systems, process, and implementation.",
    "Built for professional services firms with real workflow complexity.",
    "Practical improvement, not AI theatre."
  ];

  return (
    <section className="border-y border-forest/10 py-12 md:py-16 bg-cream flex overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full flex flex-col md:flex-row md:items-center justify-between gap-8 md:gap-4">
        {authorities.map((text, i) => (
          <div key={i} className="flex-1 md:text-center px-4">
            <p className="text-charcoal/80 text-sm md:text-xs lg:text-sm font-medium tracking-wide uppercase leading-relaxed">
              {text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
