import Link from "next/link"

import type { CountryConfig } from "../_lib/countries"

type CountrySelectorFooterProps = {
  countries: CountryConfig[]
  currentSlug?: string
}

export function Footer({
  countries,
  currentSlug,
}: CountrySelectorFooterProps) {
  const activeCountry = countries.find((country) => country.slug === currentSlug)

  return (
    <footer className="mt-14 border-t border-slate-300/80 px-1 pt-5">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="text-sm text-slate-600">
          <p className="font-medium text-slate-700">Country</p>
          <p className="mt-1 text-xs uppercase tracking-[0.16em] text-slate-500">
            {activeCountry
              ? `${activeCountry.name}`
              : "No country selected"}
          </p>
        </div>

        <nav aria-label="Country selector" className="flex flex-wrap items-center gap-4">
          {countries.map((country) => {
            const isActive = country.slug === currentSlug

            return (
              <Link
                key={country.slug}
                href={`/${country.slug}`}
                className={
                  isActive
                    ? "text-sm font-semibold text-slate-950 underline decoration-2 underline-offset-4"
                    : "text-sm text-slate-600 transition hover:text-slate-950"
                }
              >
                {country.name}
              </Link>
            )
          })}
        </nav>
      </div>
    </footer>
  )
}
