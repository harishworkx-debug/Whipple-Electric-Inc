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
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-electric-400/10 px-4 py-1.5 border border-electric-400/20">
                <Award className="h-4 w-4 text-electric-600" />
                <span className="text-sm font-semibold text-navy-800">Master Electrician &bull; 40+ Years of Craftsmanship</span>
              </div>
              <h2 className="font-display text-2xl font-bold text-navy-900 lg:text-3xl">Meet Jim Whipple & Our Story</h2>
              <p className="mt-4 text-lg leading-relaxed text-charcoal-700">
                Whipple Electric Inc was founded right here in Taylor, Michigan (14800 Burr St) by Master Electrician Jim Whipple. For more than 40 years, Jim has dedicated his career to solving complex electrical issues for Downriver homeowners and small businesses. Having lived and worked in Wayne County for decades, Jim possesses intimate, first-hand knowledge of the quirks found in post-war ranches, historic bungalows, and mid-century electrical distribution.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-charcoal-700">
                Unlike large franchise outfits that dispatch commissioned junior sales technicians, when you call Whipple Electric Inc you speak directly with Jim Whipple. Every service call, panel heavy-up, and whole-house rewiring project is diagnosed, supervised, and executed to the highest National Electrical Code (NEC) standards with transparent, upfront pricing.
              </p>

              {/* Verified Credentials Grid */}
              <div className="mt-6 rounded-xl border border-charcoal-200 bg-charcoal-50 p-5">
                <h3 className="font-display text-base font-bold text-navy-900 mb-3">
                  Verified Licensing & Professional Credentials
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-charcoal-700">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-electric-600 shrink-0" />
                    <span>State of Michigan Master Electrician</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-electric-600 shrink-0" />
                    <span>Licensed Electrical Contractor</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-electric-600 shrink-0" />
                    <span>Fully Insured & General Liability</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-electric-600 shrink-0" />
                    <span>100% Permitted Municipal Work</span>
                  </div>
                </div>
              </div>

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
