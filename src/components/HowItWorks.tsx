
import { motion } from 'framer-motion';

export default function HowItWorks() {
  const steps = [
    { num: "01", title: "Find", desc: "where billable capacity is leaking." },
    { num: "02", title: "Prioritise", desc: "the highest-value opportunities." },
    { num: "03", title: "Redesign", desc: "the operational workflow." },
    { num: "04", title: "Apply", desc: "practical AI where it actually helps." },
    { num: "05", title: "Embed", desc: "change and measure returned value." }
  ];

  return (
    <section className="py-24 md:py-32 bg-cream text-charcoal border-b border-forest/10" id="how-it-works">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        <div className="lg:col-span-5 sticky top-32 self-start">
          <h2 className="text-4xl md:text-5xl font-serif text-forest mb-6 tracking-tight">The Path to Leverage</h2>
          <p className="text-charcoal/70 text-lg leading-relaxed mb-8 max-w-sm">
            A linear progression to uncover friction and build durable, scalable professional service operations.
          </p>
        </div>

        <div className="lg:col-span-7 flex flex-col gap-8 md:gap-12">
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex items-start gap-6 lg:gap-8 group"
            >
              <div className="flex-shrink-0 font-mono text-2xl md:text-3xl text-mint/50 group-hover:text-mint transition-colors duration-300">
                {step.num}
              </div>
              <div className="pt-1 border-t border-forest/20 w-full group-hover:border-forest-light transition-colors duration-300">
                <h3 className="text-2xl md:text-3xl font-serif text-forest mt-4 mb-2">{step.title}</h3>
                <p className="text-lg text-charcoal/80 bg-forest/5 p-4 rounded-sm border-l-2 border-transparent group-hover:border-mint transition-all">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
