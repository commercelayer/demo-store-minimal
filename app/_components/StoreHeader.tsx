import { CartIcon } from "./CartIcon"
import { CustomerLink } from './CustomerLink'
import { UserIcon } from "./UserIcon"

export function StoreHeader() {
  return (
    <header className="mb-5 border-b border-slate-300/80 pb-4 pt-1">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2.5 text-slate-950">
          <span className="inline-block h-4 w-4 rounded-sm border border-slate-950" />
          <p className="text-lg font-semibold tracking-tight">My Brand</p>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-3">
            <CustomerLink />
          </div>
          <a
            href="#"
            aria-label="Open cart"
            className="inline-flex items-center gap-2 text-sm text-slate-800 transition hover:text-slate-950"
          >
            <CartIcon />
            <span className="hidden sm:inline">Cart</span>
          </a>
        </div>
      </div>
    </header>
  )
}
