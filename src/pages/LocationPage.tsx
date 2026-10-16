import { Link, Navigate } from 'react-router-dom';
import { Phone, MapPin, ArrowRight } from 'lucide-react';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import CTASection from '@/components/CTASection';
import EstimateForm from '@/components/EstimateForm';
import { getLocation } from '@/data/locations';
import { services } from '@/data/services';
import { locations } from '@/data/locations';
import { business } from '@/data/business';
import { getLocalBusinessSchema, getFAQSchema, getBreadcrumbSchema } from '@/data/schema';

export default function LocationPage({ slug }: { slug: string }) {
  const location = getLocation(slug);

  if (!location) return <Navigate to="/404" replace />;

  const nearbyLocations = locations.filter((l) => l.slug !== location.slug).slice(0, 4);
  const schema = [getLocalBusinessSchema(), getFAQSchema(location.faqs), getBreadcrumbSchema([{ name: 'Service Areas', path: '/service-areas' }, { name: location.shortName, path: `/electrician-${location.slug}` }])];

  return (
    <>
      <SEO
        title={`Electrician in ${location.name} | ${business.name}`}
        description={`Professional residential electrician serving ${location.name}. Whipple Electric Inc provides electrical repairs, panel upgrades, wiring, lighting installation, and more. Call ${business.phone}.`}
        canonical={`/electrician-${location.slug}`}
        structuredData={schema}
      />
      <Breadcrumbs items={[{ name: 'Service Areas', path: '/service-areas' }, { name: location.shortName, path: `/electrician-${location.slug}` }]} />

      <section className="bg-navy-900 py-14 lg:py-20">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-electric-400/10 px-4 py-1.5">
              <MapPin className="h-5 w-5 text-electric-400" />
              <span className="text-sm font-semibold text-electric-400">Service Area</span>
            </div>
            <h1 className="font-display text-4xl font-bold text-white text-balance lg:text-5xl">
              Electrician in {location.name}
            </h1>
            <p className="mt-5 text-lg text-charcoal-200">{location.description}</p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <a href={`tel:${business.phoneTel}`} className="btn-primary">
                <Phone className="h-5 w-5" />
                Call {business.phone}
              </a>
              <Link to="/request-an-estimate" className="btn-outline-white">
                Request an Estimate
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h2 className="font-display text-2xl font-bold text-navy-900 lg:text-3xl">
                Electrical Services in {location.shortName}
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-charcoal-700">{location.localContext}</p>

              <h3 className="mt-10 font-display text-xl font-bold text-navy-900">Services We Offer in {location.shortName}</h3>
              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {services.map((service) => (
                  <Link
                    key={service.slug}
                    to={`/${service.slug}-${location.slug}`}
                    className="flex items-center justify-between rounded-lg border border-charcoal-100 bg-white p-4 transition-all hover:border-electric-400/40 hover:shadow-card"
                  >
                    <span className="font-semibold text-navy-800">{service.shortName}</span>
                    <ArrowRight className="h-4 w-4 text-charcoal-400" />
                  </Link>
                ))}
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-28 rounded-xl border border-charcoal-100 bg-charcoal-50 p-6">
                <h3 className="font-display text-lg font-bold text-navy-900">Request an Estimate</h3>
                <p className="mt-1 text-sm text-charcoal-600">Serving {location.shortName} and nearby areas.</p>
                <EstimateForm defaultLocation={location.shortName + ', MI'} compact />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-charcoal-50">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 font-display text-2xl font-bold text-navy-900 lg:text-3xl">{location.shortName} FAQs</h2>
            <div className="space-y-4">
              {location.faqs.map((faq, i) => (
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
          <h2 className="mb-8 font-display text-2xl font-bold text-navy-900 lg:text-3xl">Nearby Service Areas</h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {nearbyLocations.map((loc) => (
              <Link key={loc.slug} to={`/electrician-${loc.slug}`} className="card group block text-center">
                <MapPin className="mx-auto h-6 w-6 text-electric-500" />
                <span className="mt-2 block font-display text-sm font-bold text-navy-900">{loc.shortName}, MI</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection title={`Need an Electrician in ${location.shortName}? Let's Discuss Your Project.`} />
    </>
  );
}
