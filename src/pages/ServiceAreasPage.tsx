import { Link } from 'react-router-dom';
import { MapPin, ArrowRight, Phone, ShieldCheck, Clock, CheckCircle2 } from 'lucide-react';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import CTASection from '@/components/CTASection';
import { locations } from '@/data/locations';
import { business } from '@/data/business';
import { getLocalBusinessSchema } from '@/data/schema';

export default function ServiceAreasPage() {
  return (
    <>
      <SEO
        title="Service Areas | Whipple Electric Inc - Taylor, MI & Metro Detroit"
        description="Whipple Electric Inc serves homeowners in Taylor, MI and the surrounding Metro Detroit area. View our service areas and find an electrician near you."
        canonical="/service-areas"
        structuredData={getLocalBusinessSchema()}
      />
      <Breadcrumbs items={[{ name: 'Service Areas', path: '/service-areas' }]} />

      <section className="bg-navy-900 py-14 lg:py-20">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-electric-400/10 px-4 py-1.5">
              <MapPin className="h-4 w-4 text-electric-400" />
              <span className="text-sm font-semibold text-electric-400">Wayne County & Downriver Coverage</span>
            </div>
            <h1 className="font-display text-4xl font-bold text-white text-balance lg:text-5xl">
              Our Service Areas
            </h1>
            <p className="mt-5 text-lg text-charcoal-200">
              Whipple Electric Inc is headquartered in Taylor, Michigan. For over 40 years, Master Electrician Jim Whipple has provided prompt, licensed, and insured residential electrical services across Downriver and Metro Detroit communities.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
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

      {/* Trust Highlights */}
      <section className="border-b border-charcoal-100 bg-white py-8">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 text-center">
            <div className="flex flex-col items-center">
              <div className="card-icon mb-2 bg-electric-100 text-electric-700">
                <MapPin className="h-6 w-6" />
              </div>
              <h3 className="font-display text-base font-bold text-navy-900">Local Taylor, MI Base</h3>
              <p className="mt-1 text-xs text-charcoal-600">Quick dispatch across all Downriver cities</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="card-icon mb-2 bg-electric-100 text-electric-700">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="font-display text-base font-bold text-navy-900">24/7 Availability</h3>
              <p className="mt-1 text-xs text-charcoal-600">Emergency support for serious electrical hazards</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="card-icon mb-2 bg-electric-100 text-electric-700">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="font-display text-base font-bold text-navy-900">Local Municipal Permits</h3>
              <p className="mt-1 text-xs text-charcoal-600">Familiar with Wayne County building departments</p>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Cards */}
      <section className="section-padding bg-charcoal-50">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold text-navy-900">Communities We Proudly Serve</h2>
            <p className="mt-2 text-charcoal-600">Click on any city below to explore specific electrical services, common home electrical challenges, and local reviews.</p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {locations.map((location) => (
              <Link
                key={location.slug}
                to={`/electrician-${location.slug}`}
                className="card group block"
              >
                <div className="card-icon mb-4 group-hover:bg-electric-400 group-hover:text-navy-900">
                  <MapPin className="h-7 w-7" />
                </div>
                <h2 className="font-display text-xl font-bold text-navy-900">{location.name}</h2>
                <p className="mt-2 text-sm leading-relaxed text-charcoal-600 line-clamp-3">{location.description}</p>
                
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {location.zipCodes.map((zip) => (
                    <span key={zip} className="rounded-md bg-charcoal-100 px-2 py-0.5 text-xs font-medium text-charcoal-700">
                      {zip}
                    </span>
                  ))}
                </div>

                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-700 transition-all group-hover:gap-2.5 group-hover:text-electric-600">
                  Electrician in {location.shortName}
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Deep Downriver Housing Context */}
      <section className="section-padding bg-white">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-display text-3xl font-bold text-navy-900 text-center">Understanding Downriver Home Electrical Systems</h2>
            <p className="mt-4 text-center text-charcoal-600 leading-relaxed">
              Much of Downriver Metro Detroit grew rapidly in the mid-20th century to support the automotive and manufacturing industries. As a result, homes in Taylor, Southgate, Allen Park, Lincoln Park, and Wyandotte share unique electrical characteristics that require experienced hands.
            </p>

            <div className="mt-10 space-y-6">
              <div className="rounded-xl border border-charcoal-200 bg-charcoal-50 p-6">
                <h3 className="font-display text-lg font-bold text-navy-900">Post-War Mid-Century Ranches (1950s–1970s)</h3>
                <p className="mt-2 text-sm text-charcoal-700 leading-relaxed">
                  Many homes in Taylor, Southgate, and Allen Park were built with 60-amp or 100-amp service, two-wire ungrounded systems, and sometimes aluminum branch circuits. Today’s households run central air conditioning, modern refrigerators, dishwashers, and electronics that frequently overwhelm these legacy configurations.
                </p>
              </div>

              <div className="rounded-xl border border-charcoal-200 bg-charcoal-50 p-6">
                <h3 className="font-display text-lg font-bold text-navy-900">Historic & Riverfront Properties (Dearborn & Wyandotte)</h3>
                <p className="mt-2 text-sm text-charcoal-700 leading-relaxed">
                  Homes in older neighborhoods often feature knob-and-tube remnants, thick plaster walls requiring specialized non-invasive wire fishing, and outdated fuse panels. We take extra care to preserve architectural character while bringing wiring up to modern National Electrical Code standards.
                </p>
              </div>

              <div className="rounded-xl border border-charcoal-200 bg-charcoal-50 p-6">
                <h3 className="font-display text-lg font-bold text-navy-900">Commercial & Industrial Corridors (Romulus, Trenton & Detroit)</h3>
                <p className="mt-2 text-sm text-charcoal-700 leading-relaxed">
                  Near airport and industrial corridors, high vibration and heavy utility loads can loosen terminal screws over decades. We provide comprehensive safety inspections and industrial-grade torque verification to prevent thermal runaway.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area FAQs */}
      <section className="section-padding bg-charcoal-50">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold text-navy-900">Service Area FAQs</h2>
            <p className="mt-2 text-charcoal-600">Answers to questions about coverage, scheduling, and travel.</p>
          </div>

          <div className="mx-auto max-w-3xl space-y-4">
            {[
              {
                q: 'Do you charge extra travel fees for cities outside of Taylor?',
                a: 'No. All Downriver communities (Taylor, Southgate, Allen Park, Dearborn, Romulus, Wyandotte, Lincoln Park, Trenton, etc.) are part of our standard local service area with transparent, consistent pricing.',
              },
              {
                q: 'What if my city is right on the border of your service area?',
                a: `If you live in a neighboring Wayne County community not explicitly listed, give us a call at ${business.phone}. We frequently accommodate homeowners throughout the wider Metro Detroit area.`,
              },
              {
                q: 'Do you work directly with my city’s building inspector?',
                a: 'Yes. Every municipality has its own permit requirements. We pull required electrical permits and schedule final inspections directly with city officials so you do not have to worry about bureaucratic delays.',
              },
            ].map((faq, i) => (
              <details key={i} className="group rounded-xl border border-charcoal-200 bg-white p-5 shadow-card">
                <summary className="cursor-pointer font-display text-base font-bold text-navy-900 marker:hidden">
                  {faq.q}
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-charcoal-700">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
