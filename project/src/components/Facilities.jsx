import { Camera, ShieldCheck, AirVent, Palette, Trees, Baby } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const facilities = [
  {
    icon: Baby,
    title: 'Child-Friendly Spaces',
    desc: 'Bright, cheerful classrooms designed for little ones.',
  },
  {
    icon: Camera,
    title: 'CCTV Surveillance',
    desc: 'Safe and monitored premises for peace of mind.',
  },
  {
    icon: AirVent,
    title: 'Air-Conditioned Rooms',
    desc: 'Comfortable, cool classrooms for focused learning.',
  },
  {
    icon: Palette,
    title: 'Activity Corners',
    desc: 'Dedicated areas for art, reading and free play.',
  },
  {
    icon: Trees,
    title: 'Outdoor Play Area',
    desc: 'Safe, open spaces for physical play and nature time.',
  },
  {
    icon: ShieldCheck,
    title: 'Hygienic Environment',
    desc: 'Clean, sanitised spaces maintained throughout the day.',
  },
];

export default function Facilities() {
  const headerRef = useScrollReveal();
  const gridRef = useScrollReveal();

  return (
    <section className="relative overflow-hidden bg-cream-100 py-6 md:py-8 lg:py-10">
      <div className="absolute left-1/4 top-0 h-64 w-64 rounded-full bg-accent-100/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className="reveal mx-auto mb-6 max-w-2xl text-center">
          <p className="section-subtitle">Our Facilities</p>
          <h2 className="section-title mt-2">Thoughtfully Designed for Little Ones</h2>
          <p className="mt-4 text-base text-neutral-600">
            Our school environment is built around the needs of young children, with safety,
            comfort and exploration at the centre of every space.
          </p>
        </div>

        <div ref={gridRef} className="reveal-stagger grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {facilities.map((facility) => {
            const Icon = facility.icon;
            return (
              <div
                key={facility.title}
                className="card-shimmer card-glow group flex items-start gap-5 rounded-3xl bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-2 hover:shadow-card-hover"
              >
                <div className="icon-bounce flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-primary-50 text-primary-500 transition-all duration-300 group-hover:bg-primary-500 group-hover:text-white group-hover:scale-110">
                  <Icon size={26} />
                </div>
                <div>
                  <h3 className="mb-1 font-display text-lg font-bold text-neutral-800">
                    {facility.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-neutral-600">
                    {facility.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
