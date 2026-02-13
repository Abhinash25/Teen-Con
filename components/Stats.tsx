
import React from 'react';
import { motion } from 'framer-motion';
import { IMPACT_STATS } from '../constants';

const Stats: React.FC = () => {
  return (
    <section className="py-32 bg-white border-y-8 border-black relative overflow-hidden">
      {/* Neo-brutalist background blocks */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600 opacity-10" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-yellow-400 opacity-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <h2 className="text-5xl md:text-7xl font-black leading-[0.85] tracking-tight text-black">
            Our impact<br />in numbers.
          </h2>
          <p className="text-xl text-black font-bold leading-relaxed max-w-lg border-l-8 border-yellow-400 pl-6">
            Building a legacy of leadership and dialogue across 6 states and 40+ institutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {IMPACT_STATS.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-10 border-6 border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all duration-200 group"
            >
              <div className={`w-14 h-14 ${stat.bgClass} border-4 border-black flex items-center justify-center mb-8`}>
                <stat.icon size={28} className={stat.colorClass} strokeWidth={3} />
              </div>

              <div className="space-y-2">
                <span className="text-5xl font-black block text-black tracking-tighter">
                  {stat.value}{stat.suffix}
                </span>
                <span className="font-black text-sm text-black uppercase tracking-wide">
                  {stat.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
