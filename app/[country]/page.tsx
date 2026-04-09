import { notFound } from "next/navigation"

import { Footer } from "../_components/Footer"
import { HeroBanner } from "../_components/HeroBanner"
import { ProductGrid } from "../_components/ProductGrid"
import { StoreHeader } from "../_components/StoreHeader"
import { countries, getCountryBySlug } from "../_lib/countries"
import { skus } from "../_lib/skus"

type PageProps = {
  params: Promise<{ country: string }>
}

export function generateStaticParams() {
  return countries.map((country) => ({ country: country.slug }))
}

export default async function Page({ params }: PageProps) {
  const { country } = await params
  const currentCountry = getCountryBySlug(country)

  if (!currentCountry) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-[#ededed] text-slate-900">
      <div className="mx-auto flex w-full max-w-7xl flex-col px-4 pb-14 pt-4 sm:px-6 lg:px-8">
        <StoreHeader />
        <HeroBanner imageUrl={"https://res.cloudinary.com/commercelayer/image/upload/f_auto/v1658318039/demo-store/assets/all-over-print-backpack-white-front.jpg"} />
        <ProductGrid items={skus} />
        <Footer
          countries={countries}
          currentSlug={currentCountry.slug}
        />
      </div>
    </main>
  )
}