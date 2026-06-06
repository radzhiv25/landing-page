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
    variant: "light" as const,
    pullUp: true,
  },
  {
    title: "Accommodation",
    tags: ["5 Star Hotel"],
    ...facilityImages[1],
    variant: "light" as const,
    pullUp: true,
  },
  {
    title: "Fitness",
    tags: ["Gym", "Fitness Room"],
    ...facilityImages[2],
    variant: "dark" as const,
    pullUp: false,
  },
  {
    title: "Recovery",
    tags: ["Spa", "Pool", "Massage"],
    ...facilityImages[3],
    variant: "dark" as const,
    pullUp: false,
  },
];

function PlayButton() {
  return (
    <span className="absolute top-1/2 left-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 shadow-md">
      <svg
        className="ml-0.5 h-3.5 w-3.5 text-black"
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
      className="pointer-events-none absolute top-10 right-[4%] h-[320px] w-[260px] opacity-[0.13] lg:right-[8%] lg:h-[400px] lg:w-[320px]"
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
  variant,
  pullUp = false,
}: {
  title: string;
  tags: string[];
  src: string;
  alt: string;
  variant: "light" | "dark";
  pullUp?: boolean;
}) {
  const isLight = variant === "light";

  return (
    <article className={pullUp ? "md:-mt-32 lg:-mt-40" : undefined}>
      <div className="relative aspect-square overflow-hidden rounded-3xl bg-zinc-200">
        <CoverImage
          src={src}
          alt={alt}
          sizes="(max-width: 768px) 100vw, 42vw"
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
                isLight
                  ? "border border-white/20 bg-white text-black"
                  : "text-white"
              }`}
              style={isLight ? undefined : { backgroundColor: lime }}
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
      <div className="relative z-10 mx-auto max-w-[1180px] px-8 pt-20 pb-28 lg:px-12 lg:pt-28 lg:pb-36">
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

      {/* Gradient band + card grid */}
      <div className="relative pb-28 lg:pb-36">
        <div
          className="absolute inset-x-0 top-0 bottom-[42%] z-0"
          style={{
            background:
              "linear-gradient(90deg, #0a3d42 0%, #1e5c4a 40%, #5a8f3c 75%, #7aad42 100%)",
          }}
        />
        <div className="absolute inset-x-0 top-[58%] bottom-0 z-0 bg-white" />

        <TrophyWatermark />

        <div className="relative z-10 px-8 lg:px-12">
          <div className="mx-auto grid w-full max-w-[1080px] grid-cols-1 gap-x-14 gap-y-16 md:grid-cols-2 md:gap-y-20">
            {facilities.map((facility) => (
              <FacilityCard key={facility.title} {...facility} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
