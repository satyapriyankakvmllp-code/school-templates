import { useScrollReveal } from '@/hooks/useScrollReveal';
import siteConfig from '@/config/siteConfig';

const [g1, g2, g3, g4, g5, g6] = siteConfig.media.galleryImages;
const galleryImages = [
  {
    src: g1,
    alt: 'Children reading together in the classroom',
    label: 'Story Time',
    span: 'lg:row-span-2 lg:col-span-2',
    height: 'h-64 lg:h-full',
  },
  {
    src: g2,
    alt: 'Children enjoying arts and crafts',
    label: 'Art & Craft',
    span: '',
    height: 'h-48',
  },
  {
    src: g3,
    alt: 'Children taking part in a hands-on activity',
    label: 'Play Time',
    span: '',
    height: 'h-48',
  },
  {
    src: g4,
    alt: 'Teacher and children enjoying activities together',
    label: 'Learning Together',
    span: 'lg:col-span-2',
    height: 'h-48',
  },
  {
    src: g5,
    alt: 'Children dressed in traditional outfits for cultural day',
    label: 'Cultural Day',
    span: '',
    height: 'h-48',
    position: '50% 28%',
  },
  {
    src: g6,
    alt: 'Child making a creative handprint art activity',
    label: 'Creative Play',
    span: '',
    height: 'h-48',
    position: '50% 22%',
  },
];

export default function Gallery() {
  const headerRef = useScrollReveal();
  const gridRef = useScrollReveal();

  return (
    <section id="gallery" className="relative bg-white py-8 md:py-10 lg:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className="reveal mx-auto mb-8 max-w-2xl text-center">
          <p className="section-subtitle">Gallery</p>
          <h2 className="section-title mt-2">Moments of Joy and Learning</h2>
          <p className="mt-4 text-base text-neutral-600">
            A glimpse into everyday life at {siteConfig.brand.name} — full of smiles, creativity,
            friendship and discovery.
          </p>
        </div>

        <div
          ref={gridRef}
          className="reveal-stagger grid grid-cols-2 gap-4 lg:grid-cols-4 lg:grid-rows-3"
        >
          {galleryImages.map((image) => (
            <div
              key={image.label}
              className={`group relative overflow-hidden rounded-2xl shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 ${image.span}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className={`w-full ${image.height} object-cover transition-transform duration-500 group-hover:scale-110`}
                style={image.position ? { objectPosition: image.position } : undefined}
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-neutral-900/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="p-4 font-display text-sm font-bold text-white">
                  {image.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
