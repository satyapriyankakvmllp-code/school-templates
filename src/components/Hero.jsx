import { Sparkles, MapPin, ArrowRight, Phone, PlayCircle } from 'lucide-react';
import { useRef, useState } from 'react';
import schoolConfig from '@/config/schoolConfig';
import siteConfig from '@/config/siteConfig';

export default function Hero() {
  const [playVideo, setPlayVideo] = useState(false);
  const hasVideo = Boolean(siteConfig.media.heroVideo);
  const imgWrap = useRef(null);
  const blobs = useRef(null);

  // Desktop-only (mouse) parallax: image drifts one way, background blobs the other
  const onMouseMove = (e) => {
    if (!window.matchMedia('(min-width: 1024px) and (pointer: fine)').matches) return;
    const x = (e.clientX / window.innerWidth - 0.5) * 2;
    const y = (e.clientY / window.innerHeight - 0.5) * 2;
    if (imgWrap.current) imgWrap.current.style.transform = `translate3d(${x * -14}px, ${y * -10}px, 0)`;
    if (blobs.current) blobs.current.style.transform = `translate3d(${x * 26}px, ${y * 18}px, 0)`;
  };
  const onMouseLeave = () => {
    if (imgWrap.current) imgWrap.current.style.transform = '';
    if (blobs.current) blobs.current.style.transform = '';
  };

  const goToAdmissions = (e) => {
    e.preventDefault();
    const el = document.getElementById('admissions');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.replaceState(null, '', '#admissions');
    }
  };

  return (
    <section
      id="home"
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-cream-100 to-secondary-50 pt-20 pb-14 sm:pb-16 lg:pt-24 lg:pb-24"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 bg-grid opacity-60" />
      <div ref={blobs} className="pointer-events-none absolute inset-0 transition-transform duration-300 ease-out">
        <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-accent-200/40 blur-3xl" />
        <div className="absolute -right-10 bottom-10 h-80 w-80 rounded-full bg-secondary-200/40 blur-3xl" />
      </div>

      {/* Floating decorative shapes */}
      <div className="absolute left-[8%] top-[30%] hidden md:block">
        <div className="animate-float-slow h-16 w-16 rounded-2xl bg-primary-300/50 rotate-12" />
      </div>
      <div className="absolute right-[6%] top-[18%] hidden md:block">
        <div className="animate-float-medium h-12 w-12 rounded-full bg-secondary-300/50" />
      </div>
      <div className="absolute left-[15%] bottom-[15%] hidden lg:block">
        <div className="animate-float-fast h-10 w-10 rounded-lg bg-accent-300/60 -rotate-6" />
      </div>
      <div className="absolute right-[20%] bottom-[25%] hidden lg:block">
        <div className="animate-wiggle h-14 w-14 rounded-full border-4 border-success-300/50" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-[1fr_1fr] items-center gap-3 px-3 sm:grid-cols-2 sm:gap-8 sm:px-6 lg:gap-8 lg:px-8">
        {/* Left content */}
        <div className="flex flex-col items-start text-left">
          <a
            href="#admissions"
            onClick={goToAdmissions}
            aria-label={`${siteConfig.media.admissionsBanner} - go to Admissions`}
            className="hero-fade-in mb-3 inline-flex max-w-full items-center gap-1 rounded-full bg-white/80 px-2 py-1.5 text-[10px] font-semibold text-primary-600 shadow-card backdrop-blur transition-all duration-300 hover:bg-white hover:shadow-lg hover:-translate-y-0.5 sm:mb-5 sm:gap-2 sm:px-4 sm:py-2 sm:text-sm"
            style={{ animationDelay: '0.1s' }}
          >
            <Sparkles size={16} className="text-accent-400" />
            <span className="min-w-0">{siteConfig.media.admissionsBanner}</span>
            <ArrowRight size={14} />
          </a>

          <h1
            className="hero-slide-up font-display text-[28px] font-extrabold leading-[1.1] text-neutral-800 sm:text-6xl lg:text-7xl"
            style={{ animationDelay: '0.2s' }}
          >
            {schoolConfig.title.split(' ').slice(0, 2).join(' ')}
            <span className="block text-primary-500">
              {schoolConfig.title.split(' ').slice(2).join(' ')}
            </span>
          </h1>

          <p
            className="hero-slide-up mt-2 font-display text-sm font-semibold text-secondary-600 sm:mt-4 sm:text-2xl"
            style={{ animationDelay: '0.35s' }}
          >
            {schoolConfig.tagline}
          </p>

          <p
            className="hero-slide-up mt-3 max-w-lg text-[11px] leading-relaxed text-neutral-600 sm:mt-5 sm:text-lg"
            style={{ animationDelay: '0.5s' }}
          >
            {schoolConfig.welcomeMessage}
          </p>

          <div
            className="hero-slide-up mt-3 flex flex-wrap items-center gap-1 text-[10px] font-medium text-neutral-500 sm:mt-7 sm:gap-2 sm:text-sm"
            style={{ animationDelay: '0.6s' }}
          >
            <MapPin size={18} className="text-primary-500" />
            {schoolConfig.locationShort}
          </div>

          <div
            className="hero-slide-up mt-4 flex flex-wrap gap-2 sm:mt-8 sm:gap-4"
            style={{ animationDelay: '0.7s' }}
          >
            <a href="#programs" className="btn-primary px-3 py-2 text-[11px] sm:px-7 sm:py-3.5 sm:text-base">
              Explore Programs
              <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn-secondary px-3 py-2 text-[11px] sm:px-7 sm:py-3.5 sm:text-base">
              <Phone size={18} />
              Enquire Now
            </a>
          </div>
        </div>

        {/* Right image */}
        <div className="relative hero-image-reveal" style={{ animationDelay: '0.3s' }}>
          <div ref={imgWrap} className="relative mx-auto max-w-md transition-transform duration-300 ease-out lg:max-w-lg">
            {/* Background blob */}
            <div className="absolute inset-0 -z-10 animate-spin-slow rounded-[40%] bg-gradient-to-br from-primary-300 to-accent-300 opacity-30 blur-2xl" />

            {/* Main image / video */}
            <div className="relative aspect-square overflow-hidden rounded-2xl border-4 border-white shadow-2xl transition-transform duration-500 hover:scale-[1.02] sm:aspect-auto sm:rounded-[2.5rem] sm:rounded-br-[6rem] sm:border-8">
              {hasVideo && playVideo ? (
                <video
                  src={siteConfig.media.heroVideo}
                  className="h-full w-full object-cover sm:h-[500px]"
                  controls
                  autoPlay
                  playsInline
                />
              ) : (
                <>
                  <img
                    src={siteConfig.media.heroImage}
                    alt="Teacher guiding children through hands-on Montessori learning activities"
                    className="h-full w-full object-cover sm:h-[500px]"
                    loading="eager"
                  />
                  {hasVideo && (
                    <button
                      type="button"
                      onClick={() => setPlayVideo(true)}
                      aria-label="Play school tour video"
                      className="group absolute inset-0 flex items-center justify-center bg-neutral-900/20 transition-colors hover:bg-neutral-900/30"
                    >
                      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-primary-600 shadow-xl transition-transform duration-300 group-hover:scale-110">
                        <PlayCircle size={32} />
                      </span>
                    </button>
                  )}
                </>
              )}
            </div>

            {/* Floating card - top left */}
            <div className="absolute -left-4 top-8 hidden animate-float-slow rounded-2xl bg-white p-4 shadow-card transition-transform duration-300 hover:scale-105 hover:rotate-2 sm:block sm:-left-8">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-success-100">
                  <span className="text-2xl">🎨</span>
                </div>
                <div>
                  <p className="font-display text-sm font-bold text-neutral-800">Creative Learning</p>
                  <p className="text-xs text-neutral-500">Art & Craft Daily</p>
                </div>
              </div>
            </div>

            {/* Floating card - bottom right */}
            <div className="absolute -right-2 bottom-12 hidden animate-float-medium rounded-2xl bg-white p-4 shadow-card transition-transform duration-300 hover:scale-105 hover:-rotate-2 sm:block sm:-right-6">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary-100">
                  <span className="text-2xl">📚</span>
                </div>
                <div>
                  <p className="font-display text-sm font-bold text-neutral-800">Story Time</p>
                  <p className="text-xs text-neutral-500">Every Day</p>
                </div>
              </div>
            </div>

            {/* Small floating circle */}
            <div className="absolute -right-4 top-4 hidden animate-bounce-soft h-14 w-14 items-center justify-center rounded-full bg-accent-400 text-2xl shadow-warm transition-transform duration-300 hover:scale-125 sm:flex">
              🧸
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-0">
        <svg viewBox="0 0 1440 100" fill="none" className="w-full">
          <path
            d="M0 100V40C240 80 480 0 720 20C960 40 1200 80 1440 50V100H0Z"
            fill="#fdf8ee"
          />
        </svg>
      </div>
    </section>
  );
}
