import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  ShieldCheck,
  Award,
  Zap,
  CheckCircle2,
  HelpCircle,
  ArrowRight,
  MapPin,
  Clock,
  Sparkles,
  Calendar,
  Wrench,
  ChevronRight,
  FileCheck,
} from 'lucide-react';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import CTASection from '@/components/CTASection';
import { services } from '@/data/services';
import { locations } from '@/data/locations';
import { business } from '@/data/business';
import { completedProjects } from '@/data/projects';
import { serviceImages } from '@/data/images';
import { getServiceIcon } from '@/components/iconMap';

export default function ServicesPage() {
  const [activeFaqCategory, setActiveFaqCategory] = useState<'all' | 'panels' | 'wiring' | 'outlets' | 'troubleshooting'>('all');

  // Featured project spotlights for the gallery
  const featuredProjects = completedProjects.slice(0, 4);

  // Grouped service-specific FAQs
  const categorizedFaqs = [
    {
      category: 'panels',
      categoryLabel: 'Panel Upgrades',
      q: 'How much does a 200-amp electrical panel upgrade cost in Taylor and Downriver?',
      a: 'A residential 200-amp panel upgrade in Taylor and surrounding Downriver communities typically ranges from $2,200 to $3,800. The cost depends on whether your exterior meter socket must be upgraded, overhead vs. underground utility feed, mast height, and municipal permit fees. We provide detailed, upfront estimates on site before any work begins.',
    },
    {
      category: 'panels',
      categoryLabel: 'Panel Upgrades',
      q: 'Why are Federal Pacific Stab-Lok and Zinsco panels considered hazardous?',
      a: 'Extensive testing by the Consumer Product Safety Commission (CPSC) and independent laboratories revealed that Federal Pacific Stab-Lok and Zinsco breakers fail to trip in 25% to 60% of overcurrent conditions. Instead of shutting off power, they often weld to the busbar, leading to catastrophic panel fires. Many Michigan insurance companies refuse coverage until these panels are replaced.',
    },
    {
      category: 'wiring',
      categoryLabel: 'Wiring & Rewiring',
      q: 'Can you rewire an older Downriver home without tearing down original plaster walls?',
      a: 'Yes! Master Electrician Jim Whipple uses specialized flexible drill bits, fiberglass fish rods, and strategic access points through crawlspaces and attics to route new copper NM-B Romex. We preserve historic plaster, crown moldings, and vintage woodwork with minimal drywall disruption.',
    },
    {
      category: 'wiring',
      categoryLabel: 'Wiring & Rewiring',
      q: 'What is the danger of aluminum wiring installed in 1960s and 1970s homes?',
      a: 'Aluminum branch wiring expands and contracts at a 30% higher rate than copper. Over time, this thermal cycling loosens terminal screws, causing oxidation and high-resistance micro-arcing that can ignite wall framing. We remediate aluminum wiring using CPSC-approved AlumiConn mechanical lug pigtails or complete copper rewiring.',
    },
    {
      category: 'outlets',
      categoryLabel: 'Outlets & GFCI',
      q: 'Can you convert two-prong ungrounded outlets to modern three-prong receptacles?',
      a: 'Yes. Per National Electrical Code (NEC 406.4(D)), we can install Ground Fault Circuit Interrupter (GFCI) receptacles on ungrounded two-wire circuits. This provides full personal shock protection for electronics, laptops, and appliances, marked with a "No Equipment Ground" safety label.',
    },
    {
      category: 'troubleshooting',
      categoryLabel: 'Troubleshooting & Repairs',
      q: 'Why does my circuit breaker buzz or trip repeatedly when appliances run?',
      a: 'Buzzing is typically caused by extreme electrical overload vibrating the breaker contacts or micro-arcing against a pitted panel busbar. Persistent tripping indicates either a genuine overload (drawing more amps than the circuit rating) or a direct short circuit. We diagnose the root cause with clamp meters and thermal imaging.',
    },
  ];

  const filteredFaqs = activeFaqCategory === 'all'
    ? categorizedFaqs
    : categorizedFaqs.filter((f) => f.category === activeFaqCategory);

  return (
    <>
      <SEO
        title="Professional Electrical Services | Whipple Electric Inc | Taylor, MI"
        description="Comprehensive residential & commercial electrical services in Taylor, MI & Downriver. Panel upgrades, rewiring, troubleshooting, outlets & lighting by Master Electrician Jim Whipple."
        canonical="/services"
      />
      <Breadcrumbs items={[{ name: 'Services', path: '/services' }]} />

      {/* Hero Section */}
      <section className="bg-navy-900 py-14 lg:py-20">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-electric-400/10 px-4 py-1.5 border border-electric-400/20">
              <Zap className="h-4 w-4 text-electric-400" />
              <span className="text-sm font-semibold text-electric-400">Master Electrician &bull; 40+ Years of Craftsmanship</span>
            </div>
            <h1 className="font-display text-4xl font-bold text-white text-balance sm:text-5xl lg:text-6xl">
              Professional Electrical Services
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-charcoal-200">
              Whipple Electric Inc delivers dependable residential and commercial electrical solutions across Taylor, Michigan and all surrounding Downriver communities. Every installation, panel upgrade, and repair is executed personally by licensed Master Electrician Jim Whipple to current National Electrical Code (NEC) standards.
            </p>

            {/* Service Availability Badge */}
            <div className="mt-8 mx-auto max-w-2xl rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm text-charcoal-200">
                <span className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-electric-400 shrink-0" />
                  <span><strong>Headquarters:</strong> 14800 Burr St, Taylor, MI</span>
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-electric-400 shrink-0" />
                  <span><strong>Dispatch:</strong> Same-Day & Emergency Service</span>
                </span>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <a href={`tel:${business.phoneTel}`} className="btn-primary">
                <Phone className="h-5 w-5" />
                Call {business.phone}
              </a>
              <Link to="/request-an-estimate" className="btn-outline-white">
                Request an Upfront Estimate
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Highlights */}
      <section className="border-b border-charcoal-200 bg-white py-6">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4 text-center sm:grid-cols-4">
            <div className="p-3">
              <div className="font-display text-2xl font-bold text-navy-900 sm:text-3xl">40+</div>
              <div className="mt-1 text-xs sm:text-sm font-medium text-charcoal-600">Years Master Electrician Experience</div>
            </div>
            <div className="p-3">
              <div className="font-display text-2xl font-bold text-navy-900 sm:text-3xl">100%</div>
              <div className="mt-1 text-xs sm:text-sm font-medium text-charcoal-600">Code-Compliant & Permitted</div>
            </div>
            <div className="p-3">
              <div className="font-display text-2xl font-bold text-navy-900 sm:text-3xl">10</div>
              <div className="mt-1 text-xs sm:text-sm font-medium text-charcoal-600">Downriver Municipalities Served</div>
            </div>
            <div className="p-3">
              <div className="font-display text-2xl font-bold text-navy-900 sm:text-3xl">5.0 ★</div>
              <div className="mt-1 text-xs sm:text-sm font-medium text-charcoal-600">Honest & Trusted Reputation</div>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Services Showcase - Search Intent & Keyword Targeted */}
      <section className="section-padding bg-charcoal-50">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-navy-900/5 px-4 py-1.5">
              <Sparkles className="h-4 w-4 text-navy-800" />
              <span className="text-sm font-semibold text-navy-800">Targeted Capabilities</span>
            </div>
            <h2 className="font-display text-3xl font-bold text-navy-900 sm:text-4xl">
              Comprehensive Electrical Capabilities
            </h2>
            <p className="mt-4 text-base leading-relaxed text-charcoal-600 sm:text-lg">
              Explore our core electrical service divisions below. Each service is tailored to Downriver housing stock, backed by proper municipal permitting and systematic diagnostic methods.
            </p>
          </div>

          <div className="space-y-8">
            {services.map((service, index) => {
              const Icon = getServiceIcon(service.icon);
              const image = serviceImages[service.slug];
              const isEven = index % 2 === 0;

              return (
                <div
                  key={service.slug}
                  id={service.slug}
                  className="rounded-2xl border border-charcoal-200 bg-white p-6 sm:p-8 shadow-card transition-all hover:shadow-card-hover"
                >
                  <div className={`grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                    {/* Left/Content Column */}
                    <div className="lg:col-span-7">
                      <div className="flex flex-wrap items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900 text-electric-400">
                          <Icon className="h-6 w-6" />
                        </div>
                        <div>
                          <span className="text-xs font-bold uppercase tracking-wider text-electric-700">
                            Professional Service Division
                          </span>
                          <h3 className="font-display text-2xl font-bold text-navy-900">
                            {service.name}
                          </h3>
                        </div>
                      </div>

                      {/* Keyword-targeted introduction */}
                      <p className="mt-4 text-base leading-relaxed text-charcoal-700">
                        {service.longDescription}
                      </p>

                      {/* Search Intent Focus Topics */}
                      {service.technicalTopics && service.technicalTopics.length > 0 && (
                        <div className="mt-5 rounded-xl bg-charcoal-50 p-4 border border-charcoal-100">
                          <h4 className="text-xs font-bold uppercase tracking-wider text-charcoal-500 mb-2">
                            Core Technical Specializations
                          </h4>
                          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 text-sm text-charcoal-700">
                            {service.technicalTopics.slice(0, 4).map((topic, i) => (
                              <div key={i} className="flex items-start gap-2">
                                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-electric-600" />
                                <div>
                                  <span className="font-semibold text-navy-900">{topic.title}: </span>
                                  <span className="text-xs text-charcoal-600">{topic.summary}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Location Quick-Links for this Service */}
                      <div className="mt-5 border-t border-charcoal-100 pt-4">
                        <div className="text-xs font-semibold text-charcoal-500 uppercase tracking-wider mb-2">
                          Available in Taylor & Nearby Downriver Cities:
                        </div>
                        <div className="flex flex-wrap gap-2 text-xs">
                          <Link
                            to={`/${service.slug}-taylor-mi`}
                            className="rounded-md bg-navy-900 text-white px-2.5 py-1 font-semibold transition-colors hover:bg-electric-500 hover:text-navy-900"
                          >
                            Taylor (Headquarters)
                          </Link>
                          {locations
                            .filter((loc) => loc.slug !== 'taylor-mi')
                            .slice(0, 5)
                            .map((loc) => (
                              <Link
                                key={loc.slug}
                                to={`/${service.slug}-${loc.slug}`}
                                className="rounded-md bg-charcoal-100 text-charcoal-800 px-2.5 py-1 font-medium transition-colors hover:bg-electric-100 hover:text-electric-800"
                              >
                                {service.shortName} in {loc.shortName}
                              </Link>
                            ))}
                        </div>
                      </div>

                      {/* Service Action Buttons */}
                      <div className="mt-6 flex flex-wrap items-center gap-3">
                        <Link to={`/${service.slug}-taylor-mi`} className="btn-primary py-2.5 px-5 text-sm">
                          <span>{service.shortName} in Taylor</span>
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                        <Link to="/request-an-estimate" className="btn-secondary py-2.5 px-5 text-sm">
                          Request Estimate
                        </Link>
                        <a href={`tel:${business.phoneTel}`} className="inline-flex items-center gap-1.5 text-sm font-bold text-navy-800 hover:text-electric-600 ml-2">
                          <Phone className="h-4 w-4 text-electric-600" />
                          <span>{business.phone}</span>
                        </a>
                      </div>
                    </div>

                    {/* Right/Image Column */}
                    <div className="lg:col-span-5">
                      <div className="relative overflow-hidden rounded-xl border border-charcoal-200 shadow-md">
                        <img
                          src={image}
                          alt={`${service.name} performed by Master Electrician Jim Whipple in Taylor and Downriver, Michigan`}
                          className="h-64 sm:h-72 w-full object-cover transition-transform duration-300 hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-navy-900/90 via-navy-900/40 to-transparent p-4 text-white">
                          <span className="inline-block rounded bg-electric-400 px-2 py-0.5 text-xs font-bold text-navy-900">
                            Master Electrician Direct
                          </span>
                          <p className="mt-1 text-xs text-charcoal-200">
                            {service.costAndPermits?.timeline || 'Prompt On-Site Service'} &bull; {service.costAndPermits?.permitRequired ? 'Permits Handled' : 'Standard Repairs'}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Completed Project Spotlights - Actual Photographs & Descriptions */}
      <section className="section-padding bg-white">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-electric-400/10 px-4 py-1.5">
              <FileCheck className="h-4 w-4 text-electric-600" />
              <span className="text-sm font-semibold text-electric-700">Verified Downriver Fieldwork</span>
            </div>
            <h2 className="font-display text-3xl font-bold text-navy-900 sm:text-4xl">
              Recent Electrical Projects & Field Spotlights
            </h2>
            <p className="mt-4 text-base leading-relaxed text-charcoal-600 sm:text-lg">
              Authentic completed electrical work across Taylor and neighboring Wayne County communities. See how we solve complex wiring, panel, and safety challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="overflow-hidden rounded-2xl border border-charcoal-200 bg-charcoal-50 shadow-card flex flex-col"
              >
                <div className="relative h-60 w-full overflow-hidden bg-navy-900">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 rounded-full bg-navy-900/90 backdrop-blur-sm px-3 py-1 text-xs font-bold text-electric-400">
                    <MapPin className="inline h-3.5 w-3.5 mr-1" />
                    {project.cityName}, MI &bull; {project.neighborhood}
                  </div>
                  <div className="absolute bottom-4 right-4 rounded-md bg-electric-500 px-2.5 py-1 text-xs font-bold text-navy-900">
                    {project.duration}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-electric-700">
                      {project.serviceName}
                    </span>
                    <h3 className="font-display text-xl font-bold text-navy-900 mt-1">
                      {project.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-charcoal-700">
                      {project.summary}
                    </p>

                    <div className="mt-4 space-y-2 border-t border-charcoal-200/60 pt-3 text-xs text-charcoal-700">
                      <div>
                        <strong className="text-navy-900">The Challenge:</strong> {project.challenge}
                      </div>
                      <div>
                        <strong className="text-navy-900">Master Electrician Solution:</strong> {project.solution}
                      </div>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.equipmentUsed.map((equip, idx) => (
                        <span key={idx} className="rounded bg-white border border-charcoal-200 px-2 py-0.5 text-xs text-charcoal-700 font-medium">
                          {equip}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 border-t border-charcoal-200 pt-3 flex items-center justify-between text-xs text-charcoal-600">
                    <span className="font-semibold text-electric-800">
                      ✓ {project.permitStatus}
                    </span>
                    <Link
                      to={`/${project.serviceSlug}-${project.citySlug}`}
                      className="font-bold text-navy-900 hover:text-electric-600 inline-flex items-center gap-1"
                    >
                      <span>{project.serviceName} in {project.cityName}</span>
                      <ChevronRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Master Electrician Advantage */}
      <section className="section-padding bg-navy-900 text-white">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-electric-400/10 px-4 py-1.5 border border-electric-400/20">
                <Award className="h-4 w-4 text-electric-400" />
                <span className="text-sm font-semibold text-electric-400">Master Electrician Standards</span>
              </div>
              <h2 className="font-display text-3xl font-bold text-white lg:text-4xl">
                Why Experience Matters for Your Home’s Electrical System
              </h2>
              <p className="mt-4 text-lg text-charcoal-200 leading-relaxed">
                Electricity is one of the most critical systems in your home — and the least forgiving. When you hire Whipple Electric Inc, you work directly with Jim Whipple, a licensed Master Electrician with more than 40 years of hands-on experience solving complex electrical issues in Michigan homes.
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
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-electric-400" />
                    <div>
                      <h3 className="font-display text-base font-bold text-white">{item.title}</h3>
                      <p className="mt-0.5 text-sm text-charcoal-300">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 shadow-card backdrop-blur-sm">
              <h3 className="font-display text-xl font-bold text-white">What’s Included in Every Service Call</h3>
              <p className="mt-1 text-sm text-charcoal-300">Our commitment to quality, transparency, and safety on every job:</p>
              
              <ul className="mt-6 space-y-3.5">
                {[
                  'Initial visual inspection of breaker panel condition and grounding',
                  'Clear explanation of the issue with upfront repair options',
                  'Commercial-grade materials (copper conductors, trusted breaker brands)',
                  'Safety testing of voltage, polarity, and circuit load after repair',
                  'Full cleanup of job site — no leftover wire clippings or debris',
                  'Direct communication with a licensed Master Electrician',
                ].map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-charcoal-200">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-electric-400/20 text-electric-400 font-bold text-xs">
                      ✓
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 border-t border-white/10 pt-6">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <div className="text-xs font-semibold text-charcoal-400 uppercase tracking-wider">Direct Master Electrician Contact</div>
                    <div className="font-display text-lg font-bold text-white">{business.phone}</div>
                  </div>
                  <a href={`tel:${business.phoneTel}`} className="btn-primary py-2 px-5 text-sm w-full sm:w-auto text-center">
                    Call {business.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services-Specific Technical FAQ Accordion */}
      <section className="section-padding bg-charcoal-50">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-navy-900/5 px-4 py-1.5">
              <HelpCircle className="h-4 w-4 text-electric-600" />
              <span className="text-sm font-semibold text-navy-800">Master Electrician Answers</span>
            </div>
            <h2 className="font-display text-3xl font-bold text-navy-900 sm:text-4xl">
              Frequently Asked Technical Questions
            </h2>
            <p className="mt-3 text-base text-charcoal-600 sm:text-lg">
              Straightforward answers regarding electrical panels, home rewiring, GFCI compliance, and troubleshooting in Downriver homes.
            </p>

            {/* Category Filter Pills */}
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              <button
                onClick={() => setActiveFaqCategory('all')}
                className={`rounded-full px-4 py-1.5 text-xs font-bold transition-colors ${
                  activeFaqCategory === 'all'
                    ? 'bg-navy-900 text-white'
                    : 'bg-white border border-charcoal-200 text-charcoal-700 hover:bg-charcoal-100'
                }`}
              >
                All Questions
              </button>
              <button
                onClick={() => setActiveFaqCategory('panels')}
                className={`rounded-full px-4 py-1.5 text-xs font-bold transition-colors ${
                  activeFaqCategory === 'panels'
                    ? 'bg-navy-900 text-white'
                    : 'bg-white border border-charcoal-200 text-charcoal-700 hover:bg-charcoal-100'
                }`}
              >
                Panel Upgrades
              </button>
              <button
                onClick={() => setActiveFaqCategory('wiring')}
                className={`rounded-full px-4 py-1.5 text-xs font-bold transition-colors ${
                  activeFaqCategory === 'wiring'
                    ? 'bg-navy-900 text-white'
                    : 'bg-white border border-charcoal-200 text-charcoal-700 hover:bg-charcoal-100'
                }`}
              >
                Wiring & Knob-and-Tube
              </button>
              <button
                onClick={() => setActiveFaqCategory('outlets')}
                className={`rounded-full px-4 py-1.5 text-xs font-bold transition-colors ${
                  activeFaqCategory === 'outlets'
                    ? 'bg-navy-900 text-white'
                    : 'bg-white border border-charcoal-200 text-charcoal-700 hover:bg-charcoal-100'
                }`}
              >
                Outlets & GFCI
              </button>
              <button
                onClick={() => setActiveFaqCategory('troubleshooting')}
                className={`rounded-full px-4 py-1.5 text-xs font-bold transition-colors ${
                  activeFaqCategory === 'troubleshooting'
                    ? 'bg-navy-900 text-white'
                    : 'bg-white border border-charcoal-200 text-charcoal-700 hover:bg-charcoal-100'
                }`}
              >
                Troubleshooting
              </button>
            </div>
          </div>

          <div className="mx-auto max-w-3xl space-y-4">
            {filteredFaqs.map((faq, i) => (
              <details key={i} className="group rounded-xl border border-charcoal-200 bg-white p-5 shadow-card transition-all">
                <summary className="cursor-pointer font-display text-base font-bold text-navy-900 flex items-center justify-between list-none">
                  <span className="flex items-center gap-2">
                    <span className="rounded bg-electric-100 text-electric-800 text-xs px-2 py-0.5 font-semibold">
                      {faq.categoryLabel}
                    </span>
                    <span>{faq.q}</span>
                  </span>
                  <ChevronRight className="h-5 w-5 text-charcoal-400 transition-transform group-open:rotate-90 shrink-0" />
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-charcoal-700 border-t border-charcoal-100 pt-3">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Downriver City & Service Directory Grid */}
      <section className="section-padding bg-white border-t border-charcoal-200">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <h2 className="font-display text-2xl font-bold text-navy-900 sm:text-3xl">
              Local Electrician Service Areas
            </h2>
            <p className="mt-2 text-sm text-charcoal-600">
              Whipple Electric Inc proudly serves 10 target municipalities throughout Wayne County, dispatched from our Taylor headquarters:
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5 text-center">
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                to={`/electrician-${loc.slug}`}
                className="group rounded-xl border border-charcoal-200 bg-charcoal-50 p-4 transition-all hover:border-electric-400 hover:bg-electric-50/50"
              >
                <div className="font-display text-base font-bold text-navy-900 group-hover:text-electric-700">
                  {loc.shortName}, MI
                </div>
                <div className="mt-1 text-xs text-charcoal-500">
                  {loc.zipCodes.slice(0, 2).join(', ')}
                </div>
                <span className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-navy-700 group-hover:text-electric-600">
                  Electrician in {loc.shortName} <ArrowRight className="h-3 w-3" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Discuss Your Electrical Project?"
        subtitle="Call Master Electrician Jim Whipple directly or request an upfront estimate online. We respond promptly with straightforward advice."
      />
    </>
  );
}
