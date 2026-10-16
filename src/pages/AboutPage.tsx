import { Link } from 'react-router-dom';
import { Phone, Award, ShieldCheck, Clock, MapPin, Users, Star, Zap } from 'lucide-react';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import CTASection from '@/components/CTASection';
import StarRating from '@/components/StarRating';
import { business } from '@/data/business';
import { images } from '@/data/images';
import { getLocalBusinessSchema } from '@/data/schema';

export default function AboutPage() {
  return (
    <>
      <SEO
        title={`About ${business.name} | Electrician in Taylor, MI`}
        description={`Learn about ${business.name}, a Taylor, Michigan-based electrical contractor with ${business.experience} of experience. Master Electrician, fully insured, serving Metro Detroit.`}
        canonical="/about"
        structuredData={getLocalBusinessSchema()}
      />
      <Breadcrumbs items={[{ name: 'About', path: '/about' }]} />

      <section className="bg-navy-900 py-14 lg:py-20">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-display text-4xl font-bold text-white text-balance lg:text-5xl">About Whipple Electric Inc</h1>
            <p className="mt-5 text-lg text-charcoal-200">
              A Taylor, Michigan-based electrical contractor with {business.experience} of experience serving homeowners throughout Metro Detroit.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="font-display text-2xl font-bold text-navy-900 lg:text-3xl">Our Story</h2>
              <p className="mt-4 text-lg leading-relaxed text-charcoal-700">
                Whipple Electric Inc has been serving homeowners in Taylor, Michigan and the surrounding communities for over {business.experience}. As a Master Electrician with deep roots in the area, we understand the housing stock, the electrical challenges, and the importance of safe, reliable power in your home.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-charcoal-700">
                We focus on residential electrical work — from troubleshooting and repairs to panel upgrades, wiring, lighting, and safety inspections. Our approach is straightforward: listen to your concerns, explain what we find, and provide honest recommendations so you can make informed decisions about your home's electrical system.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a href={`tel:${business.phoneTel}`} className="btn-primary">
                  <Phone className="h-5 w-5" />
                  Call {business.phone}
                </a>
                <Link to="/request-an-estimate" className="btn-secondary">
                  Request an Estimate
                </Link>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl shadow-card-lg">
              <img src={images.electricianPortrait} alt="Master Electrician at Whipple Electric Inc in Taylor, Michigan" className="h-full w-full object-cover" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-charcoal-50">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold text-navy-900 lg:text-4xl">What Sets Us Apart</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Award, title: `${business.experience} of Experience`, description: 'Decades of hands-on electrical work in homes throughout the Metro Detroit area.' },
              { icon: ShieldCheck, title: 'Master Electrician', description: 'Work performed by an experienced Master Electrician, fully insured for your protection.' },
              { icon: Clock, title: business.hours, description: 'Available around the clock to respond to your electrical needs.' },
              { icon: MapPin, title: 'Taylor-Based', description: 'A local business rooted in Taylor, Michigan, serving surrounding communities.' },
              { icon: Users, title: 'Customer-Focused', description: 'Clear communication, honest assessments, and straightforward explanations.' },
              { icon: Zap, title: 'Residential Specialist', description: 'Focused on home electrical systems — repairs, upgrades, installations, and safety.' },
            ].map((item, i) => (
              <div key={i} className="card">
                <div className="card-icon mb-4">
                  <item.icon className="h-7 w-7" />
                </div>
                <h3 className="font-display text-lg font-bold text-navy-900">{item.title}</h3>
                <p className="mt-2 text-charcoal-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-navy-900 p-8 text-center lg:p-12">
            <StarRating rating={business.rating} size="lg" />
            <div className="mt-3 font-display text-4xl font-bold text-white">{business.rating}/5</div>
            <p className="mt-2 text-charcoal-300">Based on {business.reviewCount} Google reviews</p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              <Link to="/reviews" className="btn-primary text-sm">
                <Star className="h-4 w-4" />
                Read Verified Reviews ({business.reviewCount})
              </Link>
              <a href={business.googleMapsLink} target="_blank" rel="noopener noreferrer" className="btn-outline-white text-sm">
                View Google Listing
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
