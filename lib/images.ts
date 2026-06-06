/** Verified Unsplash image URLs (images.unsplash.com/photo-*) */
export function unsplash(path: string, width = 1200) {
  return `https://images.unsplash.com/${path}?w=${width}&q=80&auto=format&fit=crop`;
}

export function unsplashCrop(path: string, width: number, height: number) {
  return `https://images.unsplash.com/${path}?w=${width}&h=${height}&q=80&auto=format&fit=crop`;
}

export const aboutGridImages = [
  {
    area: "wide",
    src: unsplash("photo-1705646152746-e3c9085ed34a", 1400),
    alt: "Group of people playing tennis on a court",
  },
  {
    area: "tall",
    src: unsplash("photo-1723467085008-f5b21eed322a", 900),
    alt: "Two people playing tennis on a court",
  },
  {
    area: "sq1",
    src: unsplash("photo-1722603510850-b2fe07a25e79", 900),
    alt: "Tennis court surrounded by trees",
  },
  {
    area: "sq2",
    src: unsplash("photo-1766675122854-28fc70f50132", 900),
    alt: "Tennis racket and ball on a court",
  },
] as const;

export const featureImages = [
  {
    src: unsplash("photo-1723467085008-f5b21eed322a", 900),
    alt: "Tennis players on a court",
  },
  {
    src: unsplash("photo-1722603510850-b2fe07a25e79", 1200),
    alt: "Outdoor tennis courts",
  },
] as const;

export const professionalPortraits = [
  unsplash("photo-1507003211169-0a1dd7228f2d", 800),
  unsplash("photo-1500648767791-00dcc994a43e", 800),
  unsplash("photo-1573496359142-b8d87734a5a2", 800),
] as const;

export const connectivityImage = unsplash(
  "photo-1464822759023-fed622ff2c3b",
  1400,
);

export const quoteBackgroundImage =
  "https://framerusercontent.com/images/kYTbzWjrPS6LW4Hu0ETEWYbkaw.jpg?scale-down-to=2048";

/** 4:3 landscape — matches facilities reference card proportions */
export const facilityImages = [
  {
    src: unsplashCrop("photo-1599586120429-48281b6f0ece", 1000, 750),
    alt: "Grass tennis court with white lines",
  },
  {
    src: unsplashCrop("photo-1566073771259-6a8506099945", 1000, 750),
    alt: "Modern hotel room interior",
  },
  {
    src: unsplashCrop("photo-1534438327276-14e5300c3a48", 1000, 750),
    alt: "Indoor gym with weight machines",
  },
  {
    src: unsplashCrop("photo-1576013551627-0cc20b96c2a7", 1000, 750),
    alt: "Outdoor swimming pool at dusk",
  },
] as const;

export const programImages = [
  {
    src: unsplash("photo-1705646152746-e3c9085ed34a", 900),
    alt: "Academy players training together on a tennis court",
  },
  {
    src: unsplash("photo-1518611012118-696072aa579a", 900),
    alt: "Athletes training together in a sports camp",
  },
  {
    src: unsplash("photo-1571019614242-c5c5dee9f50b", 900),
    alt: "Athlete focused on high-performance training",
  },
] as const;
