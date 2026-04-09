import { CartIcon } from './CartIcon'

export function Cart() {
  return (
    <a
      href="#"
      aria-label="Open cart"
      className="inline-flex items-center gap-2 text-sm text-slate-800 transition hover:text-slate-950"
    >
      <CartIcon />
      <span className="hidden sm:inline">Cart</span>
    </a>
  )
}
