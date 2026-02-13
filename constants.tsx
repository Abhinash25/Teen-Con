
import React from 'react';
import { Event, EventStatus, Speaker, Stat } from './types';
import { Users, Landmark, Calendar, MessageSquare, BookOpen, Handshake } from 'lucide-react';

export const COLORS = {
  primary: '#7C3AED', // Royal Purple
  secondary: '#050505', // Black
  accent: '#DB2777', // Pink
  white: '#FFFFFF',
  softPink: '#F472B6'
};

export const IMPACT_STATS: Stat[] = [
  {
    label: 'Delegates',
    value: '600',
    suffix: '+',
    icon: Users,
    colorClass: 'text-blue-500',
    bgClass: 'bg-blue-50'
  },
  {
    label: 'Institutions',
    value: '40',
    suffix: '+',
    icon: Landmark,
    colorClass: 'text-purple-500',
    bgClass: 'bg-purple-50'
  },
  {
    label: 'Events Hosted',
    value: '5',
    suffix: '+',
    icon: Calendar,
    colorClass: 'text-pink-500',
    bgClass: 'bg-pink-50'
  },
  {
    label: 'Social Media Impressions',
    value: '300',
    suffix: 'K+',
    icon: MessageSquare,
    colorClass: 'text-yellow-600',
    bgClass: 'bg-yellow-50'
  },
  {
    label: 'Students Mentored',
    value: '300',
    suffix: '+',
    icon: BookOpen,
    colorClass: 'text-green-500',
    bgClass: 'bg-green-50'
  },
  {
    label: 'Brand Collaborations',
    value: '14',
    suffix: '+',
    icon: Handshake,
    colorClass: 'text-indigo-500',
    bgClass: 'bg-indigo-50'
  }
];

export const UPCOMING_EVENTS: Event[] = [
  {
    id: '1',
    title: 'TeenCon’26 MUN',
    description: 'The premier Model United Nations conference for youth, focusing on international diplomacy and global issues.',
    date: 'August 15, 2026',
    venue: 'Guwahati, Assam',
    image: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&q=80&w=800',
    category: 'Conference',
    status: EventStatus.UPCOMING,
    price: 1500,
    capacity: 300,
    registeredCount: 45
  },
  {
    id: '2',
    title: 'Global Reach Talk Show',
    description: 'Empowering conversations with global leaders and changemakers sharing their journey.',
    date: 'November 22, 2025',
    venue: 'Online & On-site',
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=800',
    category: 'Talk Show',
    status: EventStatus.UPCOMING,
    price: 500,
    capacity: 250,
    registeredCount: 120
  }
];

export const SPEAKERS: Speaker[] = [
  {
    name: 'Mr. Rakesh Das',
    title: 'State President (Assam)',
    organization: 'Bharatiya Janata Yuva Morcha',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400'
  },
  {
    name: 'Dr. Purnima Devi Barman',
    title: 'Wildlife Biologist',
    organization: 'UNEP 2022 Champions of the Earth',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400'
  },
  {
    name: 'Kaushik Khanikar',
    title: 'Economic Development Advisory',
    organization: 'EY Govt. Transformation',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400'
  }
];

export const PARTNERS = [
  { name: 'KFC', logo: 'https://upload.wikimedia.org/wikipedia/en/b/bf/KFC_logo.svg' },
  { name: 'Burger King', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/85/Burger_King_logo_%282021%29.svg' },
  { name: 'GeeksforGeeks', logo: 'https://media.geeksforgeeks.org/wp-content/cdn-uploads/gfg_200X200.png' },
  { name: 'LPU', logo: 'https://upload.wikimedia.org/wikipedia/en/e/e9/Lovely_Professional_University_logo.png' }
];
