export type SiteConfig = {
  name: string;
  tagline: string;
  address: string;
  phone: string;
  email: string;
  instagram: string;
  facebook: string;
  whatsappLink: string;
  meta: {
    title: string;
    description: string;
    keywords: string[];
    ogImage: string;
    url: string;
  };
};

export const SITE: SiteConfig = {
  name: "Panorama House Aljmaš",
  tagline: "Seoski turizam s pogledom na Dunav.",
  address: "Rudina Perinac 1, Aljmaš, Hrvatska",
  phone: "+385 99 211 9225",
  email: "panoramahousealjmas@gmail.com",
  instagram: "https://instagram.com/panorama_house_aljmas",
  facebook: "https://www.facebook.com/profile.php?id=61566358143307",
  whatsappLink:
    "https://wa.me/385992119225?text=Pozdrav,%20želio%20bih%20rezervisati%20boravak%20u%20Panorama%20Houseu.",
  meta: {
    title: "Panorama House Aljmaš – Seoski turizam s pogledom na Dunav",
    description: "Smještaj s bazenom, jacuzzijem i saunom u srcu Aljmaša.",
    keywords: [
      "seoski turizam Aljmaš",
      "smještaj Aljmaš",
      "Panorama House Aljmaš",
      "apartman s bazenom Hrvatska",
    ],
    ogImage: "/images/hero.jpg",
    url: "https://panorama-house-aljmas.com",
  },
};

export const NAV_LINKS = [
  { href: "/", label: "Početna" },
  { href: "/o-nama", label: "O nama" },
  { href: "/kontakt", label: "Kontakt" },
];
