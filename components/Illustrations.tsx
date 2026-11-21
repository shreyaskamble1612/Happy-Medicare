// Brand illustrations drawn in SVG/CSS so the site looks finished before real product photos arrive.
// When the client sends photos, drop them in /public/images and swap these for <Image />.

export function BedIllustration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 520 330" className={className} aria-hidden>
      <defs>
        <linearGradient id="bedTop" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#D23A6E" />
          <stop offset="1" stopColor="#A3154A" />
        </linearGradient>
        <radialGradient id="heat" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#FFC266" stopOpacity=".9" />
          <stop offset="1" stopColor="#FFC266" stopOpacity="0" />
        </radialGradient>
      </defs>
      <g fill="none" stroke="#F2A33A" strokeWidth="4" strokeLinecap="round">
        <path className="animate-rise" d="M170 110 q10 -16 0 -32 q-10 -16 0 -32" />
        <path className="animate-rise [animation-delay:.5s]" d="M250 104 q10 -16 0 -32 q-10 -16 0 -32" />
        <path className="animate-rise [animation-delay:1s]" d="M330 110 q10 -16 0 -32 q-10 -16 0 -32" />
      </g>
      <ellipse cx="260" cy="190" rx="200" ry="50" fill="url(#heat)" />
      <path d="M90 250 Q110 300 150 312 M430 250 Q410 300 370 312" stroke="#C9B8BE" strokeWidth="10" fill="none" strokeLinecap="round" />
      <rect x="60" y="150" width="400" height="90" rx="40" fill="url(#bedTop)" />
      <rect x="60" y="200" width="400" height="40" rx="20" fill="#7A0F37" opacity=".55" />
      <rect x="80" y="160" width="360" height="12" rx="6" fill="#fff" opacity=".35" />
      <g fill="#FFD9E5">
        {[130, 165, 200, 235, 270, 305, 340, 375, 410].map((x) => (
          <circle key={x} cx={x} cy="190" r="7" />
        ))}
      </g>
      <rect x="215" y="245" width="90" height="38" rx="8" fill="#EDE3E6" />
      <g stroke="#C9B8BE" strokeWidth="3">
        {[228, 240, 252, 264, 276, 288].map((x) => (
          <path key={x} d={`M${x} 254v20`} />
        ))}
      </g>
      <rect x="395" y="128" width="58" height="30" rx="14" fill="#fff" />
    </svg>
  );
}

export function MatIllustration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 220" className={className} aria-hidden>
      <g transform="rotate(-8 200 110)">
        <rect x="40" y="50" width="320" height="120" rx="14" fill="#A3154A" />
        <rect x="52" y="62" width="296" height="96" rx="8" fill="#D23A6E" />
        <g fill="#7A0F37" opacity=".7">
          {Array.from({ length: 6 }).flatMap((_, r) =>
            Array.from({ length: 18 }).map((_, c) => (
              <circle key={`${r}-${c}`} cx={66 + c * 16} cy={74 + r * 14} r="4.5" />
            )),
          )}
        </g>
        <rect x="52" y="62" width="60" height="96" rx="8" fill="#fff" opacity=".85" />
      </g>
    </svg>
  );
}

export function StoneArt() {
  return (
    <div className="mx-auto grid max-w-[340px] grid-cols-3 gap-3.5 rounded-[28px] bg-white p-7 shadow-soft" aria-hidden>
      {Array.from({ length: 9 }).map((_, i) => (
        <span
          key={i}
          className="aspect-square shadow-[inset_-4px_-6px_10px_rgb(0_0_0/0.25),0_4px_8px_rgb(0_0_0/0.12)]"
          style={{
            background: "radial-gradient(circle at 35% 30%, #F4F1EE, #9C948E 55%, #5C5550)",
            borderRadius: i % 2 ? "55% 45% 40% 60% / 45% 55% 45% 55%" : "42% 58% 50% 50% / 55% 45% 55% 45%",
          }}
        />
      ))}
    </div>
  );
}
