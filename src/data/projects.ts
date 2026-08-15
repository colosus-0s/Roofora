export interface ProjectData {
  id: string;
  slug: string;
  number: string;
  title: string;
  location: string;
  beforeImage: string;
  afterImage: string;
  tag: string;
  href: string;
  description: string;
  featured: boolean;
  seoTitle: string;
  seoDescription: string;
}

export const projectsData: ProjectData[] = [
  {
    id: 'west-lake-hills',
    slug: 'west-lake-hills-roof-replacement',
    number: '01',
    title: 'Roof Replacement',
    location: 'West Lake Hills, TX',
    beforeImage: '/projects/westlake_before.jpg',
    afterImage: '/projects/westlake_after.jpg',
    tag: 'Full Shingle Replacement',
    href: '#projects',
    description: 'Complete tear-off and installation of high-performance architectural shingles with custom flashing in West Lake Hills.',
    featured: true,
    seoTitle: 'West Lake Hills Roof Replacement Project | Roofora',
    seoDescription: 'Case study of architectural shingle roof replacement completed by Roofora in West Lake Hills, TX.',
  },
  {
    id: 'round-rock',
    slug: 'round-rock-hail-restoration',
    number: '02',
    title: 'Storm Restoration',
    location: 'Round Rock, TX',
    beforeImage: '/projects/roundrock_before.jpg',
    afterImage: '/projects/roundrock_after.jpg',
    tag: 'Hail Damage Repair',
    href: '#projects',
    description: 'Emergency hail damage repair and complete roof restoration following severe Central Texas weather in Round Rock.',
    featured: true,
    seoTitle: 'Round Rock Storm Damage Restoration Project | Roofora',
    seoDescription: 'Case study of hail damage repair & insurance restoration completed by Roofora in Round Rock, TX.',
  },
  {
    id: 'cedar-park',
    slug: 'cedar-park-metal-roof-conversion',
    number: '03',
    title: 'Full Exterior Upgrade',
    location: 'Cedar Park, TX',
    beforeImage: '/projects/cedarpark_before.jpg',
    afterImage: '/projects/cedarpark_after.jpg',
    tag: 'Metal Roof Conversion',
    href: '#projects',
    description: 'Conversion from old asphalt shingles to sleek standing seam metal roofing with integrated seamless gutters in Cedar Park.',
    featured: true,
    seoTitle: 'Cedar Park Metal Roof Conversion Project | Roofora',
    seoDescription: 'Case study of standing seam metal roof installation completed by Roofora in Cedar Park, TX.',
  },
];
