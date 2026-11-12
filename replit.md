# Barbearia — Landing Page

Landing page de portfólio para uma barbearia, com conteúdo comercial apresentado como placeholders até que os dados reais sejam fornecidos.

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Postgres connection string

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)

## Where things live

- Landing page and execution notes: `artifacts/atelier-barbearia/`
- Research references and setup instructions: `artifacts/atelier-barbearia/README.md`

## Architecture decisions

_Populate as you build — non-obvious choices a reader couldn't infer from the code (3-5 bullets)._

## Product

One-page showcase with sections for services, space, work, barbers, reviews, booking, and contact.

## User preferences

- Do not invent the barbershop name, slogan, commercial copy, history, prices, testimonials, address, phone, or social profiles; keep these as visible placeholders until real details are supplied.

## Gotchas

_Populate as you build — sharp edges, "always run X before Y" rules._

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
