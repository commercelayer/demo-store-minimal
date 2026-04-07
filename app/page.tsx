import Link from "next/link";

import { countries } from "./_lib/countries";

export default function Page() {
  return (
    <main className="min-h-screen bg-[#ededed] text-slate-900">
      <div className="mx-auto flex min-h-screen w-full max-w-3xl flex-col justify-center px-4 py-16 sm:px-6 lg:px-8">
        <section>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            Select your storefront
          </h1>
          <p className="mt-3 max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
            Choose a country path to continue. Available routes are generated from configuration.
          </p>

          <nav aria-label="Choose country" className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {countries.map((country) => (
              <Link
                key={country.slug}
                href={`/${country.slug}`}
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 transition hover:border-slate-900 hover:text-slate-950"
              >
                <span>{country.name}</span>
              </Link>
            ))}
          </nav>
        </section>
      </div>
    </main>
  );
}
