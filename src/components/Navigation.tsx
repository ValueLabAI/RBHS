import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-cream/80 backdrop-blur-lg border-b border-forest/5 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="text-2xl font-serif text-forest tracking-tight">
          ValueLab
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide text-forest/80">
          <a href="#system" className="hover:text-forest transition-colors">The System</a>
          <a href="#expertise" className="hover:text-forest transition-colors">Expertise</a>
          <a href="#about" className="hover:text-forest transition-colors">About</a>
          <button className="bg-mint text-forest-dark px-5 py-2.5 rounded-sm tactile-button hover:bg-mint-light">
            Explore Fit
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
