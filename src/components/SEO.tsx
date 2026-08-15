import React, { useEffect } from 'react';
import { siteConfig } from '../config/site';

export interface SEOProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  noIndex?: boolean;
  breadcrumbs?: { name: string; item: string }[];
  faqs?: { question: string; answer: string }[];
  serviceName?: string;
  locationName?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title = siteConfig.defaultSeo.title,
  description = siteConfig.defaultSeo.description,
  canonicalUrl = siteConfig.siteUrl,
  ogImage = siteConfig.defaultSeo.ogImage,
  ogType = 'website',
  noIndex = false,
  breadcrumbs,
  faqs,
  serviceName,
  locationName,
}) => {
  const fullTitle = title.includes(siteConfig.name) ? title : `${title} | ${siteConfig.name}`;
  const absoluteOgImage = ogImage.startsWith('http') ? ogImage : `${siteConfig.siteUrl}${ogImage}`;

  useEffect(() => {
    // 1. Document Title
    document.title = fullTitle;

    // Helper to set meta tags
    const setMetaTag = (selector: string, attr: string, value: string) => {
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement('meta');
        if (selector.startsWith('meta[name=')) {
          element.setAttribute('name', selector.replace('meta[name="', '').replace('"]', ''));
        } else if (selector.startsWith('meta[property=')) {
          element.setAttribute('property', selector.replace('meta[property="', '').replace('"]', ''));
        }
        document.head.appendChild(element);
      }
      element.setAttribute(attr, value);
    };

    // 2. Meta Description & Robots
    setMetaTag('meta[name="description"]', 'content', description);
    setMetaTag('meta[name="robots"]', 'content', noIndex ? 'noindex, nofollow' : 'index, follow');

    // 3. OpenGraph Tags
    setMetaTag('meta[property="og:title"]', 'content', fullTitle);
    setMetaTag('meta[property="og:description"]', 'content', description);
    setMetaTag('meta[property="og:url"]', 'content', canonicalUrl);
    setMetaTag('meta[property="og:image"]', 'content', absoluteOgImage);
    setMetaTag('meta[property="og:type"]', 'content', ogType);
    setMetaTag('meta[property="og:site_name"]', 'content', siteConfig.name);

    // 4. Twitter Tags
    setMetaTag('meta[name="twitter:card"]', 'content', siteConfig.defaultSeo.twitterCard);
    setMetaTag('meta[name="twitter:title"]', 'content', fullTitle);
    setMetaTag('meta[name="twitter:description"]', 'content', description);
    setMetaTag('meta[name="twitter:image"]', 'content', absoluteOgImage);

    // 5. Canonical Link
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

  }, [fullTitle, description, canonicalUrl, absoluteOgImage, ogType, noIndex]);

  // Schema.org Structured Data
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'RoofingContractor',
    '@id': `${siteConfig.siteUrl}/#organization`,
    name: siteConfig.legalName,
    alternateName: siteConfig.name,
    url: siteConfig.siteUrl,
    logo: `${siteConfig.siteUrl}/hero_roofora_bg.jpg`,
    image: absoluteOgImage,
    description: siteConfig.description,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.contact.address.street,
      addressLocality: siteConfig.contact.address.city,
      addressRegion: siteConfig.contact.address.state,
      postalCode: siteConfig.contact.address.zip,
      addressCountry: siteConfig.contact.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '30.2672',
      longitude: '-97.7431',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '07:00',
        closes: '19:00',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: siteConfig.stats.googleRating.toString(),
      reviewCount: siteConfig.stats.reviewCount.toString(),
      bestRating: '5',
      worstRating: '1',
    },
    areaServed: siteConfig.serviceAreas.map((city) => ({
      '@type': 'City',
      name: city,
      containedInPlace: { '@type': 'State', name: 'Texas' },
    })),
  };

  const breadcrumbSchema = breadcrumbs
    ? {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((b, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: b.name,
          item: b.item.startsWith('http') ? b.item : `${siteConfig.siteUrl}${b.item}`,
        })),
      }
    : null;

  const faqSchema = faqs && faqs.length > 0
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      }
    : null;

  const serviceSchema = serviceName
    ? {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: serviceName,
        provider: {
          '@type': 'RoofingContractor',
          name: siteConfig.legalName,
        },
        areaServed: locationName || 'Austin, TX',
        description: description,
      }
    : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      {breadcrumbSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      )}
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      {serviceSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
      )}
    </>
  );
};
