import { ShieldCheck, Award, MessageSquareCheck, Clock, Shield } from 'lucide-react';
import React from 'react';

export interface WhyUsPoint {
  number: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

export const whyUsData: WhyUsPoint[] = [
  {
    number: '01',
    title: 'Premium Materials',
    description: 'Top-rated roofing products built to withstand severe Texas weather.',
    icon: ShieldCheck,
  },
  {
    number: '02',
    title: 'Expert Installation',
    description: 'Skilled crews with meticulous attention to detail on every roof ridge.',
    icon: Award,
  },
  {
    number: '03',
    title: 'Clear Communication',
    description: 'We keep homeowners fully informed with transparent updates throughout.',
    icon: MessageSquareCheck,
  },
  {
    number: '04',
    title: 'On-Time, Every Time',
    description: 'We respect your time and property, completing installations on schedule.',
    icon: Clock,
  },
  {
    number: '05',
    title: 'Strong Warranties',
    description: 'We back all workmanship with bulletproof manufacturer & labor warranties.',
    icon: Shield,
  },
];
