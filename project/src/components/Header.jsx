import { useEffect, useState } from 'react';
import { Menu, X, MapPin } from 'lucide-react';
import schoolConfig from '@/config/schoolConfig';
import siteConfig from '@/config/siteConfig';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState('#home');

  useEffect(() => {
    const ids = schoolConfig.navLinks.map((l) => l.href.slice(1));
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      // Scroll-spy: the section whose top has passed just under the header is "active"
      let current = ids[0];
      const atBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight - 4;
      if (atBottom) {
        current = ids[ids.length - 1];
      } else {
        for (const id of ids) {
          const el = document.getElementById(id);
          if (el && el.getBoundingClientRect().top <= 140) current = id;
        }
      }
      setActive(`#${current}`);
    };
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <header
        className={`header-slide-down fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-card py-2'
            : 'bg-white/90 backdrop-blur-md shadow-soft py-2'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3" onClick={closeMobile}>
            <img
              src={siteConfig.brand.logo}
              alt={`${siteConfig.brand.title} logo`}
              className="h-16 w-16 flex-shrink-0 rounded-full object-cover ring-2 ring-white shadow-soft transition-transform duration-300 hover:scale-105 sm:h-20 sm:w-20"
              onError={(e) => {
                e.currentTarget.src = '/assets/logo.svg';
              }}
            />
            <div className="flex flex-col justify-center leading-none">
              <span className="font-display text-xl font-extrabold tracking-tight text-primary-600 sm:text-2xl">
                {siteConfig.brand.name}
              </span>
              <span
                className={`mt-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] transition-colors duration-300 ${
                  'text-neutral-500'
                }`}
              >
                {siteConfig.brand.shortTitle}
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex">
            {schoolConfig.navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                aria-current={active === link.href ? 'true' : undefined}
                className={`nav-link relative rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-200 hover:text-primary-600 ${
                  active === link.href ? 'nav-link-active text-primary-600 bg-primary-50' : 'text-neutral-700'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <a href="#contact" className="btn-primary hidden sm:inline-flex !px-5 !py-2.5 text-sm">
              Enquire Now
            </a>
            <button
              className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-50 text-primary-600 lg:hidden"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div
            className="absolute inset-0 bg-neutral-900/50 backdrop-blur-sm"
            onClick={closeMobile}
          />
          <div className="mobile-menu-enter absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl flex flex-col">
            <div className="flex items-center justify-between border-b border-neutral-100 p-5">
              <div className="flex items-center gap-3">
                <img
                  src={siteConfig.brand.logo}
                  alt="logo"
                  className="h-14 w-14 rounded-full object-cover"
                  onError={(e) => { e.currentTarget.src = '/assets/logo.svg'; }}
                />
                <span className="font-display text-base font-bold tracking-tight text-primary-600">
                  {siteConfig.brand.name}
                </span>
              </div>
              <button
                className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100 text-neutral-700"
                onClick={closeMobile}
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>
            <nav className="flex flex-col gap-1 p-5">
              {schoolConfig.navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMobile}
                  className={`rounded-xl px-4 py-3 text-base font-semibold transition-colors hover:bg-primary-50 hover:text-primary-600 ${
                    active === link.href ? 'bg-primary-50 text-primary-600' : 'text-neutral-700'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="mt-auto border-t border-neutral-100 p-5">
              <div className="flex items-center gap-2 text-sm text-neutral-500">
                <MapPin size={16} className="text-primary-500" />
                {schoolConfig.locationShort}
              </div>
              <a
                href="#contact"
                onClick={closeMobile}
                className="btn-primary mt-4 w-full"
              >
                Enquire Now
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
