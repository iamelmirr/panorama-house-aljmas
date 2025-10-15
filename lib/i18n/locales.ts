export const locales = ["hr", "en"] as const;
export const defaultLocale = "hr" as const;

export type Locale = (typeof locales)[number];

// Countries that should default to English
export const englishCountries = [
  "US", "GB", "CA", "AU", "NZ", "IE", // English-speaking
  "DE", "FR", "IT", "ES", "PT", "NL", "BE", "AT", "CH", "SE", "NO", "DK", "FI", // Western Europe
];

// Balkans countries that should default to Croatian/understand Croatian
export const balkanCountries = [
  "HR", // Croatia
  "BA", // Bosnia and Herzegovina
  "RS", // Serbia
  "ME", // Montenegro
  "MK", // North Macedonia
  "SI", // Slovenia
];
