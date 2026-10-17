const fs = require('fs');
const path = require('path');

const corePages = [
  { url: '/', priority: '1.0' },
  { url: '/services', priority: '0.9' },
  { url: '/service-areas', priority: '0.9' },
  { url: '/about', priority: '0.7' },
  { url: '/reviews', priority: '0.8' },
  { url: '/contact', priority: '0.8' },
  { url: '/request-an-estimate', priority: '0.9' },
  { url: '/privacy-policy', priority: '0.3' },
  { url: '/terms-and-conditions', priority: '0.3' },
  { url: '/sitemap', priority: '0.3' },
];

const serviceSlugs = [
  'electrical-troubleshooting',
  'electrical-panel-upgrades',
  'circuit-breaker-repair',
  'electrical-wiring',
  'outlet-switch-installation',
  'lighting-installation',
  'ceiling-fan-installation',
  'electrical-safety-inspection',
  'commercial-electrical',
  'renovation-electrical',
];

const locationSlugs = [
  'taylor-mi',
  'southgate-mi',
  'allen-park-mi',
  'dearborn-mi',
  'dearborn-heights-mi',
  'romulus-mi',
  'wyandotte-mi',
  'lincoln-park-mi',
  'trenton-mi',
  'detroit-mi',
];

const baseUrl = 'https://www.whippleelectricinc.com';
const lastmod = '2025-01-15';

let lines = [];
lines.push('<?xml version="1.0" encoding="UTF-8"?>');
lines.push('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">');

lines.push('  <!-- Core Pages (10) -->');
for (const p of corePages) {
  lines.push('  <url>');
  lines.push(`    <loc>${baseUrl}${p.url}</loc>`);
  lines.push(`    <lastmod>${lastmod}</lastmod>`);
  lines.push('    <changefreq>weekly</changefreq>');
  lines.push(`    <priority>${p.priority}</priority>`);
  lines.push('  </url>');
}

lines.push('  <!-- Service Pages (Main Location: Taylor, MI) (10) -->');
for (const s of serviceSlugs) {
  lines.push('  <url>');
  lines.push(`    <loc>${baseUrl}/${s}-taylor-mi</loc>`);
  lines.push(`    <lastmod>${lastmod}</lastmod>`);
  lines.push('    <changefreq>weekly</changefreq>');
  lines.push('    <priority>0.8</priority>');
  lines.push('  </url>');
}

lines.push('  <!-- Service Area Hub Pages (10) -->');
for (const l of locationSlugs) {
  lines.push('  <url>');
  lines.push(`    <loc>${baseUrl}/electrician-${l}</loc>`);
  lines.push(`    <lastmod>${lastmod}</lastmod>`);
  lines.push('    <changefreq>weekly</changefreq>');
  lines.push('    <priority>0.8</priority>');
  lines.push('  </url>');
}

lines.push('  <!-- Service-Location Combo Pages (90) -->');
for (const l of locationSlugs) {
  if (l === 'taylor-mi') continue;
  lines.push(`  <!-- ${l} (10 Services) -->`);
  for (const s of serviceSlugs) {
    lines.push('  <url>');
    lines.push(`    <loc>${baseUrl}/${s}-${l}</loc>`);
    lines.push(`    <lastmod>${lastmod}</lastmod>`);
    lines.push('    <changefreq>weekly</changefreq>');
    lines.push('    <priority>0.7</priority>');
    lines.push('  </url>');
  }
}

lines.push('</urlset>');
lines.push('');

const sitemapPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
fs.writeFileSync(sitemapPath, lines.join('\n'), 'utf8');
console.log('Successfully wrote public/sitemap.xml with 120 canonical URLs.');
