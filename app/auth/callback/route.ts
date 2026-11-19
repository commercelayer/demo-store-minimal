import { jwtDecode, jwtIsSalesChannel } from "@commercelayer/js-auth"
import { NextRequest, NextResponse } from "next/server"

import { createCookieSalesChannel } from "../../_lib/commerceLayerSalesChannel"
import { getCountryByScope } from "../../_lib/countries"

function resolveRedirectPath(request: NextRequest, scope?: string | null): string {
  const nextPath = request.nextUrl.searchParams.get("next")
  if (nextPath != null && nextPath.startsWith("/")) {
    return nextPath
  }

  if (scope != null) {
    const currentCountry = getCountryByScope(scope)
    if (currentCountry != null) {
      return `/${currentCountry.slug}`
    }
  }

  return "/"
}

export async function GET(request: NextRequest) {
  const accessToken = request.nextUrl.searchParams.get("accessToken")
  const scope = request.nextUrl.searchParams.get("scope")
  const refreshToken = request.nextUrl.searchParams.get("refreshToken")

  const redirectPath = resolveRedirectPath(request, scope)
  const redirectUrl = new URL(redirectPath, request.url)
  const response = NextResponse.redirect(redirectUrl)

  if (accessToken == null || scope == null) {
    return response
  }

  const decodedToken = jwtDecode(accessToken)
  if (!jwtIsSalesChannel(decodedToken.payload)) {
    return response
  }

  const clientId = decodedToken.payload.application.client_id
  const salesChannel = createCookieSalesChannel({
    clientId,
    scope,
    reader: request.cookies,
    writer: response.cookies,
  })

  await salesChannel.setCustomer({
    accessToken,
    scope,
    refreshToken: refreshToken ?? undefined,
  })

  return response
}
