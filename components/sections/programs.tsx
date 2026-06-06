import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const lime = "#99b83c";

const programs = [
  {
    title: "Academy",
    subtitle: "Live and train with us",
    bg: "linear-gradient(160deg, #3d5a3a 0%, #6b8f5e 50%, #2a4028 100%)",
  },
  {
    title: "Camps",
    subtitle: "Train like a pro with us",
    bg: "linear-gradient(160deg, #4a5568 0%, #718096 50%, #2d3748 100%)",
  },
  {
    title: "Performance",
    subtitle: "Elevate your game with us",
    bg: "linear-gradient(160deg, #2c5282 0%, #4a7ab8 50%, #1a365d 100%)",
  },
];

const marqueeWords = ["ADOPT", "NURTURE", "DELIVER"];

function MarqueeWord({
  word,
  variant,
}: {
  word: string;
  variant: "solid" | "outline";
}) {
  if (variant === "solid") {
    return (
      <span className="font-black leading-none" style={{ color: lime }}>
        {word}
      </span>
    );
  }

  return (
    <span
      className="font-black leading-none"
      style={{
        color: "transparent",
        WebkitTextStroke: `1.5px ${lime}`,
      }}
    >
      {word}
    </span>
  );
}

function MarqueeStrip() {
  const items = Array.from({ length: 12 }, (_, i) => {
    const word = marqueeWords[i % 3];
    const variant = i % 2 === 0 ? "solid" : "outline";
    return { word, variant: variant as "solid" | "outline", key: i };
  });

  const content = (
    <div className="flex shrink-0 items-center">
      {items.map((item) => (
        <span key={item.key} className="flex items-center">
          <MarqueeWord word={item.word} variant={item.variant} />
          <span
            className="mx-8 text-[2.75rem] leading-none sm:mx-10 sm:text-[3.25rem] lg:mx-12 lg:text-[3.75rem]"
            style={{ color: lime }}
          >
            •
          </span>
        </span>
      ))}
    </div>
  );

  return (
    <div className="relative left-1/2 mt-20 w-screen -translate-x-1/2 overflow-hidden py-12 lg:mt-28 lg:py-14">
      <div className="animate-marquee flex w-max items-center text-[2.75rem] uppercase sm:text-[3.25rem] lg:text-[3.75rem]">
        {content}
        {content}
        {content}
        {content}
      </div>
    </div>
  );
}

export function ProgramsSection() {
  return (
    <section
      id="section-5"
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
              Program
              <span className="relative inline-block">
                s
                <span
                  className="absolute -top-2 right-0 h-2 w-2 rounded-full"
                  style={{ backgroundColor: lime }}
                />
              </span>
            </h2>
            <p className="mt-4 max-w-md text-[14px] leading-relaxed text-zinc-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <a
            href="#"
            className="shrink-0 self-start rounded-full px-8 py-3 text-[14px] font-medium text-white sm:mt-1"
            style={{ backgroundColor: lime }}
          >
            Register Now
          </a>
        </div>

        {/* Program cards */}
        <div className="mt-14 grid gap-5 sm:grid-cols-3">
          {programs.map((program) => (
            <article
              key={program.title}
              className="relative flex min-h-[380px] flex-col justify-end overflow-hidden rounded-3xl sm:min-h-[420px]"
              style={{ background: program.bg }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
              <div className="relative z-10 px-6 pb-8 text-center text-white">
                <h3 className="text-2xl font-bold">{program.title}</h3>
                <p className="mt-1 text-sm text-white/90">{program.subtitle}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <MarqueeStrip />
    </section>
  );
}
