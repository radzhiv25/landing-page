import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const lime = "#99bc23";

const professionals = [
  {
    name: "Craig Tiley",
    title: "CEO Tennis Australia & Australian Open",
  },
  {
    name: "Stephen Farrow",
    title: "Director - Tournament, Players & International Relations",
  },
  {
    name: "Cameron Pearson",
    title: "Head Major Events - Tennis Australia",
  },
];

export function ProfessionalsSection() {
  return (
    <section
      id="section-7"
      className={`relative overflow-hidden bg-white text-zinc-900 ${montserrat.className}`}
    >
      {/* Vertical grid lines */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)",
          backgroundSize: "25% 100%",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1180px] px-8 py-20 lg:px-12 lg:py-28">
        {/* Header */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h2 className="text-[2.75rem] font-bold leading-none tracking-tight text-black lg:text-5xl">
              Meet our{" "}
              <span className="relative inline-block">
                professional
                <span className="relative">
                  s
                  <span
                    className="absolute -top-2 right-0 h-2 w-2 rounded-full"
                    style={{ backgroundColor: lime }}
                  />
                </span>
              </span>
            </h2>
            <p className="mt-4 max-w-lg text-[14px] text-zinc-500">
              Lorem Ipsum has been the industry&apos;s standard dummy text ever
              since the 1500s,
            </p>
          </div>

          <a
            href="#"
            className="shrink-0 self-start rounded-full px-8 py-3 text-[14px] font-medium text-white sm:mt-1"
            style={{ backgroundColor: lime }}
          >
            View All
          </a>
        </div>

        {/* Profile cards */}
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {professionals.map((person) => (
            <article key={person.name}>
              <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-zinc-200" />
              <h3 className="mt-5 text-xl font-bold text-black">{person.name}</h3>
              <p className="mt-1 text-[14px] italic text-zinc-500">
                {person.title}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
