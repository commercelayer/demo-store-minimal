# Commerce Layer Demo Store `minimal`

A minimal, reference-quality integration of [Commerce Layer](https://commercelayer.io) into a server-rendered (SSR) storefront built with [Next.js](https://nextjs.org) App Router.

Use this project as a starting point or reference when integrating Commerce Layer into your own Next.js SSR application.

## How this repo is structured

| Branch | Description |
|---|---|
| `main` | Plain e-commerce template — no Commerce Layer, no backend calls, fully static |
| `cl` | Commerce Layer integration on top of `main` |

The **pull request from `cl` into `main` is intentionally kept open** — it's the easiest way to review exactly what changes are needed to integrate Commerce Layer into an existing storefront. Browse the [PR diff](https://github.com/commercelayer/demo-store-minimal/pull/1/changes) before reading the code.

## What's covered

| Feature | Implementation |
|---|---|
| Guest access token | `makeSalesChannel` from `@commercelayer/js-auth` |
| Token persistence & auto-refresh | Custom cookie storage adapter |
| Multi-market routing | One URL segment per market (`/us`, `/eu`) |
| Customer login / logout | `MyIdentityLink` + `/auth/callback` route handler |
| Server-side token pre-warming | Next.js middleware (`proxy.ts`) |
| Live prices & compare-at prices | `<Price>` from `@commercelayer/react-components` |
| Add to cart | `<AddToCartButton>` |
| Mini cart | `<HostedCart type="mini">` + `<CartLink>` |
| My account link | `<MyAccountLink>` |
| Order persistence (guest vs. customer) | `<OrderStorage persistKey={...}>` scoped by market and owner |

## Prerequisites

- A [Commerce Layer](https://dashboard.commercelayer.io) account with at least one organization
- Two markets configured and seeded — the demo uses market codes `us` and `eu` (see [`app/_lib/countries.ts`](app/_lib/countries.ts))
- A Sales Channel application with the client ID to hand

> If you need demo data, use the [Commerce Layer Seeder](https://github.com/commercelayer/commercelayer-seeder) with the `multi_market` template.

## Getting started

**1. Clone and install**

```bash
git clone https://github.com/commercelayer/demo-store-minimal.git
cd demo-store-minimal
npm install
```

**2. Configure environment variables**

```bash
cp .env.local.example .env.local
```

Open `.env.local` and set your Sales Channel client ID:

```bash
NEXT_PUBLIC_CL_CLIENT_ID=your-sales-channel-client-id
```

**3. Run the development server**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) and select a storefront.


## How the auth flow works

```
Every request
  └── proxy.ts (middleware)
        └── getAuthorization() → ensures a fresh guest token is in the cookie

Page render (server)
  └── getSalesChannelAccessToken() → reads token from cookie
        └── passed to <CommerceLayerAuth> as accessToken prop

Customer login
  └── <MyIdentityLink> → redirects to CL Hosted Identity
        └── /auth/callback → receives accessToken, calls setCustomer()
              └── cookie is upgraded from guest to customer token

Customer logout
  └── /auth/logout → calls logoutCustomer(), clears cookie
```

## License

This repository is published under the [MIT](LICENSE) license.
