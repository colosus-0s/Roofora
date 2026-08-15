import { Send, Search, FileText, HardHat } from 'lucide-react';
import React from 'react';

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

export const processStepsData: ProcessStep[] = [
  {
    number: '01',
    title: 'Request',
    description: 'Tell us about your project online in 60 seconds or call.',
    icon: Send,
  },
  {
    number: '02',
    title: 'Inspect',
    description: 'We conduct a free on-site 17-point roof diagnostic.',
    icon: Search,
  },
  {
    number: '03',
    title: 'Plan',
    description: 'Receive a clear itemized quote with zero surprise fees.',
    icon: FileText,
  },
  {
    number: '04',
    title: 'Build',
    description: 'Flawless installation backed by lifetime warranties.',
    icon: HardHat,
  },
];
