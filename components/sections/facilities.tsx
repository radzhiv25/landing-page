import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const lime = "#99bc23";
const lorem =
  "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,";

const topFacilities = [
  {
    title: "Tennis",
    tags: ["9 Clay Courts", "4 Hard Courts"],
    image: "linear-gradient(160deg, #2d5a2a 0%, #4a7c3f 50%, #1e3d1c 100%)",
  },
  {
    title: "Accommodation",
    tags: ["5 Star Hotel"],
    image: "linear-gradient(160deg, #e8e4dc 0%, #c9c4b8 50%, #a8a296 100%)",
  },
];

const bottomFacilities = [
  {
    title: "Fitness",
    tags: ["Gym", "Fitness Room"],
    image: "linear-gradient(160deg, #4a5568 0%, #718096 50%, #2d3748 100%)",
  },
  {
    title: "Recovery",
    tags: ["Spa", "Pool", "Massage"],
    image: "linear-gradient(160deg, #1e3a5f 0%, #2c5282 50%, #0f2744 100%)",
  },
];

function PlayButton() {
  return (
    <span className="absolute top-1/2 left-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md">
      <svg className="ml-0.5 h-3.5 w-3.5 text-black" viewBox="0 0 24 24" fill="currentColor">
        <path d="M8 5v14l11-7z" />
      </svg>
    </span>
  );
}

function TrophyWatermark() {
  return (
    <svg
      className="pointer-events-none absolute top-8 right-0 h-[280px] w-[220px] opacity-[0.12] lg:right-8 lg:h-[360px] lg:w-[280px]"
      viewBox="0 0 120 160"
      fill="none"
      stroke={lime}
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M30 20h60v30c0 22-12 38-30 42-18-4-30-20-30-42V20z" />
      <path d="M30 20H20c0 12 6 22 16 26M90 20h10c0 12-6 22-16 26" />
      <path d="M60 92v18M45 118h30M40 130h40" />
    </svg>
  );
}

function FacilityCard({
  title,
  tags,
  image,
  variant,
  pullUp = false,
}: {
  title: string;
  tags: string[];
  image: string;
  variant: "light" | "dark";
  pullUp?: boolean;
}) {
  const isLight = variant === "light";

  return (
    <article className={pullUp ? "-mt-24 sm:-mt-28" : ""}>
      <div
        className="relative aspect-[16/10] overflow-hidden rounded-2xl"
        style={{ background: image }}
      >
        <PlayButton />
      </div>

      <div className={`mt-5 ${isLight ? "text-white" : "text-black"}`}>
        <h3 className="text-2xl font-bold">{title}</h3>
        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className={`rounded-full px-3 py-1 text-xs font-medium ${
                isLight ? "bg-white text-black" : "text-white"
              }`}
              style={isLight ? undefined : { backgroundColor: lime }}
            >
              {tag}
            </span>
          ))}
        </div>
        <p className={`mt-4 max-w-md text-sm leading-relaxed ${isLight ? "text-white/90" : "text-zinc-600"}`}>
          {lorem}
        </p>
      </div>
    </article>
  );
}

export function FacilitiesSection() {
  return (
    <section
      id="section-8"
      className={`relative overflow-hidden bg-white text-zinc-900 ${montserrat.className}`}
    >
      {/* Grid lines */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)",
          backgroundSize: "25% 100%",
        }}
      />

      {/* Header */}
      <div className="relative z-10 mx-auto max-w-[1180px] px-8 pt-20 pb-32 lg:px-12 lg:pt-28 lg:pb-40">
        <h2 className="text-[2.75rem] font-bold leading-none tracking-tight text-black lg:text-5xl">
          Facil
          <span className="relative inline-block">
            i
            <span
              className="absolute -top-2 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full"
              style={{ backgroundColor: lime }}
            />
          </span>
          ties
        </h2>
        <p className="mt-4 max-w-lg text-[14px] text-zinc-600">{lorem}</p>
      </div>

      {/* Gradient band + cards */}
      <div className="relative pb-24 lg:pb-32">
        <div
          className="absolute inset-x-0 top-0 bottom-[38%] z-0"
          style={{
            background:
              "linear-gradient(90deg, #0a3d42 0%, #1e5c4a 40%, #5a8f3c 75%, #7aad42 100%)",
          }}
        />
        <div className="absolute inset-x-0 top-[62%] bottom-0 z-0 bg-white" />

        <TrophyWatermark />

        <div className="relative z-10 mx-auto max-w-[1180px] px-8 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
            {topFacilities.map((facility) => (
              <FacilityCard
                key={facility.title}
                {...facility}
                variant="light"
                pullUp
              />
            ))}
          </div>

          <div className="mt-20 grid gap-10 lg:mt-28 lg:grid-cols-2 lg:gap-14">
            {bottomFacilities.map((facility) => (
              <FacilityCard
                key={facility.title}
                {...facility}
                variant="dark"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
