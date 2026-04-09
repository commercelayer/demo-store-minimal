import Image from "next/image"

import type { Sku } from "../_lib/skus"

type ProductCardProps = {
  sku: Sku
}

export function ProductCard({ sku }: ProductCardProps) {
  const hasDiscount =
    typeof sku.compare_at_amount_cents === "number" &&
    sku.compare_at_amount_cents > sku.amount_cents &&
    Boolean(sku.formatted_compare_at_amount)

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[28px] border border-slate-200 bg-white">
      <div className="relative h-56 overflow-hidden bg-[#e3e3e3] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.65),0_10px_25px_rgba(15,23,42,0.08)]">
        <Image
          src={sku.image_url}
          alt={sku.name}
          width={176}
          height={176}
          className="absolute inset-x-0 top-1/2 mx-auto h-42 w-42 -translate-y-1/2 object-contain filter-[drop-shadow(0_10px_10px_rgba(15,23,42,0.14))_drop-shadow(0_26px_18px_rgba(15,23,42,0.2))] transition duration-300 group-hover:scale-[1.02]"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div>
          <h3 className="text-[1.5rem] leading-tight font-semibold tracking-tight text-slate-950">
            {sku.name}
          </h3>
          <p className="mt-2 text-xs uppercase tracking-[0.08em] text-slate-500">{sku.code}</p>
        </div>

        <p className="mt-5 text-base leading-6 text-slate-700">{sku.description}</p>

        <div className="mt-auto flex items-center justify-between gap-4 pt-6">
          <div className="inline-flex items-center gap-3 rounded-full bg-[#f1f1f1] px-3 py-1">
            <p className="text-md font-semibold tracking-tight text-slate-950">{sku.formatted_amount}</p>
            {hasDiscount ? (
              <p className="text-sm text-slate-500 line-through">
                {sku.formatted_compare_at_amount}
              </p>
            ) : null}
          </div>
          <button
            type="button"
            className="rounded-full bg-[#020b24] px-5 py-2.5 text-base font-semibold text-white transition hover:bg-[#0a1638]"
          >
            Add to cart
          </button>
        </div>
      </div>
    </article>
  )
}
