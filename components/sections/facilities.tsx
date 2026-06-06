import { CoverImage } from "@/components/cover-image";
import { facilityImages } from "@/lib/images";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const lime = "#99bc23";
const lorem =
  "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,";

const facilities = [
  {
    title: "Tennis",
    tags: ["9 Clay Courts", "4 Hard Courts"],
    ...facilityImages[0],
    tagStyle: "white" as const,
    variant: "light" as const,
    gridClass: "md:col-span-2 md:col-start-1 md:-mt-24 lg:-mt-32",
  },
  {
    title: "Accommodation",
    tags: ["5 Star Hotel"],
    ...facilityImages[1],
    tagStyle: "white" as const,
    variant: "light" as const,
    gridClass: "md:col-span-2 md:col-start-3 md:-mt-24 lg:-mt-32",
  },
  {
    title: "Fitness",
    tags: ["Gym", "Fitness Room"],
    ...facilityImages[2],
    tagStyle: "lime" as const,
    variant: "dark" as const,
    gridClass: "md:col-span-2 md:col-start-2",
  },
  {
    title: "Recovery",
    tags: ["Spa", "Pool", "Massage"],
    ...facilityImages[3],
    tagStyle: "lime" as const,
    variant: "dark" as const,
    gridClass: "md:col-span-2 md:col-start-4",
  },
];

function PlayButton() {
  return (
    <span className="absolute top-1/2 left-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 shadow-md">
      <svg
        className="ml-0.5 h-3.5 w-3.5 text-zinc-700"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M8 5v14l11-7z" />
      </svg>
    </span>
  );
}

function TrophyWatermark() {
  return (
    <svg
      className="pointer-events-none absolute top-10 right-[6%] z-0 h-[320px] w-[260px] opacity-[0.13] lg:right-[10%] lg:h-[400px] lg:w-[320px]"
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
  src,
  alt,
  tagStyle,
  variant,
  gridClass,
}: {
  title: string;
  tags: string[];
  src: string;
  alt: string;
  tagStyle: "white" | "lime";
  variant: "light" | "dark";
  gridClass: string;
}) {
  const isLight = variant === "light";

  return (
    <article className={`text-left ${gridClass}`}>
      <div className="relative aspect-square w-full overflow-hidden rounded-3xl bg-zinc-200">
        <CoverImage
          src={src}
          alt={alt}
          sizes="(max-width: 768px) 100vw, 32vw"
        />
        <PlayButton />
      </div>

      <div className={`mt-5 ${isLight ? "text-white" : "text-black"}`}>
        <h3 className="text-2xl font-bold">{title}</h3>
        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className={`rounded-full px-3 py-1 text-xs font-medium ${
                tagStyle === "white"
                  ? "bg-white text-zinc-800"
                  : "text-white"
              }`}
              style={
                tagStyle === "lime" ? { backgroundColor: lime } : undefined
              }
            >
              {tag}
            </span>
          ))}
        </div>
        <p
          className={`mt-4 text-sm leading-relaxed ${
            isLight ? "text-white/90" : "text-zinc-600"
          }`}
        >
          {lorem}
        </p>
      </div>
    </article>
  );
}

export function FacilitiesSection() {
  return (
    <section
      id="facilities"
      aria-labelledby="facilities-heading"
      className={`relative bg-white text-zinc-900 ${montserrat.className}`}
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
      <div className="relative z-10 mx-auto max-w-[1180px] px-8 pt-20 pb-20 lg:px-12 lg:pt-28 lg:pb-28">
        <h2
          id="facilities-heading"
          className="text-[2.75rem] font-bold leading-none tracking-tight text-black lg:text-5xl"
        >
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

      {/* Gradient top + white bottom */}
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

        {/* Left-aligned staggered 4-col grid */}
        <div className="relative z-10 mx-auto mt-10 max-w-[1180px] px-8 lg:px-12">
          <div
            className="grid grid-cols-1 gap-y-14 md:grid-cols-4 md:gap-x-14 md:gap-y-20"
            style={{ gridAutoColumns: "minmax(0, 1fr)" }}
          >
            {facilities.map((facility) => (
              <FacilityCard key={facility.title} {...facility} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
