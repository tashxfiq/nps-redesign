export default function Footer() {
  return (
    <footer className="bg-forest-950 text-sand-100 px-6 pt-20 pb-10 mt-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          <div className="col-span-2">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-forest-500 flex items-center justify-center text-sand-50">
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                  <path d="M12 3l3.5 6h-3l3 5h-3l3.5 6h-8l3.5-6h-3l3-5h-3l3.5-6z" />
                </svg>
              </div>
              <span className="font-display text-lg font-bold text-sand-50">National Parks</span>
            </div>
            <p className="mt-4 text-sm text-sand-100/70 max-w-sm">
              A redesigned home for America's wild — softer to use, smarter to plan with,
              and built around your voice.
            </p>
            <div className="mt-6 flex gap-3">
              {["instagram", "youtube", "twitter"].map((s) => (
                <a key={s} href="#" className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition">
                  <span className="text-xs uppercase">{s[0]}</span>
                </a>
              ))}
            </div>
          </div>
          {[
            { h: "Explore", l: ["All parks", "Trails", "Camping", "Lodging"] },
            { h: "Plan", l: ["Permits", "Weather", "Accessibility", "Junior ranger"] },
            { h: "About", l: ["Mission", "Conservation", "Volunteer", "Contact"] },
          ].map((col) => (
            <div key={col.h}>
              <div className="text-xs uppercase tracking-wider text-sand-200 font-semibold">{col.h}</div>
              <ul className="mt-4 space-y-2 text-sm text-sand-100/75">
                {col.l.map((i) => (
                  <li key={i}>
                    <a href="#" className="hover:text-sand-50 transition">{i}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col md:flex-row gap-3 justify-between text-xs text-sand-100/50">
          <div>© {new Date().getFullYear()} NPS Redesign · Concept by Tash Farjad</div>
          <div className="flex gap-5">
            <a href="#">Privacy</a>
            <a href="#">Accessibility</a>
            <a href="#">Site map</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
