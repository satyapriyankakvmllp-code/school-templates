import { Check } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import schoolConfig from '@/config/schoolConfig';
import siteConfig from '@/config/siteConfig';

const [aboutImg1, aboutImg2, aboutImg3, aboutImg4] = siteConfig.media.aboutImages;

const highlights = [
  'Child-centred, activity-based curriculum',
  'Experienced and caring facilitators',
  'Bright, cheerful and safe classrooms',
  'Focus on social and emotional development',
  'Storytelling, music, art and outdoor play',
  'Strong parent-teacher communication',
];

export default function About() {
  const leftRef = useScrollReveal();
  const rightRef = useScrollReveal();

  return (
    <section id="about" className="relative overflow-hidden bg-cream-100 py-6 md:py-8 lg:py-10">
      <div className="absolute right-0 top-20 h-64 w-64 rounded-full bg-primary-100/40 blur-3xl" />

      {/* Subtle floral decorative elements */}
      <div className="pointer-events-none absolute left-[4%] top-[15%] hidden opacity-20 animate-float-slow lg:block" aria-hidden="true">
        <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
          <path d="M12 2C9 6 9 10 12 14C15 10 15 6 12 2Z" fill="#22c55e" />
          <path d="M4 12C8 10 11 11 13 14C10 17 6 17 4 12Z" fill="#4ade80" />
        </svg>
      </div>
      <div className="pointer-events-none absolute right-[6%] bottom-[10%] hidden opacity-15 animate-float-medium lg:block" aria-hidden="true">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="3.2" fill="#facc15" />
          <path d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l3 3M16 16l3 3M19 5l-3 3M8 16l-3 3" stroke="#facc15" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image collage */}
          <div ref={leftRef} className="reveal reveal-left relative">
            <div className="relative grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="overflow-hidden rounded-3xl rounded-br-[3rem] border-4 border-white shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1">
                  <img
                    src={aboutImg1.src}
                    alt={aboutImg1.alt}
                    className="h-48 w-full object-cover transition-transform duration-500 hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <div className="overflow-hidden rounded-3xl rounded-tr-[3rem] border-4 border-white shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1">
                  <img
                    src={aboutImg2.src}
                    alt={aboutImg2.alt}
                    className="h-40 w-full object-cover transition-transform duration-500 hover:scale-110"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="overflow-hidden rounded-3xl rounded-bl-[3rem] border-4 border-white shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1">
                  <img
                    src={aboutImg3.src}
                    alt={aboutImg3.alt}
                    className="h-40 w-full object-cover transition-transform duration-500 hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <div className="overflow-hidden rounded-3xl rounded-tl-[3rem] border-4 border-white shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1">
                  <img
                    src={aboutImg4.src}
                    alt={aboutImg4.alt}
                    className="h-48 w-full object-cover transition-transform duration-500 hover:scale-110"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 animate-float-slow rounded-2xl bg-white px-6 py-3 shadow-card">
              <p className="font-display text-sm font-bold text-primary-600">
                Where learning feels like play
              </p>
            </div>
          </div>

          {/* Text content */}
          <div ref={rightRef} className="reveal reveal-right">
            <p className="section-subtitle">About Our School</p>
            <h2 className="section-title mt-2 mb-5">
              A Joyful Beginning for Every Child
            </h2>
            <p className="mb-5 text-base leading-relaxed text-neutral-600">
              {schoolConfig.title} is a welcoming early childhood space in{' '}
              {schoolConfig.locationShort}, created for children to explore, imagine
              and discover the joy of learning. We believe the early years are the most
              precious, and we are committed to making them meaningful.
            </p>
            <p className="mb-7 text-base leading-relaxed text-neutral-600">
              Our approach blends play, creativity and gentle structure, helping children
              build confidence, friendships and a love for learning that stays with them
              for life.
            </p>

            <div className="grid gap-3 sm:grid-cols-2">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-success-100 text-success-600">
                    <Check size={14} strokeWidth={3} />
                  </span>
                  <span className="text-sm font-medium text-neutral-700">{item}</span>
                </div>
              ))}
            </div>

            <a href="#programs" className="btn-primary mt-8">
              Discover Our Programs
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
