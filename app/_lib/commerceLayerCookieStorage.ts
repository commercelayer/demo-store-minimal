import type { Storage, StorageValue } from "@commercelayer/js-auth"
import type { cookies } from 'next/headers'
import type { NextRequest, NextResponse } from 'next/server'

export type CookieReader = NextRequest['cookies'] | Awaited<ReturnType<typeof cookies>>
export type CookieWriter = NextResponse['cookies']

export function createCommerceLayerCookieStorage({
  reader,
  writer,
}: {
  reader: CookieReader
  writer?: CookieWriter
}): Storage {
  return {
    name: "next-cookie-storage",
    async getItem(key: string) {
      const storedValue = reader.get(encodeCookieName(key))?.value

      try {
        return JSON.parse(storedValue ?? "null") as StorageValue
      } catch {
        return null
      }
    },
    async setItem(key: string, value: StorageValue) {
      writer?.set({
        name: encodeCookieName(key),
        value: JSON.stringify(value),
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
      })
    },
    async removeItem(key: string) {
      writer?.delete(encodeCookieName(key))
    },
  }
}

function encodeCookieName(name: string): string {
  return encodeURIComponent(name).replace(
    /%(2[346B]|5E|60|7C)/g,
    decodeURIComponent,
  )
}
