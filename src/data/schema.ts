import { business } from '@/data/business';
import { reviews } from '@/data/reviews';

const CANONICAL_URL = 'https://www.whippleelectricinc.com';

export function getLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Electrician',
    '@id': `${CANONICAL_URL}/#electrician`,
    name: business.name,
    legalName: business.name,
    telephone: business.phone,
    url: business.website,
    image: `${CANONICAL_URL}/favicon.svg`,
    logo: `${CANONICAL_URL}/favicon.svg`,
    priceRange: '$$',
    description:
      'Licensed Michigan electrical contractor providing residential and commercial electrical repair, 200A panel upgrades, rewiring, and emergency dispatch across Taylor and Metro Detroit.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: business.street,
      addressLocality: business.city,
      addressRegion: business.state,
      postalCode: '48180',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '42.2409',
      longitude: '-83.2699',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '00:00',
        closes: '23:59',
      },
    ],
    areaServed: [
      { '@type': 'City', name: 'Taylor, MI', postalCode: '48180' },
      { '@type': 'City', name: 'Southgate, MI' },
      { '@type': 'City', name: 'Allen Park, MI' },
      { '@type': 'City', name: 'Dearborn, MI' },
      { '@type': 'City', name: 'Dearborn Heights, MI' },
      { '@type': 'City', name: 'Romulus, MI' },
      { '@type': 'City', name: 'Wyandotte, MI' },
      { '@type': 'City', name: 'Lincoln Park, MI' },
      { '@type': 'City', name: 'Trenton, MI' },
      { '@type': 'City', name: 'Detroit, MI' },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: business.rating.toString(),
      reviewCount: business.reviewCount.toString(),
      bestRating: '5',
      worstRating: '1',
    },
    founder: {
      '@type': 'Person',
      name: 'Jim Whipple',
      jobTitle: 'Master Electrician & Owner',
    },
    review: reviews.slice(0, 5).map((r) => ({
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: r.author,
      },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: r.rating.toString(),
      },
      reviewBody: r.text,
    })),
    openingHours: 'Mo-Su 00:00-24:00',
    sameAs: [business.social.facebook, business.googleMapsLink],
  };
}

export function getServiceSchema(serviceName: string, description: string, slug: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceName,
    description: description,
    serviceType: serviceName,
    url: `${CANONICAL_URL}/${slug}`,
    provider: {
      '@type': 'Electrician',
      '@id': `${CANONICAL_URL}/#electrician`,
      name: business.name,
      telephone: business.phone,
      url: business.website,
      address: {
        '@type': 'PostalAddress',
        streetAddress: business.street,
        addressLocality: business.city,
        addressRegion: business.state,
        postalCode: '48180',
        addressCountry: 'US',
      },
    },
    areaServed: {
      '@type': 'City',
      name: 'Taylor, MI',
    },
  };
}

export function getServiceLocationSchema(serviceName: string, locationName: string, description: string, slug: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${serviceName} in ${locationName}`,
    description: description,
    serviceType: serviceName,
    url: `${CANONICAL_URL}/${slug}`,
    provider: {
      '@type': 'Electrician',
      '@id': `${CANONICAL_URL}/#electrician`,
      name: business.name,
      telephone: business.phone,
      url: business.website,
      address: {
        '@type': 'PostalAddress',
        streetAddress: business.street,
        addressLocality: business.city,
        addressRegion: business.state,
        postalCode: '48180',
        addressCountry: 'US',
      },
    },
    areaServed: {
      '@type': 'City',
      name: locationName,
    },
  };
}

export function getFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
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
  };
}

export function getBreadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: (index + 1).toString(),
      name: item.name,
      item: `${CANONICAL_URL}${item.path.startsWith('/') ? item.path : '/' + item.path}`,
    })),
  };
}
