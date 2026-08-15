export interface LocationData {
  slug: string;
  name: string;
  state: string;
  distance: string;
  response: string;
  status: string;
  heroTitle: string;
  heroDescription: string;
  description: string;
  image: string;
  seoTitle: string;
  seoDescription: string;
  faqs?: { question: string; answer: string }[];
}

export const locationsData: LocationData[] = [
  {
    slug: 'austin',
    name: 'Austin',
    state: 'TX',
    distance: 'HQ Hub',
    response: '< 30 Min',
    status: 'Primary Operational Base',
    heroTitle: 'Roofing Services in Austin, TX',
    heroDescription: 'Dependable residential roofing installation, repair, and replacement across Central Austin, West Lake Hills, and Tarrytown.',
    description: 'Roofora delivers top-rated Texas roofing craftsmanship in Austin, TX. From storm hail damage restoration to full standing seam metal installations.',
    image: '/projects/westlake_after.jpg',
    seoTitle: 'Roofing Company in Austin, TX | Roofora Roofing',
    seoDescription: 'Top-rated roofing company in Austin, TX. Roof repair, replacement, storm restoration & free 17-point roof inspections in Central Texas.',
    faqs: [
      {
        question: 'Does Roofora offer emergency roof repair in Austin?',
        answer: 'Yes, we provide same-day emergency roof diagnostic response across Austin and Travis County.',
      },
    ],
  },
  {
    slug: 'round-rock',
    name: 'Round Rock',
    state: 'TX',
    distance: '15 Miles North',
    response: '< 45 Min',
    status: 'Active Field Crews',
    heroTitle: 'Roofing Services in Round Rock, TX',
    heroDescription: 'Licensed residential roofing repairs, storm damage restoration, and gutter installations in Round Rock, TX.',
    description: 'Roofora serves Round Rock homeowners with Class-4 impact-resistant shingle installations and transparent pricing.',
    image: '/projects/roundrock_after.jpg',
    seoTitle: 'Roofing Company in Round Rock, TX | Roofora Roofing',
    seoDescription: 'Licensed roofing contractor in Round Rock, TX. Expert roof repair, shingle replacement, and storm restoration.',
  },
  {
    slug: 'cedar-park',
    name: 'Cedar Park',
    state: 'TX',
    distance: '18 Miles NW',
    response: '< 45 Min',
    status: 'Active Field Crews',
    heroTitle: 'Roofing Services in Cedar Park, TX',
    heroDescription: 'Quality roof replacements, leaks repair, and standing seam metal upgrades in Cedar Park, TX.',
    description: 'Trusted Cedar Park roofing specialists delivering bulletproof labor warranties and fast online estimates.',
    image: '/projects/cedarpark_after.jpg',
    seoTitle: 'Roofing Company in Cedar Park, TX | Roofora Roofing',
    seoDescription: 'Trusted roofing contractor in Cedar Park, TX. Quality shingle and metal roof replacements with lifetime warranties.',
  },
  {
    slug: 'pflugerville',
    name: 'Pflugerville',
    state: 'TX',
    distance: '14 Miles NE',
    response: '< 45 Min',
    status: 'Active Field Crews',
    heroTitle: 'Roofing Services in Pflugerville, TX',
    heroDescription: 'Reliable roof repair and storm restoration services across Pflugerville, TX.',
    description: 'Protecting Pflugerville homes with premium weather-resistant roofing materials and clear upfront estimates.',
    image: '/services/installation.jpg',
    seoTitle: 'Roofing Company in Pflugerville, TX | Roofora Roofing',
    seoDescription: 'Reliable residential roofing services in Pflugerville, TX. Free estimates, roof repair, and full replacement.',
  },
  {
    slug: 'leander',
    name: 'Leander',
    state: 'TX',
    distance: '22 Miles NW',
    response: '< 60 Min',
    status: 'Daily Coverage Zone',
    heroTitle: 'Roofing Services in Leander, TX',
    heroDescription: 'Residential roof replacements, gutter installations, and inspections in Leander, TX.',
    description: 'Serving the rapidly growing Leander community with dependable roofing solutions built to last.',
    image: '/services/replacement.jpg',
    seoTitle: 'Roofing Company in Leander, TX | Roofora Roofing',
    seoDescription: 'Residential roofing contractor in Leander, TX. New roof installation, storm repair, and free inspections.',
  },
  {
    slug: 'georgetown',
    name: 'Georgetown',
    state: 'TX',
    distance: '26 Miles North',
    response: '< 60 Min',
    status: 'Daily Coverage Zone',
    heroTitle: 'Roofing Services in Georgetown, TX',
    heroDescription: 'Expert shingle repair, metal roof upgrades, and storm damage restoration in Georgetown, TX.',
    description: 'Dedicated roofing craftsmen providing transparent quotes and high-grade materials in Georgetown.',
    image: '/projects/roundrock_after.jpg',
    seoTitle: 'Roofing Company in Georgetown, TX | Roofora Roofing',
    seoDescription: 'Expert roofing services in Georgetown, TX. Roof replacement, leak repair, and storm damage support.',
  },
  {
    slug: 'buda',
    name: 'Buda',
    state: 'TX',
    distance: '15 Miles South',
    response: '< 45 Min',
    status: 'Daily Coverage Zone',
    heroTitle: 'Roofing Services in Buda, TX',
    heroDescription: 'Full roofing repair, maintenance, and replacement services in Buda, TX.',
    description: 'Fast local response and quality Texas roofing solutions for Buda homeowners.',
    image: '/services/repair.jpg',
    seoTitle: 'Roofing Company in Buda, TX | Roofora Roofing',
    seoDescription: 'Local residential roofing contractor in Buda, TX. Fast diagnostic inspections and full roof replacements.',
  },
  {
    slug: 'kyle',
    name: 'Kyle',
    state: 'TX',
    distance: '21 Miles South',
    response: '< 60 Min',
    status: 'Daily Coverage Zone',
    heroTitle: 'Roofing Services in Kyle, TX',
    heroDescription: 'Comprehensive roof replacements, leaks repair, and storm restoration in Kyle, TX.',
    description: 'Quality roofing work backed by strong warranties and easy online financing in Kyle.',
    image: '/projects/cedarpark_after.jpg',
    seoTitle: 'Roofing Company in Kyle, TX | Roofora Roofing',
    seoDescription: 'Quality residential roofing services in Kyle, TX. Roof repair, replacement, and storm restoration.',
  },
];
