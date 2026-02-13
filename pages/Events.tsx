


import React from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

// Performance data for charts
const performanceData = [
  { name: "TeenCon'24 MUN", footfall: 300, institutes: 40, venue: "Axel Public School" },
  { name: "TeenCon'25 MUN", footfall: 250, institutes: 50, venue: "Holy Home Sr. Sec. School" },
  { name: "Global Reach", footfall: 250, institutes: 50, venue: "Holy Home Sr. Sec. School" },
  { name: "Debates 1st Ed.", footfall: 100, institutes: 20, venue: "NEF Law College" }
];

// Colors for pie chart
const COLORS = ['#9333ea', '#f59e0b', '#3b82f6', '#10b981'];

const Events: React.FC = () => {
  return (
    <div className="min-h-screen bg-white pb-0 relative">
      {/* Background Image with Overlay */}
      <div
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/youth-background.jpg)' }}
      />
      <div className="fixed inset-0 z-0 bg-white/85" />

      {/* Event Impact Report Section */}
      <section className="pt-20 pb-0 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Title Box */}
            <div className="bg-yellow-400 border-8 border-black p-4 md:p-6 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] mb-8">
              <h3 className="text-4xl md:text-6xl font-black text-black tracking-tight uppercase text-center [text-shadow:_2px_2px_0_rgb(255_255_255_/_40%)]">
                TeenCon Event Impact
              </h3>
            </div>

            {/* Executive Summary */}
            <div className="bg-blue-600 border-8 border-black p-8 md:p-12 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] mb-12">
              <h4 className="text-2xl md:text-3xl font-black text-white mb-6 uppercase tracking-tight">Executive Summary</h4>
              <p className="text-white font-bold leading-relaxed text-lg">
                TeenCon has successfully hosted five events since 2024, beginning with its inaugural Model United Nations conference, TeenCon'24. This was followed by TeenCon'25, the Global Reach Talk Show, TeenCon Debates Edition 1, and the TeenCon Quiz at Cotton University. With the upcoming TeenCon'26 MUN, these diverse conferences have helped us amass a substantial following.
              </p>
            </div>

            {/* Performance by Platform Charts */}
            <div className="bg-white border-8 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] overflow-hidden mb-12">
              <div className="bg-purple-600 border-b-8 border-black p-6">
                <h4 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight">Performance by Platform</h4>
              </div>
              <div className="p-8">
                {/* Bar Charts Grid */}
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  {/* Footfall Bar Chart */}
                  <div className="border-8 border-black p-6 bg-yellow-400 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                    <h5 className="text-xl font-black text-black mb-4 uppercase [text-shadow:_2px_2px_0_rgb(255_255_255_/_40%)]">Event Footfall</h5>
                    <BarChart width={400} height={300} data={performanceData} className="mx-auto">
                      <CartesianGrid strokeDasharray="3 3" stroke="#000" strokeWidth={2} />
                      <XAxis dataKey="name" tick={{ fill: '#000', fontWeight: 'bold', fontSize: 10 }} angle={-45} textAnchor="end" height={80} />
                      <YAxis tick={{ fill: '#000', fontWeight: 'bold' }} />
                      <Tooltip contentStyle={{ border: '6px solid black', fontWeight: 'bold', boxShadow: '4px 4px 0px rgba(0,0,0,1)' }} />
                      <Bar dataKey="footfall" fill="#9333ea" stroke="#000" strokeWidth={3} />
                    </BarChart>
                  </div>

                  {/* Institutes Bar Chart */}
                  <div className="border-8 border-black p-6 bg-orange-400 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                    <h5 className="text-xl font-black text-black mb-4 uppercase [text-shadow:_2px_2px_0_rgb(255_255_255_/_40%)]">Participating Institutes</h5>
                    <BarChart width={400} height={300} data={performanceData} className="mx-auto">
                      <CartesianGrid strokeDasharray="3 3" stroke="#000" strokeWidth={2} />
                      <XAxis dataKey="name" tick={{ fill: '#000', fontWeight: 'bold', fontSize: 10 }} angle={-45} textAnchor="end" height={80} />
                      <YAxis tick={{ fill: '#000', fontWeight: 'bold' }} />
                      <Tooltip contentStyle={{ border: '6px solid black', fontWeight: 'bold', boxShadow: '4px 4px 0px rgba(0,0,0,1)' }} />
                      <Bar dataKey="institutes" fill="#7c3aed" stroke="#000" strokeWidth={3} />
                    </BarChart>
                  </div>
                </div>

                {/* Pie Chart for Event Distribution */}
                <div className="border-8 border-black p-6 bg-blue-400 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                  <h5 className="text-xl font-black text-white mb-4 uppercase text-center [text-shadow:_2px_2px_0_rgb(0_0_0_/_40%)]">Total Footfall Distribution</h5>
                  <PieChart width={500} height={300} className="mx-auto">
                    <Pie
                      data={performanceData}
                      cx={250}
                      cy={150}
                      labelLine={false}
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="footfall"
                      stroke="#000"
                      strokeWidth={4}
                    >
                      {performanceData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip contentStyle={{ border: '6px solid black', fontWeight: 'bold', boxShadow: '4px 4px 0px rgba(0,0,0,1)' }} />
                  </PieChart>
                </div>

                {/* Venue Information */}
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {performanceData.map((event, idx) => (
                    <div key={idx} className="bg-gradient-to-br from-pink-400 to-pink-500 border-6 border-black p-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all">
                      <p className="font-black text-xs uppercase mb-2 text-white">{event.name}</p>
                      <p className="font-bold text-sm text-black">{event.venue}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {/* Social Media Impressions */}
              <div className="bg-gradient-to-br from-purple-500 to-purple-700 border-8 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all">
                <p className="text-white font-black text-sm mb-2 uppercase tracking-wide">Social Media Impressions</p>
                <p className="text-6xl font-black text-white mb-1">300k+</p>
                <p className="text-white font-bold text-sm">Across handles</p>
              </div>

              {/* Total Participant Turnout */}
              <div className="bg-gradient-to-br from-orange-400 to-orange-600 border-8 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all">
                <p className="text-white font-black text-sm mb-2 uppercase tracking-wide">Total Participant Turnout</p>
                <p className="text-6xl font-black text-white mb-1">800+</p>
                <p className="text-white font-bold text-sm">Across Events</p>
              </div>

              {/* Cash Rewards & Incentives */}
              <div className="bg-gradient-to-br from-green-500 to-green-700 border-8 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all">
                <p className="text-white font-black text-sm mb-2 uppercase tracking-wide">Cash Rewards & Incentives</p>
                <p className="text-6xl font-black text-white mb-1">100k+</p>
                <p className="text-white font-bold text-sm">In INR</p>
              </div>

              {/* Type of Initiatives */}
              <div className="bg-gradient-to-br from-blue-500 to-blue-700 border-8 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all">
                <p className="text-white font-black text-sm mb-4 uppercase tracking-wide">Type of Initiatives</p>
                <div className="space-y-2">
                  <div>
                    <p className="text-4xl font-black text-white">95%</p>
                    <p className="text-white font-bold text-xs">Offline Events</p>
                  </div>
                  <div>
                    <p className="text-4xl font-black text-white">5%</p>
                    <p className="text-white font-bold text-xs">Online Sessions</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Audience Demographics & Additional Metrics */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Audience Demographics */}
              <div className="bg-white border-8 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] p-8">
                <h4 className="text-2xl font-black text-black mb-6 uppercase tracking-tight border-b-4 border-black pb-4">Audience Demographics</h4>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-purple-600 border-4 border-black px-6 py-3 flex-shrink-0">
                      <p className="text-white font-black text-sm">Age Range</p>
                    </div>
                    <p className="text-4xl font-black text-black">16-32y</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-blue-400 border-4 border-black p-4 text-center">
                      <p className="text-3xl font-black text-white mb-1">55%</p>
                      <p className="text-white font-bold text-sm">Male</p>
                    </div>
                    <div className="bg-pink-400 border-4 border-black p-4 text-center">
                      <p className="text-3xl font-black text-white mb-1">45%</p>
                      <p className="text-white font-bold text-sm">Female</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Metrics */}
              <div className="bg-white border-8 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] p-8">
                <h4 className="text-2xl font-black text-black mb-6 uppercase tracking-tight border-b-4 border-black pb-4">Additional Metrics</h4>
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-yellow-400 border-4 border-black p-6 text-center">
                    <p className="text-sm font-black text-black mb-2 uppercase">Students Mentored</p>
                    <p className="text-4xl font-black text-black">300+</p>
                  </div>
                  <div className="bg-teal-400 border-4 border-black p-6 text-center">
                    <p className="text-sm font-black text-black mb-2 uppercase">Brand Collabs</p>
                    <p className="text-4xl font-black text-black">14</p>
                  </div>
                  <div className="bg-orange-400 border-4 border-black p-6 text-center">
                    <p className="text-sm font-black text-black mb-2 uppercase">Number of States</p>
                    <p className="text-4xl font-black text-black">6</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Events;
