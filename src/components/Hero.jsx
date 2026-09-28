import { Sparkles, MapPin, ArrowRight, Phone, PlayCircle } from 'lucide-react';
import { useState } from 'react';
import schoolConfig from '@/config/schoolConfig';
import siteConfig from '@/config/siteConfig';

export default function Hero() {
  const [playVideo, setPlayVideo] = useState(false);
  const hasVideo = Boolean(siteConfig.media.heroVideo);

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-cream-100 to-secondary-50 pt-20 pb-14 sm:pb-16 lg:pt-24 lg:pb-24"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 bg-grid opacity-60" />
      <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-accent-200/40 blur-3xl" />
      <div className="absolute -right-10 bottom-10 h-80 w-80 rounded-full bg-secondary-200/40 blur-3xl" />

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

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:px-8">
        {/* Left content */}
        <div className="flex flex-col items-start text-left">
          <div
            className="hero-fade-in mb-5 inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm font-semibold text-primary-600 shadow-card backdrop-blur"
            style={{ animationDelay: '0.1s' }}
          >
            <Sparkles size={16} className="text-accent-400" />
            <span>Admissions Open for the New Batch</span>
          </div>

          <h1
            className="hero-slide-up font-display text-5xl font-extrabold leading-[1.1] text-neutral-800 sm:text-6xl lg:text-7xl"
            style={{ animationDelay: '0.2s' }}
          >
            {schoolConfig.title.split(' ').slice(0, 2).join(' ')}
            <span className="block text-primary-500">
              {schoolConfig.title.split(' ').slice(2).join(' ')}
            </span>
          </h1>

          <p
            className="hero-slide-up mt-4 font-display text-xl font-semibold text-secondary-600 sm:text-2xl"
            style={{ animationDelay: '0.35s' }}
          >
            {schoolConfig.tagline}
          </p>

          <p
            className="hero-slide-up mt-5 max-w-lg text-base leading-relaxed text-neutral-600 sm:text-lg"
            style={{ animationDelay: '0.5s' }}
          >
            {schoolConfig.welcomeMessage}
          </p>

          <div
            className="hero-slide-up mt-7 flex flex-wrap items-center gap-2 text-sm font-medium text-neutral-500"
            style={{ animationDelay: '0.6s' }}
          >
            <MapPin size={18} className="text-primary-500" />
            {schoolConfig.locationShort}
          </div>

          <div
            className="hero-slide-up mt-8 flex flex-wrap gap-4"
            style={{ animationDelay: '0.7s' }}
          >
            <a href="#programs" className="btn-primary">
              Explore Programs
              <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn-secondary">
              <Phone size={18} />
              Enquire Now
            </a>
          </div>
        </div>

        {/* Right image */}
        <div className="relative hero-image-reveal" style={{ animationDelay: '0.3s' }}>
          <div className="relative mx-auto max-w-md lg:max-w-lg">
            {/* Background blob */}
            <div className="absolute inset-0 -z-10 animate-spin-slow rounded-[40%] bg-gradient-to-br from-primary-300 to-accent-300 opacity-30 blur-2xl" />

            {/* Main image / video */}
            <div className="relative overflow-hidden rounded-[2.5rem] rounded-br-[6rem] border-8 border-white shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
              {hasVideo && playVideo ? (
                <video
                  src={siteConfig.media.heroVideo}
                  className="h-[420px] w-full object-cover sm:h-[500px]"
                  controls
                  autoPlay
                  playsInline
                />
              ) : (
                <>
                  <img
                    src={siteConfig.media.heroImage}
                    alt="Teacher guiding children through hands-on Montessori learning activities"
                    className="h-[420px] w-full object-cover sm:h-[500px]"
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
            <div className="absolute -left-4 top-8 animate-float-slow rounded-2xl bg-white p-4 shadow-card transition-transform duration-300 hover:scale-105 hover:rotate-2 sm:-left-8">
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
            <div className="absolute -right-2 bottom-12 animate-float-medium rounded-2xl bg-white p-4 shadow-card transition-transform duration-300 hover:scale-105 hover:-rotate-2 sm:-right-6">
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
            <div className="absolute -right-4 top-4 animate-bounce-soft flex h-14 w-14 items-center justify-center rounded-full bg-accent-400 text-2xl shadow-warm transition-transform duration-300 hover:scale-125">
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
