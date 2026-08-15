import { Sparkles, Wrench, Shield, Zap, Droplets, Search } from 'lucide-react';
import React from 'react';

export interface ServiceData {
  id: string;
  slug: string;
  number: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  icon: React.ElementType;
  tag: string;
  featured: boolean;
  seoTitle: string;
  seoDescription: string;
  faqs?: { question: string; answer: string }[];
}

export const servicesData: ServiceData[] = [
  {
    id: 'roof-installation',
    slug: 'roof-installation',
    number: '01',
    title: 'Roof Installation',
    shortDescription: 'Complete new roof builds engineered with architectural shingles and standing seam metal.',
    fullDescription: 'Roofora delivers engineered residential roof installations designed for high wind and Texas hail endurance. We partner with top manufacturers to install high-performance architectural shingles and modern standing seam metal roofing systems.',
    image: '/services/installation.jpg',
    icon: Sparkles,
    tag: 'New Construction & Builds',
    featured: true,
    seoTitle: 'New Roof Installation in Austin, TX | Roofora Roofing',
    seoDescription: 'Expert new roof installation in Austin & Central Texas. High-performance architectural shingles and standing seam metal roofs built to last.',
    faqs: [
      {
        question: 'How long does a new roof installation take?',
        answer: 'Most standard residential roof installations in Austin take 1 to 2 days depending on square footage and roof pitch.',
      },
      {
        question: 'What materials do you install?',
        answer: 'We install premium Class-4 impact-resistant architectural shingles, standing seam metal roofs, and slate-style roofing systems.',
      },
    ],
  },
  {
    id: 'roof-repair',
    slug: 'roof-repair',
    number: '02',
    title: 'Roof Repair',
    shortDescription: 'Precision leak repairs, flashing fixes, and shingle restorations preventing costly interior damage.',
    fullDescription: 'From minor shingle lifts to critical leak penetrations, Roofora provides fast 24/7 diagnostic roof repairs. Our crew inspects flashing, valleys, pipe boots, and decking to restore watertight protection.',
    image: '/services/repair.jpg',
    icon: Wrench,
    tag: 'Fast Leak Diagnostics',
    featured: true,
    seoTitle: 'Roof Repair in Austin, TX | Roofora Roofing',
    seoDescription: 'Fast, reliable roof leak repair in Austin, TX. Expert flashing, shingle restoration, and emergency roof repairs with transparent pricing.',
    faqs: [
      {
        question: 'How fast can Roofora inspect a leaking roof?',
        answer: 'We offer same-day diagnostic response across Austin and surrounding Central Texas communities.',
      },
    ],
  },
  {
    id: 'roof-replacement',
    slug: 'roof-replacement',
    number: '03',
    title: 'Roof Replacement',
    shortDescription: 'Full tear-off and replacement using premium weather-resistant Texas roofing materials.',
    fullDescription: 'When your roof reaches the end of its lifespan, our comprehensive replacement service ensures complete synthetic underlayment installation, drip edge upgrades, and new high-grade shingles.',
    image: '/services/replacement.jpg',
    icon: Shield,
    tag: 'Complete Tear-off & Build',
    featured: true,
    seoTitle: 'Full Roof Replacement in Austin, TX | Roofora Roofing',
    seoDescription: 'Complete roof replacement services in Austin, TX. Full tear-off, high-grade underlayment, and Class-4 architectural shingles with lifetime warranty options.',
  },
  {
    id: 'storm-damage',
    slug: 'storm-damage',
    number: '04',
    title: 'Storm Damage',
    shortDescription: 'Emergency hail and wind damage restoration with complete insurance claim documentation support.',
    fullDescription: 'Texas hailstorms and severe winds require immediate emergency tarping and thorough forensic roof inspections. We provide detailed photo evidence reports to simplify your insurance claim process.',
    image: '/services/storm_damage.jpg',
    icon: Zap,
    tag: 'Emergency Restoration',
    featured: true,
    seoTitle: 'Storm & Hail Damage Roof Repair in Austin, TX | Roofora',
    seoDescription: 'Emergency storm & hail damage roof restoration in Austin, TX. Rapid tarping, full insurance claim documentation, and complete roof repair.',
  },
  {
    id: 'gutters-drainage',
    slug: 'gutters-drainage',
    number: '05',
    title: 'Gutters & Drainage',
    shortDescription: 'Seamless aluminum gutter installations, leaf guards, and custom downspout systems.',
    fullDescription: 'Protect your home foundation and fascia with custom seamless aluminum gutters. Designed to channel heavy rain away from your foundation and roof line effectively.',
    image: '/services/gutters.jpg',
    icon: Droplets,
    tag: 'Seamless Aluminum Systems',
    featured: true,
    seoTitle: 'Seamless Gutter Installation in Austin, TX | Roofora',
    seoDescription: 'Custom seamless aluminum gutter installation & leaf guard systems in Austin, TX. Protect your roof line and foundation from water runoff.',
  },
  {
    id: 'roof-inspection',
    slug: 'roof-inspection',
    number: '06',
    title: 'Roof Inspection',
    shortDescription: 'Comprehensive 17-point structural roof health assessments with detailed photo reporting.',
    fullDescription: 'Our 17-point structural inspection examines shingle granulate loss, attic ventilation, flashing integrity, and storm vulnerability, giving you full clarity before buying or selling.',
    image: '/services/inspection.jpg',
    icon: Search,
    tag: '17-Point Health Audit',
    featured: true,
    seoTitle: 'Free 17-Point Roof Inspection in Austin, TX | Roofora',
    seoDescription: 'Get a free 17-point structural roof health inspection in Austin, TX. Complete photo diagnostic report for homeowners & buyers.',
  },
];
