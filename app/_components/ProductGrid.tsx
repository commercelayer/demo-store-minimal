import type { Sku } from "../_lib/skus";
import { ProductCard } from "./ProductCard";

type ProductGridProps = {
  items: Sku[];
};

export function ProductGrid({ items }: ProductGridProps) {
  return (
    <section className="mt-12">
      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950">Best seller</h2>
        </div>
      </div>

      <div className="grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((sku) => (
          <ProductCard key={sku.code} sku={sku} />
        ))}
      </div>
    </section>
  );
}