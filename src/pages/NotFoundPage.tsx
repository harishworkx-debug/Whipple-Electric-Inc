import { Link } from 'react-router-dom';
import { Home, Phone, ArrowLeft } from 'lucide-react';
import SEO from '@/components/SEO';
import { business } from '@/data/business';

export default function NotFoundPage() {
  return (
    <>
      <SEO
        title="Page Not Found | Whipple Electric Inc"
        description="The page you are looking for could not be found. Please visit our homepage or contact Whipple Electric Inc for electrical services in Taylor, MI."
        canonical="/404"
      />

      <section className="flex min-h-[70vh] items-center bg-navy-900">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-xl text-center">
            <div className="font-display text-7xl font-bold text-electric-400 lg:text-8xl">404</div>
            <h1 className="mt-4 font-display text-2xl font-bold text-white lg:text-3xl">Page Not Found</h1>
            <p className="mt-4 text-charcoal-200">
              The page you are looking for doesn't exist or has been moved. Let's get you back on track.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Link to="/" className="btn-primary">
                <Home className="h-5 w-5" />
                Back to Home
              </Link>
              <a href={`tel:${business.phoneTel}`} className="btn-outline-white">
                <Phone className="h-5 w-5" />
                Call {business.phone}
              </a>
            </div>
            <Link to="/services" className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-electric-400 hover:text-electric-300">
              <ArrowLeft className="h-4 w-4" />
              Browse Our Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
