export type CountryConfig = {
  name: string;
  slug: string;
  scope: string;
};

export const countries: CountryConfig[] = [
  {
    name: "United States",
    slug: "us",
    scope: "market:code:us",
  },
  {
    name: "Europe",
    slug: "eu",
    scope: "market:code:eu",
  },
];

export function getCountryBySlug(slug: string): CountryConfig | undefined {
  return countries.find((country) => country.slug === slug);
}

export function getCountryFromPath(pathname: string): CountryConfig | undefined {
  const [slug] = pathname.split("/").filter(Boolean);

  if (!slug) {
    return undefined;
  }

  return getCountryBySlug(slug);
}

export function getScopeForPath(pathname: string): string | undefined {
  return getCountryFromPath(pathname)?.scope;
}