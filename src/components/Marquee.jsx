const items = [
  'Play Group', 'Nursery', 'LKG', 'UKG', 'Day Care',
  'Art & Craft', 'Storytelling', 'Music & Dance', 'Outdoor Play', 'Creative Learning',
];

export default function Marquee() {
  const row = [...items, ...items];
  return (
    <div className="marquee relative overflow-hidden bg-primary-500 py-2.5" aria-hidden="true">
      <div className="marquee-track">
        {[0, 1].map((n) => (
          <div key={n} className="flex flex-shrink-0 items-center">
            {row.map((item, i) => (
              <span
                key={`${n}-${i}`}
                className="flex items-center whitespace-nowrap px-5 font-display text-xs font-bold uppercase tracking-[0.2em] text-white sm:text-sm"
              >
                {item}
                <span className="ml-10 text-accent-200">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
