export type CountryConfig = {
  name: string
  slug: string
  scope: string
}

export const countries: CountryConfig[] = [
  {
    name: "United States",
    slug: "us",
    scope: "market:code:US",
  },
  {
    name: "Europe",
    slug: "eu",
    scope: "market:code:EU",
  },
]

export function getCountryBySlug(slug: string): CountryConfig | undefined {
  return countries.find((country) => country.slug === slug)
}

export function getCountryByScope(scope: string): CountryConfig | undefined {
  return countries.find((country) => country.scope === scope)
}

export function getCountryFromPath(pathname: string): CountryConfig | undefined {
  const [slug] = pathname.split("/").filter(Boolean)

  if (!slug) {
    return undefined
  }

  return getCountryBySlug(slug)
}

export function getScopeForPath(pathname: string): string | undefined {
  return getCountryFromPath(pathname)?.scope
}
