
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Register: React.FC = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center p-4 py-12">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-slate-800 w-full max-w-lg p-10 rounded-[3rem] border border-white/5 shadow-2xl relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-32 h-32 bg-teal-500/10 blur-[50px] rounded-full" />
        
        <div className="text-center mb-10 relative z-10">
          <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center font-black text-3xl italic mx-auto mb-6">T</div>
          <h2 className="text-3xl font-black mb-2 uppercase tracking-tight">Join the Tribe</h2>
          <p className="text-slate-400 font-bold text-sm tracking-wide">BECOME A PART OF INDIA'S LARGEST YOUTH NETWORK</p>
        </div>

        <form className="space-y-5 relative z-10">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-slate-400 text-[10px] font-black uppercase tracking-widest mb-2 ml-2">First Name</label>
              <input 
                type="text" 
                className="w-full bg-slate-900 border border-white/5 rounded-2xl px-6 py-4 font-bold text-white focus:outline-none focus:ring-2 focus:ring-purple-600/50 transition-all"
                placeholder="Alex"
              />
            </div>
            <div>
              <label className="block text-slate-400 text-[10px] font-black uppercase tracking-widest mb-2 ml-2">Last Name</label>
              <input 
                type="text" 
                className="w-full bg-slate-900 border border-white/5 rounded-2xl px-6 py-4 font-bold text-white focus:outline-none focus:ring-2 focus:ring-purple-600/50 transition-all"
                placeholder="Smith"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-slate-400 text-[10px] font-black uppercase tracking-widest mb-2 ml-2">Email Address</label>
            <input 
              type="email" 
              className="w-full bg-slate-900 border border-white/5 rounded-2xl px-6 py-4 font-bold text-white focus:outline-none focus:ring-2 focus:ring-purple-600/50 transition-all"
              placeholder="alex@example.com"
            />
          </div>

          <div>
            <label className="block text-slate-400 text-[10px] font-black uppercase tracking-widest mb-2 ml-2">Create Password</label>
            <input 
              type="password" 
              className="w-full bg-slate-900 border border-white/5 rounded-2xl px-6 py-4 font-bold text-white focus:outline-none focus:ring-2 focus:ring-purple-600/50 transition-all"
              placeholder="••••••••"
            />
          </div>

          <div className="flex items-start gap-3 px-2 py-2">
            <input type="checkbox" className="mt-1 accent-purple-600" id="terms" />
            <label htmlFor="terms" className="text-xs font-bold text-slate-400 leading-relaxed">
              I agree to the <span className="text-purple-400">Terms & Conditions</span> and consent to receive updates about upcoming events.
            </label>
          </div>
          
          <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-black py-5 rounded-2xl shadow-xl shadow-purple-600/20 transition-all active:scale-[0.98] mt-4 uppercase tracking-widest">
            Create Account
          </button>
        </form>

        <div className="mt-8 text-center relative z-10">
          <p className="text-slate-400 font-bold text-sm">
            Already a member? <Link to="/login" className="text-purple-400 hover:text-purple-300">Login here</Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Register;
