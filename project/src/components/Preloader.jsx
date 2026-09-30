import { useEffect, useState } from 'react';
import siteConfig from '@/config/siteConfig';

const MIN_MS = 1800; // shortest time the loading screen stays up
const MAX_MS = 5000; // failsafe: never block the site longer than this

export default function Preloader() {
  const [visible, setVisible] = useState(true);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    let done = false;
    let minDone = false;
    let loaded = document.readyState === 'complete';

    const finish = () => {
      if (done) return;
      done = true;
      setLeaving(true);
      setTimeout(() => {
        setVisible(false);
        document.body.style.overflow = '';
      }, 600);
    };
    const check = () => { if (minDone && loaded) finish(); };

    const minTimer = setTimeout(() => { minDone = true; check(); }, MIN_MS);
    const maxTimer = setTimeout(finish, MAX_MS);
    const onLoad = () => { loaded = true; check(); };
    if (!loaded) window.addEventListener('load', onLoad);

    return () => {
      clearTimeout(minTimer);
      clearTimeout(maxTimer);
      window.removeEventListener('load', onLoad);
      document.body.style.overflow = '';
    };
  }, []);

  if (!visible) return null;

  const doodles = [
    { e: '🧸', cls: 'left-[8%] top-[14%] text-4xl sm:text-5xl animate-float-slow' },
    { e: '📚', cls: 'right-[9%] top-[12%] text-3xl sm:text-5xl animate-float-medium' },
    { e: '🎨', cls: 'left-[10%] bottom-[16%] text-3xl sm:text-5xl animate-float-medium' },
    { e: '🎈', cls: 'right-[10%] bottom-[18%] text-4xl sm:text-5xl animate-float-slow' },
    { e: '⭐', cls: 'left-[45%] top-[6%] text-2xl sm:text-3xl animate-bounce-soft' },
    { e: '🌈', cls: 'right-[32%] bottom-[7%] text-3xl sm:text-4xl animate-bounce-soft' },
  ];

  return (
    <div
      role="status"
      aria-label="Loading"
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-primary-500 via-primary-400 to-accent-300 transition-opacity duration-500 ${
        leaving ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="absolute inset-0 bg-dots opacity-40" />
      <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-white/20 blur-3xl" />
      <div className="absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-secondary-300/40 blur-3xl" />

      {doodles.map((d) => (
        <span key={d.e} aria-hidden="true" className={`absolute select-none drop-shadow-lg ${d.cls}`}>
          {d.e}
        </span>
      ))}

      <div className="relative flex flex-col items-center px-6 text-center">
        {/* Logo on top */}
        <div className="relative flex h-40 w-40 items-center justify-center sm:h-52 sm:w-52">
          <span className="preloader-ring absolute inset-0 rounded-full" />
          <span className="absolute inset-3 rounded-full bg-white shadow-2xl" />
          <img
            src={siteConfig.brand.logo}
            alt={`${siteConfig.brand.title} logo`}
            className="preloader-logo relative h-32 w-32 rounded-full object-cover sm:h-44 sm:w-44"
          />
        </div>

        <h1
          className="preloader-text mt-6 font-display text-3xl font-extrabold text-white sm:text-5xl"
          style={{ textShadow: '0 3px 0 rgba(158,54,16,0.55), 0 8px 20px rgba(0,0,0,0.25)' }}
        >
          {siteConfig.brand.title}
        </h1>
        <p
          className="preloader-text mt-3 rounded-full bg-white px-5 py-2 font-display text-sm font-bold text-primary-600 shadow-lg sm:text-lg"
          style={{ animationDelay: '0.15s' }}
        >
          {siteConfig.brand.tagline}
        </p>

        <p
          className="preloader-text mt-6 font-display text-lg font-bold text-white sm:text-xl"
          style={{ animationDelay: '0.3s', textShadow: '0 2px 8px rgba(0,0,0,0.3)' }}
        >
          Loading, little friends
          <span className="ml-1 inline-flex gap-1 align-middle">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="animate-bounce-soft inline-block h-2 w-2 rounded-full bg-white"
                style={{ animationDelay: `${i * 0.18}s` }}
              />
            ))}
          </span>
        </p>

        <div className="mt-4 h-2 w-48 overflow-hidden rounded-full bg-white/40 sm:w-64">
          <div className="preloader-bar h-full rounded-full bg-white" />
        </div>
      </div>
    </div>
  );
}
