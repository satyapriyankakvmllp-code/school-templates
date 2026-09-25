import { Heart, Shield, Sparkles, Smile } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const features = [
  {
    icon: Heart,
    title: 'Caring Environment',
    desc: 'A warm and nurturing space where every child feels safe, valued and loved.',
    color: 'bg-rose-50 text-rose-500',
    delay: '0.05s',
  },
  {
    icon: Sparkles,
    title: 'Play-Based Learning',
    desc: 'Learning through play, exploration and hands-on activities that spark curiosity.',
    color: 'bg-accent-50 text-accent-500',
    delay: '0.15s',
  },
  {
    icon: Shield,
    title: 'Safe & Secure',
    desc: 'Child-friendly spaces designed with safety at the heart of every detail.',
    color: 'bg-success-50 text-success-600',
    delay: '0.25s',
  },
  {
    icon: Smile,
    title: 'Joyful Growth',
    desc: 'Celebrating each milestone as children grow socially, emotionally and creatively.',
    color: 'bg-secondary-50 text-secondary-500',
    delay: '0.35s',
  },
];

export default function Features() {
  const ref = useScrollReveal();

  return (
    <section className="relative -mt-2 bg-cream-100 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="reveal-stagger grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="card-shimmer card-glow group rounded-3xl bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-2 hover:shadow-card-hover"
              >
                <div
                  className={`icon-bounce mb-5 flex h-16 w-16 items-center justify-center rounded-2xl ${feature.color} transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6`}
                >
                  <Icon size={28} />
                </div>
                <h3 className="mb-2 font-display text-xl font-bold text-neutral-800">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-neutral-600">
                  {feature.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
