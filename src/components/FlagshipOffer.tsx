
import { motion } from 'framer-motion';
import { CaretRight } from '@phosphor-icons/react';

export default function FlagshipOffer() {
  const tiers = [
    {
      stage: "1", name: "Diagnose", price: "$5k–$7.5k",
      bullets: ["Leadership interviews & workflow review", "Systems friction review", "Billable-hours recovery estimate", "Prioritised opportunity map", "Commercial recommendation memo"]
    },
    {
      stage: "2", name: "Fix a Workflow", price: "$20k–$30k", duration: "90-day sprint", featured: true,
      bullets: ["Redesign one important workflow", "Simplify process and approvals", "Improve system usage", "Introduce practical AI support", "Track measurable commercial value"]
    },
    {
      stage: "3", name: "Embed Leverage", price: "$7k–$9k/mo", duration: "6-mo minimum",
      bullets: ["Ongoing fractional operating review", "Continuous roadmap refinement", "Implementation guidance", "Hands-on leadership support", "Governed AI & tech decisions"]
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-cream" id="system">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16 md:mb-24 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-forest mb-6 tracking-tight">The Billable Hours Recovery System</h2>
          <p className="text-charcoal/70 text-lg md:text-xl leading-relaxed">
            A structured ValueLab engagement to uncover and fix the friction stealing your margin.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {tiers.map((tier, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, type: "spring", stiffness: 50 }}
              className={`relative flex flex-col p-8 md:p-10 rounded-sm border ${
                tier.featured ? 'bg-forest text-cream border-forest shadow-forest-glow z-10 lg:scale-[1.02]' 
                             : 'bg-white border-forest/10 shadow-sm'
              }`}
            >
              <div className="absolute top-0 right-0 p-8 text-5xl font-serif opacity-10">
                {tier.stage}
              </div>
              
              <div className="mb-8">
                <span className={`text-xs font-mono uppercase tracking-widest ${tier.featured ? 'text-mint' : 'text-forest-light'}`}>
                  Stage {tier.stage} // {tier.duration || "Fixed Scope"}
                </span>
                <h3 className={`text-3xl font-serif mt-2 mb-4 ${tier.featured ? 'text-cream' : 'text-forest'}`}>{tier.name}</h3>
                <div className={`font-mono text-xl ${tier.featured ? 'text-cream/90' : 'text-charcoal/90'}`}>
                  {tier.price}
                </div>
              </div>

              <div className="flex-grow">
                <ul className="space-y-4">
                  {tier.bullets.map((b, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <CaretRight weight="bold" className={`mt-1 flex-shrink-0 ${tier.featured ? 'text-mint' : 'text-forest-light'}`} />
                      <span className={tier.featured ? 'text-cream/80' : 'text-charcoal/80'}>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-12">
                <button className={`w-full py-4 text-center text-sm uppercase tracking-wider font-semibold tactile-button ${
                  tier.featured ? 'bg-mint text-forest-dark hover:bg-mint-light' : 'bg-forest/5 text-forest hover:bg-forest/10'
                }`}>
                  Select Phase
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
