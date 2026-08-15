export interface SiteConfig {
  name: string;
  legalName: string;
  tagline: string;
  description: string;
  siteUrl: string;
  contact: {
    phone: string;
    phoneFormatted: string;
    phoneTel: string;
    email: string;
    address: {
      street: string;
      city: string;
      state: string;
      zip: string;
      country: string;
      fullAddress: string;
    };
    hours: string;
  };
  social: {
    facebook: string;
    instagram: string;
    linkedin: string;
    youtube: string;
  };
  stats: {
    googleRating: number;
    reviewCount: number;
    yearsExperience: number;
    roofsCompleted: number;
    warranty: string;
  };
  license: {
    number: string;
    status: string;
  };
  serviceAreas: string[];
  navigation: {
    label: string;
    href: string;
    children?: { label: string; href: string }[];
  }[];
  defaultSeo: {
    title: string;
    description: string;
    ogImage: string;
    twitterCard: string;
  };
}

export const siteConfig: SiteConfig = {
  name: 'Roofora',
  legalName: 'Roofora Roofing Solutions',
  tagline: 'Built to Protect What Matters',
  description: 'Dependable residential roofing installation, repair, replacement, and storm damage restoration across Austin, TX and Central Texas.',
  siteUrl: import.meta.env.VITE_SITE_URL || 'https://roofora.com',
  
  contact: {
    phone: '(512) 555-0198',
    phoneFormatted: '(512) 555-0198',
    phoneTel: '5125550198',
    email: 'info@roofora.com',
    address: {
      street: '100 Congress Ave',
      city: 'Austin',
      state: 'TX',
      zip: '78701',
      country: 'US',
      fullAddress: 'Austin, TX 78701',
    },
    hours: 'Mon - Sat: 7:00am - 7:00pm',
  },

  social: {
    facebook: 'https://facebook.com/rooforaroofing',
    instagram: 'https://instagram.com/rooforaroofing',
    linkedin: 'https://linkedin.com/company/rooforaroofing',
    youtube: 'https://youtube.com/@rooforaroofing',
  },

  stats: {
    googleRating: 4.9,
    reviewCount: 240,
    yearsExperience: 15,
    roofsCompleted: 1200,
    warranty: 'Workmanship Warranty',
  },

  license: {
    number: 'TX-ROOF-58192',
    status: 'Licensed & Insured',
  },

  serviceAreas: [
    'Austin',
    'Round Rock',
    'Cedar Park',
    'Pflugerville',
    'Leander',
    'Georgetown',
    'Buda',
    'Kyle',
  ],

  navigation: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '#about' },
    {
      label: 'Services',
      href: '#services',
      children: [
        { label: 'Roof Installation', href: '#services' },
        { label: 'Roof Repair', href: '#services' },
        { label: 'Roof Replacement', href: '#services' },
        { label: 'Storm Damage', href: '#services' },
        { label: 'Gutters & Drainage', href: '#services' },
        { label: 'Roof Inspection', href: '#services' },
      ],
    },
    { label: 'Projects', href: '#projects' },
    { label: 'Financing', href: '#financing' },
    {
      label: 'Resources',
      href: '#resources',
      children: [
        { label: 'Roofing Tips & Blog', href: '#resources' },
        { label: 'Our Process', href: '#process' },
        { label: 'Warranty Coverage', href: '#warranty' },
        { label: 'FAQ', href: '#faq' },
      ],
    },
    { label: 'Contact', href: '#contact' },
  ],

  defaultSeo: {
    title: 'Roofora Roofing | Austin Roofing Company',
    description: 'Professional residential roofing installation, repair, replacement & storm restoration services in Austin, TX and surrounding Central Texas areas.',
    ogImage: '/hero_roofora_bg.jpg',
    twitterCard: 'summary_large_image',
  },
};
