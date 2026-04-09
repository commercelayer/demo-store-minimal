import { Cart } from './Cart'
import { CustomerLink } from './CustomerLink'

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
          <Cart />
        </div>
      </div>
    </header>
  )
}
