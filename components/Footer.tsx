
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-zinc-100 pt-4 pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-0">
          <div className="col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-0">
              <div className="w-12 h-12 bg-purple-600 rounded-none flex items-center justify-center font-bold text-2xl italic text-white">T</div>
              <span className="text-4xl font-black tracking-tighter text-black italic">TeenCon</span>
            </Link>
            <p className="text-zinc-500 max-w-sm mb-0 font-medium leading-relaxed italic text-lg">
              "Empowering the youth through the lens of leadership, diplomacy, and collective action."
            </p>
          </div>

          <div>
            <h4 className="text-black font-bold text-sm mb-4 underline decoration-pink-500 underline-offset-4 tracking-tight">Explore</h4>
            <ul className="space-y-3 text-zinc-400 font-bold text-xs">
              <li><Link to="/events" className="hover:text-purple-600 transition-colors">Conferences</Link></li>
              <li><Link to="/about" className="hover:text-purple-600 transition-colors">Our Ethos</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-black font-bold text-sm mb-4 underline decoration-pink-500 underline-offset-4 tracking-tight">Connect</h4>
            <div className="flex flex-row items-center gap-8 text-zinc-400">
              <a href="https://www.instagram.com/theteencon?igsh=MTBneDVjN3plcnR2ZA==" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600 transition-all hover:scale-110" aria-label="Instagram">
                <Instagram size={24} strokeWidth={2} />
              </a>
              <a href="mailto:contact@teencon.org" className="hover:text-purple-600 transition-all hover:scale-110" aria-label="Contact Email">
                <Mail size={24} strokeWidth={2} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-0 border-t border-zinc-50 flex flex-col md:flex-row justify-between items-center gap-6 text-zinc-400 font-bold text-[10px] tracking-tight">
          <p>© 2024 TeenCon Organization. All rights reserved.</p>
          <p>Established in Assam, India.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
