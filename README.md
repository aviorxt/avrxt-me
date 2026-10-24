# AVRXT Me

The dedicated public-profile application for `me.avrxt.dev`.

It intentionally contains only the public AVRXT profile experience: profile links, media, Discord presence, weather, Spotify status, status badge, and newsletter signup. It does **not** include the AVRXT admin dashboard, Discord administrator OAuth, private API routes, storage controls, or profile editing surfaces. Those remain on `www.avrxt.dev`.

## Hosting

This application targets AWS Amplify Hosting with Next.js 15 SSR support. The tracked [`amplify.yml`](./amplify.yml) installs locked dependencies and runs the production build.

## Required environment variables

Copy [`.env.example`](./.env.example) into the Amplify branch environment. Only public variables are used:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `NEXT_PUBLIC_API_URL`
- `NEXT_PUBLIC_MAIN_SITE_URL`

The Supabase anonymous key is safe here only because the public profile reads are constrained by Supabase Row Level Security. Never add service-role keys, Discord secrets, AWS credentials, or admin session secrets to this project.

## Local development

```bash
npm ci
npm run dev
```

Run the production verification with:

```bash
npx tsc --noEmit
npm run build
```

## Domain behavior

`me.avrxt.dev` serves this application. Links to the core website, documentation, system status, and dashboard intentionally resolve to `https://www.avrxt.dev`.
