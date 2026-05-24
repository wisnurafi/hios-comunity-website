# HIOS · Himpunan Orang Selaw

Landing page for **HIOS**, an underground Indonesian gaming community. Built as a single-page Next.js site with a cyberpunk-comic aesthetic, animated sections, and a Discord-themed showcase.

> _"Kekuatan berasal dari pengetahuan itu sendiri."_

## Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org) (App Router) + [React 19](https://react.dev)
- **Language:** TypeScript 5
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com) + `tw-animate-css`
- **UI:** [shadcn/ui](https://ui.shadcn.com) (radix-maia style) on top of [Radix UI](https://www.radix-ui.com)
- **Animation:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Hugeicons](https://hugeicons.com) + [Lucide](https://lucide.dev)
- **Fonts:** Bungee, Anton, and Poppins (via `next/font` + `@fontsource`)
- **Lint:** ESLint 9 (`eslint-config-next`)

## Getting Started

Requirements: **Node.js 20+** and npm.

```bash
# install dependencies
npm install

# run the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Scripts

| Command          | Description                              |
| ---------------- | ---------------------------------------- |
| `npm run dev`    | Start the Next.js development server.    |
| `npm run build`  | Create a production build.               |
| `npm run start`  | Run the production build.                |
| `npm run lint`   | Lint the project with ESLint.            |

## Project Structure

```
hios-community/
├── public/
│   └── gallery/              # Community photos used by the gallery section
├── src/
│   ├── app/
│   │   ├── layout.tsx        # Root layout, fonts, metadata
│   │   ├── page.tsx          # Single-page composition of all sections
│   │   └── globals.css       # Tailwind v4 entry + theme tokens
│   ├── components/
│   │   ├── brand/            # Logo, comic-style FX, comic panels
│   │   ├── layout/           # Navbar, footer
│   │   ├── sections/         # Hero, About, Members, Discord, Games,
│   │   │                     # Gallery, Story, Quotes
│   │   └── ui/               # shadcn primitives + ComicLoader
│   └── lib/
│       ├── data.ts           # Static content (members, games, quotes, etc.)
│       └── utils.ts          # `cn` helper and shared utilities
├── components.json           # shadcn/ui config (radix-maia, hugeicons)
├── next.config.ts
└── tsconfig.json
```

## Sections

The home page is composed of:

- **Hero** — animated landing with the HIOS tagline
- **About** — community identity and stats
- **Members** — leaders, mods, staff, and bots
- **Discord** — channel and message preview themed like Discord
- **Games** — rotating list of titles the community plays
- **Gallery** — meet-up and event photos
- **Story** — timeline from 2021 to today
- **Quotes** — voice-chat one-liners from members

All static content lives in `src/lib/data.ts:1` so copy and lists can be edited without touching components.

## Customizing Content

Edit `src/lib/data.ts` to update:

- `HIOS_META` — community name, tagline, Discord URL, member counts
- `NAV_ITEMS` — navbar links
- `MEMBERS`, `GAMES`, `GALLERY`, `STORY`, `QUOTES` — section content
- `DISCORD_CHANNELS`, `DISCORD_MESSAGES` — Discord-style preview
- `SOCIALS`, `STATS` — footer and stat cards

Replace gallery images in `public/gallery/` and reference them via the `image` field in `GALLERY`.

## Configuration Notes

- `next.config.ts:1` allows the dev origin `192.168.1.19` so the dev server can be reached from another device on the LAN. Adjust or remove this for your own network.
- Theme colors and CSS variables are defined in `src/app/globals.css`.
- shadcn/ui is configured in `components.json` (style: `radix-maia`, icon library: `hugeicons`).

## Deployment

Any platform that supports Next.js 16 will work. The simplest path is [Vercel](https://vercel.com/new):

```bash
npm run build
npm run start
```

## License

Private project. All community names, quotes, and assets belong to HIOS.
