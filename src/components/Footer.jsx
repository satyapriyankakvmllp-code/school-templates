import { MapPin, ArrowUp, Facebook, Instagram, Youtube } from 'lucide-react';
import schoolConfig from '@/config/schoolConfig';
import siteConfig from '@/config/siteConfig';

const footerLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Programs', href: '#programs' },
  { label: 'Activities', href: '#activities' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Admissions', href: '#admissions' },
  { label: 'Contact', href: '#contact' },
];

const programLinks = [
  { label: 'Play Group', href: '#programs' },
  { label: 'Nursery', href: '#programs' },
  { label: 'LKG', href: '#programs' },
  { label: 'UKG', href: '#programs' },
  { label: 'Day Care', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-neutral-900 text-neutral-300">
      <div className="absolute inset-0 bg-dots opacity-5" />

      {/* Top wave */}
      <div className="absolute top-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" className="w-full">
          <path d="M0 60V20C240 50 480 0 720 20C960 40 1200 50 1440 30V60H0Z" fill="#fdf8ee" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pt-20 pb-8 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3">
              <img
                src={siteConfig.brand.logo}
                alt={`${siteConfig.brand.title} logo`}
                className="h-12 w-12 rounded-full object-cover ring-2 ring-white/10"
                onError={(e) => { e.currentTarget.src = '/assets/logo.svg'; }}
              />
              <div>
                <p className="font-display text-lg font-extrabold tracking-tight text-white">
                  {siteConfig.brand.name}
                </p>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-400">
                  {siteConfig.brand.shortTitle}
                </p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-neutral-400">
              {schoolConfig.tagline}
            </p>
            <div className="mt-5 flex items-start gap-2 text-sm text-neutral-400">
              <MapPin size={16} className="mt-0.5 flex-shrink-0 text-primary-400" />
              {schoolConfig.location}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="mb-4 font-display text-base font-bold text-white">Quick Links</h4>
            <ul className="space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-neutral-400 transition-colors hover:text-primary-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="mb-4 font-display text-base font-bold text-white">Our Programs</h4>
            <ul className="space-y-2.5">
              {programLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-neutral-400 transition-colors hover:text-primary-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social + newsletter */}
          <div>
            <h4 className="mb-4 font-display text-base font-bold text-white">Connect With Us</h4>
            <p className="mb-4 text-sm text-neutral-400">
              Follow us for updates, activities and little moments from our school.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Facebook, label: 'Facebook', href: siteConfig.social.facebook },
                { icon: Instagram, label: 'Instagram', href: siteConfig.social.instagram },
                { icon: Youtube, label: 'YouTube', href: siteConfig.social.youtube },
              ]
                .filter((social) => social.href)
                .map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 hover:bg-primary-500 hover:-translate-y-1 hover:rotate-6"
                    >
                      <Icon size={18} />
                    </a>
                  );
                })}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs text-neutral-500">
            © {new Date().getFullYear()} {schoolConfig.title}. All rights reserved.
          </p>
          <a
            href="#home"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-500 text-white transition-all duration-300 hover:bg-primary-600 hover:-translate-y-1 hover:scale-110"
            aria-label="Back to top"
          >
            <ArrowUp size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
