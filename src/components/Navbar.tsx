"use client";

import { useState } from "react";

export default function Navbar({ onAskAI }: { onAskAI: () => void }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-sand-50/80 border-b border-forest-100/60">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-full bg-forest-700 flex items-center justify-center text-sand-50 shadow-soft">
            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
              <path d="M12 3l3.5 6h-3l3 5h-3l3.5 6h-8l3.5-6h-3l3-5h-3l3.5-6z" fill="currentColor" />
            </svg>
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-display text-lg font-bold text-forest-900">National Parks</span>
            <span className="text-[10px] tracking-[0.18em] uppercase text-forest-600">Find your wild</span>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-forest-800">
          <a href="#explore" className="hover:text-forest-500 transition">Parks</a>
          <a href="#categories" className="hover:text-forest-500 transition">Categories</a>
          <a href="#plan" className="hover:text-forest-500 transition">Plan a trip</a>
          <a href="#stories" className="hover:text-forest-500 transition">Stories</a>
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={onAskAI}
            className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full border border-forest-200 bg-white/70 hover:bg-white text-forest-800 text-sm font-medium transition shadow-soft"
          >
            <span className="relative flex w-2 h-2">
              <span className="absolute inset-0 rounded-full bg-forest-500 animate-ping opacity-75" />
              <span className="relative rounded-full w-2 h-2 bg-forest-600" />
            </span>
            Ask Ranger
          </button>
          <button className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-forest-700 hover:bg-forest-800 text-sand-50 text-sm font-medium transition">
            Sign in
          </button>
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden w-10 h-10 rounded-full border border-forest-200 flex items-center justify-center"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-3 text-forest-800">
          <a href="#explore">Parks</a>
          <a href="#categories">Categories</a>
          <a href="#plan">Plan a trip</a>
          <a href="#stories">Stories</a>
        </div>
      )}
    </header>
  );
}
