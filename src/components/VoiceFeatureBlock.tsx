"use client";

export default function VoiceFeatureBlock({ onAskAI }: { onAskAI: () => void }) {
  return (
    <section id="plan" className="relative py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center bg-gradient-to-br from-forest-900 via-forest-800 to-forest-700 rounded-[2.5rem] overflow-hidden p-10 md:p-16 text-sand-50 shadow-lift grain">
          {/* Decorative topo */}
          <svg
            className="absolute -top-20 -right-20 w-96 h-96 opacity-20 text-forest-300"
            viewBox="0 0 200 200"
            fill="none"
            stroke="currentColor"
          >
            {[...Array(8)].map((_, i) => (
              <circle key={i} cx="100" cy="100" r={20 + i * 12} strokeWidth="0.6" />
            ))}
          </svg>

          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur border border-white/15 text-xs uppercase tracking-[0.2em]">
              <span className="w-1.5 h-1.5 rounded-full bg-forest-300 animate-pulse" />
              Voice AI · new
            </span>
            <h2 className="font-display text-4xl md:text-6xl font-semibold mt-6 leading-tight">
              Just say it.<br />
              <span className="italic text-sand-200">Ranger listens.</span>
            </h2>
            <p className="mt-6 text-base md:text-lg text-sand-100/90 max-w-xl leading-relaxed">
              Describe the trip you want — "a quiet desert weekend," "a sunrise hike in Maine,"
              or "somewhere wheelchair accessible with bald eagles" — and Ranger surfaces parks,
              trails, and the right time to go. Then it asks: <em>"Is this what you were looking for?"</em>
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button
                onClick={onAskAI}
                className="group relative inline-flex items-center gap-3 bg-sand-50 text-forest-900 px-6 py-3.5 rounded-full font-semibold shadow-soft hover:shadow-lift transition"
              >
                <span className="relative w-8 h-8 rounded-full bg-forest-700 flex items-center justify-center text-sand-50 voice-pulse">
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                    <path d="M12 14a3 3 0 003-3V6a3 3 0 00-6 0v5a3 3 0 003 3z" />
                    <path d="M5 11a7 7 0 0014 0M12 18v3" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
                  </svg>
                </span>
                Talk to Ranger
              </button>
              <button className="px-6 py-3.5 rounded-full border border-white/30 text-sand-50 hover:bg-white/10 transition font-medium">
                See how it works
              </button>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-6 text-sand-100/85">
              {[
                { k: "92%", v: "found a park first try" },
                { k: "3.4s", v: "average answer time" },
                { k: "63", v: "parks indexed live" },
              ].map((s) => (
                <div key={s.k}>
                  <div className="font-display text-2xl font-bold text-sand-50">{s.k}</div>
                  <div className="text-xs mt-1">{s.v}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Mock conversation panel */}
          <div className="relative">
            <div className="bg-sand-50 text-forest-900 rounded-3xl p-6 shadow-lift relative">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-full bg-forest-700 flex items-center justify-center text-sand-50 text-xs font-bold">R</div>
                <div>
                  <div className="font-display font-semibold text-sm">Ranger</div>
                  <div className="text-[10px] text-forest-600 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-forest-500 animate-pulse" />
                    Voice mode
                  </div>
                </div>
                <div className="ml-auto flex items-end gap-0.5 h-6">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <span
                      key={i}
                      className="wave-bar w-1 bg-forest-500 rounded"
                      style={{ height: "100%", animationDelay: `${i * 0.12}s` }}
                    />
                  ))}
                </div>
              </div>

              <div className="space-y-3 text-sm">
                <div className="bg-forest-700 text-sand-50 rounded-2xl rounded-br-sm px-4 py-2.5 ml-auto max-w-[80%] w-fit">
                  Find me a quiet park near Utah for stargazing.
                </div>
                <div className="bg-white border border-forest-100 rounded-2xl rounded-bl-sm px-4 py-2.5 max-w-[88%] shadow-soft">
                  Bryce Canyon's a dark-sky gem — I can pull lodging within 20 miles.
                </div>
                <div className="bg-forest-50 border border-forest-200 rounded-2xl px-4 py-2.5 flex items-center justify-between">
                  <span className="text-xs">Is this what you were looking for?</span>
                  <div className="flex gap-1.5">
                    <span className="px-3 py-1 rounded-full bg-forest-600 text-sand-50 text-[10px] font-medium">Yes</span>
                    <span className="px-3 py-1 rounded-full bg-bark-700 text-sand-50 text-[10px] font-medium">No, try again</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-4 bg-sand-50 text-forest-900 rounded-2xl px-4 py-3 shadow-lift border border-forest-100 max-w-[200px]">
              <div className="text-[10px] uppercase tracking-wider text-forest-600 font-semibold">Suggested</div>
              <div className="font-display font-semibold text-sm mt-0.5">Bryce Canyon</div>
              <div className="text-[10px] text-forest-600">Utah · ⭐ 4.94</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
