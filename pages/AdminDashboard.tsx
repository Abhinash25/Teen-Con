
import React from 'react';
import { motion } from 'framer-motion';
import { LayoutDashboard, Users, Calendar, Image as ImageIcon, Speaker, Mail, Download, Plus, Search, MoreHorizontal } from 'lucide-react';

const AdminDashboard: React.FC = () => {
  const stats = [
    { label: 'Total Regs', value: '842', trend: '+12%', color: 'purple' },
    { label: 'Active Events', value: '03', trend: 'Stable', color: 'teal' },
    { label: 'Revenue', value: '₹4.2L', trend: '+18%', color: 'yellow' },
    { label: 'Pending Apps', value: '24', trend: 'Alert', color: 'red' },
  ];

  return (
    <div className="min-h-screen bg-slate-950 p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-black flex items-center gap-3">
              <LayoutDashboard className="text-purple-500" />
              ADMIN CONTROL
            </h1>
            <p className="text-slate-500 font-bold uppercase text-xs tracking-[0.2em] mt-1">Operational Overview</p>
          </div>
          <div className="flex gap-3 w-full md:w-auto">
             <button className="flex-1 md:flex-none bg-slate-800 hover:bg-slate-700 px-6 py-3 rounded-xl font-bold border border-white/5 transition-all text-sm flex items-center justify-center gap-2">
                <Download size={18} /> Export
             </button>
             <button className="flex-1 md:flex-none bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-xl font-black transition-all text-sm flex items-center justify-center gap-2 shadow-lg shadow-purple-600/20">
                <Plus size={18} /> Create Event
             </button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, idx) => (
            <div key={idx} className="bg-slate-900 border border-white/5 p-6 rounded-3xl">
              <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-1">{s.label}</p>
              <div className="flex items-baseline gap-2">
                <h4 className="text-2xl font-black">{s.value}</h4>
                <span className="text-[10px] font-bold text-teal-400">{s.trend}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Registration Table */}
        <section className="bg-slate-900 border border-white/5 rounded-[2.5rem] overflow-hidden">
          <div className="p-8 border-b border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
            <h3 className="text-xl font-black uppercase">Recent Registrations</h3>
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={16} />
              <input 
                type="text" 
                placeholder="Find delegate..."
                className="w-full bg-slate-800 border border-white/5 rounded-xl pl-10 pr-4 py-2 text-sm font-bold focus:outline-none"
              />
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-white/5">
                  {['Delegate', 'Event', 'Date', 'Status', 'Payment', ''].map((h, i) => (
                    <th key={i} className="px-8 py-4 text-[10px] font-black text-slate-500 uppercase tracking-widest">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {[
                  { name: 'Siddharth Roy', email: 'sid@gmail.com', event: "TeenCon'26 MUN", date: '12 May, 2024', status: 'Pending', pay: 'Unpaid' },
                  { name: 'Isha Patel', email: 'isha@univ.edu', event: 'Talk Show', date: '10 May, 2024', status: 'Approved', pay: 'Paid' },
                  { name: 'Kabir Das', email: 'k.das@outlook.com', event: "TeenCon'26 MUN", date: '09 May, 2024', status: 'Approved', pay: 'Paid' },
                ].map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                    <td className="px-8 py-6">
                      <div className="font-bold text-sm">{row.name}</div>
                      <div className="text-slate-500 text-xs">{row.email}</div>
                    </td>
                    <td className="px-8 py-6 font-bold text-sm text-slate-300">{row.event}</td>
                    <td className="px-8 py-6 text-sm text-slate-500 font-bold">{row.date}</td>
                    <td className="px-8 py-6">
                      <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${
                        row.status === 'Approved' ? 'bg-teal-500/10 text-teal-400' : 'bg-yellow-500/10 text-yellow-400'
                      }`}>
                        {row.status}
                      </span>
                    </td>
                    <td className="px-8 py-6">
                       <span className={`text-xs font-black ${row.pay === 'Paid' ? 'text-teal-500' : 'text-slate-500'}`}>
                         {row.pay}
                       </span>
                    </td>
                    <td className="px-8 py-6 text-right">
                       <button className="p-2 hover:bg-white/5 rounded-lg text-slate-500"><MoreHorizontal size={20} /></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="p-6 text-center border-t border-white/5">
             <button className="text-purple-400 font-black text-xs uppercase tracking-widest hover:underline">View All 842 Records</button>
          </div>
        </section>

        {/* Management Grid */}
        <div className="grid md:grid-cols-3 gap-6">
           <button className="bg-slate-900 border border-white/5 p-8 rounded-3xl flex items-center gap-6 hover:border-purple-500 transition-all group text-left">
              <div className="w-14 h-14 bg-purple-600/10 text-purple-500 rounded-2xl flex items-center justify-center group-hover:bg-purple-600 group-hover:text-white transition-all">
                 <ImageIcon />
              </div>
              <div>
                 <h4 className="font-black text-lg">Gallery</h4>
                 <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">Update Photos</p>
              </div>
           </button>
           <button className="bg-slate-900 border border-white/5 p-8 rounded-3xl flex items-center gap-6 hover:border-teal-500 transition-all group text-left">
              <div className="w-14 h-14 bg-teal-600/10 text-teal-500 rounded-2xl flex items-center justify-center group-hover:bg-teal-600 group-hover:text-white transition-all">
                 <Speaker />
              </div>
              <div>
                 <h4 className="font-black text-lg">Speakers</h4>
                 <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">Guest List</p>
              </div>
           </button>
           <button className="bg-slate-900 border border-white/5 p-8 rounded-3xl flex items-center gap-6 hover:border-yellow-500 transition-all group text-left">
              <div className="w-14 h-14 bg-yellow-600/10 text-yellow-500 rounded-2xl flex items-center justify-center group-hover:bg-yellow-600 group-hover:text-white transition-all">
                 <Mail />
              </div>
              <div>
                 <h4 className="font-black text-lg">Broadcast</h4>
                 <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">Send Emails</p>
              </div>
           </button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
