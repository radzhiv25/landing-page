import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const lime = "#a2bd42";

const navColumns = [
  ["About Us", "Programs"],
  ["Coaches", "Amenities"],
  ["News", "Blogs"],
  ["Matches"],
  ["Events"],
  ["FAQs"],
];

function TrophyIcon() {
  return (
    <svg
      className="mx-0.5 mt-3 h-7 w-7 shrink-0 text-black"
      viewBox="0 0 32 36"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M6 2h20v12c0 7-5 12-12 12h-1c2.5 2 4 4.5 4 7.5V28H13v-3.5c0-3 1.5-5.5 4-7.5H16C9 14 6 9 6 2z" />
      <rect x="11" y="29" width="10" height="2.5" />
      <rect x="8" y="32.5" width="16" height="3" rx="0.5" />
    </svg>
  );
}

function SsaLogo() {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="flex items-start justify-center">
        <span className="text-[3.75rem] font-black leading-none tracking-tighter text-black">
          S
        </span>
        <TrophyIcon />
        <span className="text-[3.75rem] font-black leading-none tracking-tighter text-black">
          SA
        </span>
      </div>
      <p className="mt-3 text-[10px] font-medium tracking-[0.32em] text-black uppercase">
        Adopt Nurture Deliver
      </p>
    </div>
  );
}

function SocialIcon({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <a
      href="#"
      aria-label={label}
      className="text-black transition-opacity hover:opacity-50"
    >
      {children}
    </a>
  );
}

export function Footer() {
  return (
    <footer className={`bg-white text-black ${montserrat.className}`}>
      <div className="mx-auto max-w-[1200px] px-10 py-16 lg:px-14 lg:py-20">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-stretch lg:gap-16">
          {/* Left — logo vertically centered alongside right content */}
          <div className="flex w-full shrink-0 items-center justify-center lg:w-[200px]">
            <SsaLogo />
          </div>

          {/* Right — nav, divider, contact & social */}
          <div className="min-w-0 flex-1">
            <nav className="grid grid-cols-3 gap-x-8 gap-y-4 sm:grid-cols-6 lg:gap-x-10">
              {navColumns.map((column) => (
                <ul key={column.join("-")} className="space-y-5">
                  {column.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-[15px] leading-none text-black transition-opacity hover:opacity-50"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              ))}
            </nav>

            <div className="my-10 h-px bg-neutral-400 lg:my-12" />

            <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3
                  className="text-base font-semibold leading-none"
                  style={{ color: lime }}
                >
                  Signature Slam Academy
                </h3>
                <p className="mt-4 text-[15px] text-black">
                  30 Wills Hill Road, Lovedale, NSW
                </p>
                <p className="mt-3 flex items-center gap-2 text-[15px] text-black">
                  <svg
                    className="h-4 w-4 shrink-0"
                    style={{ color: lime }}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57a1.02 1.02 0 00-1.02.24l-2.2 2.2a15.045 15.045 0 01-6.59-6.59l2.2-2.21a.96.96 0 00.25-1A11.36 11.36 0 008.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z" />
                  </svg>
                  + 91 5642589752
                </p>
                <p className="mt-2 flex items-center gap-2 text-[15px] text-black">
                  <svg
                    className="h-4 w-4 shrink-0"
                    style={{ color: lime }}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                  info@ssagroup.com
                </p>
              </div>

              <div className="sm:text-right">
                <h3
                  className="text-base font-semibold leading-none"
                  style={{ color: lime }}
                >
                  Connect with us
                </h3>
                <div className="mt-4 flex items-center gap-5 sm:justify-end">
                  <SocialIcon label="Facebook">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </SocialIcon>
                  <SocialIcon label="X">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </SocialIcon>
                  <SocialIcon label="Instagram">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </SocialIcon>
                  <SocialIcon label="YouTube">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </SocialIcon>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="w-full py-3.5 text-[11px] text-white"
        style={{
          background: "linear-gradient(90deg, #00334e 0%, #4a7a28 50%, #a2bd31 100%)",
        }}
      >
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-2 px-10 sm:grid-cols-3 lg:px-14">
          <a href="#" className="text-left hover:underline">
            Terms And Condition
          </a>
          <p className="text-center">
            © 2023 All Rights Reserved www.signatureslamacademy.com
          </p>
          <a href="#" className="text-right hover:underline">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
