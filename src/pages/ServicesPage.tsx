import { Link } from 'react-router-dom';
import { Phone, ShieldCheck, Award, Zap, CheckCircle2, HelpCircle, ArrowRight } from 'lucide-react';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import CTASection from '@/components/CTASection';
import ServiceCard from '@/components/ServiceCard';
import { services } from '@/data/services';
import { business } from '@/data/business';

export default function ServicesPage() {
  return (
    <>
      <SEO
        title="Electrical Services in Taylor, MI | Whipple Electric Inc"
        description="Explore the full range of residential electrical services offered by Whipple Electric Inc — troubleshooting, panel upgrades, wiring, lighting installation, safety inspections, and more in Taylor, MI."
        canonical="/services"
      />
      <Breadcrumbs items={[{ name: 'Services', path: '/services' }]} />

      <section className="bg-navy-900 py-14 lg:py-20">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-electric-400/10 px-4 py-1.5">
              <Zap className="h-4 w-4 text-electric-400" />
              <span className="text-sm font-semibold text-electric-400">Master Electrician &bull; 40+ Years Experience</span>
            </div>
            <h1 className="font-display text-4xl font-bold text-white text-balance lg:text-5xl">
              Professional Electrical Services
            </h1>
            <p className="mt-5 text-lg text-charcoal-200">
              Whipple Electric Inc provides dependable residential and light commercial electrical solutions across Taylor, Michigan and Downriver. Every installation, upgrade, and repair is executed to the highest safety and National Electrical Code (NEC) standards.
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

      {/* Services Grid */}
      <section className="section-padding bg-charcoal-50">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold text-navy-900">Comprehensive Electrical Capabilities</h2>
            <p className="mt-3 text-charcoal-600">Select a service below to learn about our diagnostic process, signs you need service, and local Downriver pricing.</p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* The Master Electrician Advantage */}
      <section className="section-padding bg-white">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-navy-900/5 px-4 py-1.5">
                <Award className="h-4 w-4 text-navy-800" />
                <span className="text-sm font-semibold text-navy-800">Master Electrician Standards</span>
              </div>
              <h2 className="font-display text-3xl font-bold text-navy-900 lg:text-4xl">
                Why Experience Matters for Your Home’s Wiring
              </h2>
              <p className="mt-4 text-lg text-charcoal-600 leading-relaxed">
                Electricity is one of the most critical systems in your home — and the least forgiving. When you hire Whipple Electric Inc, you are working directly with Jim Whipple, a licensed Master Electrician with more than 40 years of hands-on experience solving complex electrical issues in Michigan homes.
              </p>

              <div className="mt-6 space-y-4">
                {[
                  {
                    title: 'Systematic Root-Cause Diagnosis',
                    desc: 'We don’t just swap breakers; we identify the underlying ground fault, loose neutral, or overloaded branch circuit causing the issue.',
                  },
                  {
                    title: '100% Code Compliance & Permitting',
                    desc: 'Every panel upgrade and rewiring job complies with the latest Michigan Electrical Code, ensuring your insurance and home resale value stay protected.',
                  },
                  {
                    title: 'Care for Downriver Housing Stock',
                    desc: 'From 1950s Taylor ranch homes to historic Dearborn properties, we understand the quirks of mid-century wiring, ungrounded boxes, and older service drops.',
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-3.5">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-electric-600" />
                    <div>
                      <h3 className="font-display text-base font-bold text-navy-900">{item.title}</h3>
                      <p className="mt-0.5 text-sm text-charcoal-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-charcoal-200 bg-charcoal-50 p-8 shadow-card">
              <h3 className="font-display text-xl font-bold text-navy-900">What’s Included in Every Service Call</h3>
              <p className="mt-1 text-sm text-charcoal-600">Our commitment to quality, transparency, and safety on every job:</p>
              
              <ul className="mt-6 space-y-3.5">
                {[
                  'Initial visual inspection of breaker panel condition and grounding',
                  'Clear explanation of the issue with upfront repair options',
                  'Commercial-grade materials (copper conductors, trusted breaker brands)',
                  'Safety testing of voltage, polarity, and circuit load after repair',
                  'Full cleanup of job site — no leftover wire clippings or debris',
                  'Direct communication with a licensed Master Electrician',
                ].map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-charcoal-700">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-electric-100 text-electric-700 font-bold text-xs">
                      ✓
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 border-t border-charcoal-200 pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs font-semibold text-charcoal-500 uppercase tracking-wider">Ready to talk?</div>
                    <div className="font-display text-lg font-bold text-navy-900">{business.phone}</div>
                  </div>
                  <a href={`tel:${business.phoneTel}`} className="btn-primary py-2 px-4 text-sm">
                    Call Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services FAQ */}
      <section className="section-padding bg-charcoal-50">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold text-navy-900">Service Questions & Answers</h2>
            <p className="mt-3 text-charcoal-600">Got questions about scheduling, pricing, or electrical permits? Find answers below.</p>
          </div>

          <div className="mx-auto max-w-3xl space-y-4">
            {[
              {
                q: 'How do I know if my electrical panel needs a complete upgrade?',
                a: 'If your panel is over 25 years old, uses fuses, has breakers that trip frequently, or is a recalled brand (such as Federal Pacific or Zinsco), an upgrade is highly recommended. You will also need an upgrade if you are adding an EV charger, hot tub, or central AC.',
              },
              {
                q: 'Can you add grounded 3-prong outlets if my home only has 2-prong outlets?',
                a: 'Yes! Depending on your wiring, we can run dedicated ground wires, rewire circuits, or install GFCI receptacles that provide personal shock protection in compliance with NEC 406.4(D).',
              },
              {
                q: 'Do you provide commercial electrical work for local small businesses?',
                a: 'Yes, we handle commercial electrical installations, lighting retrofits, dedicated circuits, and maintenance for retail spaces, offices, and light industrial facilities across Wayne County.',
              },
              {
                q: 'What should I do if an outlet begins sparking or smoking?',
                a: `Immediately unplug whatever is connected if safe to do so, turn off the corresponding circuit breaker at the main panel, and call Whipple Electric Inc at ${business.phone} immediately. Do not attempt to use the outlet.`,
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
