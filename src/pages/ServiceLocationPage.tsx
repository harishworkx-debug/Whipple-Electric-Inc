import { Link, Navigate } from 'react-router-dom';
import {
  Phone,
  ArrowRight,
  HelpCircle,
  CheckCircle2,
  MapPin,
  ShieldCheck,
  Building2,
  Home,
  Clock,
  Wrench,
  FileText,
  Star,
  Zap,
  AlertTriangle,
  ChevronRight,
  Sparkles,
} from 'lucide-react';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import CTASection from '@/components/CTASection';
import EstimateForm from '@/components/EstimateForm';
import { services, getService } from '@/data/services';
import { locations, getLocation } from '@/data/locations';
import { business } from '@/data/business';
import { serviceImages } from '@/data/images';
import { getServiceIcon } from '@/components/iconMap';
import { getRelevantProject } from '@/data/projects';
import { getDedicatedServiceHousingInsight } from '@/data/localServiceInsights';
import { getServiceLocationSchema, getFAQSchema, getBreadcrumbSchema } from '@/data/schema';

const serviceKeywordMap: Record<
  string,
  {
    primary: string;
    secondaries: string[];
    titlePrefix: string;
    h1Title: string;
  }
> = {
  'electrical-troubleshooting': {
    primary: 'electrical troubleshooting',
    secondaries: ['electrical repair', 'electrical problem diagnosis'],
    titlePrefix: 'Electrical Troubleshooting',
    h1Title: 'Electrical Troubleshooting & Repair',
  },
  'electrical-panel-upgrades': {
    primary: 'electrical panel upgrade',
    secondaries: ['200 amp panel upgrade', 'fuse box replacement'],
    titlePrefix: 'Electrical Panel Upgrade',
    h1Title: 'Electrical Panel Upgrades & 200-Amp Service',
  },
  'circuit-breaker-repair': {
    primary: 'circuit breaker repair',
    secondaries: ['breaker replacement', 'breaker keeps tripping'],
    titlePrefix: 'Circuit Breaker Repair',
    h1Title: 'Circuit Breaker Repair & Replacement',
  },
  'electrical-wiring': {
    primary: 'electrical wiring',
    secondaries: ['house rewiring', 'whole home rewiring'],
    titlePrefix: 'Electrical Wiring & House Rewiring',
    h1Title: 'Residential Electrical Wiring & House Rewiring',
  },
  'outlet-switch-installation': {
    primary: 'outlet installation',
    secondaries: ['GFCI outlet installation', 'switch replacement'],
    titlePrefix: 'Outlet Installation',
    h1Title: 'Outlet Installation & GFCI Upgrades',
  },
  'lighting-installation': {
    primary: 'lighting installation',
    secondaries: ['recessed lighting', 'outdoor lighting'],
    titlePrefix: 'Lighting Installation',
    h1Title: 'Indoor & Outdoor Lighting Installation',
  },
  'ceiling-fan-installation': {
    primary: 'ceiling fan installation',
    secondaries: ['ceiling fan wiring', 'fan replacement'],
    titlePrefix: 'Ceiling Fan Installation',
    h1Title: 'Ceiling Fan Installation & Wiring',
  },
  'electrical-safety-inspection': {
    primary: 'electrical safety inspection',
    secondaries: ['home electrical inspection', 'electrical code inspection'],
    titlePrefix: 'Electrical Safety Inspection',
    h1Title: 'Electrical Safety Inspection & Code Audits',
  },
  'commercial-electrical': {
    primary: 'commercial electrician',
    secondaries: ['commercial electrical repair', 'commercial wiring'],
    titlePrefix: 'Commercial Electrician',
    h1Title: 'Commercial Electrician & 3-Phase Electrical',
  },
  'renovation-electrical': {
    primary: 'electrical renovation',
    secondaries: ['remodeling electrician', 'kitchen electrical installation'],
    titlePrefix: 'Electrical Renovation & Remodeling',
    h1Title: 'Electrical Renovation & Remodel Wiring',
  },
};

export default function ServiceLocationPage({ slug }: { slug: string }) {
  let matchedService: ReturnType<typeof getService> = undefined;
  let matchedLocation: ReturnType<typeof getLocation> = undefined;

  for (const loc of locations) {
    if (slug.endsWith('-' + loc.slug)) {
      const serviceSlug = slug.slice(0, slug.length - loc.slug.length - 1);
      const svc = getService(serviceSlug);
      if (svc) {
        matchedService = svc;
        matchedLocation = loc;
        break;
      }
    }
  }

  if (!matchedService || !matchedLocation) return <Navigate to="/404" replace />;

  const service = matchedService;
  const location = matchedLocation;
  const Icon = getServiceIcon(service.icon);
  const image = serviceImages[service.slug];

  const isTaylor = location.slug === 'taylor-mi';
  const kwInfo = serviceKeywordMap[service.slug] || {
    primary: service.name.toLowerCase(),
    secondaries: ['licensed electrician', 'electrical contractor'],
    titlePrefix: service.name,
    h1Title: service.name,
  };

  // Dynamic SEO metadata tailored to city + keyword target
  const pageTitle = isTaylor
    ? `${kwInfo.titlePrefix} in Taylor, MI | Whipple Electric Inc`
    : `${kwInfo.titlePrefix} in ${location.name} | Whipple Electric Inc`;

  const pageDescription = isTaylor
    ? `Expert ${kwInfo.primary} in Taylor, MI by Master Electrician Jim Whipple. Specializing in ${kwInfo.secondaries.join(' and ')}. 40+ years experience, 100% code compliant. Call ${business.phone}.`
    : `Licensed ${kwInfo.primary} in ${location.name} by Whipple Electric Inc. 40+ years experience with ${kwInfo.secondaries.join(' and ')}. Local municipal permits. Call ${business.phone}.`;

  const h1Title = `${kwInfo.h1Title} in ${location.name}`;
  const imageAltText = `${kwInfo.titlePrefix} performed by Master Electrician Jim Whipple in ${location.name}`;

  const breadcrumbItems = isTaylor
    ? [
        { name: 'Services', path: '/services' },
        { name: service.shortName, path: `/${service.slug}-taylor-mi` },
      ]
    : [
        { name: 'Services', path: '/services' },
        { name: service.shortName, path: `/${service.slug}-taylor-mi` },
        { name: location.shortName, path: `/${service.slug}-${location.slug}` },
      ];

  // Specific completed project matching this city and service
  const relevantProject = getRelevantProject(service.slug, location.slug);

  // Dedicated, non-duplicate local service insight
  const dedicatedInsight = getDedicatedServiceHousingInsight(
    service.slug,
    location.slug,
    location.shortName,
    service.shortName
  );

  // Combine service-specific technical FAQs with city-specific FAQs
  const combinedFaqs = [
    ...service.faqs.slice(0, 3),
    ...location.faqs.slice(0, 2),
  ];

  const schema = [
    getServiceLocationSchema(service.name, location.name, pageDescription, slug),
    getFAQSchema(combinedFaqs),
    getBreadcrumbSchema(breadcrumbItems),
  ];

  const relatedServices = services.filter((s) => s.slug !== service.slug).slice(0, 4);
  const nearbyLocations = locations.filter((l) => l.slug !== location.slug).slice(0, 6);

  return (
    <>
      <SEO
        title={pageTitle}
        description={pageDescription}
        canonical={`/${service.slug}-${location.slug}`}
        structuredData={schema}
      />
      <Breadcrumbs items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="bg-navy-900 py-14 lg:py-20">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-electric-400/10 px-4 py-1.5 border border-electric-400/20">
                <Icon className="h-5 w-5 text-electric-400" />
                <span className="text-sm font-semibold text-electric-400">
                  {location.name} &bull; Master Electrician Direct
                </span>
              </div>
              <h1 className="font-display text-3xl font-bold text-white text-balance sm:text-4xl lg:text-5xl">
                {h1Title}
              </h1>
              <p className="mt-4 text-lg text-charcoal-200 leading-relaxed">
                {dedicatedInsight.heroDescription}
              </p>

              {/* Local Dispatch Badge */}
              <div className="mt-5 rounded-xl border border-white/10 bg-white/5 p-4 text-xs sm:text-sm text-charcoal-200">
                <div className="flex flex-wrap items-center gap-y-2 gap-x-4">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="h-4 w-4 text-electric-400 shrink-0" />
                    <span>Dispatched from Taylor HQ ({location.dispatchDetails.distanceFromTaylorHQ})</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-4 w-4 text-electric-400 shrink-0" />
                    <span>Avg Arrival: {location.dispatchDetails.avgResponseTime}</span>
                  </span>
                  <span className="flex items-center gap-1.5 font-semibold text-electric-400">
                    <ShieldCheck className="h-4 w-4 shrink-0" />
                    <span>{location.permitOffice.department.split(' ')[0]} Code Compliant</span>
                  </span>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a href={`tel:${business.phoneTel}`} className="btn-primary">
                  <Phone className="h-5 w-5" />
                  Call {business.phone}
                </a>
                <Link to="/request-an-estimate" className="btn-outline-white">
                  Request an Estimate
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-2xl shadow-navy-lg border border-charcoal-700">
                <img
                  src={image}
                  alt={imageAltText}
                  className="h-72 w-full object-cover lg:h-80"
                  loading="lazy"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-navy-900/90 p-4 text-white">
                  <div className="text-xs font-bold uppercase tracking-wider text-electric-400">
                    Local Service Spotlight
                  </div>
                  <div className="text-sm font-semibold">
                    Serving Zip Codes: {location.zipCodes.join(', ')}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="section-padding bg-white">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            {/* Primary Content (8 Cols) */}
            <div className="lg:col-span-8 space-y-12">
              {/* SECTION 1: Search-Intent Driven Technical Overview */}
              <div>
                <div className="mb-2 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-electric-700">
                  <Zap className="h-4 w-4 text-electric-600" />
                  <span>Technical Specialization</span>
                </div>
                <h2 className="font-display text-2xl font-bold text-navy-900 sm:text-3xl">
                  {service.name}: Scope & Technical Standards
                </h2>
                <p className="mt-4 text-base leading-relaxed text-charcoal-700 sm:text-lg">
                  {service.longDescription}
                </p>

                {/* Technical Deep Dive Topics */}
                {service.technicalTopics && service.technicalTopics.length > 0 && (
                  <div className="mt-8 space-y-6">
                    <h3 className="font-display text-xl font-bold text-navy-900">
                      In-Depth Technical Solutions for {location.shortName} Properties
                    </h3>
                    <div className="grid grid-cols-1 gap-4">
                      {service.technicalTopics.map((topic, i) => (
                        <div
                          key={i}
                          className="rounded-xl border border-charcoal-200 bg-charcoal-50 p-5 transition-all hover:border-electric-400/50"
                        >
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <h4 className="font-display text-base font-bold text-navy-900">
                              {topic.title}
                            </h4>
                            {topic.necCodeReference && (
                              <span className="rounded bg-electric-100 text-electric-800 px-2 py-0.5 text-xs font-semibold">
                                {topic.necCodeReference}
                              </span>
                            )}
                          </div>
                          <p className="mt-2 text-sm leading-relaxed text-charcoal-700">
                            {topic.technicalDetails}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* SECTION 2: Authentic Local Evidence - Completed Project Spotlight */}
              <div className="rounded-2xl border border-electric-400/40 bg-electric-400/5 p-6 sm:p-8">
                <div className="mb-2 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-electric-100 px-3 py-1 text-xs font-bold text-electric-800">
                    <FileText className="h-3.5 w-3.5 text-electric-600" />
                    <span>Verified Downriver Project Spotlight</span>
                  </span>
                  <span className="text-xs font-semibold text-charcoal-500">
                    Completed {relevantProject.completedYear}
                  </span>
                </div>

                <h3 className="font-display text-xl font-bold text-navy-900 mt-2">
                  {relevantProject.title}
                </h3>
                <div className="mt-1 flex items-center gap-2 text-xs font-semibold text-charcoal-600">
                  <MapPin className="h-3.5 w-3.5 text-electric-600" />
                  <span>{relevantProject.cityName}, MI &bull; {relevantProject.neighborhood}</span>
                  <span className="mx-1">&bull;</span>
                  <span>Duration: {relevantProject.duration}</span>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-charcoal-700">
                  {relevantProject.summary}
                </p>

                <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4 rounded-xl bg-white p-4 border border-charcoal-200/80 text-xs text-charcoal-700">
                  <div>
                    <strong className="block font-bold text-navy-900 mb-1">Specific Challenge:</strong>
                    <span>{relevantProject.challenge}</span>
                  </div>
                  <div>
                    <strong className="block font-bold text-navy-900 mb-1">Master Electrician Solution:</strong>
                    <span>{relevantProject.solution}</span>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-xs border-t border-charcoal-200/60 pt-3">
                  <div className="flex flex-wrap gap-1.5">
                    {relevantProject.equipmentUsed.map((equip, idx) => (
                      <span key={idx} className="rounded bg-white border border-charcoal-200 px-2 py-0.5 font-medium text-charcoal-700">
                        {equip}
                      </span>
                    ))}
                  </div>
                  <span className="font-bold text-electric-800">
                    ✓ {relevantProject.permitStatus}
                  </span>
                </div>
              </div>

              {/* SECTION 3: City Housing Stock & Architectural Context */}
              <div className="rounded-2xl border border-charcoal-200 bg-white p-6 sm:p-8 shadow-card">
                <div className="mb-2 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-charcoal-500">
                  <Home className="h-4 w-4 text-navy-800" />
                  <span>Local Housing Characteristics</span>
                </div>
                <h3 className="font-display text-xl font-bold text-navy-900">
                  {dedicatedInsight.heading}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal-700">
                  {dedicatedInsight.leadParagraph}
                </p>

                {/* High-Intent Hiring Capability Badge */}
                <div className="mt-4 rounded-xl bg-electric-400/10 border border-electric-400/30 p-3.5 text-xs font-semibold text-navy-900 flex items-center gap-2.5">
                  <Sparkles className="h-4 w-4 text-electric-600 shrink-0" />
                  <span>{dedicatedInsight.highIntentTagline}</span>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 text-xs">
                  <div className="rounded-lg bg-charcoal-50 p-4 border border-charcoal-200/60">
                    <span className="font-bold text-navy-900 block text-sm mb-1">Era & Construction:</span>
                    <p className="text-charcoal-600">{location.housingStock.era}</p>
                    <p className="mt-1 text-charcoal-600">{location.housingStock.architecturalStyle}</p>
                  </div>

                  <div className="rounded-lg bg-charcoal-50 p-4 border border-charcoal-200/60">
                    <span className="font-bold text-navy-900 block text-sm mb-1">Prevalent Wiring Types:</span>
                    <ul className="list-disc list-inside space-y-0.5 text-charcoal-600">
                      {location.housingStock.commonWiringTypes.map((type, idx) => (
                        <li key={idx}>{type}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-lg bg-charcoal-50 p-4 border border-charcoal-200/60">
                    <span className="font-bold text-navy-900 block text-sm mb-1">Common Electrical Hazards:</span>
                    <ul className="list-disc list-inside space-y-0.5 text-charcoal-600">
                      {location.housingStock.commonHazards.map((hazard, idx) => (
                        <li key={idx}>{hazard}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-lg bg-charcoal-50 p-4 border border-charcoal-200/60">
                    <span className="font-bold text-navy-900 block text-sm mb-1">Recommended Modernization:</span>
                    <p className="text-charcoal-600">{location.housingStock.modernizationFocus}</p>
                  </div>
                </div>
              </div>

              {/* SECTION 4: Municipal Permitting & Building Department Guidance */}
              <div className="rounded-2xl border border-charcoal-200 bg-charcoal-50 p-6 sm:p-8">
                <div className="mb-2 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-charcoal-500">
                  <Building2 className="h-4 w-4 text-navy-800" />
                  <span>Verified Municipal Permitting</span>
                </div>
                <h3 className="font-display text-xl font-bold text-navy-900">
                  {location.shortName} Electrical Permits & Inspection Procedures
                </h3>
                <p className="mt-2 text-sm text-charcoal-600">
                  We handle all trade permit applications, fee calculations, and inspector scheduling directly with the local building department:
                </p>

                <div className="mt-4 rounded-xl bg-white p-4 border border-charcoal-200 text-xs sm:text-sm text-charcoal-700">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-charcoal-100 pb-3">
                    <div>
                      <strong className="text-navy-900">{location.permitOffice.department}</strong>
                      <div className="text-xs text-charcoal-500">{location.permitOffice.address}</div>
                    </div>
                    <div className="text-xs font-semibold text-charcoal-600">
                      Dept Phone: {location.permitOffice.phone}
                    </div>
                  </div>

                  <div className="mt-3 space-y-1.5 text-xs">
                    <strong className="block text-navy-900">Local Inspection Requirements:</strong>
                    <ul className="list-disc list-inside space-y-1 text-charcoal-600">
                      {location.permitOffice.inspectionRequirements.map((req, idx) => (
                        <li key={idx}>{req}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-3 rounded bg-electric-50 p-2.5 text-xs text-electric-900 font-medium">
                    <strong>Local Inspector Focus:</strong> {location.permitOffice.inspectorNotes}
                  </div>
                </div>
              </div>

              {/* SECTION 5: Cost, Timeline & Milestones */}
              {service.costAndPermits && (
                <div className="rounded-2xl border border-charcoal-200 bg-white p-6 sm:p-8 shadow-card">
                  <h3 className="font-display text-xl font-bold text-navy-900">
                    {service.shortName} Project Timeline & Cost Factors
                  </h3>
                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                    <div className="rounded-lg bg-charcoal-50 p-4 border border-charcoal-200/80">
                      <span className="font-bold text-navy-900 block mb-1">Expected Timeline:</span>
                      <p className="text-charcoal-700">{service.costAndPermits.timeline}</p>
                      <span className="mt-3 font-bold text-navy-900 block mb-1">Permit Requirement:</span>
                      <p className="text-charcoal-700">{service.costAndPermits.permitDetails}</p>
                    </div>

                    <div className="rounded-lg bg-charcoal-50 p-4 border border-charcoal-200/80">
                      <span className="font-bold text-navy-900 block mb-1">Primary Cost Drivers:</span>
                      <ul className="list-disc list-inside space-y-1 text-charcoal-600 text-xs">
                        {service.costAndPermits.keyCostDrivers.map((driver, i) => (
                          <li key={i}>{driver}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* SECTION 6: Local Customer Testimonial */}
              {location.localTestimonial && (
                <div className="rounded-2xl border border-charcoal-200 bg-charcoal-50 p-6 sm:p-8">
                  <div className="flex items-center gap-1 text-amber-500 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                    <span className="ml-2 text-xs font-bold text-navy-900">5.0 Star Local Feedback</span>
                  </div>
                  <blockquote className="font-display text-base font-semibold text-navy-900 italic">
                    "{location.localTestimonial.quote}"
                  </blockquote>
                  <div className="mt-3 text-xs text-charcoal-600">
                    <strong>{location.localTestimonial.author}</strong> &bull; {location.localTestimonial.neighborhood} &bull; {location.localTestimonial.service}
                  </div>
                </div>
              )}

              {/* SECTION 7: Signs You Need This Service & Our Diagnostic Process */}
              <div>
                <h3 className="font-display text-xl font-bold text-navy-900">
                  Common Signs You Need {service.shortName}
                </h3>
                <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm text-charcoal-700">
                  {service.signs.map((sign, i) => (
                    <li key={i} className="flex items-start gap-2.5 rounded-lg bg-charcoal-50 p-3 border border-charcoal-100">
                      <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
                      <span>{sign}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="mt-8 font-display text-xl font-bold text-navy-900">
                  Our Step-by-Step Diagnostic & Execution Process
                </h3>
                <div className="mt-4 space-y-4">
                  {service.process.map((step, i) => (
                    <div key={i} className="flex gap-4 items-start">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-navy-900 font-display text-sm font-bold text-electric-400">
                        {i + 1}
                      </div>
                      <div>
                        <h4 className="font-display text-base font-bold text-navy-900">{step.title}</h4>
                        <p className="mt-0.5 text-sm text-charcoal-600">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar (4 Cols) */}
            <div className="lg:col-span-4 space-y-6">
              {/* Sticky Request Estimate Form */}
              <div className="sticky top-28 space-y-6">
                <div className="rounded-2xl border border-charcoal-200 bg-charcoal-50 p-6 shadow-card">
                  <h3 className="font-display text-lg font-bold text-navy-900">
                    Request an Upfront Estimate
                  </h3>
                  <p className="mt-1 text-xs text-charcoal-600">
                    {service.shortName} in {location.shortName}, MI
                  </p>
                  <div className="mt-4">
                    <EstimateForm
                      defaultService={service.name}
                      defaultLocation={`${location.shortName}, MI`}
                      compact
                    />
                  </div>
                </div>

                {/* Direct Phone Dispatch Card */}
                <div className="rounded-2xl bg-navy-900 p-6 text-white shadow-card">
                  <div className="text-xs font-bold uppercase tracking-wider text-electric-400">
                    Direct Master Electrician
                  </div>
                  <h4 className="font-display text-xl font-bold mt-1">
                    Have an Urgent Question?
                  </h4>
                  <p className="mt-2 text-xs text-charcoal-300">
                    Speak directly with Jim Whipple. No automated call center or runaround.
                  </p>
                  <a href={`tel:${business.phoneTel}`} className="mt-4 btn-primary w-full text-center py-2.5 text-sm justify-center">
                    <Phone className="h-4 w-4" />
                    Call {business.phone}
                  </a>
                  <div className="mt-3 text-center text-xs text-charcoal-400">
                    Mon - Sat: 7:00 AM - 7:00 PM &bull; 24/7 Emergency
                  </div>
                </div>

                {/* Nearby City Quick Links */}
                <div className="rounded-2xl border border-charcoal-200 bg-white p-5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-charcoal-500 mb-3">
                    {service.shortName} in Nearby Areas
                  </h4>
                  <div className="space-y-1.5 text-xs">
                    {nearbyLocations.map((loc) => (
                      <Link
                        key={loc.slug}
                        to={`/${service.slug}-${loc.slug}`}
                        className="flex items-center justify-between rounded-md p-2 font-medium text-charcoal-700 transition-colors hover:bg-electric-50 hover:text-electric-800"
                      >
                        <span>{service.shortName} in {loc.shortName}</span>
                        <ChevronRight className="h-3.5 w-3.5 text-charcoal-400" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="section-padding bg-charcoal-50 border-t border-charcoal-200">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="mb-8 flex items-center gap-3">
              <HelpCircle className="h-7 w-7 text-electric-600" />
              <div>
                <h2 className="font-display text-2xl font-bold text-navy-900 sm:text-3xl">
                  {service.shortName} FAQs for {location.shortName} Homeowners
                </h2>
                <p className="mt-1 text-sm text-charcoal-600">
                  Clear answers from Master Electrician Jim Whipple
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {combinedFaqs.map((faq, i) => (
                <details
                  key={i}
                  className="group rounded-xl border border-charcoal-200 bg-white p-5 shadow-card transition-all"
                >
                  <summary className="cursor-pointer font-display text-base font-bold text-navy-900 flex items-center justify-between list-none">
                    <span>{faq.question}</span>
                    <ChevronRight className="h-5 w-5 text-charcoal-400 transition-transform group-open:rotate-90 shrink-0" />
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-charcoal-700 border-t border-charcoal-100 pt-3">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Other Services in this City */}
      <section className="section-padding bg-white">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 font-display text-2xl font-bold text-navy-900 lg:text-3xl">
            Other Electrical Services in {location.shortName}, MI
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {relatedServices.map((s) => {
              const RelIcon = getServiceIcon(s.icon);
              return (
                <Link
                  key={s.slug}
                  to={`/${s.slug}-${location.slug}`}
                  className="card group block transition-all hover:border-electric-400"
                >
                  <div className="card-icon mb-3 group-hover:bg-electric-400 group-hover:text-navy-900">
                    <RelIcon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-base font-bold text-navy-900">{s.shortName}</h3>
                  <span className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-navy-700 group-hover:text-electric-600">
                    in {location.shortName} <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection
        title={`Need ${service.shortName} in ${location.shortName}? Let's Discuss Your Project.`}
        subtitle={`Call Master Electrician Jim Whipple directly at ${business.phone} for prompt local service across ${location.name}.`}
      />
    </>
  );
}
