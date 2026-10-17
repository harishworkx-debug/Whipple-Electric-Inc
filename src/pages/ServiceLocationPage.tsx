import { Link, Navigate } from 'react-router-dom';
import { Phone, ArrowRight, HelpCircle, CheckCircle2, MapPin } from 'lucide-react';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import CTASection from '@/components/CTASection';
import EstimateForm from '@/components/EstimateForm';
import { services, getService } from '@/data/services';
import { locations, getLocation } from '@/data/locations';
import { business } from '@/data/business';
import { serviceImages } from '@/data/images';
import { getServiceIcon } from '@/components/iconMap';
import { getServiceLocationSchema, getFAQSchema, getBreadcrumbSchema } from '@/data/schema';

interface ServiceLocationSEO {
  h1: string;
  title: string;
  description: string;
  imageAlt: string;
}

const taylorServiceMetadata: Record<string, ServiceLocationSEO> = {
  'electrical-troubleshooting': {
    h1: 'Electrical Troubleshooting & Repair Services in Taylor, MI',
    title: 'Electrical Troubleshooting in Taylor, MI | Whipple Electric Inc',
    description: `Diagnose and resolve flickering lights, dead outlets, or tripping breakers with Master Electrician Jim Whipple in Taylor, MI. 40+ years experience. Call ${business.phone}.`,
    imageAlt: 'Master Electrician diagnosing circuit faults and voltage drop using a multimeter in Taylor, Michigan',
  },
  'electrical-panel-upgrades': {
    h1: 'Electrical Panel Upgrade Services in Taylor, MI',
    title: 'Electrical Panel Upgrades in Taylor, MI | Whipple Electric Inc',
    description: `Upgrade your Taylor, MI home from 60A/100A to 200-amp service. Code-compliant breaker box replacements by licensed Master Electrician. Call ${business.phone}.`,
    imageAlt: 'Licensed electrician wiring and installing a modern 200-amp breaker box panel in Taylor, MI',
  },
  'circuit-breaker-repair': {
    h1: 'Circuit Breaker Repair & Replacement in Taylor, MI',
    title: 'Circuit Breaker Repair in Taylor, MI | Whipple Electric Inc',
    description: `Repeatedly tripping breaker or burning smell in your panel? Safe breaker replacement and overload diagnostics in Taylor, MI. Call ${business.phone}.`,
    imageAlt: 'Electrician replacing a faulty, hot circuit breaker in an electrical panel in Taylor, MI',
  },
  'electrical-wiring': {
    h1: 'Residential Electrical Wiring & Rewiring in Taylor, MI',
    title: 'Electrical Wiring & Rewiring in Taylor, MI | Whipple Electric Inc',
    description: `Whole-house rewiring, aluminum wire corrections, and dedicated circuit installation for Taylor, MI homes. 40+ years experience. Call ${business.phone}.`,
    imageAlt: 'Safe copper electrical wiring and junction box installation inside wall studs in Taylor, MI',
  },
  'outlet-switch-installation': {
    h1: 'Outlet & Switch Installation Services in Taylor, MI',
    title: 'Outlet & Switch Installation in Taylor, MI | Whipple Electric Inc',
    description: `Upgrade to 3-prong grounded receptacles, kitchen/bath GFCI outlets, and smart dimmers in Taylor, MI. Safe code compliance. Call ${business.phone}.`,
    imageAlt: 'Professional installation of tamper-resistant GFCI safety receptacle in Taylor, MI',
  },
  'lighting-installation': {
    h1: 'Indoor & Outdoor Lighting Installation in Taylor, MI',
    title: 'Lighting Installation in Taylor, MI | Whipple Electric Inc',
    description: `Recessed LED lighting, chandeliers, security floodlights, and exterior landscape illumination installed cleanly in Taylor, MI. Call ${business.phone}.`,
    imageAlt: 'Custom recessed ceiling lighting and warm illumination layout in a Taylor, MI residence',
  },
  'ceiling-fan-installation': {
    h1: 'Ceiling Fan Installation & Wiring in Taylor, MI',
    title: 'Ceiling Fan Installation in Taylor, MI | Whipple Electric Inc',
    description: `Secure fan-rated ceiling box installation, vibration balancing, and wall switch controls for Taylor, MI homeowners. Call ${business.phone}.`,
    imageAlt: 'Master Electrician mounting a balanced ceiling fan to a structural fan-rated junction box in Taylor, MI',
  },
  'electrical-safety-inspection': {
    h1: 'Electrical Safety Inspection Services in Taylor, MI',
    title: 'Electrical Safety Inspection in Taylor, MI | Whipple Electric Inc',
    description: `Buying or renovating a Taylor home? Comprehensive electrical inspections covering panels, wiring, grounding, and code compliance. Call ${business.phone}.`,
    imageAlt: 'Electrician performing full code-compliance and safety load inspection on Taylor, MI residential wiring',
  },
  'commercial-electrical': {
    h1: 'Commercial Electrical Services in Taylor, MI',
    title: 'Commercial Electrician in Taylor, MI | Whipple Electric Inc',
    description: `Commercial repairs, 3-phase circuits, retail lighting, and panel maintenance for Taylor, MI businesses. Minimal downtime. Call ${business.phone}.`,
    imageAlt: 'Commercial electrical switchgear and circuit distribution servicing in Taylor, Michigan',
  },
  'renovation-electrical': {
    h1: 'Renovation & Remodel Electrical Services in Taylor, MI',
    title: 'Renovation Electrical Services in Taylor, MI | Whipple Electric Inc',
    description: `Rough-in wiring, appliance circuits, and finish trim for kitchen, bath, and basement remodels in Taylor, MI. Call ${business.phone}.`,
    imageAlt: 'Kitchen remodel electrical rough-in and dedicated appliance circuit installation in Taylor, MI',
  },
};

function getLocalServiceInsight(serviceSlug: string, locationSlug: string, locName: string, svcName: string) {
  const serviceAngles: Record<string, string> = {
    'electrical-troubleshooting': `In ${locName}, older residential circuits frequently suffer from voltage drop, intermittent ground faults, and loose terminal connections that cause lights to flicker when central air conditioners or appliances turn on. Our diagnostic process uses calibrated digital multimeters and thermal imaging to trace faults behind finished walls without unnecessary drywall damage.`,
    'electrical-panel-upgrades': `Upgrading to a modern 200-amp circuit breaker panel in ${locName} is essential for homes running modern loads like Level 2 EV chargers, central heat pumps, and induction ranges. We replace obsolete fuse boxes, Federal Pacific, or Zinsco panels with code-compliant Eaton or Square D breaker boxes, coordinating utility disconnects and municipal electrical permits directly.`,
    'circuit-breaker-repair': `When a circuit breaker in ${locName} trips repeatedly, will not reset, or feels unusually warm, it signals a serious circuit overload, short circuit, or internal busbar degradation. We test branch circuit amp draw under full load, replace failing breakers with exact manufacturer-matched components, and ensure total safety.`,
    'electrical-wiring': `Many residences in ${locName} feature legacy ungrounded two-wire circuits, aging cloth insulation, or aluminum branch wiring that poses safety hazards over time. We plan and execute partial or whole-home rewiring, install properly sized grounded Romex, and balance circuits to current Michigan Residential Code standards.`,
    'outlet-switch-installation': `Modernizing two-prong ungrounded receptacles in ${locName} with code-compliant GFCI (Ground Fault Circuit Interrupter) outlets provides vital shock protection in kitchens, bathrooms, garages, and outdoor locations. We also install tamper-resistant receptacles, smart dimmers, and dedicated 20-amp small appliance branch circuits.`,
    'lighting-installation': `Custom recessed LED pot lights, under-cabinet task lighting, and exterior security floodlights dramatically improve the ambiance, functionality, and energy efficiency of ${locName} homes. We handle careful ceiling layout, non-destructive wire fishing through joists, and dimmer switch calibration.`,
    'ceiling-fan-installation': `Installing a ceiling fan in ${locName} requires securing a structural fan-rated metal ceiling box that can withstand continuous vibration and heavy motor weight. We inspect ceiling framing, route dedicated dual wall switch controls or remotes, and dynamically balance blades for quiet, wobble-free comfort.`,
    'electrical-safety-inspection': `Whether buying, selling, or renovating a property in ${locName}, our comprehensive Electrical Safety Inspection evaluates panel labeling, grounding electrode conductors, branch circuit polarity, GFCI/AFCI protection, and smoke detector coverage, delivering a prioritized safety summary.`,
    'commercial-electrical': `For small-to-mid commercial properties and retail facilities in ${locName}, we provide reliable electrical repairs, dedicated machinery drops, three-phase panel maintenance, and commercial LED retrofits designed to minimize downtime during business hours.`,
    'renovation-electrical': `During kitchen, bathroom, or basement remodeling projects in ${locName}, we handle complete electrical rough-ins before drywall installation, wire dedicated appliance circuits, and finish with clean trim plates, ensuring all municipal permit inspections pass cleanly.`,
  };

  const locationAngles: Record<string, string> = {
    'taylor-mi': `Because Whipple Electric Inc is headquartered right here in Taylor (14800 Burr St), our Master Electrician has intimate familiarity with local post-war ranch homes, mid-century wiring quirks, and City of Taylor Building Department inspection procedures.`,
    'southgate-mi': `Southgate's 1950s–1970s subdivisions frequently feature original 100-amp panels that struggle with modern electrical loads. Dispatched directly from adjacent Taylor, we provide rapid response to all Southgate neighborhoods.`,
    'allen-park-mi': `Allen Park's classic brick bungalows often have ungrounded two-prong outlets and aging service drops. We use specialized non-destructive wire fishing techniques that protect plaster walls and vintage architectural moldings.`,
    'dearborn-mi': `In Dearborn's historic pre-war and mid-century neighborhoods, homes often contain complex legacy wiring, rigid metal conduit runs, and knob-and-tube remnants that require seasoned Master Electrician expertise to modernize safely.`,
    'dearborn-heights-mi': `Dearborn Heights homeowners updating kitchens and finishing basements rely on our code-compliant circuit additions, AFCI safety breakers, and sub-panel installations coordinated with city engineering codes.`,
    'romulus-mi': `Near Romulus transport and airport corridors, long-term structural vibration can loosen mechanical panel connections over decades. We provide terminal torquing, main service replacements, and detached pole barn wiring.`,
    'wyandotte-mi': `Wyandotte's historic riverfront homes require delicate care to preserve architectural character while eliminating outdated fuse boxes and installing corrosion-resistant outdoor lighting that withstands riverfront humidity.`,
    'lincoln-park-mi': `In Lincoln Park's compact post-war starter homes, crowded double-tapped panels and ungrounded bedroom outlets are common. We deliver affordable, safety-first electrical modernization that passes real estate appraisal inspections.`,
    'trenton-mi': `Trenton's riverfront properties demand weather-rated outdoor GFCI disconnects, dock power feeds, and high-capacity panel upgrades to support modern heat pumps and emergency generator transfer switches.`,
    'detroit-mi': `In Southwest Detroit, our focused residential services help homeowners evaluate legacy wiring, replace obsolete 60-amp fuse boxes, and bring historic properties into compliance with modern safety insurance standards.`,
  };

  const svcText = serviceAngles[serviceSlug] || `Professional ${svcName} executed to the highest National Electrical Code standards.`;
  const locText = locationAngles[locationSlug] || `Serving homeowners across ${locName} with licensed Master Electrician craftsmanship.`;

  return {
    heading: `Local ${svcName} Expertise for ${locName} Properties`,
    body: `${svcText} ${locText}`,
  };
}

export default function ServiceLocationPage({ slug }: { slug: string }) {
  let matchedService: ReturnType<typeof getService> = undefined;
  let matchedLocation: ReturnType<typeof getLocation> = undefined;

  for (const loc of locations) {
    if (slug.endsWith('-' + loc.slug)) {
      const serviceSlug = slug!.slice(0, slug!.length - loc.slug.length - 1);
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

  const combinedFaqs = [
    ...service.faqs.slice(0, 2),
    ...location.faqs.slice(0, 1),
  ];

  const isTaylor = location.slug === 'taylor-mi';
  const taylorMeta = isTaylor ? taylorServiceMetadata[service.slug] : undefined;

  const pageTitle = taylorMeta ? taylorMeta.title : `${service.name} in ${location.name} | ${business.name}`;
  const pageDescription = taylorMeta
    ? taylorMeta.description
    : `${service.description} serving ${location.name}. ${business.name} provides professional electrical services. Call ${business.phone}.`;
  const h1Title = taylorMeta ? taylorMeta.h1 : `${service.name} in ${location.name}`;
  const imageAltText = taylorMeta
    ? taylorMeta.imageAlt
    : `${service.name} in ${location.name} by ${business.name}`;

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

  const schema = [
    getServiceLocationSchema(service.name, location.name, pageDescription, slug),
    getFAQSchema(combinedFaqs),
    getBreadcrumbSchema(breadcrumbItems),
  ];

  const relatedServices = services.filter((s) => s.slug !== service.slug).slice(0, 4);
  const nearbyLocations = locations.filter((l) => l.slug !== location.slug).slice(0, 4);
  const localInsight = getLocalServiceInsight(service.slug, location.slug, location.shortName, service.shortName);

  return (
    <>
      <SEO
        title={pageTitle}
        description={pageDescription}
        canonical={`/${service.slug}-${location.slug}`}
        structuredData={schema}
      />
      <Breadcrumbs items={breadcrumbItems} />

      <section className="bg-navy-900 py-14 lg:py-20">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-electric-400/10 px-4 py-1.5">
                <Icon className="h-5 w-5 text-electric-400" />
                <span className="text-sm font-semibold text-electric-400">{location.shortName}, MI</span>
              </div>
              <h1 className="font-display text-3xl font-bold text-white text-balance lg:text-4xl">
                {h1Title}
              </h1>
              <p className="mt-4 text-lg text-charcoal-200">{service.description}</p>
              <p className="mt-3 text-base text-charcoal-300">{location.localContext}</p>
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
            <div className="overflow-hidden rounded-2xl shadow-navy-lg">
              <img src={image} alt={imageAltText} className="h-72 w-full object-cover lg:h-80" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h2 className="font-display text-2xl font-bold text-navy-900 lg:text-3xl">
                {service.shortName} in {location.shortName}
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-charcoal-700">{service.longDescription}</p>

              {/* Unique Local Service Insight Card */}
              <div className="mt-8 rounded-2xl border border-electric-400/30 bg-electric-400/5 p-6 shadow-sm">
                <div className="mb-2 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-electric-700">
                  <CheckCircle2 className="h-4 w-4 text-electric-600" />
                  <span>Master Electrician Local Insight</span>
                </div>
                <h3 className="font-display text-xl font-bold text-navy-900">
                  {localInsight.heading}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-charcoal-700">
                  {localInsight.body}
                </p>
              </div>

              {service.benefits && service.benefits.length > 0 && (
                <>
                  <h3 className="mt-8 font-display text-xl font-bold text-navy-900">Key Benefits</h3>
                  <ul className="mt-4 space-y-2.5">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-electric-600" />
                        <span className="text-charcoal-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}

              <h3 className="mt-8 font-display text-xl font-bold text-navy-900">Serving {location.shortName} Homeowners</h3>
              <p className="mt-3 text-charcoal-700">{location.description}</p>
              <div className="mt-4">
                <Link
                  to={`/electrician-${location.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-bold text-navy-800 transition-colors hover:text-electric-600"
                >
                  <MapPin className="h-4 w-4 text-electric-600" />
                  <span>Explore all electrician services in {location.shortName}, MI</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <h3 className="mt-8 font-display text-xl font-bold text-navy-900">Signs You May Need This Service</h3>
              <ul className="mt-4 space-y-2.5">
                {service.signs.slice(0, 5).map((sign, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-electric-500" />
                    <span className="text-charcoal-700">{sign}</span>
                  </li>
                ))}
              </ul>

              <h3 className="mt-8 font-display text-xl font-bold text-navy-900">How It Works</h3>
              <div className="mt-4 space-y-5">
                {service.process.map((step, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-navy-900 font-display text-base font-bold text-electric-400">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="font-display text-base font-bold text-navy-900">{step.title}</h4>
                      <p className="mt-1 text-sm text-charcoal-700">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Service Checklist & Local Guarantee */}
              <div className="mt-10 rounded-2xl border border-charcoal-200 bg-charcoal-50 p-6 sm:p-8">
                <h3 className="font-display text-xl font-bold text-navy-900">
                  What’s Included with Your {service.shortName} in {location.shortName}
                </h3>
                <p className="mt-1 text-sm text-charcoal-600">
                  We treat your home with the highest level of care, adhering strictly to Michigan residential electrical codes.
                </p>

                <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 text-sm text-charcoal-700">
                  <div className="flex items-start gap-2.5">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-electric-100 text-xs font-bold text-electric-700">✓</span>
                    <span>Direct diagnosis by a Master Electrician</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-electric-100 text-xs font-bold text-electric-700">✓</span>
                    <span>Upfront estimate with zero hidden fees</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-electric-100 text-xs font-bold text-electric-700">✓</span>
                    <span>100% Code-compliant materials & breakers</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-electric-100 text-xs font-bold text-electric-700">✓</span>
                    <span>{location.shortName} municipal permits handled</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-electric-100 text-xs font-bold text-electric-700">✓</span>
                    <span>Safety load testing on all affected circuits</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-electric-100 text-xs font-bold text-electric-700">✓</span>
                    <span>Job site left completely clean and tidy</span>
                  </div>
                </div>

                <div className="mt-6 border-t border-charcoal-200/80 pt-4 flex flex-wrap items-center justify-between gap-3 text-xs text-charcoal-600">
                  <span>Serving {location.name} (Zip Codes: {location.zipCodes.join(', ')})</span>
                  <a href={`tel:${business.phoneTel}`} className="font-bold text-electric-700 hover:underline">
                    Call {business.phone} for Immediate Questions
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-28 rounded-xl border border-charcoal-100 bg-charcoal-50 p-6">
                <h3 className="font-display text-lg font-bold text-navy-900">Request an Estimate</h3>
                <p className="mt-1 text-sm text-charcoal-600">{service.shortName} in {location.shortName}, MI</p>
                <EstimateForm defaultService={service.name} defaultLocation={`${location.shortName}, MI`} compact />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-charcoal-50">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="mb-8 flex items-center gap-3">
              <HelpCircle className="h-7 w-7 text-electric-600" />
              <h2 className="font-display text-2xl font-bold text-navy-900 lg:text-3xl">FAQs</h2>
            </div>
            <div className="space-y-4">
              {combinedFaqs.map((faq, i) => (
                <details key={i} className="group rounded-xl border border-charcoal-100 bg-white p-5 shadow-card">
                  <summary className="cursor-pointer font-display text-lg font-bold text-navy-900">{faq.question}</summary>
                  <p className="mt-3 text-charcoal-700">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 font-display text-2xl font-bold text-navy-900 lg:text-3xl">Other Services in {location.shortName}</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {relatedServices.map((s) => {
              const RelIcon = getServiceIcon(s.icon);
              return (
                <Link key={s.slug} to={`/${s.slug}-${location.slug}`} className="card group block">
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

      <section className="section-padding bg-charcoal-50">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 font-display text-2xl font-bold text-navy-900 lg:text-3xl">{service.shortName} in Nearby Areas</h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {nearbyLocations.map((loc) => (
              <Link key={loc.slug} to={`/${service.slug}-${loc.slug}`} className="card group block text-center">
                <span className="block font-display text-sm font-bold text-navy-900">{loc.shortName}, MI</span>
                <span className="mt-1 inline-flex items-center gap-1 text-xs font-semibold text-charcoal-500 group-hover:text-electric-600">
                  {service.shortName} <ArrowRight className="h-3 w-3" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection title={`Need ${service.shortName} in ${location.shortName}? Let's Discuss Your Project.`} />
    </>
  );
}
