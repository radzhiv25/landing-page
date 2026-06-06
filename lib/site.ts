export const siteConfig = {
  name: "SSA Hunter Valley",
  title: "SSA Hunter Valley | Grow Your Game with the Professionals",
  description:
    "World-class tennis academy, camps, and performance programs in Hunter Valley. Adopt, nurture, and deliver your best game with professional coaching and premium facilities.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  locale: "en_AU",
  keywords: [
    "tennis academy",
    "Hunter Valley tennis",
    "tennis camps",
    "performance tennis",
    "SSA Hunter Valley",
    "tennis facilities",
  ],
} as const;
