import { NextRequest, NextResponse } from "next/server"

import { createCookieSalesChannel } from "../../_lib/commerceLayerSalesChannel"

export async function GET(request: NextRequest) {
  const nextPath = request.nextUrl.searchParams.get("next")
  const clientId = request.nextUrl.searchParams.get("clientId")
  const scope = request.nextUrl.searchParams.get("scope")
  const redirectPath = nextPath != null && nextPath.startsWith("/") ? nextPath : "/"

  const response = NextResponse.redirect(new URL(redirectPath, request.url))

  if (clientId != null && scope != null) {
    const salesChannel = createCookieSalesChannel({
      clientId,
      scope,
      reader: request.cookies,
      writer: response.cookies,
    })

    await salesChannel.logoutCustomer().catch(() => {
      // Ignore revoke failures and proceed with local cleanup.
    })
  }

  return response
}
