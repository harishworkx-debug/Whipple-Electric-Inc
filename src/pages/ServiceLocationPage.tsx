import { Link, Navigate } from 'react-router-dom';
import { Phone, ArrowRight, HelpCircle, CheckCircle2 } from 'lucide-react';
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

  const isMainLocation = location.slug === 'taylor-mi';
  const breadcrumbItems = isMainLocation
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
    getServiceLocationSchema(service.name, location.name, `${service.description} in ${location.name}`, slug),
    getFAQSchema(combinedFaqs),
    getBreadcrumbSchema(breadcrumbItems),
  ];

  const relatedServices = services.filter((s) => s.slug !== service.slug).slice(0, 4);
  const nearbyLocations = locations.filter((l) => l.slug !== location.slug).slice(0, 4);

  return (
    <>
      <SEO
        title={`${service.name} in ${location.name} | ${business.name}`}
        description={`${service.description} serving ${location.name}. ${business.name} provides professional electrical services. Call ${business.phone}.`}
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
                {service.name} in {location.name}
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
              <img src={image} alt={`${service.name} in ${location.name} by ${business.name}`} className="h-72 w-full object-cover lg:h-80" loading="lazy" />
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
