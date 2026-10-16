import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Phone,
  Menu,
  X,
  Zap,
  ChevronDown,
  MapPin,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';
import { business } from '@/data/business';
import { services } from '@/data/services';
import { locations } from '@/data/locations';
import { getServiceIcon } from '@/components/iconMap';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [locationsDropdownOpen, setLocationsDropdownOpen] = useState(false);

  // Mobile accordion state
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileLocationsOpen, setMobileLocationsOpen] = useState(false);

  const servicesTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const locationsTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menus on page route changes
  useEffect(() => {
    setOpen(false);
    setServicesDropdownOpen(false);
    setLocationsDropdownOpen(false);
  }, [location.pathname]);

  // Handlers with small hover delay for desktop smooth interaction
  const handleServicesEnter = () => {
    if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
    setLocationsDropdownOpen(false);
    setServicesDropdownOpen(true);
  };

  const handleServicesLeave = () => {
    servicesTimeoutRef.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 150);
  };

  const handleLocationsEnter = () => {
    if (locationsTimeoutRef.current) clearTimeout(locationsTimeoutRef.current);
    setServicesDropdownOpen(false);
    setLocationsDropdownOpen(true);
  };

  const handleLocationsLeave = () => {
    locationsTimeoutRef.current = setTimeout(() => {
      setLocationsDropdownOpen(false);
    }, 150);
  };

  const isServicesActive =
    location.pathname === '/services' ||
    services.some((s) => location.pathname === `/${s.slug}` || location.pathname.startsWith(`/${s.slug}-`));

  const isLocationsActive =
    location.pathname === '/service-areas' ||
    locations.some((l) => location.pathname === `/electrician-${l.slug}`);

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur'
        }`}
      >
        {/* Top announcement bar */}
        <div className="bg-navy-900 text-white">
          <div className="container-max flex items-center justify-between px-4 py-2 text-xs sm:px-6 lg:px-8">
            <div className="flex items-center gap-2">
              <span className="flex h-2 w-2 rounded-full bg-electric-400 animate-pulse-slow" />
              <span className="font-medium text-charcoal-100">
                Master Electrician &middot; {business.experience} of experience &middot; Fully Insured
              </span>
            </div>
            <a
              href={`tel:${business.phoneTel}`}
              className="flex items-center gap-1.5 font-semibold text-electric-400 transition-colors hover:text-electric-300"
            >
              <Phone className="h-3.5 w-3.5" />
              {business.phone}
            </a>
          </div>
        </div>

        {/* Main navigation container */}
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy-900 lg:h-11 lg:w-11 shadow-sm">
                <Zap className="h-6 w-6 text-electric-400 lg:h-7 lg:w-7" fill="currentColor" />
              </div>
              <div>
                <div className="font-display text-lg font-bold leading-tight text-navy-900 lg:text-xl">
                  Whipple Electric
                </div>
                <div className="text-[10px] font-semibold uppercase tracking-wider text-charcoal-500 lg:text-xs">
                  Inc &middot; Taylor, MI
                </div>
              </div>
            </Link>

            {/* Desktop Navigation Links with Dropdowns */}
            <nav className="hidden items-center gap-7 lg:flex">
              <Link
                to="/"
                className={`nav-link ${location.pathname === '/' ? 'nav-link-active' : ''}`}
              >
                Home
              </Link>

              {/* Services Dropdown Item */}
              <div
                className="relative"
                onMouseEnter={handleServicesEnter}
                onMouseLeave={handleServicesLeave}
              >
                <div className="flex items-center gap-1">
                  <Link
                    to="/services"
                    className={`nav-link ${isServicesActive ? 'nav-link-active' : ''}`}
                  >
                    Services
                  </Link>
                  <button
                    type="button"
                    onClick={() => setServicesDropdownOpen((prev) => !prev)}
                    className="p-1 text-charcoal-500 hover:text-navy-900 focus:outline-none"
                    aria-label="Toggle Services Dropdown"
                    aria-expanded={servicesDropdownOpen}
                  >
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-200 ${
                        servicesDropdownOpen ? 'rotate-180 text-electric-600' : ''
                      }`}
                    />
                  </button>
                </div>

                {/* Dropdown Panel */}
                {servicesDropdownOpen && (
                  <div className="absolute left-1/2 top-full -translate-x-1/3 pt-2 w-[620px] animate-fade-in z-50">
                    <div className="overflow-hidden rounded-2xl border border-charcoal-200/80 bg-white shadow-card-lg">
                      <div className="bg-navy-900 px-5 py-3 text-white flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Zap className="h-4 w-4 text-electric-400" />
                          <span className="font-display text-sm font-bold tracking-wide">
                            Residential & Commercial Electrical Services
                          </span>
                        </div>
                        <Link
                          to="/services"
                          onClick={() => setServicesDropdownOpen(false)}
                          className="text-xs text-electric-400 font-semibold hover:underline flex items-center gap-1"
                        >
                          View All Services
                          <ArrowRight className="h-3 w-3" />
                        </Link>
                      </div>

                      <div className="grid grid-cols-2 gap-1 p-3">
                        {services.map((service) => {
                          const Icon = getServiceIcon(service.icon);
                          return (
                            <Link
                              key={service.slug}
                              to={`/${service.slug}-taylor-mi`}
                              onClick={() => setServicesDropdownOpen(false)}
                              className="group flex items-start gap-3 rounded-xl p-2.5 transition-all hover:bg-charcoal-50"
                            >
                              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-navy-900/5 text-navy-800 transition-colors group-hover:bg-electric-400 group-hover:text-navy-900">
                                <Icon className="h-4 w-4" />
                              </div>
                              <div>
                                <div className="text-xs font-bold text-navy-900 group-hover:text-electric-700">
                                  {service.shortName}
                                </div>
                                <div className="text-[11px] text-charcoal-500 line-clamp-1 leading-tight mt-0.5">
                                  {service.description}
                                </div>
                              </div>
                            </Link>
                          );
                        })}
                      </div>

                      <div className="border-t border-charcoal-100 bg-charcoal-50 px-5 py-3 flex items-center justify-between text-xs">
                        <span className="text-charcoal-600">
                          Master Electrician with 40+ years experience
                        </span>
                        <Link
                          to="/request-an-estimate"
                          onClick={() => setServicesDropdownOpen(false)}
                          className="font-bold text-navy-900 hover:text-electric-600 flex items-center gap-1"
                        >
                          Request an Estimate
                          <ArrowRight className="h-3.5 w-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Service Areas Dropdown Item */}
              <div
                className="relative"
                onMouseEnter={handleLocationsEnter}
                onMouseLeave={handleLocationsLeave}
              >
                <div className="flex items-center gap-1">
                  <Link
                    to="/service-areas"
                    className={`nav-link ${isLocationsActive ? 'nav-link-active' : ''}`}
                  >
                    Service Areas
                  </Link>
                  <button
                    type="button"
                    onClick={() => setLocationsDropdownOpen((prev) => !prev)}
                    className="p-1 text-charcoal-500 hover:text-navy-900 focus:outline-none"
                    aria-label="Toggle Service Areas Dropdown"
                    aria-expanded={locationsDropdownOpen}
                  >
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-200 ${
                        locationsDropdownOpen ? 'rotate-180 text-electric-600' : ''
                      }`}
                    />
                  </button>
                </div>

                {/* Dropdown Panel */}
                {locationsDropdownOpen && (
                  <div className="absolute left-1/2 top-full -translate-x-1/2 pt-2 w-[520px] animate-fade-in z-50">
                    <div className="overflow-hidden rounded-2xl border border-charcoal-200/80 bg-white shadow-card-lg">
                      <div className="bg-navy-900 px-5 py-3 text-white flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-electric-400" />
                          <span className="font-display text-sm font-bold tracking-wide">
                            Metro Detroit & Downriver Communities
                          </span>
                        </div>
                        <Link
                          to="/service-areas"
                          onClick={() => setLocationsDropdownOpen(false)}
                          className="text-xs text-electric-400 font-semibold hover:underline flex items-center gap-1"
                        >
                          View All Areas
                          <ArrowRight className="h-3 w-3" />
                        </Link>
                      </div>

                      <div className="grid grid-cols-2 gap-1 p-3">
                        {locations.map((loc) => (
                          <Link
                            key={loc.slug}
                            to={`/electrician-${loc.slug}`}
                            onClick={() => setLocationsDropdownOpen(false)}
                            className="group flex items-center justify-between rounded-xl px-3 py-2.5 transition-all hover:bg-charcoal-50"
                          >
                            <div className="flex items-center gap-2">
                              <MapPin className="h-4 w-4 text-electric-600 group-hover:text-navy-900" />
                              <span className="text-xs font-bold text-navy-900 group-hover:text-electric-700">
                                {loc.name}
                              </span>
                            </div>
                            {loc.slug === 'taylor-mi' && (
                              <span className="rounded-full bg-electric-400/20 px-2 py-0.5 text-[10px] font-bold text-navy-900 border border-electric-400/40">
                                HQ Base
                              </span>
                            )}
                          </Link>
                        ))}
                      </div>

                      <div className="border-t border-charcoal-100 bg-charcoal-50 px-5 py-3 flex items-center justify-between text-xs">
                        <span className="text-charcoal-600">
                          Based in Taylor, MI &middot; Serving Downriver
                        </span>
                        <a
                          href={`tel:${business.phoneTel}`}
                          className="font-bold text-navy-900 hover:text-electric-600 flex items-center gap-1"
                        >
                          <Phone className="h-3 w-3 text-electric-600" />
                          {business.phone}
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Link
                to="/about"
                className={`nav-link ${location.pathname === '/about' ? 'nav-link-active' : ''}`}
              >
                About
              </Link>
              <Link
                to="/reviews"
                className={`nav-link ${location.pathname === '/reviews' ? 'nav-link-active' : ''}`}
              >
                Reviews
              </Link>
              <Link
                to="/contact"
                className={`nav-link ${location.pathname === '/contact' ? 'nav-link-active' : ''}`}
              >
                Contact
              </Link>
            </nav>

            {/* Desktop CTA Button */}
            <div className="hidden items-center gap-3 lg:flex">
              <Link to="/request-an-estimate" className="btn-primary text-sm">
                Request an Estimate
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setOpen(!open)}
              className="flex h-10 w-10 items-center justify-center rounded-lg text-navy-900 transition-colors hover:bg-navy-50 lg:hidden"
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {open && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-navy-900/50 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          <div className="absolute right-0 top-0 h-full w-84 max-w-[88vw] overflow-y-auto bg-white p-6 shadow-navy-lg animate-fade-in">
            <div className="mb-6 flex items-center justify-between border-b border-charcoal-100 pb-4">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-navy-900 text-electric-400">
                  <Zap className="h-5 w-5" fill="currentColor" />
                </div>
                <span className="font-display text-base font-bold text-navy-900">
                  Whipple Electric
                </span>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="flex h-9 w-9 items-center justify-center rounded-lg text-navy-900 hover:bg-navy-50"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="flex flex-col gap-1.5 text-sm">
              <Link
                to="/"
                onClick={() => setOpen(false)}
                className={`rounded-lg px-3.5 py-2.5 font-semibold transition-colors ${
                  location.pathname === '/'
                    ? 'bg-electric-400/15 text-navy-900 font-bold'
                    : 'text-charcoal-800 hover:bg-charcoal-50'
                }`}
              >
                Home
              </Link>

              {/* Mobile Services Accordion */}
              <div>
                <div className="flex items-center justify-between rounded-lg px-3.5 py-2.5 text-charcoal-800 hover:bg-charcoal-50">
                  <Link
                    to="/services"
                    onClick={() => setOpen(false)}
                    className="font-semibold text-navy-900 flex-1"
                  >
                    Services
                  </Link>
                  <button
                    type="button"
                    onClick={() => setMobileServicesOpen((prev) => !prev)}
                    className="p-1 text-charcoal-500 hover:text-navy-900"
                    aria-label="Toggle Services list"
                  >
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${
                        mobileServicesOpen ? 'rotate-180 text-electric-600' : ''
                      }`}
                    />
                  </button>
                </div>
                {mobileServicesOpen && (
                  <div className="ml-3 mt-1 space-y-1 border-l-2 border-electric-400/40 pl-3">
                    <Link
                      to="/services"
                      onClick={() => setOpen(false)}
                      className="block py-1.5 text-xs font-bold text-electric-700 hover:underline"
                    >
                      &rarr; View All Services Overview
                    </Link>
                    {services.map((svc) => (
                      <Link
                        key={svc.slug}
                        to={`/${svc.slug}-taylor-mi`}
                        onClick={() => setOpen(false)}
                        className="block py-1 text-xs text-charcoal-700 hover:text-electric-700"
                      >
                        {svc.shortName}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Service Areas Accordion */}
              <div>
                <div className="flex items-center justify-between rounded-lg px-3.5 py-2.5 text-charcoal-800 hover:bg-charcoal-50">
                  <Link
                    to="/service-areas"
                    onClick={() => setOpen(false)}
                    className="font-semibold text-navy-900 flex-1"
                  >
                    Service Areas
                  </Link>
                  <button
                    type="button"
                    onClick={() => setMobileLocationsOpen((prev) => !prev)}
                    className="p-1 text-charcoal-500 hover:text-navy-900"
                    aria-label="Toggle Service Areas list"
                  >
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${
                        mobileLocationsOpen ? 'rotate-180 text-electric-600' : ''
                      }`}
                    />
                  </button>
                </div>
                {mobileLocationsOpen && (
                  <div className="ml-3 mt-1 space-y-1 border-l-2 border-electric-400/40 pl-3">
                    <Link
                      to="/service-areas"
                      onClick={() => setOpen(false)}
                      className="block py-1.5 text-xs font-bold text-electric-700 hover:underline"
                    >
                      &rarr; View All Service Areas
                    </Link>
                    {locations.map((loc) => (
                      <Link
                        key={loc.slug}
                        to={`/electrician-${loc.slug}`}
                        onClick={() => setOpen(false)}
                        className="block py-1 text-xs text-charcoal-700 hover:text-electric-700"
                      >
                        {loc.name} {loc.slug === 'taylor-mi' ? '(HQ)' : ''}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/about"
                onClick={() => setOpen(false)}
                className={`rounded-lg px-3.5 py-2.5 font-semibold transition-colors ${
                  location.pathname === '/about'
                    ? 'bg-electric-400/15 text-navy-900 font-bold'
                    : 'text-charcoal-800 hover:bg-charcoal-50'
                }`}
              >
                About
              </Link>
              <Link
                to="/reviews"
                onClick={() => setOpen(false)}
                className={`rounded-lg px-3.5 py-2.5 font-semibold transition-colors ${
                  location.pathname === '/reviews'
                    ? 'bg-electric-400/15 text-navy-900 font-bold'
                    : 'text-charcoal-800 hover:bg-charcoal-50'
                }`}
              >
                Reviews
              </Link>
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className={`rounded-lg px-3.5 py-2.5 font-semibold transition-colors ${
                  location.pathname === '/contact'
                    ? 'bg-electric-400/15 text-navy-900 font-bold'
                    : 'text-charcoal-800 hover:bg-charcoal-50'
                }`}
              >
                Contact
              </Link>

              <div className="mt-5 pt-4 border-t border-charcoal-100 flex flex-col gap-3">
                <Link
                  to="/request-an-estimate"
                  onClick={() => setOpen(false)}
                  className="btn-primary text-center text-sm"
                >
                  Request an Estimate
                </Link>
                <a
                  href={`tel:${business.phoneTel}`}
                  className="btn-dark text-center text-sm flex items-center justify-center gap-2"
                >
                  <Phone className="h-4 w-4" />
                  Call {business.phone}
                </a>
              </div>
            </nav>
          </div>
        </div>
      )}

      {/* Floating Call Button on Mobile */}
      <a
        href={`tel:${business.phoneTel}`}
        className="fixed bottom-4 right-4 z-40 flex items-center gap-2 rounded-full bg-electric-400 px-5 py-3.5 font-semibold text-navy-900 shadow-electric transition-all hover:bg-electric-300 hover:shadow-electric active:scale-95 lg:hidden"
      >
        <Phone className="h-5 w-5" />
        Call Now
      </a>
    </>
  );
}
