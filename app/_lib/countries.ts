export type CountryConfig = {
  name: string
  slug: string
}

export const countries: CountryConfig[] = [
  {
    name: "United States",
    slug: "us",
  },
  {
    name: "Europe",
    slug: "eu",
  },
]

export function getCountryBySlug(slug: string): CountryConfig | undefined {
  return countries.find((country) => country.slug === slug)
}

export function getCountryFromPath(pathname: string): CountryConfig | undefined {
  const [slug] = pathname.split("/").filter(Boolean)

  if (!slug) {
    return undefined
  }

  return getCountryBySlug(slug)
}
