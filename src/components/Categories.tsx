"use client";

import { CATEGORIES } from "@/data/parks";
import { useState } from "react";

export default function Categories() {
  const [active, setActive] = useState("hiking");

  return (
    <section id="categories" className="relative py-20 md:py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-forest-600 font-semibold">
              Explore by category
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-forest-900 mt-3">
              What kind of wild are you in the mood for?
            </h2>
          </div>
          <a href="#" className="hidden md:inline text-sm font-medium text-forest-700 hover:underline underline-offset-4">
            All categories →
          </a>
        </div>

        <div className="scroll-fade overflow-x-auto -mx-6 px-6 pb-2">
          <div className="flex gap-4 min-w-max">
            {CATEGORIES.map((c) => (
              <button
                key={c.id}
                onClick={() => setActive(c.id)}
                className={`group relative w-40 md:w-48 h-56 md:h-64 rounded-3xl overflow-hidden flex-shrink-0 lift-card border ${
                  active === c.id ? "border-forest-700 ring-2 ring-forest-700/20" : "border-forest-100"
                }`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${c.color}`} />
                <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22120%22 height=%22120%22%3E%3Cpath d=%22M0 60Q30 0 60 60T120 60%22 fill=%22none%22 stroke=%22white%22 stroke-opacity=%220.18%22 stroke-width=%221%22/%3E%3C/svg%3E')]" />
                <div className="relative h-full flex flex-col justify-between p-5 text-left">
                  <div className="text-4xl">{c.icon}</div>
                  <div>
                    <div className="font-display font-semibold text-white text-lg leading-tight">
                      {c.name}
                    </div>
                    <div className="text-[11px] text-white/80 mt-1">12+ parks</div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
