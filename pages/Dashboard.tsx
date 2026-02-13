
import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Calendar, FileText, User, LogOut } from 'lucide-react';

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen pt-10 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[300px_1fr] gap-12">
          
          {/* Sidebar */}
          <aside className="space-y-8">
            <div className="bg-zinc-50 p-10 border border-zinc-100 text-center shadow-sm rounded-2xl">
              <div className="w-24 h-24 bg-purple-100 rounded-full mx-auto mb-6 border-2 border-purple-200 overflow-hidden flex items-center justify-center">
                 <User size={40} className="text-purple-600" />
              </div>
              <h3 className="text-2xl font-black text-black uppercase tracking-tighter">Aryan Sharma</h3>
              <p className="text-zinc-400 text-[10px] font-black uppercase tracking-widest mt-2">DELEGATE ID: #TC2490</p>
            </div>
            
            <nav className="bg-white border border-zinc-100 shadow-sm overflow-hidden rounded-2xl">
              {[
                { label: 'Overview', icon: Trophy, active: true },
                { label: 'Registrations', icon: Calendar, active: false },
                { label: 'Certificates', icon: FileText, active: false },
                { label: 'Profile Settings', icon: User, active: false },
              ].map((item, idx) => (
                <button
                  key={idx}
                  className={`w-full flex items-center gap-5 px-8 py-5 font-black text-[10px] uppercase tracking-widest transition-all ${
                    item.active ? 'bg-purple-600 text-white' : 'text-zinc-400 hover:bg-zinc-50'
                  }`}
                >
                  <item.icon size={16} />
                  {item.label}
                </button>
              ))}
              <hr className="border-zinc-50" />
              <button className="w-full flex items-center gap-5 px-8 py-5 font-black text-[10px] uppercase tracking-widest text-pink-600 hover:bg-pink-50 transition-all">
                <LogOut size={16} />
                Logout
              </button>
            </nav>
          </aside>

          {/* Main Content */}
          <main className="space-y-12">
            <div className="bg-black p-12 flex items-center justify-between text-white relative overflow-hidden border-b-8 border-r-8 border-purple-600 rounded-2xl">
               <div className="relative z-10">
                  <h2 className="text-4xl font-black mb-3 uppercase tracking-tighter">Welcome Back, Aryan.</h2>
                  <p className="text-zinc-400 font-bold uppercase text-xs tracking-widest">Leadership is an action, not a position.</p>
               </div>
               <div className="hidden md:block relative z-10">
                  <Trophy size={80} className="text-purple-600 opacity-50" />
               </div>
            </div>

            <div className="grid md:grid-cols-3 gap-0 border border-zinc-100 divide-x divide-zinc-100 rounded-2xl overflow-hidden shadow-sm">
               <div className="p-8 text-center bg-zinc-50/50">
                  <p className="text-zinc-400 text-[10px] font-black uppercase tracking-widest mb-2">Total Points</p>
                  <h4 className="text-4xl font-black text-black">1,240</h4>
               </div>
               <div className="p-8 text-center">
                  <p className="text-zinc-400 text-[10px] font-black uppercase tracking-widest mb-2">Events Attended</p>
                  <h4 className="text-4xl font-black text-purple-600">04</h4>
               </div>
               <div className="p-8 text-center bg-zinc-50/50">
                  <p className="text-zinc-400 text-[10px] font-black uppercase tracking-widest mb-2">Rank</p>
                  <h4 className="text-4xl font-black text-pink-600">Top 5%</h4>
               </div>
            </div>

            <section>
              <h3 className="text-3xl font-black mb-8 uppercase tracking-tighter text-black flex items-center gap-3">
                Active Registrations
              </h3>
              <div className="space-y-6">
                {[
                  { title: "TEENCON'26 MUN", date: "AUG 15, 2026", status: "Confirmed", icon: "🇺🇳" },
                  { title: "GLOBAL TALK SHOW", date: "NOV 22, 2025", status: "Waitlisted", icon: "🎙️" }
                ].map((reg, idx) => (
                  <div key={idx} className="bg-white p-8 border border-zinc-100 flex flex-wrap items-center justify-between gap-6 hover:shadow-lg transition-all rounded-2xl">
                    <div className="flex items-center gap-6">
                       <div className="text-4xl grayscale group-hover:grayscale-0">{reg.icon}</div>
                       <div>
                          <h5 className="font-black text-2xl text-black uppercase tracking-tighter">{reg.title}</h5>
                          <p className="text-zinc-400 text-[10px] font-black uppercase tracking-widest mt-1">{reg.date}</p>
                       </div>
                    </div>
                    <div className="flex items-center gap-6">
                       <span className={`px-4 py-2 text-[10px] font-black uppercase tracking-widest border ${
                         reg.status === 'Confirmed' ? 'border-purple-200 text-purple-600 bg-purple-50' : 'border-pink-200 text-pink-600 bg-pink-50'
                       } rounded-full`}>
                         {reg.status}
                       </span>
                       <button className="text-black font-black text-[10px] uppercase tracking-widest border-b-2 border-black py-1">Details</button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </main>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;
