export interface TestimonialData {
  id: number;
  name: string;
  location: string;
  rating: number;
  quote: string;
  service: string;
  avatar: string;
}

export const testimonialsData: TestimonialData[] = [
  {
    id: 1,
    name: 'Michael & Sarah Jenkins',
    location: 'Austin, TX (West Lake Hills)',
    rating: 5,
    quote: 'Roofora transformed our entire roof after severe hail damage. Their crew was punctual, kept the job site spotless, and completed the full replacement in two days. Outstanding Texas craftsmanship!',
    service: 'Full Roof Replacement',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
  },
  {
    id: 2,
    name: 'David Reynolds',
    location: 'Round Rock, TX',
    rating: 5,
    quote: 'The itemized quote was completely transparent with zero surprise fees. They explained every detail and helped us navigate financing smoothly. I highly recommend Roofora!',
    service: 'Roof Repair & Restoration',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
  },
  {
    id: 3,
    name: 'Elena Martinez',
    location: 'Cedar Park, TX',
    rating: 5,
    quote: 'Extremely professional team! The 17-point diagnostic report gave us total confidence in what needed to be fixed. The new standing seam metal roof looks incredible.',
    service: 'Metal Roof Upgrade',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
  },
];
