import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

import HomePage from '@/pages/HomePage';
import ServicesPage from '@/pages/ServicesPage';
import ServiceDetailPage from '@/pages/ServiceDetailPage';
import ServiceAreasPage from '@/pages/ServiceAreasPage';
import LocationPage from '@/pages/LocationPage';
import ServiceLocationPage from '@/pages/ServiceLocationPage';
import AboutPage from '@/pages/AboutPage';
import ReviewsPage from '@/pages/ReviewsPage';
import ContactPage from '@/pages/ContactPage';
import EstimatePage from '@/pages/EstimatePage';
import PrivacyPage from '@/pages/PrivacyPage';
import TermsPage from '@/pages/TermsPage';
import SitemapPage from '@/pages/SitemapPage';
import NotFoundPage from '@/pages/NotFoundPage';

import { services } from '@/data/services';
import { locations } from '@/data/locations';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AppRoutes() {
  const serviceSlugs = services.map((s) => s.slug);
  const locationSlugs = locations.map((l) => l.slug);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/service-areas" element={<ServiceAreasPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/reviews" element={<ReviewsPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/request-an-estimate" element={<EstimatePage />} />
      <Route path="/privacy-policy" element={<PrivacyPage />} />
      <Route path="/terms-and-conditions" element={<TermsPage />} />
      <Route path="/sitemap" element={<SitemapPage />} />

      {/* Location pages: /electrician-{slug} */}
      {locationSlugs.map((locSlug) => (
        <Route
          key={`loc-${locSlug}`}
          path={`/electrician-${locSlug}`}
          element={<LocationPage slug={locSlug} />}
        />
      ))}

      {/* Service-location combo pages: /{service-slug}-{location-slug} */}
      {serviceSlugs.map((svcSlug) =>
        locationSlugs.map((locSlug) => (
          <Route
            key={`combo-${svcSlug}-${locSlug}`}
            path={`/${svcSlug}-${locSlug}`}
            element={<ServiceLocationPage slug={`${svcSlug}-${locSlug}`} />}
          />
        ))
      )}

      {/* Generic service routes redirect to the main location (Taylor, MI) */}
      {serviceSlugs.map((svcSlug) => (
        <Route
          key={`svc-redirect-${svcSlug}`}
          path={`/${svcSlug}`}
          element={<Navigate to={`/${svcSlug}-taylor-mi`} replace />}
        />
      ))}

      <Route path="/404" element={<NotFoundPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <AppRoutes />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
