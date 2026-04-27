const STORIES = [
  {
    title: "The 5-day Olympic loop",
    excerpt: "From rainforest to ridgeline in one trip — a ranger's recommended route.",
    tag: "Field guide",
    img: "https://images.unsplash.com/photo-1465056836041-7f43ac27dcb5?w=900&q=80",
  },
  {
    title: "Dark-sky parks ranked",
    excerpt: "Where to go this fall to actually see the Milky Way.",
    tag: "Stargazing",
    img: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=900&q=80",
  },
  {
    title: "Family trips that don't suck",
    excerpt: "Wagon-friendly trails, easy lodging, real wildlife.",
    tag: "Family",
    img: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=900&q=80",
  },
];

export default function Stories() {
  return (
    <section id="stories" className="py-20 md:py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-forest-600 font-semibold">Stories from the field</span>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-forest-900 mt-3">
              Read before you roam.
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {STORIES.map((s) => (
            <article key={s.title} className="lift-card cursor-pointer">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-110"
                  style={{ backgroundImage: `url(${s.img})` }}
                />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 text-xs font-semibold text-forest-800">
                  {s.tag}
                </div>
              </div>
              <div className="px-1 pt-4">
                <h3 className="font-display text-xl font-semibold text-forest-900">{s.title}</h3>
                <p className="text-sm text-forest-700 mt-1.5">{s.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
