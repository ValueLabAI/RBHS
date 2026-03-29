
import { motion } from 'framer-motion';

export default function TheBigIdea() {
  return (
    <section className="py-24 md:py-32 bg-charcoal text-cream relative overflow-hidden">
      {/* Subtle glowing effect in background */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-forest/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-cream leading-[1.1] tracking-tight">
            AI underperforms when layered on top of weak operating discipline.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex flex-col gap-8 justify-center"
        >
          <p className="text-cream/80 text-xl md:text-2xl font-serif italic border-l border-mint pl-6 leading-relaxed">
            Professional services firms do not usually need more software first. They need better leverage across workflow and operations.
          </p>
          <p className="text-cream/60 text-lg leading-relaxed">
            When you rush into AI without redesigning the work, you get poor adoption, weak prioritisation, and zero commercial return. The issue is not the technology. The issue is the operational drag stealing time, margin, and capacity.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
