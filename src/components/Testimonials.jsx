import { Quote, Star } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const testimonials = [
  {
    text: 'An engaging and welcoming environment for young children. The teachers are caring and the activities are well thought out.',
    label: 'Sample Parent Feedback',
  },
  {
    text: 'My child looks forward to going to school every day. The play-based approach has helped build confidence and curiosity.',
    label: 'Sample Parent Feedback',
  },
  {
    text: 'A nurturing space where children learn through play. The communication from teachers has been warm and consistent.',
    label: 'Sample Parent Feedback',
  },
];

export default function Testimonials() {
  const headerRef = useScrollReveal();
  const cardsRef = useScrollReveal();

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 to-accent-50 py-20 lg:py-28">
      <div className="absolute inset-0 bg-dots opacity-20" />
      <div className="absolute right-10 top-10 animate-float-slow text-6xl opacity-10">💬</div>
      <div className="absolute left-10 bottom-10 animate-float-medium text-6xl opacity-10">⭐</div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className="reveal mx-auto mb-14 max-w-2xl text-center">
          <p className="section-subtitle">Parent Feedback</p>
          <h2 className="section-title mt-2">What Parents Say About Us</h2>
          <p className="mt-4 text-base text-neutral-600">
            The following are sample reflections shared to illustrate the kind of experience
            families can expect at Little Krishna Play School.
          </p>
        </div>

        <div ref={cardsRef} className="reveal-stagger grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="card-shimmer card-glow group relative rounded-3xl bg-white p-8 shadow-card transition-all duration-300 hover:-translate-y-2 hover:shadow-card-hover"
            >
              <div className="absolute -top-4 left-8 flex h-10 w-10 items-center justify-center rounded-full bg-primary-500 text-white shadow-warm">
                <Quote size={18} />
              </div>

              <div className="mb-4 flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} className="fill-accent-400 text-accent-400" />
                ))}
              </div>

              <p className="mb-6 text-sm leading-relaxed text-neutral-700">
                "{testimonial.text}"
              </p>

              <div className="border-t border-neutral-100 pt-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-neutral-400">
                  {testimonial.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
