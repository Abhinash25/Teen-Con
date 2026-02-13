
import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Zap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-slate-900 min-h-screen">
      <header className="py-24 bg-slate-950 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-purple-600/5 blur-[120px]" />
        <h1 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tight italic">
          ABOUT <span className="text-purple-500">TEENCON</span>
        </h1>
        <p className="text-slate-400 font-medium text-lg max-w-2xl mx-auto px-4">
          Empowering the youth through multidisciplinary conferences and collaborative student experiences since 2024.
        </p>
      </header>

      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12">
          {[
            { 
              title: "Our Mission", 
              icon: Target, 
              color: "bg-purple-600",
              desc: "To provide a platform where youth can voice their ideas and lead international diplomacy discussions." 
            },
            { 
              title: "Our Community", 
              icon: Users, 
              color: "bg-teal-500",
              desc: "A network of 800+ delegates from across 40+ institutions spanning 5 states." 
            },
            { 
              title: "Our Impact", 
              icon: Zap, 
              color: "bg-yellow-400",
              desc: "Hosting marquee MUNs and talk shows that foster large-scale student empowerment." 
            }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-slate-800 p-10 rounded-[2.5rem] border border-white/5 text-center"
            >
              <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg`}>
                <item.icon size={32} className="text-slate-900" />
              </div>
              <h3 className="text-2xl font-black mb-4 uppercase tracking-tight">{item.title}</h3>
              <p className="text-slate-400 font-medium leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
