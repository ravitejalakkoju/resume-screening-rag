# Express + TypeScript REST template

Basic Express 5 starter with TypeScript, sensible middleware, and sample routes for quick API prototyping.

## Setup
- Copy `.env.example` to `.env` and adjust values as needed.
- Install deps from this directory: `pnpm install`.
- Development server with reload: `pnpm dev`.
- Build compiled output: `pnpm build`.
- Run compiled server: `pnpm start` (after `pnpm build`).

## Endpoints
- `GET /` → API readiness message.
- `GET /health` → health info with uptime/environment.
- `GET /api/v1/samples` → list in-memory sample resources.
- `POST /api/v1/samples` → create sample `{ name, description? }`.
- `GET /api/v1/samples/:id` → fetch single sample.
- `DELETE /api/v1/samples/:id` → delete sample.

Middleware includes Helmet, CORS, JSON body parsing, request logging, 404 handling, and structured error responses. Request logs include a generated `requestId` per request.
