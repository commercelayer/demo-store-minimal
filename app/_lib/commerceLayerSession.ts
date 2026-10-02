import { cookies } from "next/headers"
import { createCookieSalesChannel } from "./commerceLayerSalesChannel"

export async function getSalesChannelAccessToken({
  clientId,
  scope,
}: {
  clientId: string
  scope: string
}): Promise<string> {
  const cookieStore = await cookies()
  const salesChannel = createCookieSalesChannel({
    clientId,
    scope,
    reader: cookieStore,
  })

  const authorization = await salesChannel.getAuthorization()
  return authorization.accessToken
}
