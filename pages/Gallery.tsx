
import React from 'react';
import { motion } from 'framer-motion';

const Gallery: React.FC = () => {
  const images = Array.from({ length: 8 }).map((_, i) => ({
    url: `https://picsum.photos/seed/teencon-gallery-${i}/800/600`,
    title: `Event Moment #${i + 1}`
  }));

  return (
    <div className="bg-slate-900 min-h-screen pb-24">
      <header className="py-24 bg-slate-950 text-center">
        <h1 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tight italic">
          IMPACT <span className="text-teal-400">GALLERY</span>
        </h1>
        <p className="text-slate-400 font-medium text-lg max-w-2xl mx-auto px-4">
          Capturing the energy and passion of India's brightest youth delegates.
        </p>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((img, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="break-inside-avoid relative group overflow-hidden rounded-[2rem] border border-white/5"
            >
              <img 
                src={img.url} 
                alt={img.title} 
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-6 flex items-end">
                <p className="text-white font-black uppercase text-sm tracking-widest">{img.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
