
import { motion } from 'framer-motion';
import { Clock, ArrowsMerge, Users, Layout, ShieldWarning } from '@phosphor-icons/react';

export default function ProblemSection() {
  const problems = [
    { text: "Partner time lost to admin and coordination", icon: <Clock weight="light" size={24} /> },
    { text: "Slow proposals, reporting, or delivery workflows", icon: <Layout weight="light" size={24} /> },
    { text: "Duplicated work and messy approvals", icon: <ArrowsMerge weight="light" size={24} /> },
    { text: "Work bouncing between people with weak handoffs", icon: <Users weight="light" size={24} /> },
    { text: "AI experiments with no commercial value", icon: <ShieldWarning weight="light" size={24} /> }
  ];

  return (
    <section className="py-24 md:py-32 relative bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 lg:gap-24">
          
          <div className="md:w-1/3 flex flex-col items-start pt-4">
            <h2 className="text-4xl md:text-5xl font-serif text-forest mb-6 tracking-tight">
              Where Billable Capacity Disappears
            </h2>
            <p className="text-charcoal/70 text-lg leading-relaxed mb-8">
              You don't need to work harder. You need to remove the friction built into your daily operations.
            </p>
          </div>

          <motion.div 
            className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
            }}
          >
            {problems.map((prob, i) => (
              <motion.div 
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
                }}
                className={`p-8 border border-forest/10 rounded-xl bg-white/50 backdrop-blur-sm shadow-sm flex flex-col gap-4 ${i === 4 ? 'sm:col-span-2' : ''}`}
              >
                <div className="text-mint p-3 bg-forest-light/5 rounded-lg w-fit">
                  {prob.icon}
                </div>
                <p className="text-charcoal font-medium leading-relaxed">
                  {prob.text}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
