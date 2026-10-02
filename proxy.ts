import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { createCookieSalesChannel } from "./app/_lib/commerceLayerSalesChannel"
import { getScopeForPath } from "./app/_lib/countries"

export async function proxy(request: NextRequest) {
  const response = NextResponse.next()

  const clientId = process.env.NEXT_PUBLIC_CL_CLIENT_ID
  const scope = getScopeForPath(request.nextUrl.pathname)

  if (clientId && scope) {
    const salesChannel = createCookieSalesChannel({
      clientId,
      scope,
      reader: request.cookies,
      writer: response.cookies,
    })

    await salesChannel.getAuthorization()
  }

  return response
}

export const config = {
  matcher: [
    // Match all routes except api, _next, public assets, and static files
    "/((?!api|_next/static|_next/image|favicon.ico|public).*)",
  ],
}
