import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Zap, Star, Facebook } from 'lucide-react';
import { business } from '@/data/business';
import { services } from '@/data/services';
import { locations } from '@/data/locations';

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-charcoal-200">
      <div className="container-max px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="flex items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-electric-400">
                <Zap className="h-6 w-6 text-navy-900" fill="currentColor" />
              </div>
              <div>
                <div className="font-display text-lg font-bold text-white">Whipple Electric</div>
                <div className="text-[10px] font-semibold uppercase tracking-wider text-charcoal-400">
                  Inc &middot; Taylor, MI
                </div>
              </div>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-charcoal-300">
              Master Electrician serving Taylor, Michigan and the surrounding Metro Detroit area with professional residential electrical services for over {business.experience}.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <Star className="h-5 w-5 text-electric-400" fill="currentColor" />
                <span className="font-display text-2xl font-bold text-white">{business.rating}</span>
              </div>
              <span className="text-sm text-charcoal-400">
                {business.reviewCount} Google reviews
              </span>
            </div>
            <a
              href={business.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-navy-800 text-charcoal-300 transition-colors hover:bg-electric-400 hover:text-navy-900"
              aria-label="Visit our Facebook page"
            >
              <Facebook className="h-5 w-5" />
            </a>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">Services</h3>
            <ul className="mt-4 space-y-2.5">
              {services.slice(0, 6).map((service) => (
                <li key={service.slug}>
                  <Link
                    to={`/${service.slug}-taylor-mi`}
                    className="text-sm text-charcoal-300 transition-colors hover:text-electric-400"
                  >
                    {service.shortName}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/services" className="text-sm font-semibold text-electric-400 hover:text-electric-300">
                  View All Services
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">Service Areas</h3>
            <ul className="mt-4 space-y-2.5">
              {locations.slice(0, 6).map((location) => (
                <li key={location.slug}>
                  <Link
                    to={`/electrician-${location.slug}`}
                    className="text-sm text-charcoal-300 transition-colors hover:text-electric-400"
                  >
                    {location.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/service-areas" className="text-sm font-semibold text-electric-400 hover:text-electric-300">
                  View All Areas
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">Contact</h3>
            <ul className="mt-4 space-y-3.5">
              <li>
                <a
                  href={`tel:${business.phoneTel}`}
                  className="flex items-center gap-2.5 text-sm text-charcoal-300 transition-colors hover:text-electric-400"
                >
                  <Phone className="h-4 w-4 text-electric-400" />
                  {business.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-charcoal-300">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-electric-400" />
                {business.address}
              </li>
              <li className="flex items-center gap-2.5 text-sm text-charcoal-300">
                <Mail className="h-4 w-4 text-electric-400" />
                <Link to="/contact" className="hover:text-electric-400">
                  Contact Form
                </Link>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-charcoal-300">
                <Star className="h-4 w-4 text-electric-400" />
                {business.hours}
              </li>
            </ul>
            <Link to="/request-an-estimate" className="btn-primary mt-5 w-full text-sm">
              Request an Estimate
            </Link>
          </div>
        </div>

        <div className="mt-12 border-t border-navy-700 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-xs text-charcoal-400">
              &copy; {new Date().getFullYear()} {business.name}. All rights reserved.
            </p>
            <div className="flex gap-5">
              <Link to="/privacy-policy" className="text-xs text-charcoal-400 hover:text-electric-400">
                Privacy Policy
              </Link>
              <Link to="/terms-and-conditions" className="text-xs text-charcoal-400 hover:text-electric-400">
                Terms and Conditions
              </Link>
              <Link to="/sitemap" className="text-xs text-charcoal-400 hover:text-electric-400">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
