import { useState } from 'react';
import { MapPin, Mail, Phone, Send, CheckCircle2, AlertCircle, ExternalLink } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import siteConfig from '@/config/siteConfig';
import { openEmail } from '@/utils/email';

export default function Contact() {
  const ref = useScrollReveal();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const next = {};
    if (form.name.trim().length < 2) next.name = 'Please enter your name.';
    const digits = form.phone.replace(/\D/g, '');
    if (digits.length < 10 || digits.length > 13) next.phone = 'Enter a valid phone number (10 digits).';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) next.email = 'Enter a valid email address.';
    if (form.message.trim().length < 5) next.message = 'Please add a short message.';
    return next;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length) return;

    const text = [
      `Hello ${siteConfig.brand.title}, I would like to enquire about admissions.`,
      '',
      `Parent/Guardian: ${form.name.trim()}`,
      `Phone: ${form.phone.trim()}`,
      `Email: ${form.email.trim()}`,
      `Message: ${form.message.trim()}`,
    ].join('\n');
    const url = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(text)}`;

    // Opens the WhatsApp app on mobile and WhatsApp Web / desktop app on desktop.
    const win = window.open(url, '_blank', 'noopener,noreferrer');
    if (!win) window.location.href = url; // popup blocked -> same tab fallback

    setSubmitted(true);
    setForm({ name: '', email: '', phone: '', message: '' });
    setTimeout(() => setSubmitted(false), 6000);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: undefined });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      value: siteConfig.contact.locationShort,
      href: siteConfig.contact.mapsUrl,
      external: true,
    },
    {
      icon: Mail,
      title: 'Email',
      value: siteConfig.contact.email,
      href: `mailto:${siteConfig.contact.email}`,
    },
    {
      icon: Phone,
      title: 'Phone',
      value: siteConfig.contact.phone,
      href: `tel:${siteConfig.contact.phoneTel}`,
    },
  ];

  return (
    <section id="contact" className="relative overflow-hidden bg-cream-100 py-6 md:py-8 lg:py-10">
      <div className="absolute right-0 top-1/4 h-72 w-72 rounded-full bg-secondary-100/40 blur-3xl" />

      <div ref={ref} className="reveal relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-6 max-w-2xl text-center">
          <p className="section-subtitle">Contact Us</p>
          <h2 className="section-title mt-2">We'd Love to Hear From You</h2>
          <p className="mt-4 text-base text-neutral-600">
            Have questions about admissions, programs or day care? Reach out and our team
            will be happy to help.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-5">
          {/* Contact info cards */}
          <div className="space-y-3 lg:col-span-2">
            {contactInfo.map((info) => {
              const Icon = info.icon;
              return (
                <a
                  key={info.title}
                  href={info.href}
                  {...(info.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  {...(info.title === 'Email' ? { onClick: (e) => openEmail(e, siteConfig.contact.email) } : {})}
                  className="card-shimmer card-glow group flex items-center gap-3 rounded-2xl bg-white p-4 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
                >
                  <div className="icon-bounce flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-500 transition-all duration-300 group-hover:bg-primary-500 group-hover:text-white">
                    <Icon size={22} />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-display text-base font-bold leading-tight text-neutral-800">
                      {info.title}
                    </h4>
                    <p className="break-words text-sm text-neutral-600">{info.value}</p>
                  </div>
                </a>
              );
            })}

            {/* Decorative info card */}
            <a
              href={siteConfig.contact.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open school location in Google Maps"
              className="group block overflow-hidden rounded-2xl bg-gradient-to-br from-secondary-400 to-secondary-600 p-5 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
            >
              <h4 className="flex items-center justify-between font-display text-lg font-bold text-white">
                School Location
                <span className="flex items-center gap-1 rounded-full bg-white/20 px-3 py-1 text-xs font-semibold">
                  Open in Maps <ExternalLink size={12} />
                </span>
              </h4>
              <p className="mt-1 text-sm text-white/90">
                {siteConfig.contact.address}
              </p>
              <p className="mt-3 text-xs text-white/70">
                Visit us during school hours to experience the {siteConfig.brand.name} environment
                first-hand.
              </p>
            </a>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              noValidate
              className="rounded-3xl bg-white p-5 shadow-card sm:p-7"
            >
              {submitted && (
                <div className="mb-6 flex items-center gap-3 rounded-2xl bg-success-50 p-4 text-success-700">
                  <CheckCircle2 size={20} />
                  <span className="text-sm font-semibold">
                    Opening WhatsApp with your enquiry - just tap Send there.
                  </span>
                </div>
              )}

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-neutral-700">
                    Parent / Guardian Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-800 outline-none transition-all focus:border-primary-400 focus:bg-white focus:ring-2 focus:ring-primary-100"
                  />
                  {errors.name && <p className="mt-1 flex items-center gap-1 text-xs font-semibold text-error-600"><AlertCircle size={12} />{errors.name}</p>}
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-neutral-700">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Your phone number"
                    className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-800 outline-none transition-all focus:border-primary-400 focus:bg-white focus:ring-2 focus:ring-primary-100"
                  />
                  {errors.phone && <p className="mt-1 flex items-center gap-1 text-xs font-semibold text-error-600"><AlertCircle size={12} />{errors.phone}</p>}
                </div>
              </div>

              <div className="mt-5">
                <label className="mb-1.5 block text-sm font-semibold text-neutral-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Your email address"
                  className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-800 outline-none transition-all focus:border-primary-400 focus:bg-white focus:ring-2 focus:ring-primary-100"
                />
                  {errors.email && <p className="mt-1 flex items-center gap-1 text-xs font-semibold text-error-600"><AlertCircle size={12} />{errors.email}</p>}
              </div>

              <div className="mt-5">
                <label className="mb-1.5 block text-sm font-semibold text-neutral-700">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your child and what you'd like to know..."
                  className="w-full resize-none rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-800 outline-none transition-all focus:border-primary-400 focus:bg-white focus:ring-2 focus:ring-primary-100"
                />
                {errors.message && <p className="mt-1 flex items-center gap-1 text-xs font-semibold text-error-600"><AlertCircle size={12} />{errors.message}</p>}
              </div>

              <button type="submit" className="btn-primary mt-6 w-full">
                <Send size={18} />
                Send via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
