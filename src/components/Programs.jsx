import { Blocks, BookOpen, GraduationCap, Pencil, Clock, ArrowRight } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const programs = [
  {
    icon: Blocks,
    title: 'Play Group',
    age: '1.5 – 2.5 years',
    desc: 'A gentle introduction to school through sensory play, rhymes and joyful social interaction.',
    color: 'from-primary-400 to-primary-500',
    bg: 'bg-primary-50',
    text: 'text-primary-600',
  },
  {
    icon: BookOpen,
    title: 'Nursery',
    age: '2.5 – 3.5 years',
    desc: 'Exploring colours, shapes, sounds and stories while building language and motor skills.',
    color: 'from-secondary-400 to-secondary-500',
    bg: 'bg-secondary-50',
    text: 'text-secondary-600',
  },
  {
    icon: Pencil,
    title: 'LKG',
    age: '3.5 – 4.5 years',
    desc: 'Structured play-based learning with early literacy, numeracy and creative expression.',
    color: 'from-accent-400 to-accent-500',
    bg: 'bg-accent-50',
    text: 'text-accent-600',
  },
  {
    icon: GraduationCap,
    title: 'UKG',
    age: '4.5 – 5.5 years',
    desc: 'Building readiness for primary school through confidence, curiosity and foundational skills.',
    color: 'from-success-400 to-success-500',
    bg: 'bg-success-50',
    text: 'text-success-600',
  },
];

export default function Programs() {
  const headerRef = useScrollReveal();
  const cardsRef = useScrollReveal();

  return (
    <section id="programs" className="relative overflow-hidden bg-white py-8 md:py-10 lg:py-12">
      <div className="absolute left-0 top-1/3 h-72 w-72 rounded-full bg-secondary-100/30 blur-3xl" />
      <div className="absolute right-0 bottom-1/4 h-72 w-72 rounded-full bg-accent-100/30 blur-3xl" />

      {/* Subtle cartoon decorative elements */}
      <div className="pointer-events-none absolute left-[6%] top-[12%] hidden text-3xl opacity-20 animate-float-slow sm:block">☁️</div>
      <div className="pointer-events-none absolute right-[8%] top-[20%] hidden text-2xl opacity-20 animate-float-medium sm:block">⭐</div>
      <div className="pointer-events-none absolute left-[10%] bottom-[10%] hidden text-2xl opacity-20 animate-float-fast lg:block">📚</div>
      <div className="pointer-events-none absolute right-[5%] bottom-[18%] hidden text-3xl opacity-15 animate-wiggle lg:block">🎈</div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="reveal mx-auto mb-8 max-w-2xl text-center">
          <p className="section-subtitle">Our Programs</p>
          <h2 className="section-title mt-2">Learning for Every Little Step</h2>
          <p className="mt-4 text-base text-neutral-600">
            From first steps to school readiness, each program is designed to match your
            child's developmental stage with the right mix of play, structure and care.
          </p>
        </div>

        {/* Cards */}
        <div ref={cardsRef} className="reveal-stagger grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((program) => {
            const Icon = program.icon;
            return (
              <div
                key={program.title}
                className="card-shimmer card-glow group relative overflow-hidden rounded-3xl bg-white shadow-card transition-all duration-300 hover:-translate-y-3 hover:shadow-card-hover"
              >
                {/* Top gradient bar */}
                <div className={`h-2 bg-gradient-to-r ${program.color}`} />

                <div className="p-7">
                  <div
                    className={`icon-bounce mb-5 flex h-16 w-16 items-center justify-center rounded-2xl ${program.bg} ${program.text} transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6`}
                  >
                    <Icon size={30} />
                  </div>

                  <h3 className="mb-1 font-display text-xl font-bold text-neutral-800">
                    {program.title}
                  </h3>
                  <p className={`mb-3 text-xs font-semibold uppercase tracking-wide ${program.text}`}>
                    {program.age}
                  </p>
                  <p className="text-sm leading-relaxed text-neutral-600">
                    {program.desc}
                  </p>

                  <a
                    href="#contact"
                    className={`mt-5 inline-flex items-center gap-1.5 text-sm font-semibold ${program.text} transition-all hover:gap-3`}
                  >
                    Learn More
                    <ArrowRight size={15} />
                  </a>
                </div>

                {/* Decorative corner */}
                <div
                  className={`absolute -right-8 -top-8 h-24 w-24 rounded-full ${program.bg} opacity-50 transition-transform duration-500 group-hover:scale-150`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
