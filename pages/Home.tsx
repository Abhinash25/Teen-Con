
import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import EventCard from '../components/EventCard';
import { UPCOMING_EVENTS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="bg-white">
      <Hero />

      {/* Partners & Sponsors Section - Neo-Brutalist */}
      <section className="py-20 md:py-24 bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50 border-y-8 border-black relative overflow-hidden">
        <div className="absolute top-20 right-0 w-64 h-64 bg-purple-600 opacity-10" />
        <div className="absolute bottom-20 left-0 w-48 h-48 bg-yellow-400 opacity-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-7xl font-black text-purple-900 mb-4 tracking-tight">
              Icons Who Believe in<br />TeenCon
            </h2>
            <div className="w-32 h-2 bg-purple-900 mx-auto border-2 border-purple-900" />
            <p className="text-xl md:text-2xl text-purple-800 font-bold mt-6 uppercase">
              Notable Personalities We Have Worked With
            </p>
            <p className="text-lg text-purple-700 font-semibold mt-2">
              through various initiatives
            </p>
          </motion.div>
        </div>

        {/* Partner Cards Infinite Scroll - Full Width */}
        <div className="relative w-full">
          <style jsx>{`
            @keyframes icons-scroll {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
            .animate-icons-scroll {
              animation: icons-scroll 13s linear infinite;
            }
          `}</style>

          <div className="overflow-hidden">
            <div className="flex w-fit animate-icons-scroll">
              {/* First set of partners */}
              {[
                { name: "Mr. Rakesh Das", title: "State President (Assam)", org: "Bharatya Janata Yuva Morcha", img: "/rakesh-das.jpg", gradient: "from-red-400 to-red-600" },
                { name: "Dr. Purnima Devi Barman", title: "Wildlife Biologist", org: "UNEP 2022 Champions of the Earth", img: "/purnima-barman.jpg", gradient: "from-green-400 to-teal-600" },
                { name: "Mr. Momshad Dinory", title: "Assistant Commissioner", org: "GST Assam", img: "/momshad-dinory.jpg", gradient: "from-blue-400 to-purple-600" },
                { name: "Kaushik Khanikar", title: "Economic Development Advisory", org: "EY Govt. Transformation", img: "/kaushik-khanikar.jpg", gradient: "from-yellow-400 to-orange-500" },
                { name: "Dr. Smritashree Baruah", title: "Assistant Commissioner", org: "Darrang Assam", img: "/smritashree-baruah.jpg", gradient: "from-pink-400 to-rose-500" },
                { name: "Mr. Mrinmoy Pathak", title: "Director and Founder", org: "YouthCove | Mrinmoy & Co.", img: "/mrinmoy-pathak.jpg", gradient: "from-indigo-400 to-blue-500" },
                { name: "Mr. Sarfraz Nawaz", title: "Advocate and Ex-Judicial Officer", org: "Guwahati High Court", img: "/sarfraz-nawaz.jpg", gradient: "from-cyan-400 to-teal-500" },
                { name: "Mrs. Madhusmita Phukan", title: "ACS 2019 Batch, Rank 41", org: "COO Avedon.ai", img: "/madhusmita-phukan.jpg", gradient: "from-purple-400 to-violet-600" },
                { name: "Dr. Mallika Bhattacharyya", title: "Associate Professor & HOD", org: "GMCH Gastroenterology", img: "/mallika-bhattacharyya.jpg", gradient: "from-emerald-400 to-green-600" }
              ].map((partner, idx) => (
                <div
                  key={`partner-1-${idx}`}
                  className="flex-shrink-0 w-64 bg-white overflow-hidden border-6 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mx-4 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all duration-200"
                >
                  <div className={`aspect-[4/3] bg-gradient-to-br ${partner.gradient} overflow-hidden`}>
                    <img
                      src={partner.img}
                      alt={partner.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-black text-purple-900 mb-2">{partner.name}</h3>
                    <p className="text-sm font-bold text-purple-700 mb-4">{partner.title}<br />{partner.org}</p>
                  </div>
                </div>
              ))}

              {/* Duplicate set for seamless loop */}
              {[
                { name: "Mr. Rakesh Das", title: "State President (Assam)", org: "Bharatya Janata Yuva Morcha", img: "/rakesh-das.jpg", gradient: "from-red-400 to-red-600" },
                { name: "Dr. Purnima Devi Barman", title: "Wildlife Biologist", org: "UNEP 2022 Champions of the Earth", img: "/purnima-barman.jpg", gradient: "from-green-400 to-teal-600" },
                { name: "Mr. Momshad Dinory", title: "Assistant Commissioner", org: "GST Assam", img: "/momshad-dinory.jpg", gradient: "from-blue-400 to-purple-600" },
                { name: "Kaushik Khanikar", title: "Economic Development Advisory", org: "EY Govt. Transformation", img: "/kaushik-khanikar.jpg", gradient: "from-yellow-400 to-orange-500" },
                { name: "Dr. Smritashree Baruah", title: "Assistant Commissioner", org: "Darrang Assam", img: "/smritashree-baruah.jpg", gradient: "from-pink-400 to-rose-500" },
                { name: "Mr. Mrinmoy Pathak", title: "Director and Founder", org: "YouthCove | Mrinmoy & Co.", img: "/mrinmoy-pathak.jpg", gradient: "from-indigo-400 to-blue-500" },
                { name: "Mr. Sarfraz Nawaz", title: "Advocate and Ex-Judicial Officer", org: "Guwahati High Court", img: "/sarfraz-nawaz.jpg", gradient: "from-cyan-400 to-teal-500" },
                { name: "Mrs. Madhusmita Phukan", title: "ACS 2019 Batch, Rank 41", org: "COO Avedon.ai", img: "/madhusmita-phukan.jpg", gradient: "from-purple-400 to-violet-600" },
                { name: "Dr. Mallika Bhattacharyya", title: "Associate Professor & HOD", org: "GMCH Gastroenterology", img: "/mallika-bhattacharyya.jpg", gradient: "from-emerald-400 to-green-600" }
              ].map((partner, idx) => (
                <div
                  key={`partner-2-${idx}`}
                  className="flex-shrink-0 w-64 bg-white overflow-hidden border-6 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mx-4 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all duration-200"
                >
                  <div className={`aspect-[4/3] bg-gradient-to-br ${partner.gradient} overflow-hidden`}>
                    <img
                      src={partner.img}
                      alt={partner.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-black text-purple-900 mb-2">{partner.name}</h3>
                    <p className="text-sm font-bold text-purple-700 mb-4">{partner.title}<br />{partner.org}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Neo-Brutalist */}
      <section className="py-20 md:py-24 bg-white relative overflow-hidden border-y-8 border-black">
        {/* Background accent blocks */}
        <div className="absolute top-20 right-0 w-64 h-64 bg-yellow-400 opacity-20" />
        <div className="absolute bottom-20 left-0 w-48 h-48 bg-purple-600 opacity-20" />

        {/* Youth Illustration Background */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[400px] opacity-15 pointer-events-none hidden lg:block">
          <img
            src="/youth-illustration.jpg"
            alt="Youth activities illustration"
            className="w-full h-full object-contain"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-7xl font-black text-black mb-4 tracking-tight">
              About TeenCon
            </h2>
            <div className="w-32 h-2 bg-black mx-auto border-2 border-black" />
            <p className="text-xl md:text-2xl text-black font-bold mt-6">
              Bringing Youth Together to Learn & Grow
            </p>
          </motion.div>

          <div className="space-y-8">
            {/* Top Row - Image and Stats */}
            <div className="grid md:grid-cols-5 gap-8 lg:gap-12 items-start">
              {/* Left Side - Photo */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="md:col-span-3"
              >
                {/* Conference Photo */}
                <div className="border-8 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] overflow-hidden max-h-[32rem]">
                  <img
                    src="/conference-hall.jpg"
                    alt="TeenCon conference with delegates"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              {/* Right Side - Stats Grid */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-4 md:col-span-2"
              >
                {/* Stat Card 1 - 600+ Delegates */}
                <div className="bg-purple-500 border-6 border-black p-10 text-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-5xl font-black">600+</span>
                    <span className="text-4xl">👥</span>
                  </div>
                  <p className="text-sm font-black uppercase tracking-wide">Delegates</p>
                </div>

                {/* Stat Card 2 - 40+ Institutions */}
                <div className="bg-purple-600 border-6 border-black p-10 text-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-5xl font-black">40+</span>
                    <span className="text-4xl">🎓</span>
                  </div>
                  <p className="text-sm font-black uppercase tracking-wide">Institutions</p>
                </div>

                {/* Stat Card 3 - 5+ States */}
                <div className="bg-blue-400 border-6 border-black p-10 text-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-5xl font-black">5+</span>
                    <span className="text-4xl">🗺️</span>
                  </div>
                  <p className="text-sm font-black uppercase tracking-wide">States</p>
                </div>

                {/* Stat Card 4 - 300K+ Social Media */}
                <div className="bg-teal-400 border-6 border-black p-10 text-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-5xl font-black">300K+</span>
                    <span className="text-4xl">✨</span>
                  </div>
                  <p className="text-xs font-black uppercase tracking-wide">Social Media</p>
                </div>

                {/* Stat Card 5 - 800+ Participants */}
                <div className="bg-orange-400 border-6 border-black p-10 text-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-5xl font-black">800+</span>
                    <span className="text-4xl">🎤</span>
                  </div>
                  <p className="text-sm font-black uppercase tracking-wide">Participants</p>
                </div>

                {/* Stat Card 6 - 300+ Students Mentored */}
                <div className="bg-pink-500 border-6 border-black p-10 text-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-5xl font-black">300+</span>
                    <span className="text-4xl">📚</span>
                  </div>
                  <p className="text-xs font-black uppercase tracking-wide">Students</p>
                </div>
              </motion.div>
            </div>

            {/* About Text - Full Width */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="bg-white border-8 border-black p-8 md:p-12 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] text-center">
                <h3 className="text-3xl md:text-4xl font-black text-black mb-6 uppercase tracking-tight">
                  About TeenCon
                </h3>
                <div className="space-y-4 text-black font-bold leading-relaxed max-w-4xl mx-auto">
                  <p>
                    TeenCon is an organization, driven by youth, committed to fostering large-scale empowerment among young people across India. Since 2024, we have been hosting multidisciplinary panel conferences, talk shows, and Model United Nations (MUN) events across university campuses in India.
                  </p>
                  <p>
                    We create events that empower youth both physically and mentally, providing real-world exposure, industry connections, and enriching experiences.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Brand Partners & Sponsors Section - Neo-Brutalist */}
      <section className="py-20 md:py-24 bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 border-y-8 border-black relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-20 h-20 rotate-12">
          <span className="text-6xl">⭐</span>
        </div>
        <div className="absolute top-20 right-20 w-32 h-32 bg-blue-300 opacity-30 rounded-full" />
        <div className="absolute bottom-10 right-10 w-24 h-24 rotate-45">
          <span className="text-5xl">✨</span>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-7xl font-black text-purple-900 mb-4 tracking-tight">
              Brand Collabs & Sponsors
            </h2>
            <p className="text-lg md:text-xl text-purple-800 font-semibold mt-6 max-w-4xl mx-auto leading-relaxed">
              TeenCon has collaborated with numerous brands and sponsors in recent years, cultivating strong professional relationships and connections that are leveraged in various ways to empower youth. This initiative provides a platform dedicated to enhancing the overall experience of participants.
            </p>
          </motion.div>
        </div>

        {/* Infinite Scroll Container */}
        <div className="relative w-full overflow-hidden">
          <style jsx>{`
            @keyframes brand-scroll {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
            .animate-brand-scroll {
              animation: brand-scroll 20s linear infinite;
            }
          `}</style>

          <div className="flex w-fit animate-brand-scroll">
            {/* First Set of Brands */}
            {[
              { name: "Partner", img: "/brands/brand-01.png" },
              { name: "Partner", img: "/brands/brand-02.png" },
              { name: "Partner", img: "/brands/brand-03.png" },
              { name: "Partner", img: "/brands/brand-04.png" },
              { name: "Partner", img: "/brands/brand-05.png" },
              { name: "Partner", img: "/brands/brand-06.png" },
              { name: "Partner", img: "/brands/brand-07.png" },
              { name: "Partner", img: "/brands/brand-08.png" },
              { name: "Partner", img: "/brands/brand-09.png" },
              { name: "Partner", img: "/brands/brand-10.png" },
              { name: "Partner", img: "/brands/brand-11.png" },
              { name: "Partner", img: "/brands/brand-12.png" },
              { name: "Partner", img: "/brands/brand-13.png" },
              { name: "Partner", img: "/brands/brand-14.png" },
            ].map((brand, idx) => (
              <div
                key={`brand-set1-${idx}`}
                className="w-64 flex-shrink-0 mx-4"
              >
                <div className="bg-white border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all duration-200 p-8 flex items-center justify-center aspect-[4/3]">
                  <div className="w-full h-full flex items-center justify-center">
                    <img
                      src={brand.img}
                      alt={brand.name}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                </div>
              </div>
            ))}

            {/* Duplicate Set for Seamless Loop */}
            {[
              { name: "Partner", img: "/brands/brand-01.png" },
              { name: "Partner", img: "/brands/brand-02.png" },
              { name: "Partner", img: "/brands/brand-03.png" },
              { name: "Partner", img: "/brands/brand-04.png" },
              { name: "Partner", img: "/brands/brand-05.png" },
              { name: "Partner", img: "/brands/brand-06.png" },
              { name: "Partner", img: "/brands/brand-07.png" },
              { name: "Partner", img: "/brands/brand-08.png" },
              { name: "Partner", img: "/brands/brand-09.png" },
              { name: "Partner", img: "/brands/brand-10.png" },
              { name: "Partner", img: "/brands/brand-11.png" },
              { name: "Partner", img: "/brands/brand-12.png" },
              { name: "Partner", img: "/brands/brand-13.png" },
              { name: "Partner", img: "/brands/brand-14.png" },
            ].map((brand, idx) => (
              <div
                key={`brand-set2-${idx}`}
                className="w-64 flex-shrink-0 mx-4"
              >
                <div className="bg-white border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all duration-200 p-8 flex items-center justify-center aspect-[4/3]">
                  <div className="w-full h-full flex items-center justify-center">
                    <img
                      src={brand.img}
                      alt={brand.name}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section - Neo-Brutalist */}
      <section className="py-20 md:py-24 bg-white border-y-8 border-black relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#000 2px, transparent 2px)', backgroundSize: '24px 24px' }}></div>

        {/* Decorative Elements - Neo-Brutalist */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-purple-400 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] rotate-12" />
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-yellow-400 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] -rotate-6" />
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-24 h-24 bg-blue-400 border-4 border-black rounded-full shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -ml-12" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-7xl font-black text-black mb-4 tracking-tight uppercase">
              Our Exciting Events
            </h2>
            <div className="w-32 h-2 bg-black mx-auto border-2 border-black" />
            <p className="text-xl md:text-2xl text-black font-bold mt-6 max-w-2xl mx-auto">
              Explore Our Conferences, Talks, Debates and More!
            </p>
          </motion.div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {UPCOMING_EVENTS.map((event, idx) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <EventCard event={event} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
