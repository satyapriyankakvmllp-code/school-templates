import { Moon, Heart, Utensils, BookOpen, Music, ShieldCheck } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import siteConfig from '@/config/siteConfig';

const careFeatures = [
  { icon: Heart, title: 'Loving Care', desc: 'Warm, attentive supervision throughout the day.' },
  { icon: Utensils, title: 'Meal & Snack Time', desc: 'Healthy routine with guided meal times.' },
  { icon: BookOpen, title: 'Quiet Activities', desc: 'Calm story and activity sessions for restful minds.' },
  { icon: Music, title: 'Music & Play', desc: 'Gentle play, rhymes and creative fun.' },
  { icon: Moon, title: 'Rest Period', desc: 'Comfortable nap time in a peaceful environment.' },
  { icon: ShieldCheck, title: 'Safe Surroundings', desc: 'Secure, child-proof spaces at every hour.' },
];

export default function DayCare() {
  const ref = useScrollReveal();

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-secondary-50 to-primary-50 py-8 md:py-10 lg:py-12">
      <div className="absolute inset-0 bg-dots opacity-30" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="reveal grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image side */}
          <div className="relative order-2 lg:order-1">
            <div className="overflow-hidden rounded-[2.5rem] rounded-tl-[6rem] border-8 border-white shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
              <img
                src={siteConfig.media.dayCareImage}
                alt="Teacher and children enjoying activities together at the day care"
                className="block aspect-[3/2] h-auto w-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Floating clock badge */}
            <div className="absolute -top-6 -right-4 animate-float-medium flex h-24 w-24 flex-col items-center justify-center rounded-full bg-white shadow-card transition-transform duration-300 hover:scale-110 sm:-right-6">
              <Moon size={22} className="text-secondary-500" />
              <span className="mt-1 font-display text-xs font-bold text-neutral-700">Day</span>
              <span className="font-display text-xs font-bold text-secondary-600">Care</span>
            </div>

            <div className="absolute -bottom-5 left-6 animate-float-slow rounded-2xl bg-white px-5 py-3 shadow-card transition-transform duration-300 hover:scale-105">
              <p className="font-display text-sm font-bold text-neutral-800">
                Safe, loving care beyond school hours
              </p>
            </div>
          </div>

          {/* Content side */}
          <div className="order-1 lg:order-2">
            <p className="section-subtitle">Day Care</p>
            <h2 className="section-title mt-2 mb-5">
              A Caring Second Home for Your Child
            </h2>
            <p className="mb-8 text-base leading-relaxed text-neutral-600">
              Our Day Care provides a safe, nurturing and engaging environment for children
              beyond school hours. With caring supervision, guided activities and comfortable
              rest, working parents can feel at ease knowing their little ones are in good hands.
            </p>

            <div className="grid gap-5 sm:grid-cols-2">
              {careFeatures.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.title} className="flex items-start gap-3">
                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-white text-secondary-500 shadow-card">
                      <Icon size={20} />
                    </div>
                    <div>
                      <h4 className="font-display text-sm font-bold text-neutral-800">
                        {feature.title}
                      </h4>
                      <p className="text-xs leading-relaxed text-neutral-600">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <a href="#contact" className="btn-primary mt-8">
              Enquire About Day Care
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
