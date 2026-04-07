import { makeSalesChannel } from "@commercelayer/js-auth"

import {
  createCommerceLayerCookieStorage,
  type CookieReader,
  type CookieWriter,
} from "./commerceLayerCookieStorage"

export function createCookieSalesChannel({
  clientId,
  scope,
  reader,
  writer,
}: {
  clientId: string
  scope: string
  reader: CookieReader
  writer?: CookieWriter
}) {
  return makeSalesChannel(
    {
      clientId,
      scope,
      debug: true,
    },
    {
      storage: createCommerceLayerCookieStorage({
        reader,
        writer,
      }),
    }
  )
}
