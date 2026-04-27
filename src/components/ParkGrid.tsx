"use client";

import { PARKS } from "@/data/parks";
import { useState } from "react";

const FILTERS = ["Trending", "Near you", "Stargazing", "Family", "Solitude", "Coastal", "Desert"];

export default function ParkGrid() {
  const [active, setActive] = useState("Trending");
  const [favorites, setFavorites] = useState<Set<string>>(new Set());

  const toggleFav = (id: string) => {
    setFavorites((f) => {
      const next = new Set(f);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  return (
    <section id="explore" className="relative py-20 md:py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-forest-600 font-semibold">
              Featured parks
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-forest-900 mt-3">
              Hand-picked by rangers, loved by visitors.
            </h2>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition border ${
                active === f
                  ? "bg-forest-700 text-sand-50 border-forest-700"
                  : "bg-white border-forest-200 text-forest-800 hover:border-forest-400"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PARKS.map((p) => (
            <article key={p.id} className="lift-card group cursor-pointer">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${p.hero})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/70 via-transparent to-transparent" />
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFav(p.id);
                  }}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/30 backdrop-blur hover:bg-black/50 flex items-center justify-center transition"
                  aria-label="Save"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className={`w-5 h-5 transition ${
                      favorites.has(p.id) ? "fill-forest-400 text-forest-400" : "fill-transparent text-white"
                    }`}
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M12 21s-7-4.35-7-10a4.5 4.5 0 0 1 8-2.83A4.5 4.5 0 0 1 21 11c0 5.65-7 10-7 10z" />
                  </svg>
                </button>
                <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur text-xs font-semibold text-forest-800">
                  Best · {p.best}
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5 text-sand-50">
                  <div className="flex items-end justify-between gap-3">
                    <div className="min-w-0">
                      <div className="font-display text-2xl font-semibold leading-tight truncate">
                        {p.name}
                      </div>
                      <div className="text-xs opacity-80 mt-0.5">{p.state}</div>
                    </div>
                    <div className="flex items-center gap-1 text-sm font-semibold flex-shrink-0">
                      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                        <path d="m12 17.27 5.18 3.04-1.37-5.87L20.5 9.97l-5.99-.51L12 4 9.49 9.46 3.5 9.97l4.69 4.47-1.37 5.87z" />
                      </svg>
                      {p.rating}
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-1 pt-4 pb-2">
                <p className="text-sm text-forest-700 leading-relaxed">{p.tagline}</p>
                <div className="flex items-center justify-between mt-3">
                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.slice(0, 2).map((t) => (
                      <span key={t} className="text-[11px] px-2 py-0.5 rounded-full bg-forest-50 text-forest-700 border border-forest-100">
                        {t}
                      </span>
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-forest-900">{p.pricing}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
