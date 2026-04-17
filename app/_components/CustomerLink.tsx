"use client"

import { jwtDecode, jwtIsSalesChannel } from '@commercelayer/js-auth'
import { CustomerContainer, useCommerceLayer } from '@commercelayer/react-components'
import MyAccountLink from '@commercelayer/react-components/customers/MyAccountLink'
import MyIdentityLink from '@commercelayer/react-components/customers/MyIdentityLink'
import { usePathname } from 'next/navigation'
import { useMemo } from 'react'

export const CustomerLink: React.FC = () => {
  const pathname = usePathname()
  const { accessToken } = useCommerceLayer()

  const callbackUrl = useMemo(() => {
    if (typeof window === 'undefined') {
      return undefined
    }

    return `${window.location.origin}/auth/callback?next=${encodeURIComponent(pathname)}`
  }, [pathname])

  if (accessToken == null) {
    return null
  }

  const decodedToken = jwtDecode(accessToken)

  if (!jwtIsSalesChannel(decodedToken.payload)) {
    return null
  }

  const clientId = decodedToken.payload.application.client_id
  const scope = decodedToken.payload.scope
  const isLoggedIn = decodedToken.payload.owner?.type === 'Customer'
  const logoutUrl = `/auth/logout?next=${encodeURIComponent(pathname)}&clientId=${encodeURIComponent(clientId)}&scope=${encodeURIComponent(scope)}`

  return (
    <CustomerContainer>
      {
        isLoggedIn ? (
          <>
            <MyAccountLink
              className='inline-flex items-center gap-2 text-sm text-slate-700 transition hover:text-slate-950'
              target='_blank'
              label='My account'
            />
            <a
              className='text-sm text-slate-700 transition hover:text-slate-950'
              href={logoutUrl}
            >
              Logout
            </a>
          </>
        ) : (
          <MyIdentityLink
            className='text-sm text-indigo-600 transition hover:text-indigo-700'
            clientId={clientId}
            scope={scope}
            label='Log in'
            returnUrl={callbackUrl}
            type='login'
          />
        )
      }
    </CustomerContainer>
  )
}
