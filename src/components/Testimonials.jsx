import { Star } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

// NOTE: replace these with genuine, permission-granted parent reviews before launch.
const testimonials = [
  {
    text: 'My daughter used to cry every morning at drop-off, but within a few weeks she started running to her class. The teachers are patient and always tell us what she did during the day.',
    name: 'Lakshmi Prasanna',
    role: 'Parent of a Nursery student',
  },
  {
    text: 'We put our son in day care because both of us work, and it has been a big relief. He is well looked after, eats on time and comes home happy with new rhymes to sing.',
    name: 'Ravi Teja Kommineni',
    role: 'Parent of a Day Care student',
  },
  {
    text: 'The activities are simple but well planned. Art, stories and games every day, and I can see the difference in how confidently my child now speaks and shares with others.',
    name: 'Sravani Reddy',
    role: 'Parent of a Junior KG student',
  },
];

export default function Testimonials() {
  const headerRef = useScrollReveal();
  const cardsRef = useScrollReveal();

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 to-accent-50 py-6 md:py-8 lg:py-10">
      <div className="pointer-events-none absolute inset-0 z-0 bg-dots opacity-20" />
      <div className="pointer-events-none absolute right-10 top-10 z-0 animate-float-slow text-6xl opacity-10">💬</div>
      <div className="pointer-events-none absolute left-10 bottom-10 z-0 animate-float-medium text-6xl opacity-10">⭐</div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className="reveal mx-auto mb-6 max-w-2xl text-center">
          <p className="section-subtitle">Parent Feedback</p>
          <h2 className="section-title mt-2">What Parents Say About Us</h2>
          <p className="mt-4 text-base text-neutral-600">
            Kind words from the families who trust us with their little ones every day.
          </p>
        </div>

        <div ref={cardsRef} className="reveal-stagger grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="card-shimmer card-glow group relative flex flex-col rounded-3xl border border-primary-100 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-2 hover:shadow-card-hover sm:p-8"
            >
              <div className="mb-4 flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} className="fill-accent-400 text-accent-400" />
                ))}
              </div>

              <p className="mb-6 flex-1 text-sm leading-relaxed text-neutral-700 sm:text-base">
                {testimonial.text}
              </p>

              <div className="flex items-center gap-3 border-t border-neutral-100 pt-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary-100 font-display text-base font-bold text-primary-600">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-display text-sm font-bold text-neutral-800">{testimonial.name}</p>
                  <p className="text-xs text-neutral-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
