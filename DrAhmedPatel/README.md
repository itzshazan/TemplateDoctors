# Dr. Ahmed Patel – Prosthodontist website

Next.js 15 static site (exports to `out/`). Pages: Home, About, Services, Gallery, Contact. No map.

```bash
npm install
npm run build      # writes the static site to out/
npx serve out      # or any static host
```

Edit details in `src/config/site.ts` (name, phone, locations, services) and `src/config/content.ts` (gallery, About highlights). Colours and fonts are at the top of `src/styles/global.css`. See `IMAGE-PROMPTS.md` for what to confirm.
