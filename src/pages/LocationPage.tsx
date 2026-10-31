import { Link, Navigate } from 'react-router-dom';
import {
  Phone,
  MapPin,
  ArrowRight,
  ShieldCheck,
  Award,
  Clock,
  CheckCircle2,
  Building2,
  Home,
  FileText,
  Star,
  ChevronRight,
} from 'lucide-react';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import CTASection from '@/components/CTASection';
import EstimateForm from '@/components/EstimateForm';
import { getLocation } from '@/data/locations';
import { services } from '@/data/services';
import { locations } from '@/data/locations';
import { business } from '@/data/business';
import { getProjectsByCity } from '@/data/projects';
import { getLocalBusinessSchema, getFAQSchema, getBreadcrumbSchema } from '@/data/schema';

export default function LocationPage({ slug }: { slug: string }) {
  const location = getLocation(slug);

  if (!location) return <Navigate to="/404" replace />;

  const isTaylor = location.slug === 'taylor-mi';
  const nearbyLocations = locations.filter((l) => l.slug !== location.slug).slice(0, 4);
  const cityProjects = getProjectsByCity(location.slug);

  const schema = [
    getLocalBusinessSchema(),
    getFAQSchema(location.faqs),
    getBreadcrumbSchema([
      { name: 'Service Areas', path: '/service-areas' },
      { name: location.shortName, path: `/electrician-${location.slug}` },
    ]),
  ];

  return (
    <>
      <SEO
        title={`Electrician in ${location.shortName}, MI | Whipple Electric Inc`}
        description={`Looking for a licensed electrician in ${location.shortName}, MI? Whipple Electric Inc is your trusted local electrical contractor for residential electrical repair, 200A panel upgrades, and emergency dispatch. Call ${business.phone}.`}
        canonical={`/electrician-${location.slug}`}
        structuredData={schema}
      />
      <Breadcrumbs items={[{ name: 'Service Areas', path: '/service-areas' }, { name: location.shortName, path: `/electrician-${location.slug}` }]} />

      {/* Hero Section */}
      <section className="bg-navy-900 py-14 lg:py-20">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-electric-400/10 px-4 py-1.5 border border-electric-400/20">
              <MapPin className="h-5 w-5 text-electric-400" />
              <span className="text-sm font-semibold text-electric-400">
                {isTaylor
                  ? 'Headquarters: 14800 Burr St, Taylor, MI'
                  : `Dispatched from Taylor HQ (${location.dispatchDetails.distanceFromTaylorHQ}) &bull; Avg Arrival: ${location.dispatchDetails.avgResponseTime}`}
              </span>
            </div>
            <h1 className="font-display text-4xl font-bold text-white text-balance lg:text-5xl">
              Electrician in {location.name}
            </h1>
            <p className="mt-5 text-lg text-charcoal-200 leading-relaxed">
              Looking for a licensed residential electrician in {location.shortName}, MI? Whipple Electric Inc is the local electrical contractor homeowners across {location.shortName} trust for expert electrical repair, 200-amp panel upgrades, code compliance, and prompt emergency electrician service.
            </p>
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

      {/* Main Content Layout */}
      <section className="section-padding bg-white">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-8 space-y-10">
              {/* Zip Codes Served */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-charcoal-500">Zip Codes Served:</span>
                {location.zipCodes.map((zip) => (
                  <span key={zip} className="rounded-md bg-electric-100 px-2.5 py-1 text-xs font-bold text-electric-800">
                    {zip}
                  </span>
                ))}
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold text-navy-900 lg:text-3xl">
                  Residential & Commercial Electrical Contractor in {location.name}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-charcoal-700 sm:text-lg">
                  As a licensed electrical contractor serving {location.shortName}, MI, Whipple Electric Inc delivers prompt electrical repair, 200-amp panel heavy-ups, and whole-home safety inspections. {location.localContext}
                </p>
              </div>

              {/* Housing Stock & Common Challenges */}
              <div className="rounded-2xl border border-charcoal-200 bg-charcoal-50 p-6 sm:p-8">
                <div className="mb-2 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-charcoal-500">
                  <Home className="h-4 w-4 text-navy-800" />
                  <span>Housing Architecture Profile</span>
                </div>
                <h3 className="font-display text-xl font-bold text-navy-900">
                  {location.shortName} Housing Characteristics & Electrical Challenges
                </h3>

                <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 text-xs sm:text-sm">
                  <div className="rounded-xl bg-white p-4 border border-charcoal-200/80">
                    <strong className="block font-bold text-navy-900 mb-1">Era & Neighborhood Styles:</strong>
                    <p className="text-charcoal-600">{location.housingStock.era}</p>
                    <p className="mt-1 text-charcoal-600">{location.housingStock.architecturalStyle}</p>
                  </div>
                  <div className="rounded-xl bg-white p-4 border border-charcoal-200/80">
                    <strong className="block font-bold text-navy-900 mb-1">Common Wiring Hazards:</strong>
                    <ul className="list-disc list-inside space-y-1 text-charcoal-600 text-xs">
                      {location.housingStock.commonHazards.map((hazard, i) => (
                        <li key={i}>{hazard}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-4 rounded-xl bg-electric-50 p-4 border border-electric-200 text-xs text-electric-900">
                  <strong>Recommended Modernization Focus:</strong> {location.housingStock.modernizationFocus}
                </div>
              </div>

              {/* Municipal Permitting Information */}
              <div className="rounded-2xl border border-charcoal-200 bg-white p-6 sm:p-8 shadow-card">
                <div className="mb-2 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-charcoal-500">
                  <Building2 className="h-4 w-4 text-navy-800" />
                  <span>Building & Safety Compliance</span>
                </div>
                <h3 className="font-display text-xl font-bold text-navy-900">
                  {location.shortName} Municipal Permits & Inspections Handled
                </h3>
                <p className="mt-2 text-sm text-charcoal-600">
                  For major installations, service heavy-ups, and additions, we coordinate directly with the local department:
                </p>

                <div className="mt-4 rounded-xl bg-charcoal-50 p-4 border border-charcoal-200 text-xs text-charcoal-700">
                  <div className="font-bold text-navy-900 text-sm">{location.permitOffice.department}</div>
                  <div className="text-charcoal-500">{location.permitOffice.address} &bull; Tel: {location.permitOffice.phone}</div>

                  <div className="mt-3 space-y-1">
                    <strong className="text-navy-900 block">Inspection Highlights:</strong>
                    <ul className="list-disc list-inside space-y-0.5 text-charcoal-600">
                      {location.permitOffice.inspectionRequirements.map((req, i) => (
                        <li key={i}>{req}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-3 text-xs font-medium text-navy-800 border-t border-charcoal-200 pt-2">
                    <strong>Local Inspector Notes:</strong> {location.permitOffice.inspectorNotes}
                  </div>
                </div>
              </div>

              {/* Completed Projects in this City */}
              {cityProjects.length > 0 && (
                <div className="space-y-4">
                  <h3 className="font-display text-xl font-bold text-navy-900">
                    Recent Completed Work in {location.shortName}
                  </h3>
                  {cityProjects.map((proj) => (
                    <div key={proj.id} className="rounded-xl border border-charcoal-200 bg-charcoal-50 p-5">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="rounded bg-electric-100 text-electric-800 px-2.5 py-0.5 text-xs font-bold">
                          {proj.serviceName}
                        </span>
                        <span className="text-xs text-charcoal-500">{proj.completedYear} &bull; {proj.neighborhood}</span>
                      </div>
                      <h4 className="font-display text-lg font-bold text-navy-900 mt-2">{proj.title}</h4>
                      <p className="mt-2 text-sm text-charcoal-700">{proj.summary}</p>
                      <div className="mt-3 text-xs text-electric-800 font-semibold">
                        ✓ {proj.permitStatus}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Local Customer Testimonial */}
              {location.localTestimonial && (
                <div className="rounded-2xl border border-charcoal-200 bg-charcoal-50 p-6">
                  <div className="flex items-center gap-1 text-amber-500 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                    <span className="ml-2 text-xs font-bold text-navy-900">5.0 Star Local Feedback</span>
                  </div>
                  <blockquote className="font-display text-base font-semibold text-navy-900 italic">
                    "{location.localTestimonial.quote}"
                  </blockquote>
                  <div className="mt-2 text-xs text-charcoal-600">
                    <strong>{location.localTestimonial.author}</strong> &bull; {location.localTestimonial.neighborhood} &bull; {location.localTestimonial.service}
                  </div>
                </div>
              )}

              {/* Browse Services in this City */}
              <div>
                <h3 className="font-display text-xl font-bold text-navy-900">
                  Browse Specific Electrical Services in {location.shortName}
                </h3>
                <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {services.map((service) => (
                    <Link
                      key={service.slug}
                      to={`/${service.slug}-${location.slug}`}
                      className="flex items-center justify-between rounded-xl border border-charcoal-200 bg-white p-4 transition-all hover:border-electric-400 hover:shadow-card group"
                    >
                      <span className="font-semibold text-navy-900 group-hover:text-electric-700">
                        {service.name} in {location.shortName}
                      </span>
                      <ChevronRight className="h-4 w-4 text-charcoal-400 group-hover:text-electric-600" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar (4 Cols) */}
            <div className="lg:col-span-4 space-y-6">
              <div className="sticky top-28 space-y-6">
                <div className="rounded-2xl border border-charcoal-200 bg-charcoal-50 p-6 shadow-card">
                  <h3 className="font-display text-lg font-bold text-navy-900">Request an Estimate</h3>
                  <p className="mt-1 text-xs text-charcoal-600">Serving {location.shortName} and surrounding communities.</p>
                  <div className="mt-4">
                    <EstimateForm defaultLocation={`${location.shortName}, MI`} compact />
                  </div>
                </div>

                <div className="rounded-2xl bg-navy-900 p-6 text-white shadow-card">
                  <div className="text-xs font-bold uppercase tracking-wider text-electric-400">
                    Direct Phone Contact
                  </div>
                  <h4 className="font-display text-xl font-bold mt-1">
                    Talk with Jim Whipple
                  </h4>
                  <p className="mt-2 text-xs text-charcoal-300">
                    40+ years experience solving Downriver electrical issues.
                  </p>
                  <a href={`tel:${business.phoneTel}`} className="mt-4 btn-primary w-full text-center py-2.5 text-sm justify-center">
                    <Phone className="h-4 w-4" />
                    Call {business.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local FAQs */}
      <section className="section-padding bg-charcoal-50 border-t border-charcoal-200">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 font-display text-2xl font-bold text-navy-900 lg:text-3xl">
              {location.shortName} Electrical FAQs
            </h2>
            <div className="space-y-4">
              {location.faqs.map((faq, i) => (
                <details key={i} className="group rounded-xl border border-charcoal-200 bg-white p-5 shadow-card transition-all">
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

      {/* Nearby Service Areas */}
      <section className="section-padding bg-white">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 font-display text-2xl font-bold text-navy-900 lg:text-3xl">Nearby Service Areas</h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {nearbyLocations.map((loc) => (
              <Link key={loc.slug} to={`/electrician-${loc.slug}`} className="card group block text-center transition-all hover:border-electric-400">
                <MapPin className="mx-auto h-6 w-6 text-electric-500" />
                <span className="mt-2 block font-display text-sm font-bold text-navy-900">{loc.shortName}, MI</span>
                <span className="text-xs text-charcoal-500 mt-1 block">View Area</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection title={`Need an Electrician in ${location.shortName}? Let's Discuss Your Project.`} />
    </>
  );
}
