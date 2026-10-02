import { CartLink } from '@commercelayer/react-components'
import { HostedCart } from '@commercelayer/react-components/orders/HostedCart'
import { CartIcon } from './CartIcon'

export function Cart() {
  return (
    <>
      <HostedCart
        type='mini'
        openAdd
        style={{
          background: {
            zIndex: 9999,
          },
          container: {
            backgroundColor: 'white',
            zIndex: 9999,
          }
        }}
      />
      <CartLink
        className='inline-flex items-center gap-2 text-sm text-slate-800 transition hover:text-slate-950'
        type='mini'
        label={(
          <>
            <CartIcon />
            <span className="hidden sm:inline">Cart</span>
          </>
        )}
      />
    </>
  )
}
