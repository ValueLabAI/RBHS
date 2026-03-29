
import { motion } from 'framer-motion';
import { ArrowUpRight } from '@phosphor-icons/react';

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] pt-32 pb-20 flex items-center overflow-hidden">
      {/* Decorative structural grid background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" 
           style={{ backgroundImage: 'linear-gradient(to right, #1a382f 1px, transparent 1px), linear-gradient(to bottom, #1a382f 1px, transparent 1px)', backgroundSize: '4rem 4rem' }}>
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Left Typography */}
        <motion.div 
          className="lg:col-span-7 flex flex-col items-start gap-8"
          initial="hidden" animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
          }}
        >
          <motion.h1 
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[1.05] tracking-tight font-serif text-forest"
          >
            Recover the billable hours your firm is quietly losing.
          </motion.h1>
          
          <motion.p 
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="text-charcoal/70 text-lg sm:text-xl max-w-2xl leading-relaxed"
          >
            We help professional services firms reduce operational drag, improve workflow leverage, and apply AI where it creates real commercial value.
          </motion.p>
          
          <motion.div 
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="flex flex-col sm:flex-row gap-6 mt-4 w-full sm:w-auto items-center"
          >
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-mint text-forest-dark px-8 py-4 rounded-sm font-medium tracking-wide tactile-button hover:bg-mint-light transition-colors group">
              See If We're the Right Fit
              <ArrowUpRight weight="bold" className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
            <a href="#system" className="w-full sm:w-auto text-center px-8 py-4 font-medium text-forest hover:text-forest-light tracking-wide tactile-button border border-forest/20 rounded-sm">
              Explore The System
            </a>
          </motion.div>
        </motion.div>

        {/* Right Asset / Abstract Structure */}
        <motion.div 
          initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ type: "spring", stiffness: 60, damping: 30, delay: 0.2 }}
          className="lg:col-span-5 h-[50vh] lg:h-[70vh] relative hidden lg:block"
        >
          {/* Abstract layout representing sorted workflows out of mess */}
          <div className="absolute inset-0 bg-forest/5 rounded-[2.5rem] border border-forest/10 overflow-hidden shadow-diffusion">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-mint/10 rounded-full blur-3xl"></div>
            
            {/* Bento-style abstraction */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-sm grid grid-cols-2 gap-4 p-8">
              <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }} className="h-48 bg-white rounded-xl shadow-sm border border-black/5"></motion.div>
              <div className="grid grid-rows-2 gap-4 h-48">
                <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }} className="bg-forest-light rounded-xl shadow-sm"></motion.div>
                <div className="bg-white rounded-xl shadow-sm border border-black/5 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full border-t-2 border-mint animate-spin"></div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
