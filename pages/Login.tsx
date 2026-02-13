
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Login: React.FC = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-slate-800 w-full max-w-md p-10 rounded-[3rem] border border-white/5 shadow-2xl relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/10 blur-[50px] rounded-full" />
        
        <div className="text-center mb-10 relative z-10">
          <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center font-black text-3xl italic mx-auto mb-6">T</div>
          <h2 className="text-3xl font-black mb-2 uppercase">Welcome Back</h2>
          <p className="text-slate-400 font-bold text-sm tracking-wide">ENTER YOUR CREDENTIALS TO LOGIN</p>
        </div>

        <form className="space-y-6 relative z-10">
          <div>
            <label className="block text-slate-400 text-xs font-black uppercase tracking-widest mb-3 ml-2">Email Address</label>
            <input 
              type="email" 
              className="w-full bg-slate-900 border border-white/5 rounded-2xl px-6 py-4 font-bold text-white focus:outline-none focus:ring-2 focus:ring-purple-600/50"
              placeholder="alex@teencon.org"
            />
          </div>
          <div>
            <div className="flex justify-between items-center mb-3">
              <label className="block text-slate-400 text-xs font-black uppercase tracking-widest ml-2">Password</label>
              <a href="#" className="text-xs font-black text-purple-400 hover:text-purple-300">FORGOT?</a>
            </div>
            <input 
              type="password" 
              className="w-full bg-slate-900 border border-white/5 rounded-2xl px-6 py-4 font-bold text-white focus:outline-none focus:ring-2 focus:ring-purple-600/50"
              placeholder="••••••••"
            />
          </div>
          
          <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-black py-4 rounded-2xl shadow-xl shadow-purple-600/20 transition-all active:scale-[0.98] mt-4 uppercase">
            Login to Portal
          </button>
        </form>

        <div className="mt-8 text-center relative z-10">
          <p className="text-slate-400 font-bold text-sm">
            Don't have an account? <Link to="/register" className="text-purple-400 hover:text-purple-300">Create One</Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
