import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const locations = [
  { name: "Hunter Valley Golf And Country Club", distance: "220m" },
  { name: "Rydges Resort Hunter Valley", distance: "550m" },
  { name: "Cessnock Airport", distance: "1.7km" },
  { name: "Cessnock CBD", distance: "7km" },
  { name: "Nulkaba Public School", distance: "4.8km" },
  { name: "Cessnock Hospital", distance: "7.3km" },
  { name: "Mcdonalds, KFC, Oporto", distance: "7km" },
];

function FlagIcon() {
  return (
    <svg
      className="h-4 w-4 shrink-0 text-white"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 20V4M4 6l4-1.5 4 1.5 4-1.5 4 1.5v14"
      />
      <path strokeLinecap="round" d="M8 6v2M12 7.5v2M16 6v2" />
    </svg>
  );
}

export function ConnectivitySection() {
  return (
    <section id="section-6" className={`bg-white ${montserrat.className}`}>
      <div className="grid min-h-[640px] lg:grid-cols-2 lg:min-h-[720px]">
        {/* Left panel */}
        <div
          className="flex flex-col justify-center px-8 py-16 text-white sm:px-12 lg:px-14 lg:py-20"
          style={{
            background:
              "linear-gradient(135deg, #0a3d3f 0%, #1a5c4a 35%, #5a8f3c 70%, #9bc53a 100%)",
          }}
        >
          <p className="text-[11px] font-medium tracking-[0.35em] uppercase">
            Launching
          </p>

          <h2 className="mt-5 max-w-md text-[2rem] leading-tight font-bold sm:text-4xl lg:text-[2.75rem]">
            Signature Slam Academy Hunter Valley
          </h2>

          <p className="mt-8 text-lg font-semibold">SSA Connectivity</p>

          <ul className="mt-6 space-y-4">
            {locations.map((location) => (
              <li
                key={location.name}
                className="flex items-center gap-3 text-[13px] sm:text-sm"
              >
                <FlagIcon />
                <span className="shrink-0">{location.name}</span>
                <span className="mx-1 min-w-[24px] flex-1 border-b border-dotted border-white/70" />
                <span className="shrink-0 font-medium">{location.distance}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right panel */}
        <div className="relative min-h-[360px] bg-zinc-300 lg:min-h-full">
          <div className="absolute inset-0 bg-gradient-to-br from-sky-200/40 via-emerald-100/30 to-zinc-400/50" />

          {/* Carousel dots */}
          <div className="absolute right-6 bottom-6 flex items-center gap-2">
            {[0, 1, 2, 3].map((dot) => (
              <span
                key={dot}
                className={`h-2 w-2 rounded-full ${
                  dot === 0 ? "bg-white" : "bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
