import { Palette, BookOpen, Music, TreePalm, Users, Blocks } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import siteConfig from '@/config/siteConfig';

const [activityImg1, activityImg2, activityImg3, activityImg4] = siteConfig.media.activityImages;
const { socialDevelopmentImage, communicationImage } = siteConfig.media;

const activities = [
  {
    icon: Palette,
    title: 'Art & Craft',
    desc: 'Painting, cutting, sticking and creating — building fine motor skills and imagination.',
    image: activityImg2,
    position: '50% 12%', // portrait photo: keep the child's face and upper body in frame
    span: '',
  },
  {
    icon: BookOpen,
    title: 'Storytelling',
    desc: 'Captivating stories that build language, listening and a love for books.',
    image: activityImg1,
    span: '',
  },
  {
    icon: Music,
    title: 'Music & Dance',
    desc: 'Rhymes, rhythm and movement for joyful expression and coordination.',
    image: activityImg3,
    span: '',
  },
  {
    icon: TreePalm,
    title: 'Nature & Outdoor Play',
    desc: 'Fresh air, sensory exploration and physical activity in safe outdoor spaces.',
    image: activityImg4,
    span: '',
  },
  {
    icon: Users,
    title: 'Social Development',
    desc: 'Group play, sharing and friendly interactions help children build friendships and emotional understanding.',
    image: socialDevelopmentImage,
    position: '50% 30%',
    span: '',
  },
  {
    icon: Blocks,
    title: 'Communication',
    desc: 'Through rhymes, conversations and show-and-tell, children express themselves with growing confidence.',
    image: communicationImage,
    position: '50% 40%',
    span: '',
  },
];

export default function Activities() {
  const headerRef = useScrollReveal();
  const gridRef = useScrollReveal();

  return (
    <section id="activities" className="relative bg-white py-6 md:py-8 lg:py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="reveal mx-auto mb-6 max-w-2xl text-center">
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
                  {activity.image ? (
                    <img
                      src={activity.image}
                      alt={activity.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      style={activity.position ? { objectPosition: activity.position } : undefined}
                      loading="lazy"
                    />
                  ) : (
                    // No photo supplied yet - themed gradient instead of a placeholder image
                    <div className="h-full w-full bg-gradient-to-br from-primary-400 to-accent-400" />
                  )}
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
        </div>
      </div>
    </section>
  );
}
