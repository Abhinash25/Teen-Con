
export enum EventStatus {
  UPCOMING = 'UPCOMING',
  ONGOING = 'ONGOING',
  PAST = 'PAST'
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  venue: string;
  image: string;
  category: string;
  status: EventStatus;
  price: number;
  capacity: number;
  registeredCount: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'user' | 'admin';
  registrations: string[];
}

export interface Speaker {
  name: string;
  title: string;
  organization: string;
  image: string;
  description?: string;
}

export interface Stat {
  label: string;
  value: string;
  suffix: string;
  icon: any; // Using any for Lucide component type
  colorClass: string;
  bgClass: string;
}
