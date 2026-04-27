"use client";

import { useState } from "react";

export default function Hero({ onAskAI }: { onAskAI: () => void }) {
  const [where, setWhere] = useState("");
  const [when, setWhen] = useState("");
  const [activity, setActivity] = useState("");

  return (
    <section className="relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=2000&q=85')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-950/60 via-forest-900/30 to-sand-50" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-32 md:pt-28 md:pb-40">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/15 backdrop-blur border border-white/25 text-sand-50 text-xs uppercase tracking-[0.18em]">
            <span className="w-1.5 h-1.5 rounded-full bg-forest-300 animate-pulse" />
            63 Parks · 423 sites · 85M acres
          </span>
          <h1 className="font-display text-5xl md:text-7xl font-semibold text-sand-50 leading-[1.02] mt-6">
            Find the park that<br />
            <span className="italic text-sand-200">feels like you.</span>
          </h1>
          <p className="mt-6 text-lg text-sand-100/90 max-w-xl">
            Discover trails, lodges, and quiet places across America's wild lands.
            Plan a trip in seconds — or just ask our ranger.
          </p>
        </div>

        {/* Airbnb-style search bar */}
        <div className="relative mt-12 md:mt-16">
          <div className="bg-white rounded-full shadow-lift flex flex-col md:flex-row items-stretch overflow-hidden divide-y md:divide-y-0 md:divide-x divide-forest-100">
            <SearchField
              label="Where"
              placeholder="Park, state, or region"
              value={where}
              onChange={setWhere}
              flex="md:flex-[1.4]"
            />
            <SearchField
              label="When"
              placeholder="Add dates"
              value={when}
              onChange={setWhen}
            />
            <SearchField
              label="Activity"
              placeholder="Hiking, camping, scenic..."
              value={activity}
              onChange={setActivity}
            />
            <div className="flex items-center justify-end p-2">
              <button className="px-6 md:px-7 h-14 rounded-full bg-forest-700 hover:bg-forest-800 text-sand-50 font-medium flex items-center gap-2 transition shadow-soft">
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <circle cx="11" cy="11" r="7" />
                  <path d="m20 20-3.5-3.5" />
                </svg>
                Search
              </button>
            </div>
          </div>

          {/* Voice nudge */}
          <button
            onClick={onAskAI}
            className="absolute -bottom-14 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-6 md:-bottom-16 flex items-center gap-3 bg-forest-900/90 hover:bg-forest-900 text-sand-50 backdrop-blur px-5 py-3 rounded-full shadow-lift border border-white/10 transition"
          >
            <span className="relative flex items-center justify-center w-9 h-9 rounded-full bg-forest-500">
              <svg viewBox="0 0 24 24" className="w-4 h-4 text-sand-50" fill="currentColor">
                <path d="M12 14a3 3 0 003-3V6a3 3 0 00-6 0v5a3 3 0 003 3z" />
                <path d="M5 11a7 7 0 0014 0M12 18v3" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
              </svg>
            </span>
            <span className="text-sm">
              <span className="font-semibold">Try voice search</span>
              <span className="opacity-70 ml-2 hidden sm:inline">"Find me a quiet park near Utah"</span>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}

function SearchField({
  label,
  placeholder,
  value,
  onChange,
  flex = "md:flex-1",
}: {
  label: string;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  flex?: string;
}) {
  return (
    <label className={`group ${flex} px-6 py-3 hover:bg-sand-50 cursor-text transition`}>
      <div className="text-[11px] uppercase tracking-wider font-semibold text-forest-700">{label}</div>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full bg-transparent outline-none text-forest-900 placeholder-forest-400 mt-1 text-sm"
      />
    </label>
  );
}
