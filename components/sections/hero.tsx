import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

const lime = "#d9ed42";

function SidebarLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex w-[240px] items-center gap-3 lg:w-[280px]">
      <span className="shrink-0 text-[10px] font-normal tracking-[0.22em] text-white uppercase">
        {children}
      </span>
      <span className="h-px flex-1 bg-white/40" />
    </div>
  );
}

function WeatherCard() {
  return (
    <div
      className="w-[240px] px-4 py-3.5 lg:w-[280px]"
      style={{ backgroundColor: "rgba(164, 198, 57, 0.82)" }}
    >
      <div className="flex items-center gap-1.5 text-[11px] text-white">
        <svg
          className="h-3 w-3 shrink-0"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 21s7-4.5 7-11a7 7 0 10-14 0c0 6.5 7 11 7 11z"
          />
          <circle cx="12" cy="10" r="2.5" />
        </svg>
        <span>Hunter Valley</span>
      </div>
      <div className="mt-2.5 flex items-end justify-between">
        <p className="text-[2.6rem] leading-none font-semibold text-white lg:text-[2.85rem]">
          19°C
        </p>
        <div className="pb-0.5 text-right text-[10px] leading-snug text-white">
          <p>Weather</p>
          <p className="mt-0.5 text-white/85">Saturday, 8 pm</p>
        </div>
      </div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section
      id="section-1"
      className={`relative h-screen w-full overflow-hidden bg-[#1a1d1a] ${montserrat.className}`}
    >
      {/* Center content */}
      <div className="absolute top-1/2 left-1/2 z-10 flex w-full -translate-x-1/2 -translate-y-1/2 flex-col items-center px-6 text-center text-white">
        <p className="text-base font-medium tracking-[0.35em] uppercase">
          SSA Hunter Valley
        </p>

        <h1 className="mt-6 uppercase">
          <span className="block text-[2.75rem] font-light leading-[1.1] tracking-[0.08em] sm:text-5xl md:text-[3.25rem] lg:text-[3.375rem]">
            Grow your game with the
          </span>
          <span className="relative mt-0.5 inline-block pb-4 text-[4.5rem] font-extrabold leading-none tracking-[0.01em] sm:text-7xl md:text-[4.75rem] lg:text-[5rem]">
            Professionals
            <span className="absolute bottom-0 left-1/2 h-px w-[45%] -translate-x-1/2 bg-white" />
          </span>
        </h1>

        <div
          className="relative mt-10 flex w-full max-w-3xl items-center justify-center border-t border-b px-8 py-3 sm:max-w-4xl sm:px-14 sm:py-3.5"
          style={{
            borderTopColor: "rgba(220, 235, 160, 0.15)",
            borderBottomColor: "rgba(30, 38, 18, 0.35)",
            background: `linear-gradient(
              90deg,
              rgba(46, 54, 26, 0.35) 0%,
              rgba(55, 62, 32, 0.28) 22%,
              rgba(212, 225, 87, 0.42) 50%,
              rgba(55, 62, 32, 0.28) 78%,
              rgba(46, 54, 26, 0.35) 100%
            )`,
          }}
        >
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background: `linear-gradient(
                180deg,
                rgba(25, 32, 14, 0.18) 0%,
                transparent 42%,
                rgba(240, 250, 160, 0.05) 50%,
                transparent 58%,
                rgba(25, 32, 14, 0.18) 100%
              )`,
            }}
          />
          <p className="relative z-10 whitespace-nowrap text-base font-medium tracking-[0.28em] text-white uppercase sm:text-xl sm:tracking-[0.35em] md:text-2xl md:tracking-[0.38em]">
            Adopt • Nurture • Deliver
          </p>
        </div>

        <a
          href="#"
          className="mt-10 inline-block rounded-full border border-[#cfee4e] bg-black/30 px-14 py-3 text-sm font-normal normal-case tracking-wide text-white backdrop-blur-sm transition-colors hover:bg-black/40"
        >
          Register Now
        </a>
      </div>

      {/* Right sidebar */}
      <aside className="absolute right-6 bottom-36 z-10 hidden flex-col items-end gap-3 md:flex lg:right-10 lg:bottom-40">
        <SidebarLabel>&lt;&lt; Weather</SidebarLabel>
        <WeatherCard />
        <SidebarLabel>&lt;&lt; Ongoing Matches</SidebarLabel>
      </aside>

      <div className="absolute right-6 bottom-16 z-10 hidden md:block lg:right-10 lg:bottom-20">
        <SidebarLabel>&lt;&lt; Score</SidebarLabel>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-7 left-1/2 z-10 -translate-x-1/2">
        <svg
          className="h-4 w-4"
          style={{ color: lime }}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 9l6 6 6-6"
          />
        </svg>
      </div>
    </section>
  );
}
