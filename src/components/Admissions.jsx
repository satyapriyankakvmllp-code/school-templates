import { ArrowRight, CalendarHeart, PhoneCall, MapPin, MessagesSquare } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import schoolConfig from '@/config/schoolConfig';
import siteConfig from '@/config/siteConfig';

const steps = [
  {
    icon: MessagesSquare,
    title: 'Enquire About Admissions',
    desc: 'Reach out to our team to learn more about our programs and availability.',
  },
  {
    icon: CalendarHeart,
    title: 'Visit the School',
    desc: 'Come and see our learning spaces, meet our caring facilitators and feel the environment.',
  },
  {
    icon: PhoneCall,
    title: 'Contact Our Team',
    desc: "We're happy to answer any questions you have about your child's journey with us.",
  },
];

export default function Admissions() {
  const ref = useScrollReveal();

  return (
    <section
      id="admissions"
      className="relative overflow-hidden bg-gradient-to-br from-primary-500 via-primary-600 to-accent-500 py-6 md:py-8 lg:py-10"
    >
      {/* Decorative shapes */}
      <div className="absolute inset-0 bg-dots opacity-20" />
      <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-white/10 blur-2xl" />
      <div className="absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-accent-300/20 blur-2xl" />
      <div className="absolute left-[10%] top-[20%] animate-float-slow h-12 w-12 rounded-2xl bg-white/10 rotate-12" />
      <div className="absolute right-[15%] bottom-[30%] animate-float-medium h-10 w-10 rounded-full bg-white/10" />

      <div ref={ref} className="reveal relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-6 max-w-2xl text-center">
          <p className="font-display text-sm font-bold uppercase tracking-wider text-white/80">
            {siteConfig.media.admissionsBanner}
          </p>
          <h2 className="mt-2 font-display text-4xl font-extrabold text-white sm:text-5xl">
            Begin Your Child's Journey With Us
          </h2>
          <p className="mt-4 text-base text-white/90">
            We would love to welcome your little one to the {siteConfig.brand.name} family. Here's how
            you can get started.
          </p>
        </div>

        <div className="grid gap-3 sm:gap-4 md:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.title}
                className="card-shimmer group relative flex items-start gap-3 rounded-2xl bg-white/10 p-4 backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:-translate-y-2"
              >
                <div className="icon-bounce relative flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-white text-primary-600 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <Icon size={22} />
                  <span className="absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-accent-300 font-display text-[10px] font-extrabold text-neutral-800">
                    {index + 1}
                  </span>
                </div>
                <div className="min-w-0">
                  <h3 className="font-display text-base font-bold leading-tight text-white">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-white/85 sm:text-sm">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 text-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 font-display text-lg font-bold text-primary-600 shadow-2xl transition-all duration-300 hover:bg-cream-100 hover:-translate-y-1"
          >
            Enquire Now
            <ArrowRight size={20} />
          </a>
          <div className="flex items-center gap-2 text-sm text-white/80">
            <MapPin size={16} />
            {schoolConfig.locationShort}
          </div>
        </div>
      </div>
    </section>
  );
}
