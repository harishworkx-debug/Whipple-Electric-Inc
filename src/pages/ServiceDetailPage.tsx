import { Link, Navigate } from 'react-router-dom';
import { Phone, CheckCircle2, AlertTriangle, ArrowRight, HelpCircle } from 'lucide-react';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import CTASection from '@/components/CTASection';
import EstimateForm from '@/components/EstimateForm';
import { getService } from '@/data/services';
import { services } from '@/data/services';
import { locations } from '@/data/locations';
import { business } from '@/data/business';
import { serviceImages } from '@/data/images';
import { getServiceIcon } from '@/components/iconMap';
import { getServiceSchema, getFAQSchema, getBreadcrumbSchema } from '@/data/schema';

export default function ServiceDetailPage({ slug }: { slug: string }) {
  const service = getService(slug);

  if (!service) return <Navigate to="/404" replace />;

  const Icon = getServiceIcon(service.icon);
  const image = serviceImages[service.slug];
  const relatedServices = services.filter((s) => s.slug !== service.slug).slice(0, 4);
  const schema = [getServiceSchema(service.name, service.longDescription, service.slug), getFAQSchema(service.faqs), getBreadcrumbSchema([{ name: 'Services', path: '/services' }, { name: service.shortName, path: `/${service.slug}` }])];

  return (
    <>
      <SEO
        title={`${service.name} in Taylor, MI | ${business.name}`}
        description={service.description}
        canonical={`/${service.slug}`}
        structuredData={schema}
      />
      <Breadcrumbs items={[{ name: 'Services', path: '/services' }, { name: service.shortName, path: `/${service.slug}` }]} />

      <section className="bg-navy-900 py-14 lg:py-20">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-electric-400/10 px-4 py-1.5">
                <Icon className="h-5 w-5 text-electric-400" />
                <span className="text-sm font-semibold text-electric-400">Electrical Service</span>
              </div>
              <h1 className="font-display text-3xl font-bold text-white text-balance lg:text-4xl">{service.name}</h1>
              <p className="mt-4 text-lg text-charcoal-200">{service.description}</p>
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
              <img src={image} alt={`${service.name} performed by Whipple Electric Inc in Taylor, Michigan`} className="h-72 w-full object-cover lg:h-80" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h2 className="font-display text-2xl font-bold text-navy-900 lg:text-3xl">About This Service</h2>
              <p className="mt-4 text-lg leading-relaxed text-charcoal-700">{service.longDescription}</p>

              <h3 className="mt-10 font-display text-xl font-bold text-navy-900">Benefits</h3>
              <ul className="mt-4 space-y-3">
                {service.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-electric-600" />
                    <span className="text-charcoal-700">{benefit}</span>
                  </li>
                ))}
              </ul>

              <h3 className="mt-10 font-display text-xl font-bold text-navy-900">Signs You May Need {service.shortName}</h3>
              <ul className="mt-4 space-y-3">
                {service.signs.map((sign, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-orange-500" />
                    <span className="text-charcoal-700">{sign}</span>
                  </li>
                ))}
              </ul>

              <h3 className="mt-10 font-display text-xl font-bold text-navy-900">Our Process</h3>
              <div className="mt-4 space-y-6">
                {service.process.map((step, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-navy-900 font-display text-lg font-bold text-electric-400">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="font-display text-lg font-bold text-navy-900">{step.title}</h4>
                      <p className="mt-1 text-charcoal-700">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-28 rounded-xl border border-charcoal-100 bg-charcoal-50 p-6">
                <h3 className="font-display text-lg font-bold text-navy-900">Request an Estimate</h3>
                <p className="mt-1 text-sm text-charcoal-600">Tell us about your project and we'll get back to you.</p>
                <EstimateForm defaultService={service.name} compact />
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
              <h2 className="font-display text-2xl font-bold text-navy-900 lg:text-3xl">Frequently Asked Questions</h2>
            </div>
            <div className="space-y-4">
              {service.faqs.map((faq, i) => (
                <details key={i} className="group rounded-xl border border-charcoal-100 bg-white p-5 shadow-card">
                  <summary className="cursor-pointer font-display text-lg font-bold text-navy-900 marker:hidden">
                    {faq.question}
                  </summary>
                  <p className="mt-3 text-charcoal-700">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 font-display text-2xl font-bold text-navy-900 lg:text-3xl">Related Services</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {relatedServices.map((s) => {
              const RelIcon = getServiceIcon(s.icon);
              return (
                <Link key={s.slug} to={`/${s.slug}`} className="card group block">
                  <div className="card-icon mb-3 group-hover:bg-electric-400 group-hover:text-navy-900">
                    <RelIcon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-base font-bold text-navy-900">{s.shortName}</h3>
                  <span className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-navy-700 group-hover:text-electric-600">
                    View {s.shortName} <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding bg-charcoal-50">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <h2 className="mb-2 font-display text-2xl font-bold text-navy-900 lg:text-3xl">Service Areas</h2>
          <p className="mb-8 text-charcoal-600">We provide {service.shortName.toLowerCase()} throughout Taylor, MI and the surrounding Metro Detroit communities.</p>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {locations.map((loc) => (
              <Link key={loc.slug} to={`/${service.slug}-${loc.slug}`} className="rounded-lg border border-charcoal-100 bg-white p-4 text-center font-semibold text-navy-800 transition-all hover:border-electric-400/40 hover:shadow-card">
                {loc.shortName}, MI
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection title={`Need ${service.shortName}? Let's Discuss Your Project.`} subtitle={`Call ${business.name} or request an estimate online. We'll help you understand your options and arrange service.`} />
    </>
  );
}
