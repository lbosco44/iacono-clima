# Iacono Clima — progetto

Sito single-page (con catalogo `/prodotti` come pagina secondaria) per **Iacono Climatizzazione S.r.l.**, azienda di installazione climatizzatori a Siracusa (oltre 20 anni, certificata F-GAS, rivenditore Carrier e MAXA). Sostituisce `www.iaconoclim.it`.

## Stack

- **React 19** + **Vite 8** + **TypeScript 5**
- **Tailwind CSS v4** (plugin `@tailwindcss/vite`, token in `@theme` dentro `src/index.css` — niente `tailwind.config.js`)
- **Framer Motion** + **react-intersection-observer** per reveal/stagger
- **GSAP** + **ScrollTrigger** per: pinning step "Come lavoriamo", timeline orizzontale "Sistema Iacono"
- **Lenis** smooth scroll globale (lerp 0.08), integrato con `ScrollTrigger.update`
- **react-countup** per animazione "20+"
- **Leaflet** + tile Carto Light (OSM, no API key) per la mappa nel "Briefing"
- **react-router-dom** per le 2 route: `/` e `/prodotti`
- Nessun backend: il form è solo frontend (`AnimatePresence` per success state)

## Design system — concept "Sistema"

Tutti i token vivono in `src/index.css` dentro `@theme`:

| Token | Valore | Uso |
|---|---|---|
| `--color-bg` | `#F8F8F6` | Off-white sfondo principale |
| `--color-ink` | `#0F1B2D` | Navy notte — sezioni scure / testi forti |
| `--color-accent` | `#0066CC` | Blu tecnologico — CTA, link, accenti |
| `--color-mute` | `#4A4A4A` | Grigio testi tecnici secondari |
| `--color-ink-soft` | `#1A2842` | Card su sfondo scuro |
| `--color-bg-warm` | `#F2F0EA` | Sezioni alternate |
| `--color-accent-soft` | `#DBEEFF` | Tag bg tenue |
| `--color-accent-deep` | `#0052A3` | Hover accent |
| `--color-line` | `#E5E2DA` | Bordi sottili |
| `--color-line-strong` | `#C9C4B6` | Divisori |

**Font**:
- Display: `Neue Haas Grotesk Display Pro` (Adobe Fonts) → fallback **Geist Variable** (già caricato via `@fontsource-variable/geist`).
- Body: `Inter` (Google Fonts, 400/500/600).
- Mono (dati/tag IDE-style): `JetBrains Mono` (Google Fonts, 500/700).

> Per attivare il font Adobe vero: creare un Web Project su Adobe Fonts che includa "Neue Haas Grotesk Display Pro", poi in `index.html` decommentare lo `<link>` Typekit e sostituire `PROJECT_ID`. Finché Adobe non è configurato, il sito gira identico con Geist.

**Radius**: tag IDE 3px (`rounded-[3px]`), card 4px, pill 999px.

**Easing**: `cubic-bezier(0.22, 1, 0.36, 1)` (quiet) su tutte le transizioni di reveal/hover.

## Struttura

```
src/
├── App.tsx                    # BrowserRouter + Routes + layout globali + initLenis
├── main.tsx                   # render + import Geist + index.css
├── index.css                  # @import tailwindcss + @theme + @layer base/components
├── pages/
│   ├── HomePage.tsx           # 7 sezioni in ordine
│   └── ProductsPage.tsx       # catalogo PDF in 4 categorie
├── sections/
│   ├── HeroSistema.tsx        # 1 — split + scheda dati stagger
│   ├── ISistemi.tsx           # 2 — 5 schede + manifesto card + BrandsStrip
│   ├── ComeLavoriamo.tsx      # 3 — 4 step con GSAP scrub, mobile = reveal
│   ├── Casi.tsx               # 4 — 4 righe editoriali alternate
│   ├── SistemaIacono.tsx      # 5 — count-up "20+" + timeline orizzontale GSAP
│   ├── Verdetti.tsx           # 6 — recensione fullwidth + nav 01/04
│   └── Briefing.tsx           # 7 — contatti + form + mappa Leaflet
├── components/
│   ├── Header.tsx             # sticky, glass on scroll, drawer mobile
│   ├── Footer.tsx             # navy 3 colonne
│   ├── WhatsAppFab.tsx        # arancione (NON verde — coerenza brand)
│   ├── BrandsStrip.tsx        # marquee "Altri marchi disponibili"
│   ├── BriefingMap.tsx        # Leaflet wrapper, dynamic import
│   └── ui/
│       ├── Tag.tsx            # tag IDE-style monospace, varianti per Sistemi/Nicchie
│       ├── CountUp.tsx        # wrapper react-countup + IO triggerOnce
│       ├── Reveal.tsx         # Framer fade+translateY w/ useReducedMotion + variants stagger
│       ├── Button.tsx         # primary arancione / outline navy / ghost / link
│       ├── SectionLabel.tsx   # eyebrow `[xx / NOME]` + linea + label
│       └── DisplayHeading.tsx # h1/h2/h3 con scale tipografica predefinita
├── data/
│   ├── site.ts                # contatti, indirizzo (geo), nav, certificazioni
│   ├── sistemi.ts             # 5 categorie + manifesto
│   ├── steps.ts               # 4 step processo
│   ├── casi.ts                # 4 casi (HoReCa/Condominio/Residenziale/Commerciale)
│   ├── timeline.ts            # 5 tappe storia azienda
│   ├── verdetti.ts            # 4 recensioni placeholder
│   ├── brands.ts              # primary [Carrier, MAXA] + secondary [Daikin, Sinclair, HSD]
│   └── prodotti.ts            # 12 PDF cataloghi → /prodotti
├── lib/
│   ├── cn.ts                  # clsx + twMerge
│   ├── lenis.ts               # singleton init, scrollTo helper, raf loop
│   └── gsap.ts                # registerPlugin(ScrollTrigger)
└── hooks/
    └── useInView.ts           # wrapper react-intersection-observer triggerOnce
```

## Convenzioni

- **Mobile-first tecnico, desktop full-width reale**: parti dai 375px, poi `lg:` (1024px) attiva layout editoriale a colonne. Niente "mobile allargato" su 1440px.
- **Container**: `.container-x` max-width 1440px, padding orizzontale che cresce coi breakpoint. Per testi narrativi `.container-narrow` 1120px.
- **Sezioni**: id sempre lower-kebab (`#i-sistemi`, `#come-lavoriamo`, `#sistema-iacono`, `#briefing`...).
- **Anchor scroll**: gestito da Lenis (`scrollTo` helper in `src/lib/lenis.ts`), offset header -80px.
- **Reveal**: usa `<Reveal>` per blocchi singoli, `stagger`/`staggerItem` da `Reveal.tsx` per gruppi (Hero scheda dati). Niente `whileInView` ad-hoc nei nuovi componenti.
- **Tag IDE-style**: solo via `<Tag variant="...">`. Per aggiungere una nicchia/categoria, aggiungere variant in `ui/Tag.tsx`.
- **Animazioni GSAP**: confinate a 2 sezioni (`ComeLavoriamo`, `SistemaIacono`). Sempre con cleanup `ScrollTrigger.kill()` su unmount/resize. Su mobile `<1024px` il pinning è disattivato.
- **prefers-reduced-motion**: rispettato a 3 livelli — CSS global (`*` transition-duration: 0.001ms), Lenis non si inizializza, `<Reveal>`/`<CountUp>` skip animation via `useReducedMotion()`.
- **Immagini**: tutte in `public/images/`, formato `.jpeg` per le foto del concept (hero-detail, step-*, caso-*, showroom-interno, team-titolare). Loghi brand `.png` o `.svg`.

## Script

```bash
npm run dev        # http://localhost:5173
npm run build      # tsc -b && vite build → dist/
npm run preview    # preview del build
npm run lint       # eslint
npm run typecheck  # tsc --noEmit
```

## Deploy

- Push su `main` → deploy automatico Vercel.
- `vercel.json` configura SPA rewrite: tutte le route che non sono `api|docs|images|favicon|robots|sitemap|icons|assets` vengono servite da `/index.html`.
- Mai committare `.env` o chiavi API.

## Regole

- Tutto il testo del sito è **in italiano**.
- **Mai** link a pagine inesistenti: ogni anchor corrisponde a un `id` montato.
- Il form Briefing **non** invia davvero — `AnimatePresence` per success state, nessuna network call.
- Numeri telefono: `tel:+390931441616` per chiamate, `https://wa.me/393356511087` (primario) o `393356511287` (secondario) per WhatsApp.
- WhatsApp FAB è **arancione**, non verde standard — coerenza con la palette di brand.
- Headline hero attuale: "Impianti che durano vent'anni. Come noi." — alternative commentate in `data/site.ts`. Cambiare con il cliente.
- Coordinate showroom in `data/site.ts > address.geo` da verificare via OSM Nominatim prima del go-live.
