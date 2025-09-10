# Shark Wraps Site (Next.js + Tailwind)

A high-end, mobile-first site for **Shark Wraps** built on Next.js App Router with Tailwind CSS, a Contact API (Nodemailer), pricing sections, portfolio grid, FAQ, and an Instagram feed placeholder.

## Quick Start

```bash
pnpm i   # or npm i / yarn
pnpm dev # or npm run dev
```

Visit http://localhost:3000

## Env Setup

Create `.env.local` with your SMTP + target inbox:

```
SMTP_HOST=smtp.yourprovider.com
SMTP_PORT=587
SMTP_USER=your_inbox@example.com
SMTP_PASS=your_password
CONTACT_TO=leads@sharkwraps.com
```

> The Contact form posts to `/api/contact` which sends an email via your SMTP. Test with a service like Brevo, Gmail SMTP (app passwords), or SendGrid.

## Images

Put your real photos here:

- `public/images/sclass-hood.jpg`
- `public/images/charger-hood.jpg`
- `public/images/camaro-ss.jpg`
- `public/images/tesla-modely.jpg`
- `public/images/bmw-f10.jpg`

(Use high-res, optimized JPGs; aim for ~1600px wide for portfolio, ~2400px+ for hero.)

## Instagram Feed

This project includes a placeholder component `components/InstagramEmbed.tsx`.
For a grid feed, use a third-party like **SnapWidget** or **LightWidget**:
- Create a widget tied to **@sharkwraps_**
- Paste the provided `<script>` and `<iframe>` code into `InstagramEmbed.tsx` return block.

## Deploy (Vercel)

1. Push to GitHub.
2. Import the repo on [Vercel](https://vercel.com/).
3. Add your `.env` values in **Vercel → Settings → Environment Variables**.
4. Deploy. (Edge-friendly; API route uses Node.js runtime by default.)

## SEO To‑Dos
- Update `metadata` in `app/layout.tsx` (title, description, og:image).
- Add a `sitemap.xml` later (e.g., next-sitemap) if needed.

## License
For Shark Wraps use.
