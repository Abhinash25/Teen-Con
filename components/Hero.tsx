import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Sparkles, Star } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 px-4 bg-white border-b-8 border-black">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/hero-background.jpg)' }}
      />

      {/* Dark Overlay for text readability */}
      <div className="absolute inset-0 bg-black/50" />









      {/* Main Content Area */}
      <div className="max-w-5xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-6 py-3 bg-yellow-400 text-black font-extrabold text-sm mb-8 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] tracking-tight uppercase">
            ⚡ Est. 2024 • Youth empowerment initiative
          </span>

          <motion.h1
            className="text-7xl md:text-[12rem] font-black text-white leading-none tracking-tighter mb-12 [text-shadow:_8px_8px_0_rgb(0_0_0_/_100%)] italic"
          >
            TeenCon
          </motion.h1>

          <button onClick={() => window.open('/Icons Who Believe in TeenCon (A4).pdf', '_blank')} className="bg-white text-black px-12 py-6 font-black text-lg border-6 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all uppercase tracking-wide">
            The brochure
          </button>


        </motion.div>


      </div>

      {/* Wave bottom aesthetic - removed for neo-brutalist style */}
    </section>
  );
};

export default Hero;
