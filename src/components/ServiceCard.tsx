import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ServiceDetail } from '@/data/services';
import { getServiceIcon } from './iconMap';

interface ServiceCardProps {
  service: ServiceDetail;
  variant?: 'light' | 'dark';
}

export default function ServiceCard({ service, variant = 'light' }: ServiceCardProps) {
  const Icon = getServiceIcon(service.icon);

  if (variant === 'dark') {
    return (
      <Link to={`/${service.slug}-taylor-mi`} className="card-navy group block">
        <div className="card-icon mb-4 bg-electric-400/15 text-electric-400 group-hover:bg-electric-400 group-hover:text-navy-900">
          <Icon className="h-7 w-7" />
        </div>
        <h3 className="font-display text-xl font-bold text-white">{service.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-charcoal-300">{service.description}</p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-electric-400 transition-all group-hover:gap-2.5">
          {service.shortName}
          <ArrowRight className="h-4 w-4" />
        </span>
      </Link>
    );
  }

  return (
    <Link to={`/${service.slug}-taylor-mi`} className="card group block">
      <div className="card-icon mb-4 group-hover:bg-electric-400 group-hover:text-navy-900">
        <Icon className="h-7 w-7" />
      </div>
      <h3 className="font-display text-xl font-bold text-navy-900">{service.name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-charcoal-600">{service.description}</p>
      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-700 transition-all group-hover:gap-2.5 group-hover:text-electric-600">
        {service.shortName}
        <ArrowRight className="h-4 w-4" />
      </span>
    </Link>
  );
}
