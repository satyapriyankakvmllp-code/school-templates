import { useState } from 'react';
import { MapPin, Mail, Phone, Send, CheckCircle2 } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import schoolConfig from '@/config/schoolConfig';

export default function Contact() {
  const ref = useScrollReveal();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: '', email: '', phone: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      value: schoolConfig.locationShort,
    },
    {
      icon: Mail,
      title: 'Email',
      value: schoolConfig.email,
    },
    {
      icon: Phone,
      title: 'Phone',
      value: schoolConfig.phone,
    },
  ];

  return (
    <section id="contact" className="relative overflow-hidden bg-cream-100 py-20 lg:py-28">
      <div className="absolute right-0 top-1/4 h-72 w-72 rounded-full bg-secondary-100/40 blur-3xl" />

      <div ref={ref} className="reveal relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="section-subtitle">Contact Us</p>
          <h2 className="section-title mt-2">We'd Love to Hear From You</h2>
          <p className="mt-4 text-base text-neutral-600">
            Have questions about admissions, programs or day care? Reach out and our team
            will be happy to help.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-5">
          {/* Contact info cards */}
          <div className="space-y-5 lg:col-span-2">
            {contactInfo.map((info) => {
              const Icon = info.icon;
              return (
                <div
                  key={info.title}
                  className="card-shimmer card-glow group flex items-start gap-4 rounded-3xl bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
                >
                  <div className="icon-bounce flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-primary-50 text-primary-500 transition-all duration-300 group-hover:bg-primary-500 group-hover:text-white">
                    <Icon size={22} />
                  </div>
                  <div>
                    <h4 className="font-display text-base font-bold text-neutral-800">
                      {info.title}
                    </h4>
                    <p className="text-sm text-neutral-600">{info.value}</p>
                  </div>
                </div>
              );
            })}

            {/* Decorative info card */}
            <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-secondary-400 to-secondary-600 p-6 shadow-card">
              <h4 className="font-display text-lg font-bold text-white">School Location</h4>
              <p className="mt-1 text-sm text-white/90">
                {schoolConfig.location}
              </p>
              <p className="mt-3 text-xs text-white/70">
                Visit us during school hours to experience the Little Krishna environment
                first-hand.
              </p>
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl bg-white p-7 shadow-card sm:p-9"
            >
              {submitted && (
                <div className="mb-6 flex items-center gap-3 rounded-2xl bg-success-50 p-4 text-success-700">
                  <CheckCircle2 size={20} />
                  <span className="text-sm font-semibold">
                    Thank you! Your enquiry has been received. We'll get back to you soon.
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
              </div>

              <button type="submit" className="btn-primary mt-6 w-full">
                <Send size={18} />
                Send Enquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
