
import React from 'react';
import { motion } from 'framer-motion';
import { Event } from '../types';

interface EventCardProps {
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  // Button color based on event type
  const getButtonColor = () => {
    if (event.title.includes("TeenCon'24")) return 'bg-purple-500';
    if (event.title.includes("TeenCon'25")) return 'bg-orange-400';
    if (event.title.includes("Global Reach")) return 'bg-blue-500';
    if (event.title.includes("Debates")) return 'bg-yellow-400';
    return 'bg-purple-500';
  };
  //iufiufiufiu

  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="bg-white border-6 border-black overflow-hidden shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all duration-200"
    >
      <div className="relative aspect-[16/11] overflow-hidden border-b-6 border-black">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-black text-black mb-3 leading-tight uppercase tracking-tight">
          {event.title}
        </h3>

        <p className="text-sm text-black font-bold mb-6 line-clamp-2">
          {event.description || "Join us for an exciting event that brings together young minds to learn, grow, and make a difference."}
        </p>

        <button className={`w-full px-4 py-3 ${getButtonColor()} text-black font-black text-xs uppercase tracking-widest border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all`}>
          View Details
        </button>
      </div>
    </motion.div>
  );
};

export default EventCard;
