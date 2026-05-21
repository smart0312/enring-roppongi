/**
 * Site image map — each file is used exactly once across all pages.
 * Source photos: public/images/店舗関連/ (run: npm run images)
 */
export const siteImages = {
  hero: "/images/hero.jpg",
  about: "/images/about-concept.jpeg",
  brandLogo: "/images/brand-logo.jpg",
  experienceHero: "/images/experience-hero.jpg",
  visitBuilding: "/images/visit-building.jpg",

  night: {
    homeBackground: "/images/night-bar.jpg",
    homeInterior: "/images/night-bar-interior.jpg",
    pageHero: "/images/night-page-hero.png",
    pageDetail: "/images/night-bar-interior.jpg",
  },

  workshop: {
    homeGallery: [
      "/images/workshop-01.png",
      "/images/workshop-02.jpg",
      "/images/workshop-03.png",
      "/images/workshop-04.png",
    ] as const,
    experienceGallery: [
      "/images/gallery-01.png",
      "/images/gallery-02.png",
      "/images/gallery-03.png",
      "/images/gallery-04.png",
      "/images/gallery-05.png",
      "/images/gallery-06.png",
      "/images/gallery-07.png",
      "/images/gallery-09.png",
      "/images/gallery-10.png",
    ] as const,
  },
} as const;
