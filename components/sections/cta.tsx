import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const lime = "#99bc23";

const lorem =
  "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.";

function CtaBlock({
  title,
  dotLetter,
  variant,
}: {
  title: string;
  dotLetter: string;
  variant: "photo" | "events";
}) {
  const dotIndex = title.lastIndexOf(dotLetter);
  const before = title.slice(0, dotIndex + 1);
  const after = title.slice(dotIndex + 1);

  return (
    <div
      className={`relative flex min-h-[360px] flex-col justify-center px-8 py-14 text-white sm:min-h-[420px] sm:px-12 lg:px-16 ${
        variant === "photo"
          ? ""
          : "overflow-hidden"
      }`}
      style={
        variant === "photo"
          ? {
              background:
                "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), linear-gradient(160deg, #2a3a2a 0%, #1a241a 50%, #0f180f 100%)",
            }
          : { backgroundColor: lime }
      }
    >
      {variant === "events" && (
        <svg
          className="pointer-events-none absolute right-0 bottom-0 h-full w-1/2 opacity-20"
          viewBox="0 0 200 300"
          fill="currentColor"
          aria-hidden="true"
        >
          <ellipse cx="140" cy="260" rx="30" ry="8" />
          <path d="M120 260c20-80 40-120 60-200 10 60 5 120-10 200h-50z" />
          <circle cx="175" cy="55" r="14" />
          <path d="M160 70 L190 40 L200 55" stroke="currentColor" strokeWidth="4" fill="none" />
        </svg>
      )}

      <h2 className="relative z-10 text-4xl font-bold lg:text-5xl">
        {after ? (
          <>
            {before}
            <span className="relative inline-block">
              {after}
              <span className="absolute -top-2 right-0 h-2 w-2 rounded-full bg-white" />
            </span>
          </>
        ) : (
          <span className="relative inline-block">
            {title}
            <span className="absolute -top-2 right-0 h-2 w-2 rounded-full bg-white" />
          </span>
        )}
      </h2>

      <p className="relative z-10 mt-5 max-w-sm text-sm leading-relaxed text-white/90">
        {lorem}
      </p>

      <a
        href="#"
        className="relative z-10 mt-6 inline-flex items-center gap-2 text-sm font-medium text-white transition-opacity hover:opacity-80"
      >
        Read More
        <span aria-hidden="true">→</span>
      </a>
    </div>
  );
}

export function CtaSection() {
  return (
    <section id="section-9" className={`grid lg:grid-cols-2 ${montserrat.className}`}>
      <CtaBlock title="Our Coaches" dotLetter="s" variant="photo" />
      <CtaBlock title="Events" dotLetter="s" variant="events" />
    </section>
  );
}
