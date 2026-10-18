import { useState } from 'react';
import { CheckCircle2, AlertCircle, Send, Loader2 } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { services } from '@/data/services';
import { business } from '@/data/business';

interface EstimateFormProps {
  defaultService?: string;
  defaultLocation?: string;
  compact?: boolean;
}

interface FormData {
  full_name: string;
  phone: string;
  email: string;
  service_requested: string;
  property_type: string;
  project_location: string;
  description: string;
  preferred_contact: string;
}

const initialData: FormData = {
  full_name: '',
  phone: '',
  email: '',
  service_requested: '',
  property_type: 'residential',
  project_location: '',
  description: '',
  preferred_contact: 'either',
};

export default function EstimateForm({ defaultService, defaultLocation, compact = false }: EstimateFormProps) {
  const [data, setData] = useState<FormData>({
    ...initialData,
    service_requested: defaultService || '',
    project_location: defaultLocation || '',
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  function validate(): boolean {
    const e: Partial<Record<keyof FormData, string>> = {};
    if (!data.full_name.trim()) e.full_name = 'Please enter your full name';
    if (!data.phone.trim()) e.phone = 'Please enter your phone number';
    else if (data.phone.replace(/[^0-9]/g, '').length < 10) e.phone = 'Please enter a valid phone number';
    if (!data.email.trim()) e.email = 'Please enter your email address';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) e.email = 'Please enter a valid email address';
    if (!data.service_requested) e.service_requested = 'Please select a service';
    if (!data.description.trim()) e.description = 'Please describe your electrical issue or project';
    if (data.description.trim().length < 10) e.description = 'Please provide at least a brief description';
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function update<K extends keyof FormData>(key: K, value: FormData[K]) {
    setData((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setStatus('submitting');

    try {
      const payload = {
        full_name: data.full_name.trim(),
        phone: data.phone.trim(),
        email: data.email.trim(),
        service_requested: data.service_requested,
        property_type: data.property_type,
        project_location: data.project_location.trim(),
        description: data.description.trim(),
        preferred_contact: data.preferred_contact,
        created_at: new Date().toISOString(),
      };

      // Save to localStorage as a reliable audit record
      try {
        const stored = JSON.parse(localStorage.getItem('whipple_estimate_requests') || '[]');
        stored.unshift(payload);
        localStorage.setItem('whipple_estimate_requests', JSON.stringify(stored));
      } catch (storageErr) {
        console.warn('localStorage error:', storageErr);
      }

      // Try Supabase if valid credentials are present
      const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
      if (supabaseUrl && !supabaseUrl.includes('placeholder')) {
        const { error } = await supabase.from('estimate_requests').insert({
          full_name: payload.full_name,
          phone: payload.phone,
          email: payload.email,
          service_requested: payload.service_requested,
          property_type: payload.property_type,
          project_location: payload.project_location,
          description: payload.description,
          preferred_contact: payload.preferred_contact,
        });
        if (error) throw error;
      }

      // Conversion tracking: Push to dataLayer / gtag for GTM and Google Ads, and dispatch custom event
      try {
        if (typeof window !== 'undefined') {
          const win = window as any;
          if (Array.isArray(win.dataLayer)) {
            win.dataLayer.push({
              event: 'generate_lead',
              form_name: 'estimate_request',
              service: payload.service_requested,
              location: payload.project_location,
            });
          }
          if (typeof win.gtag === 'function') {
            win.gtag('event', 'generate_lead', {
              event_category: 'form_submission',
              event_label: payload.service_requested,
              value: 1,
            });
          }
          window.dispatchEvent(
            new CustomEvent('estimate_submitted', { detail: payload })
          );
        }
      } catch (trackErr) {
        console.warn('Analytics tracking error:', trackErr);
      }

      setStatus('success');
      setData({ ...initialData });
    } catch (err) {
      console.error('Submission error:', err);
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-xl border border-green-200 bg-green-50 p-8 text-center animate-fade-in">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
          <CheckCircle2 className="h-8 w-8 text-green-600" />
        </div>
        <h3 className="mt-4 font-display text-xl font-bold text-navy-900">Estimate Request Received</h3>
        <p className="mt-2 text-charcoal-700 max-w-lg mx-auto">
          Thank you for reaching out to Whipple Electric Inc. Master Electrician Jim Whipple or our team will review your project details and get in touch shortly (typically within 24 hours).
        </p>
        <div className="mt-4 rounded-lg bg-white/80 p-3.5 border border-green-200/60 max-w-md mx-auto text-xs text-charcoal-600">
          <span className="font-semibold text-navy-900">Need urgent electrical help?</span> Call us directly at{' '}
          <a href={`tel:${business.phoneTel}`} className="font-bold text-navy-900 underline hover:text-electric-600">
            {business.phone}
          </a>{' '}
          for immediate 24-hour service.
        </div>
        <button
          onClick={() => setStatus('idle')}
          className="mt-6 btn-secondary"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {status === 'error' && (
        <div className="flex items-start gap-3 rounded-lg border border-red-200 bg-red-50 p-4">
          <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-600" />
          <p className="text-sm text-red-800">
            Something went wrong submitting your request. Please try again or call us directly at {business.phone}.
          </p>
        </div>
      )}

      <div className={`grid gap-5 ${compact ? 'sm:grid-cols-1' : 'sm:grid-cols-2'}`}>
        <div>
          <label htmlFor="full_name" className="mb-1.5 block text-sm font-semibold text-navy-800">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id="full_name"
            type="text"
            value={data.full_name}
            onChange={(e) => update('full_name', e.target.value)}
            className={`input-field ${errors.full_name ? 'border-red-400 ring-2 ring-red-400/15' : ''}`}
            placeholder="John Smith"
            aria-invalid={!!errors.full_name}
          />
          {errors.full_name && <p className="mt-1 text-xs text-red-600">{errors.full_name}</p>}
        </div>

        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold text-navy-800">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            value={data.phone}
            onChange={(e) => update('phone', e.target.value)}
            className={`input-field ${errors.phone ? 'border-red-400 ring-2 ring-red-400/15' : ''}`}
            placeholder="(313) 662-2940"
            aria-invalid={!!errors.phone}
          />
          {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone}</p>}
        </div>

        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-navy-800">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            type="email"
            value={data.email}
            onChange={(e) => update('email', e.target.value)}
            className={`input-field ${errors.email ? 'border-red-400 ring-2 ring-red-400/15' : ''}`}
            placeholder="you@example.com"
            aria-invalid={!!errors.email}
          />
          {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="service_requested" className="mb-1.5 block text-sm font-semibold text-navy-800">
            Service Requested <span className="text-red-500">*</span>
          </label>
          <select
            id="service_requested"
            value={data.service_requested}
            onChange={(e) => update('service_requested', e.target.value)}
            className={`input-field ${errors.service_requested ? 'border-red-400 ring-2 ring-red-400/15' : ''}`}
            aria-invalid={!!errors.service_requested}
          >
            <option value="">Select a service...</option>
            {services.map((s) => (
              <option key={s.slug} value={s.name}>{s.name}</option>
            ))}
            <option value="Other">Other / Not Sure</option>
          </select>
          {errors.service_requested && <p className="mt-1 text-xs text-red-600">{errors.service_requested}</p>}
        </div>

        <div>
          <label htmlFor="property_type" className="mb-1.5 block text-sm font-semibold text-navy-800">
            Property Type
          </label>
          <select
            id="property_type"
            value={data.property_type}
            onChange={(e) => update('property_type', e.target.value)}
            className="input-field"
          >
            <option value="residential">Residential</option>
            <option value="commercial">Commercial</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="project_location" className="mb-1.5 block text-sm font-semibold text-navy-800">
            Project Location / ZIP Code
          </label>
          <input
            id="project_location"
            type="text"
            value={data.project_location}
            onChange={(e) => update('project_location', e.target.value)}
            className="input-field"
            placeholder="Taylor, MI 48180"
          />
        </div>
      </div>

      <div>
        <label htmlFor="description" className="mb-1.5 block text-sm font-semibold text-navy-800">
          Description of the Electrical Issue or Project <span className="text-red-500">*</span>
        </label>
        <textarea
          id="description"
          value={data.description}
          onChange={(e) => update('description', e.target.value)}
          rows={compact ? 3 : 4}
          className={`input-field resize-none ${errors.description ? 'border-red-400 ring-2 ring-red-400/15' : ''}`}
          placeholder="Please describe what you need help with..."
          aria-invalid={!!errors.description}
        />
        {errors.description && <p className="mt-1 text-xs text-red-600">{errors.description}</p>}
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-semibold text-navy-800">Preferred Contact Method</label>
        <div className="flex flex-wrap gap-3">
          {[
            { value: 'either', label: 'Either is fine' },
            { value: 'phone', label: 'Phone' },
            { value: 'email', label: 'Email' },
          ].map((opt) => (
            <label
              key={opt.value}
              className={`flex cursor-pointer items-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-medium transition-all ${
                data.preferred_contact === opt.value
                  ? 'border-electric-400 bg-electric-400/10 text-navy-900'
                  : 'border-charcoal-200 text-charcoal-600 hover:border-charcoal-300'
              }`}
            >
              <input
                type="radio"
                name="preferred_contact"
                value={opt.value}
                checked={data.preferred_contact === opt.value}
                onChange={(e) => update('preferred_contact', e.target.value)}
                className="sr-only"
              />
              {opt.label}
            </label>
          ))}
        </div>
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === 'submitting' ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            Submitting...
          </>
        ) : (
          <>
            <Send className="h-5 w-5" />
            Request Estimate
          </>
        )}
      </button>

      <p className="text-center text-xs text-charcoal-400">
        Your information is used only to contact you about your request. We do not share your information.
      </p>
    </form>
  );
}
