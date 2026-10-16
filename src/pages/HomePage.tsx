import { Link } from 'react-router-dom';
import {
  Phone, Star, ShieldCheck, Award, Clock, Users, MessageCircle,
  CheckCircle2, MapPin, ArrowRight, Zap,
} from 'lucide-react';
import SEO from '@/components/SEO';
import CTASection from '@/components/CTASection';
import ServiceCard from '@/components/ServiceCard';
import StarRating from '@/components/StarRating';
import ReviewCard from '@/components/ReviewCard';
import { business } from '@/data/business';
import { services } from '@/data/services';
import { locations } from '@/data/locations';
import { images } from '@/data/images';
import { reviews } from '@/data/reviews';
import { getLocalBusinessSchema } from '@/data/schema';

export default function HomePage() {
  return (
    <>
      <SEO
        title="Whipple Electric Inc | Electrician in Taylor, MI"
        description="Whipple Electric Inc provides professional residential electrical services in Taylor, MI and the Metro Detroit area. Master Electrician with 40+ years of experience. Call 313-590-6363."
        canonical="/"
        structuredData={getLocalBusinessSchema()}
      />

      {/* Hero Section */}
      <section className="relative min-h-[600px] overflow-hidden bg-navy-900 lg:min-h-[680px]">
        <div className="absolute inset-0">
          <img
            src={images.heroElectrician}
            alt="Professional electrician working on an electrical panel in Taylor, Michigan"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-hero-overlay" />
        </div>

        <div className="container-max relative z-10 flex min-h-[600px] flex-col justify-center px-4 py-16 sm:px-6 lg:min-h-[680px] lg:px-8">
          <div className="max-w-2xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-electric-400/30 bg-electric-400/10 px-4 py-2 animate-fade-in">
              <span className="flex h-2 w-2 rounded-full bg-electric-400 animate-pulse-slow" />
              <span className="text-sm font-semibold text-electric-400">Master Electrician &middot; {business.experience} of Experience</span>
            </div>

            <h1 className="font-display text-4xl font-bold text-white text-balance text-shadow-lg animate-fade-in-up sm:text-5xl lg:text-display-md">
              Reliable Electrical Services in Taylor, Michigan
            </h1>

            <p className="mt-5 max-w-xl text-lg text-charcoal-200 animate-fade-in-delay">
              Get in touch with Whipple Electric Inc to discuss your electrical project, repair, or installation needs.
            </p>

            <div className="mt-8 flex flex-col gap-4 animate-fade-in-delay-2 sm:flex-row">
              <a href={`tel:${business.phoneTel}`} className="btn-primary w-full sm:w-auto">
                <Phone className="h-5 w-5" />
                Call {business.phone}
              </a>
              <Link to="/request-an-estimate" className="btn-outline-white w-full sm:w-auto">
                Request an Estimate
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 animate-fade-in-delay-3">
              <Link to="/reviews" className="flex items-center gap-3 transition-transform hover:scale-105">
                <StarRating rating={business.rating} size="sm" />
                <div className="text-sm">
                  <span className="font-bold text-white">{business.rating}/5</span>
                  <span className="ml-1.5 text-charcoal-300">{business.reviewCount} Google reviews</span>
                </div>
              </Link>
              <div className="flex items-center gap-2 text-sm text-charcoal-200">
                <ShieldCheck className="h-5 w-5 text-electric-400" />
                Fully Insured
              </div>
              <div className="flex items-center gap-2 text-sm text-charcoal-200">
                <Clock className="h-5 w-5 text-electric-400" />
                {business.hours}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="border-b border-charcoal-100 bg-white py-10">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {[
              { icon: Award, value: business.experience, label: 'of Experience' },
              { icon: Star, value: `${business.rating}/5`, label: `${business.reviewCount} Google Reviews` },
              { icon: ShieldCheck, value: 'Fully Insured', label: 'Master Electrician' },
              { icon: MapPin, value: 'Taylor, MI', label: 'Local Business' },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="card-icon mb-3">
                  <item.icon className="h-7 w-7" />
                </div>
                <div className="font-display text-xl font-bold text-navy-900 lg:text-2xl">{item.value}</div>
                <div className="text-sm text-charcoal-500">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-charcoal-50">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-electric-400/10 px-4 py-1.5">
              <Zap className="h-4 w-4 text-electric-600" />
              <span className="text-sm font-semibold text-electric-700">Our Services</span>
            </div>
            <h2 className="font-display text-3xl font-bold text-navy-900 text-balance lg:text-4xl">
              Residential Electrical Services
            </h2>
            <p className="mt-4 text-lg text-charcoal-600">
              From troubleshooting to panel upgrades to lighting installation, we handle the electrical work your home needs — safely and professionally.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link to="/services" className="btn-dark">
              View All Electrical Services
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-white">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-navy-900/5 px-4 py-1.5">
                <span className="text-sm font-semibold text-navy-700">Why Choose Whipple Electric Inc</span>
              </div>
              <h2 className="font-display text-3xl font-bold text-navy-900 text-balance lg:text-4xl">
                A Local Electrician Who Listens and Explains
              </h2>
              <p className="mt-4 text-lg text-charcoal-600">
                We know that electrical problems can be stressful. That is why we focus on clear communication, honest assessments, and straightforward explanations of what your project involves.
              </p>

              <div className="mt-8 space-y-6">
                {[
                  {
                    icon: MessageCircle,
                    title: 'Clear Communication',
                    description: 'We listen to your concerns, explain what we find in plain language, and answer your questions before starting any work.',
                  },
                  {
                    icon: ShieldCheck,
                    title: 'Safety-First Approach',
                    description: 'Every project is performed with safety as the top priority — for your home, your family, and our team.',
                  },
                  {
                    icon: Award,
                    title: 'Experienced Workmanship',
                    description: 'With over 40 years of experience, we bring the knowledge needed to handle a wide range of electrical challenges.',
                  },
                  {
                    icon: Users,
                    title: 'Straightforward Process',
                    description: 'We discuss your project requirements, explain the options, and arrange service at a time that works for you.',
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-electric-400/10 text-electric-600">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-bold text-navy-900">{item.title}</h3>
                      <p className="mt-1 text-charcoal-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-2xl shadow-card-lg">
                <img
                  src={images.panelWork}
                  alt="Electrician performing professional electrical work on a panel"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 hidden rounded-xl bg-navy-900 p-6 shadow-navy-lg lg:block">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-electric-400">
                    <Zap className="h-7 w-7 text-navy-900" fill="currentColor" />
                  </div>
                  <div>
                    <div className="font-display text-2xl font-bold text-white">{business.experience}</div>
                    <div className="text-sm text-charcoal-300">of Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="section-padding bg-navy-900">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-electric-400/10 px-4 py-1.5">
              <Star className="h-4 w-4 text-electric-400" />
              <span className="text-sm font-semibold text-electric-400">Verified Google Reviews</span>
            </div>
            <h2 className="font-display text-3xl font-bold text-white text-balance lg:text-4xl">
              Trusted by Homeowners Across Downriver
            </h2>
            <div className="mt-5 flex items-center justify-center gap-3">
              <StarRating rating={business.rating} size="lg" />
              <span className="font-display text-3xl font-bold text-white">{business.rating}</span>
              <span className="text-charcoal-300">/ 5</span>
            </div>
            <p className="mt-2 text-sm text-charcoal-300">
              Based on {business.reviewCount} authentic Google reviews &bull; Master Electrician Jim Whipple
            </p>
          </div>

          {/* Featured reviews grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reviews
              .filter((r) => r.rating === 5 && r.featured)
              .slice(0, 6)
              .map((review) => (
                <ReviewCard key={review.id} review={review} featuredStyle={true} />
              ))}
          </div>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/reviews" className="btn-primary w-full sm:w-auto">
              Read All {business.reviewCount} Verified Reviews
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={business.googleMapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-white w-full sm:w-auto"
            >
              Write a Google Review
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* How We Work / 4-Step Process */}
      <section className="section-padding bg-charcoal-50 border-t border-charcoal-100">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-electric-400/10 px-4 py-1.5">
              <span className="text-sm font-semibold text-electric-700">Straightforward Experience</span>
            </div>
            <h2 className="font-display text-3xl font-bold text-navy-900 text-balance lg:text-4xl">
              How We Handle Your Electrical Project
            </h2>
            <p className="mt-4 text-lg text-charcoal-600">
              From your first phone call to final testing, here is what you can expect when working with Whipple Electric Inc.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: '01',
                title: 'Initial Consultation',
                desc: 'Call 313-590-6363 or request an estimate online. We listen to the issue and discuss convenient scheduling.',
              },
              {
                step: '02',
                title: 'Thorough Diagnostics',
                desc: 'Master Electrician Jim Whipple evaluates your panel, circuits, and wiring with systematic precision.',
              },
              {
                step: '03',
                title: 'Clear Explanation & Estimate',
                desc: 'We explain what is happening in plain English and give you clear repair options before starting.',
              },
              {
                step: '04',
                title: 'Code-Compliant Work',
                desc: 'We complete the job cleanly, test every circuit for safety, and leave your home spotless.',
              },
            ].map((p, idx) => (
              <div key={idx} className="relative rounded-2xl border border-charcoal-200/80 bg-white p-7 shadow-card">
                <span className="font-display text-3xl font-black text-electric-500/80">{p.step}</span>
                <h3 className="mt-3 font-display text-lg font-bold text-navy-900">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal-600">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Warning Signs Section */}
      <section className="section-padding bg-white">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-amber-500/10 px-4 py-1.5">
              <span className="text-sm font-semibold text-amber-700">Electrical Safety Alert</span>
            </div>
            <h2 className="font-display text-3xl font-bold text-navy-900 text-balance lg:text-4xl">
              Signs Your Home Needs an Electrician
            </h2>
            <p className="mt-4 text-lg text-charcoal-600">
              Electrical problems rarely fix themselves and can become fire hazards. If you notice any of these signs, contact us right away.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Frequently Tripping Breakers',
                desc: 'If a breaker trips repeatedly when running appliances, the circuit is either overloaded, shorted, or the breaker has degraded.',
              },
              {
                title: 'Flickering or Dimming Lights',
                desc: 'Lights that dim when your air conditioner or microwave turns on often indicate voltage drop or loose neutral wiring.',
              },
              {
                title: 'Warm or Discolored Outlets',
                desc: 'Faceplates that feel warm or show black/brown discoloration indicate severe internal arcing and require urgent attention.',
              },
              {
                title: 'Burning Smell or Buzzing Sounds',
                desc: 'A fishy or plastic burning odor near a panel or wall switch signals melting wire insulation. Turn off the main breaker and call.',
              },
              {
                title: 'Two-Prong Ungrounded Outlets',
                desc: 'Older mid-century homes often have ungrounded receptacles that cannot safely handle modern electronics, computers, and appliances.',
              },
              {
                title: 'Outdated Fuse Boxes or 60A Service',
                desc: 'Homes with fuse boxes or older panels (like Federal Pacific or Zinsco) cannot meet contemporary electrical demands safely.',
              },
            ].map((sign, i) => (
              <div key={i} className="flex gap-4 rounded-xl border border-charcoal-100 bg-charcoal-50 p-6">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-600">
                  <Zap className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display text-base font-bold text-navy-900">{sign.title}</h3>
                  <p className="mt-1 text-sm text-charcoal-600">{sign.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl bg-navy-900 p-8 text-center sm:p-10">
            <h3 className="font-display text-2xl font-bold text-white">Suspect an Electrical Hazard in Your Downriver Home?</h3>
            <p className="mx-auto mt-2 max-w-xl text-charcoal-300">
              Do not take risks with household wiring. Whipple Electric Inc provides honest, expert safety inspections and repairs.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <a href={`tel:${business.phoneTel}`} className="btn-primary">
                <Phone className="h-5 w-5" />
                Call {business.phone}
              </a>
              <Link to="/request-an-estimate" className="btn-outline-white">
                Request an Inspection
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area Preview */}
      <section className="section-padding bg-charcoal-50">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-electric-400/10 px-4 py-1.5">
              <MapPin className="h-4 w-4 text-electric-600" />
              <span className="text-sm font-semibold text-electric-700">Service Areas</span>
            </div>
            <h2 className="font-display text-3xl font-bold text-navy-900 text-balance lg:text-4xl">
              Serving Metro Detroit Communities
            </h2>
            <p className="mt-4 text-lg text-charcoal-600">
              Based in Taylor, Michigan, we provide residential electrical services throughout the surrounding Metro Detroit area.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {locations.map((location) => (
              <Link
                key={location.slug}
                to={`/electrician-${location.slug}`}
                className="group flex flex-col items-center rounded-xl border border-charcoal-100 bg-white p-5 text-center shadow-card transition-all hover:border-electric-400/30 hover:shadow-card-lg"
              >
                <MapPin className="h-6 w-6 text-electric-500 transition-colors group-hover:text-electric-600" />
                <span className="mt-2 font-display text-sm font-bold text-navy-900">{location.shortName}</span>
                <span className="text-xs text-charcoal-500">MI</span>
              </Link>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link to="/service-areas" className="btn-dark">
              View All Service Areas
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="section-padding bg-white">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-electric-400/10 px-4 py-1.5">
              <span className="text-sm font-semibold text-electric-700">Homeowner Questions</span>
            </div>
            <h2 className="font-display text-3xl font-bold text-navy-900 text-balance lg:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg text-charcoal-600">
              Common questions about hiring Whipple Electric Inc for your residential electrical projects.
            </p>
          </div>

          <div className="mx-auto max-w-3xl space-y-4">
            {[
              {
                q: 'Are you licensed and insured in Michigan?',
                a: 'Yes, Whipple Electric Inc is fully insured and operated by a Michigan Master Electrician with over 40 years of hands-on experience.',
              },
              {
                q: 'How quickly can you come out for electrical troubleshooting?',
                a: 'We understand that electrical issues disrupt your household. We offer prompt scheduling and 24-hour availability to address urgent electrical concerns across Taylor and Downriver.',
              },
              {
                q: 'Do you handle city electrical permits and inspections?',
                a: 'Yes. For projects that require municipal permits — such as main panel upgrades and major rewiring — we handle the permit application and coordinate with local city building inspectors.',
              },
              {
                q: 'Can you upgrade my older home from a 100-amp to 200-amp panel?',
                a: 'Absolutely. Many Downriver homes built in the 1950s–1970s have 60-amp or 100-amp panels that struggle with modern loads (EV chargers, central AC, modern kitchens). We specialize in 200-amp service upgrades.',
              },
              {
                q: 'How do you charge for electrical work?',
                a: 'We believe in straightforward, transparent pricing. We assess your project on-site, explain what needs to be done, and provide a clear estimate before work begins so there are no surprises.',
              },
            ].map((faq, i) => (
              <details key={i} className="group rounded-xl border border-charcoal-200 bg-charcoal-50/50 p-5 transition-all open:bg-white open:shadow-card">
                <summary className="cursor-pointer font-display text-base font-bold text-navy-900 marker:hidden">
                  {faq.q}
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-charcoal-700">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection />
    </>
  );
}
