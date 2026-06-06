import { CoverImage } from "@/components/cover-image";
import { aboutGridImages } from "@/lib/images";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const lime = "#a4c639";

const tabs = ["About Us", "Coaches", "Vision", "Mission"];

const stats = [
  { value: "20", label: "courts" },
  { value: "12", label: "coaches" },
  { value: "17", label: "years" },
  { value: "10", label: "clubs" },
];

const description =
  "To be the first venue in the world to have 60 multi surface courts at one location and establish first one stop tennis academy in the Asia Pacific producing grand slam champions.";

function BackgroundChevron() {
  return (
    <svg
      viewBox="0 0 400 520"
      fill="none"
      className="h-full w-auto"
      preserveAspectRatio="xMinYMax meet"
      aria-hidden="true"
    >
      {/* Chevron arrow — sharp apex, flat leg bottoms, no crossbar */}
      <path
        fill="#f0f2e4"
        d="M 45 520 L 200 18 L 355 520 L 272 520 L 200 98 L 128 520 Z"
      />
    </svg>
  );
}

export function AboutSection() {
  return (
    <section
      id="section-2"
      className={`relative overflow-x-hidden bg-white text-zinc-900 ${montserrat.className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)",
          backgroundSize: "20% 100%",
        }}
      />

      {/* Pale chevron watermark */}
      <div
        className="pointer-events-none absolute top-[34%] bottom-16 left-0 z-[1] w-[min(58vw,600px)] overflow-hidden"
        aria-hidden="true"
      >
        <div className="h-full translate-x-[-24%]">
          <BackgroundChevron />
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-[1180px] px-8 pt-20 pb-24 lg:px-12 lg:pt-28 lg:pb-32">
        <p className="mx-auto max-w-[600px] text-center text-[15px] leading-[1.85] text-black">
          To be the first venue in the world to have{" "}
          <span className="font-semibold" style={{ color: lime }}>
            60 multi surface courts
          </span>{" "}
          at one location and establish first one stop tennis academy in the
          Asia Pacific producing grand slam champions.
        </p>

        <nav className="mt-10 flex items-center justify-center gap-14 lg:mt-12 lg:gap-[4.5rem]">
          {tabs.map((tab) => {
            const active = tab === "About Us";
            return (
              <button
                key={tab}
                type="button"
                className={`relative pb-2.5 text-[15px] ${
                  active
                    ? "font-semibold text-black"
                    : "font-normal text-zinc-400"
                }`}
              >
                {tab}
                {active && (
                  <span
                    className="absolute right-0 bottom-0 left-0 h-[3px]"
                    style={{ backgroundColor: lime }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        <div className="relative mt-16 lg:mt-[4.5rem]">
          <div className="grid grid-cols-12 items-start gap-x-8 gap-y-12 lg:gap-x-12">
            <div className="col-span-12 lg:col-span-5">
              <h2 className="text-[3.25rem] font-bold leading-none tracking-tight text-black">
                About U
                <span className="relative inline-block">
                  s
                  <span
                    className="absolute -top-2 left-[60%] h-2 w-2 -translate-x-1/2 rounded-full"
                    style={{ backgroundColor: lime }}
                  />
                </span>
              </h2>

              <p className="mt-7 max-w-[320px] text-[14px] leading-[1.9] text-zinc-600">
                {description}
              </p>

              <dl className="mt-10 flex gap-8 lg:gap-10">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <dt
                      className="text-[2.75rem] font-bold leading-none"
                      style={{ color: lime }}
                    >
                      {stat.value}
                    </dt>
                    <dd className="mt-1.5 text-[14px] text-black">
                      {stat.label}
                    </dd>
                  </div>
                ))}
              </dl>

              <a
                href="#"
                className="mt-10 inline-block rounded-full px-9 py-3 text-[14px] font-medium text-white"
                style={{ backgroundColor: lime }}
              >
                Read More
              </a>
            </div>

            <div className="col-span-12 lg:col-span-7">
              <div
                className="grid h-[320px] w-full gap-[3px] sm:h-[400px] lg:h-[500px]"
                style={{
                  gridTemplateColumns: "1.45fr 1fr",
                  gridTemplateRows: "1fr 1fr",
                  gridTemplateAreas: `
                    "wide tall"
                    "sq1 sq2"
                  `,
                }}
              >
                {aboutGridImages.map((image) => (
                  <div
                    key={image.area}
                    className="relative overflow-hidden bg-[#e6e6e6]"
                    style={{ gridArea: image.area }}
                  >
                    <CoverImage
                      src={image.src}
                      alt={image.alt}
                      sizes="(max-width: 1024px) 100vw, 58vw"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
