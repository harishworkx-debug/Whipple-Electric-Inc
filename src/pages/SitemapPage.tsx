import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import { services } from '@/data/services';
import { locations } from '@/data/locations';
import { business } from '@/data/business';


export default function SitemapPage() {
  return (
    <>
      <SEO
        title="Sitemap | Whipple Electric Inc"
        description="Browse all pages on the Whipple Electric Inc website, including services, service areas, and informational pages."
        canonical="/sitemap"
      />
      <Breadcrumbs items={[{ name: 'Sitemap', path: '/sitemap' }]} />

      <section className="bg-navy-900 py-14">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-3xl font-bold text-white lg:text-4xl">Sitemap</h1>
          <p className="mt-3 text-charcoal-200">Browse all pages on our website.</p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div>
              <h2 className="font-display text-lg font-bold text-navy-900 mb-4">Main Pages</h2>
              <ul className="space-y-2">
                <li><Link to="/" className="text-charcoal-600 hover:text-electric-600">Home</Link></li>
                <li><Link to="/services" className="text-charcoal-600 hover:text-electric-600">Electrical Services</Link></li>
                <li><Link to="/service-areas" className="text-charcoal-600 hover:text-electric-600">Service Areas</Link></li>
                <li><Link to="/about" className="text-charcoal-600 hover:text-electric-600">About Us</Link></li>
                <li><Link to="/reviews" className="text-charcoal-600 hover:text-electric-600">Reviews</Link></li>
                <li><Link to="/contact" className="text-charcoal-600 hover:text-electric-600">Contact Us</Link></li>
                <li><Link to="/request-an-estimate" className="text-charcoal-600 hover:text-electric-600">Request an Estimate</Link></li>
                <li><Link to="/privacy-policy" className="text-charcoal-600 hover:text-electric-600">Privacy Policy</Link></li>
                <li><Link to="/terms-and-conditions" className="text-charcoal-600 hover:text-electric-600">Terms and Conditions</Link></li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-lg font-bold text-navy-900 mb-4">Electrical Services</h2>
              <ul className="space-y-2">
                {services.map((s) => (
                  <li key={s.slug}><Link to={`/${s.slug}-taylor-mi`} className="text-charcoal-600 hover:text-electric-600">{s.name}</Link></li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-display text-lg font-bold text-navy-900 mb-4">Service Areas</h2>
              <ul className="space-y-2">
                {locations.map((l) => (
                  <li key={l.slug}><Link to={`/electrician-${l.slug}`} className="text-charcoal-600 hover:text-electric-600">{l.name}</Link></li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-charcoal-100">
            <h2 className="font-display text-lg font-bold text-navy-900 mb-4">All Service Location Pages</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 text-sm">
              {services.map((s) =>
                locations.map((l) => (
                  <Link
                    key={`${s.slug}-${l.slug}`}
                    to={`/${s.slug}-${l.slug}`}
                    className="text-charcoal-600 hover:text-electric-600 py-1"
                  >
                    {s.shortName} in {l.shortName}
                  </Link>
                ))
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
