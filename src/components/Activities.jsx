import { Palette, BookOpen, Music, TreePalm, Users, Blocks } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const activities = [
  {
    icon: Palette,
    title: 'Art & Craft',
    desc: 'Painting, cutting, sticking and creating — building fine motor skills and imagination.',
    image: 'https://images.pexels.com/photos/7025567/pexels-photo-7025567.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    span: 'lg:col-span-2',
  },
  {
    icon: BookOpen,
    title: 'Storytelling',
    desc: 'Captivating stories that build language, listening and a love for books.',
    image: 'https://images.pexels.com/photos/8535173/pexels-photo-8535173.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    span: '',
  },
  {
    icon: Music,
    title: 'Music & Dance',
    desc: 'Rhymes, rhythm and movement for joyful expression and coordination.',
    image: 'https://images.pexels.com/photos/5635591/pexels-photo-5635591.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    span: '',
  },
  {
    icon: TreePalm,
    title: 'Nature & Outdoor Play',
    desc: 'Fresh air, sensory exploration and physical activity in safe outdoor spaces.',
    image: 'https://images.pexels.com/photos/8922644/pexels-photo-8922644.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    span: 'lg:col-span-2',
  },
];

export default function Activities() {
  const headerRef = useScrollReveal();
  const gridRef = useScrollReveal();

  return (
    <section id="activities" className="relative bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="reveal mx-auto mb-14 max-w-2xl text-center">
          <p className="section-subtitle">Learning Activities</p>
          <h2 className="section-title mt-2">Every Day is Full of Discovery</h2>
          <p className="mt-4 text-base text-neutral-600">
            Our days are filled with varied, engaging activities that nurture creativity,
            curiosity and confidence — because children learn best when they are having fun.
          </p>
        </div>

        {/* Bento-style grid */}
        <div ref={gridRef} className="reveal-stagger grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {activities.map((activity) => {
            const Icon = activity.icon;
            return (
              <div
                key={activity.title}
                className={`card-shimmer group relative overflow-hidden rounded-3xl shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-2 ${activity.span}`}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-neutral-900/20 to-transparent" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 backdrop-blur transition-transform duration-300 group-hover:scale-110">
                    <Icon size={24} />
                  </div>
                  <h3 className="mb-1 font-display text-xl font-bold">{activity.title}</h3>
                  <p className="text-sm leading-relaxed text-white/90">{activity.desc}</p>
                </div>
              </div>
            );
          })}

          {/* Social development card */}
          <div className="card-shimmer group relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-400 to-accent-400 p-7 shadow-card transition-all duration-300 hover:-translate-y-2 hover:shadow-card-hover">
            <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-white/10 transition-transform duration-500 group-hover:scale-150" />
            <div className="relative">
              <div className="icon-bounce mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 backdrop-blur">
                <Users size={26} className="text-white" />
              </div>
              <h3 className="mb-2 font-display text-xl font-bold text-white">Social Development</h3>
              <p className="text-sm leading-relaxed text-white/90">
                Group play, sharing and friendly interactions help children build friendships
                and emotional understanding.
              </p>
            </div>
          </div>

          {/* Communication card */}
          <div className="card-shimmer group relative overflow-hidden rounded-3xl bg-gradient-to-br from-secondary-400 to-secondary-600 p-7 shadow-card transition-all duration-300 hover:-translate-y-2 hover:shadow-card-hover">
            <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-white/10 transition-transform duration-500 group-hover:scale-150" />
            <div className="relative">
              <div className="icon-bounce mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 backdrop-blur">
                <Blocks size={26} className="text-white" />
              </div>
              <h3 className="mb-2 font-display text-xl font-bold text-white">Communication</h3>
              <p className="text-sm leading-relaxed text-white/90">
                Through rhymes, conversations and show-and-tell, children express themselves
                with growing confidence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
