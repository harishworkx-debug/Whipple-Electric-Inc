import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  structuredData?: object;
  noindex?: boolean;
}

function setMeta(name: string, content: string, attr: 'name' | 'property' = 'name') {
  let el = document.head.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setLink(rel: string, href: string) {
  let el = document.head.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

function removeLink(rel: string) {
  const el = document.head.querySelector(`link[rel="${rel}"]`);
  if (el) el.remove();
}

function setJsonLd(id: string, data: object) {
  let el = document.getElementById(id) as HTMLScriptElement | null;
  if (!el) {
    el = document.createElement('script');
    el.id = id;
    el.setAttribute('type', 'application/ld+json');
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

export const SITE_URL = 'https://www.whippleelectricinc.com';

export default function SEO({ title, description, canonical, ogImage, structuredData, noindex }: SEOProps) {
  useEffect(() => {
    document.title = title;
    setMeta('description', description);

    // Robots directive & Canonical
    if (noindex) {
      setMeta('robots', 'noindex, nofollow');
      removeLink('canonical');
    } else {
      setMeta('robots', 'index, follow');
      const canonicalUrl = canonical
        ? canonical.startsWith('http')
          ? canonical
          : `${SITE_URL}${canonical.startsWith('/') ? canonical : '/' + canonical}`
        : SITE_URL;
      setLink('canonical', canonicalUrl);

      setMeta('og:url', canonicalUrl, 'property');
    }

    setMeta('og:title', title, 'property');
    setMeta('og:description', description, 'property');
    setMeta('og:type', 'website', 'property');
    if (ogImage) setMeta('og:image', ogImage, 'property');

    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', title);
    setMeta('twitter:description', description);
    if (ogImage) setMeta('twitter:image', ogImage);

    if (structuredData) {
      setJsonLd('page-structured-data', structuredData);
    } else {
      const el = document.getElementById('page-structured-data');
      if (el) el.remove();
    }
  }, [title, description, canonical, ogImage, structuredData, noindex]);

  return null;
}
