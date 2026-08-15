import { siteConfig } from '../config/site';
import { servicesData } from '../data/services';
import { locationsData } from '../data/locations';

export const generateSitemapXml = (): string => {
  const baseUrl = siteConfig.siteUrl;

  const staticUrls = [
    { loc: `${baseUrl}/`, priority: '1.0', changefreq: 'weekly' },
    { loc: `${baseUrl}/#services`, priority: '0.9', changefreq: 'weekly' },
    { loc: `${baseUrl}/#projects`, priority: '0.8', changefreq: 'weekly' },
    { loc: `${baseUrl}/#financing`, priority: '0.8', changefreq: 'monthly' },
    { loc: `${baseUrl}/#contact`, priority: '0.8', changefreq: 'monthly' },
  ];

  const serviceUrls = servicesData.map((service) => ({
    loc: `${baseUrl}/services/${service.slug}`,
    priority: '0.8',
    changefreq: 'monthly',
  }));

  const locationUrls = locationsData.map((location) => ({
    loc: `${baseUrl}/locations/${location.slug}`,
    priority: '0.8',
    changefreq: 'monthly',
  }));

  const allUrls = [...staticUrls, ...serviceUrls, ...locationUrls];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls
  .map(
    (url) => `  <url>
    <loc>${url.loc}</loc>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return xml;
};
