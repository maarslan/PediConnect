import { Content } from './content';

export interface Professional {
  id: string;
  name: string;
  title: string;
  credentials: string;
  specializations: string[];
  bio: string;
  imageUrl: string;
  email: string;
  socialLinks?: {
    twitter?: string;
    linkedin?: string;
    website?: string;
  };
  stats?: {
    totalContent: number;
    totalSubscribers: number;
    totalEarnings: number;
  };
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  role: 'parent' | 'professional';
  isPremium: boolean;
  subscriptionStatus?: {
    plan: 'monthly' | 'yearly';
    nextBilling: string;
    price: number;
  };
  savedContent: Content[];
  readingHistory: Content[];
}

export interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  createdAt: string;
  read: boolean;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  type: 'conference' | 'workshop' | 'qa';
  capacity: number;
  registeredUsers: number;
  price: number;
}