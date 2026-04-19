# Pearl Labs

Marketing site for Pearl Labs — veteran-owned software firm based in Ocala, FL.

**Live:** https://pearllab.io

## Stack

- Next.js 16 (App Router)
- React 19
- Tailwind CSS v4
- Framer Motion (scroll reveal, hover motion)
- Resend (transactional email via `/api/contact`)
- Hosted on Vercel

## Local development

```bash
pnpm install
pnpm dev
```

Open http://localhost:3000

## Build

```bash
pnpm build
```

## Structure

```
app/
├── page.tsx                 # Homepage
├── layout.tsx               # Root layout + metadata + JSON-LD
├── globals.css              # Design tokens + component styles
├── components/              # All UI components (class-based CSS)
├── api/contact/             # Resend email handler
├── estimate/                # Inquiry form (submits to /api/contact)
├── work/                    # Case studies
│   ├── fenceestimatepro/
│   └── ocala-elite-breed/
└── blog/                    # Essays
```

## Environment variables

Required in `.env.local`:

```bash
RESEND_API_KEY=<resend_key>
```

## Deploy

Pushes to `main` auto-deploy via Vercel.

## License

All rights reserved. Not open source.
