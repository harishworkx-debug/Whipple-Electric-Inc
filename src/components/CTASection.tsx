import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import { business } from '@/data/business';

interface CTASectionProps {
  title?: string;
  subtitle?: string;
}

export default function CTASection({
  title = 'Need an Electrician? Let\u2019s Discuss Your Project.',
  subtitle = 'Call Whipple Electric Inc or request an estimate online. We\u2019ll help you understand your options and arrange service at a time that works for you.',
}: CTASectionProps) {
  return (
    <section className="relative overflow-hidden bg-navy-900 py-16 lg:py-20">
      <div className="absolute inset-0 bg-hero-overlay" />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 50%, rgba(255,215,15,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(255,215,15,0.1) 0%, transparent 50%)',
        }}
      />
      <div className="container-max relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-bold text-white text-balance lg:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-lg text-charcoal-200">{subtitle}</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href={`tel:${business.phoneTel}`} className="btn-primary w-full sm:w-auto">
              <Phone className="h-5 w-5" />
              Call {business.phone}
            </a>
            <Link to="/request-an-estimate" className="btn-outline-white w-full sm:w-auto">
              Request an Estimate
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
