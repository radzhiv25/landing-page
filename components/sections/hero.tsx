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
      <div className="absolute top-1/2 left-1/2 z-10 flex w-full max-w-[100vw] -translate-x-1/2 -translate-y-1/2 flex-col items-center px-4 text-center text-white sm:px-6">
        <p className="text-[10px] font-medium tracking-[0.28em] uppercase sm:text-base sm:tracking-[0.35em]">
          SSA Hunter Valley
        </p>

        <h1 className="mt-4 w-full max-w-full uppercase sm:mt-6">
          <span className="block text-[clamp(1.05rem,4.2vw,3.375rem)] font-light leading-[1.2] tracking-[0.04em] sm:tracking-[0.08em]">
            Grow your game with the
          </span>
          <span className="relative mt-1 inline-block max-w-full pb-3 text-[clamp(2.1rem,10.5vw,5rem)] font-extrabold leading-none tracking-tight sm:mt-0.5 sm:pb-4 sm:tracking-[0.01em]">
            Professionals
            <span className="absolute bottom-0 left-1/2 h-px w-[45%] -translate-x-1/2 bg-white" />
          </span>
        </h1>

        <div
          className="relative mt-6 flex w-full max-w-full items-center justify-center border-t border-b px-4 py-2.5 sm:mt-10 sm:max-w-3xl sm:px-8 sm:py-3 md:max-w-4xl md:px-14 md:py-3.5"
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
          <p className="relative z-10 text-[9px] font-medium tracking-[0.16em] text-white uppercase sm:whitespace-nowrap sm:text-base sm:tracking-[0.28em] md:text-xl md:tracking-[0.35em] lg:text-2xl lg:tracking-[0.38em]">
            Adopt • Nurture • Deliver
          </p>
        </div>

        <a
          href="#"
          className="mt-6 inline-block rounded-full border border-[#cfee4e] bg-black/30 px-10 py-2.5 text-sm font-normal normal-case tracking-wide text-white backdrop-blur-sm transition-colors hover:bg-black/40 sm:mt-10 sm:px-14 sm:py-3"
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
