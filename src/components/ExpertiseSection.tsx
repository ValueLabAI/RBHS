import { motion } from 'framer-motion';

export default function ExpertiseSection() {
  const martaExpertise = [
    "Strategic workflow design & problem diagnosis",
    "CX and service design thinking",
    "AI strategy and practical commercial application",
    "Governance awareness and technology change",
    "A rigorous, business-value-first lens"
  ];

  const jonathanExpertise = [
    "Fractional COO-level thinking & operational leadership",
    "Complex systems implementation experience",
    "Process and workflow redesign",
    "Building resilient operational infrastructure",
    "Execution discipline turning plans into reality"
  ];

  return (
    <section className="py-24 md:py-32 bg-forest text-cream" id="expertise">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
        
        {/* Left Intro */}
        <div className="lg:col-span-4 flex flex-col justify-start">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-5xl font-serif mb-6 tracking-tight text-cream"
          >
            Strategy and execution, in the same room.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-cream/80 text-lg leading-relaxed max-w-sm mb-4"
          >
            ValueLab combines strategic workflow thinking, practical AI judgment, and operational execution discipline.
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-cream/60 text-base leading-relaxed max-w-sm"
          >
            Clients benefit from both distinct perspectives—uncovering the right constraints to fix, and building the infrastructure to fix them properly—without needing to manage two separate advisors.
          </motion.p>
        </div>

        {/* Right Profiles */}
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* PROFILE: MARTA */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col border-t border-cream/20 pt-8"
          >
            <h3 className="text-3xl font-serif text-cream mb-2">Marta Hyland</h3>
            <span className="text-mint text-xs font-mono uppercase tracking-widest mb-6 block">Strategic Focus</span>
            
            <p className="text-cream/70 leading-relaxed text-base mb-8 pb-8 border-b border-cream/10">
              With over 15+ years of experience, Marta leads the strategic side of the work: identifying exactly where value is leaking, where workflows break down, where AI fits, and what fundamentally needs to change within the firm.
            </p>

            <ul className="space-y-4">
              {martaExpertise.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-mint mt-2 flex-shrink-0"></div>
                  <span className="text-cream/90 text-sm font-medium tracking-wide leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* PROFILE: JONATHAN */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col border-t border-cream/20 pt-8"
          >
            <h3 className="text-3xl font-serif text-cream mb-2">Jonathan Wharton</h3>
            <span className="text-mint text-xs font-mono uppercase tracking-widest mb-6 block">Operational Reality</span>
            
            <p className="text-cream/70 leading-relaxed text-base mb-8 pb-8 border-b border-cream/10">
              With over 20+ years of experience, Jonathan brings the operational execution lens: how to strengthen infrastructure, improve systems use, and turn strategic recommendations into actionable, workable reality.
            </p>

            <ul className="space-y-4">
              {jonathanExpertise.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-mint mt-2 flex-shrink-0"></div>
                  <span className="text-cream/90 text-sm font-medium tracking-wide leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
