import Image from "next/image";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const lime = "#a4c639";

const WAVE_IMAGE =
  "https://framerusercontent.com/images/kYTbzWjrPS6LW4Hu0ETEWYbkaw.jpg?scale-down-to=2048";

const features = [
  "First venue in the world to have 60 multi surface courts, at one location with full range of facilities and services",
  "First tennis academy in the world with a holistic training program supported by in-house accommodation",
  "First facility to have 15 pickleball courts and a dedicated pickleball stadium",
  "First Mcdonalds restaurant in the precinct",
  "First venue to host main draw Grand Slam title pro tennis on natural grass",
  "First multi-purpose venue with indoor, clay, and outdoor courts alongside world-class amenities",
];

function GreenDot() {
  return (
    <span
      className="absolute -top-2 right-0 h-2 w-2 rounded-full"
      style={{ backgroundColor: lime }}
    />
  );
}

function SectionHeader({
  title,
  subtitle = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
}: {
  title: React.ReactNode;
  subtitle?: string;
}) {
  return (
    <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
      <div>
        <h2 className="text-[2.75rem] font-bold leading-none tracking-tight text-black lg:text-5xl">
          {title}
        </h2>
        <p className="mt-4 max-w-xl text-[14px] text-zinc-500">{subtitle}</p>
      </div>

      <a
        href="#"
        className="shrink-0 self-start rounded-full px-8 py-3 text-[14px] font-medium text-white sm:mt-1"
        style={{ backgroundColor: lime }}
      >
        Register Now
      </a>
    </div>
  );
}

function FeatureList() {
  return (
    <ul className="space-y-5">
      {features.map((item) => (
        <li key={item} className="flex gap-3 text-[14px] leading-[1.75] text-zinc-800">
          <span className="mt-1 shrink-0 font-semibold" style={{ color: lime }}>
            →
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function FeaturesSection() {
  return (
    <section
      id="section-4"
      className={`relative overflow-hidden bg-white text-zinc-900 ${montserrat.className}`}
    >
      <Image
        src={WAVE_IMAGE}
        alt=""
        fill
        className="pointer-events-none object-cover object-center opacity-[0.18]"
        sizes="100vw"
      />

      <div className="relative z-10 mx-auto max-w-[1180px] px-8 py-20 lg:px-12 lg:py-28">
        {/* Key Features */}
        <div>
          <SectionHeader
            title={
              <>
                key{" "}
                <span className="relative inline-block">
                  Feature
                  <span className="relative">
                    s
                    <GreenDot />
                  </span>
                </span>
              </>
            }
          />
          <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-20">
            <FeatureList />
            <FeatureList />
          </div>
        </div>

        {/* A Glimpse of Excellence */}
        <div className="mt-28 lg:mt-36">
          <SectionHeader
            title={
              <>
                A Glimpse of{" "}
                <span className="relative inline-block">
                  Excellenc
                  <span className="relative">
                    e
                    <GreenDot />
                  </span>
                </span>
              </>
            }
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            <div className="aspect-[3/4] overflow-hidden rounded-3xl bg-zinc-200 sm:min-h-[420px]" />
            <div className="aspect-[4/3] overflow-hidden rounded-3xl bg-zinc-200 sm:min-h-[420px]" />
          </div>
        </div>
      </div>
    </section>
  );
}
