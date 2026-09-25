import { useScrollReveal } from '@/hooks/useScrollReveal';

const galleryImages = [
  {
    src: 'https://images.pexels.com/photos/8535169/pexels-photo-8535169.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Teacher reading a story to children',
    label: 'Story Time',
    span: 'lg:row-span-2 lg:col-span-2',
    height: 'h-64 lg:h-full',
  },
  {
    src: 'https://images.pexels.com/photos/7025540/pexels-photo-7025540.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Children enjoying arts and crafts',
    label: 'Art & Craft',
    span: '',
    height: 'h-48',
  },
  {
    src: 'https://images.pexels.com/photos/8613174/pexels-photo-8613174.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Children lying on grass playing',
    label: 'Play Time',
    span: '',
    height: 'h-48',
  },
  {
    src: 'https://images.pexels.com/photos/8422205/pexels-photo-8422205.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Children learning with teacher',
    label: 'Learning Together',
    span: 'lg:col-span-2',
    height: 'h-48',
  },
  {
    src: 'https://images.pexels.com/photos/3997718/pexels-photo-3997718.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Children at outdoor playground',
    label: 'Outdoor Fun',
    span: '',
    height: 'h-48',
  },
  {
    src: 'https://images.pexels.com/photos/8467297/pexels-photo-8467297.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Kids in creative art activities',
    label: 'Creative Play',
    span: '',
    height: 'h-48',
  },
];

export default function Gallery() {
  const headerRef = useScrollReveal();
  const gridRef = useScrollReveal();

  return (
    <section id="gallery" className="relative bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className="reveal mx-auto mb-14 max-w-2xl text-center">
          <p className="section-subtitle">Gallery</p>
          <h2 className="section-title mt-2">Moments of Joy and Learning</h2>
          <p className="mt-4 text-base text-neutral-600">
            A glimpse into everyday life at Little Krishna — full of smiles, creativity,
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
