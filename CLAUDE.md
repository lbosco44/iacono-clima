# Iacono Clima — progetto

Sito single-page per **Iacono Climatizzazione S.R.L.**, azienda di installazione climatizzatori a Siracusa (oltre 20 anni, certificata F-GAS, rivenditore Carrier e MAXA). Sostituisce `www.iaconoclim.it`.

## Stack

- **React 19** + **Vite**
- **Tailwind CSS v4** (plugin `@tailwindcss/vite`, token in `@theme` dentro `src/index.css` — niente `tailwind.config.js`)
- **Framer Motion** + **react-intersection-observer** per animazioni scroll
- `react-router-dom` installato ma **non importato** (single-page con anchor scroll)
- `clsx` via `src/lib/cn.js`
- Nessun backend, nessuna libreria di toast: il form è solo frontend (AnimatePresence per lo stato di successo)

## Design system — concept "Freddo Pulito"

Tutti i token vivono in `src/index.css` dentro `@theme`:

| Token | Valore | Uso |
|---|---|---|
| `--color-primary` | `#1A73E8` | Blu brand, CTA, accent |
| `--color-primary-dark` | `#1557B0` | Hover su primary |
| `--color-bg` | `#FFFFFF` | Sfondo base |
| `--color-bg-light` | `#F0F7FF` | Sezioni alternate |
| `--color-dark` | `#0A2540` | Sezioni scure (Stats, Brands, Contatti) |
| `--color-darker` | `#060D1A` | Footer |
| `--color-dark-card` | `#1E3A5F` | Card su sfondo scuro |
| `--color-accent` | `#E8F4FD` | Pill badge, icon backgrounds, placeholder |
| `--color-text` / `--color-text-muted` | `#1A1A2E` / `#6B7280` | Corpo / secondario |
| `--color-whatsapp` | `#25D366` | FAB WhatsApp |
| `--color-star` | `#F59E0B` | Stelle recensioni |

**Font**: Montserrat (400 regular, 700/800 bold, 900 black) caricato via `<link>` in `index.html`.

**Radius**: card 16px (`rounded-2xl`), bottoni 8px (`rounded-lg`), pill 999px.

**Shadow**: `--shadow-card` base, `--shadow-card-hover` al hover, `--shadow-btn-glow` per CTA.

**Easing**: `--ease-smooth: cubic-bezier(0.22, 1, 0.36, 1)` su tutte le transizioni.

## Struttura

```
src/
├── App.jsx                 # Sequenza sezioni + ErrorBoundary
├── main.jsx
├── index.css               # @import tailwindcss + @theme + @layer base/components
├── components/
│   ├── Header.jsx          # fixed, trasparente→bianco su scroll
│   ├── MobileDrawer.jsx    # drawer destro per nav mobile
│   ├── Hero.jsx            # split 60/40, sfondo scuro, 3 badge + 2 CTA
│   ├── Stats.jsx           # 4 counter animati su sfondo scuro
│   ├── Services.jsx        # 8 card, bordo sx blu, hover lift
│   ├── WhyUs.jsx           # 3 colonne con icone grandi
│   ├── About.jsx           # immagine + testo + 2 badge
│   ├── Brands.jsx          # 2 card Carrier/MAXA su scuro
│   ├── ServiceArea.jsx     # 21 pill comuni
│   ├── Testimonials.jsx    # 3 card recensioni
│   ├── ContactForm.jsx     # form + info colonna
│   ├── Footer.jsx          # 3 colonne + bottom bar
│   ├── WhatsAppFab.jsx     # FAB fisso con pulse
│   ├── ErrorBoundary.jsx
│   └── ui/
│       ├── Reveal.jsx      # Reveal, RevealGroup, RevealItem (tutti rispettano prefers-reduced-motion)
│       ├── SectionTitle.jsx
│       ├── Badge.jsx
│       ├── Button.jsx      # primary/outline con anchor smooth-scroll integrato
│       ├── ImagePlaceholder.jsx  # fallback con nome file se img manca
│       └── Icon.jsx        # SVG inline set (home, store, factory, tool, …)
├── data/
│   ├── site.js             # telefono, whatsapp, email, indirizzo, nav, orari
│   ├── services.js         # 8 servizi
│   ├── stats.js            # 4 numeri
│   ├── reasons.js          # 3 perché sceglierci
│   ├── comuni.js           # 21 comuni
│   └── testimonials.js     # 3 recensioni
├── lib/
│   ├── cn.js               # clsx wrapper
│   └── smoothScroll.js     # handleAnchorClick + smoothScrollTo
└── hooks/
    └── useCountUp.js       # counter animato via framer-motion animate()
```

## Convenzioni

- **Mobile-first**: parti dai 375px, poi scala. Ogni section ha `padding-block: 4rem` mobile → `6rem` desktop (classe `.section-y`).
- **Container**: `.container-x` max-width 1200px, padding orizzontale responsive.
- **Anchor scroll**: ogni bottone `Button` con `href` che inizia con `#` passa attraverso `handleAnchorClick` (offset header 72px).
- **Animazioni**: usa `<Reveal>` per elementi singoli, `<RevealGroup>`+`<RevealItem>` per stagger. **Non** usare `whileInView` direttamente nei nuovi componenti — il wrapper gestisce già `prefers-reduced-motion`.
- **Icone**: solo SVG inline da `ui/Icon.jsx`. Se serve un glifo nuovo, aggiungi la path dentro il dict `ICONS`.
- **Immagini**: metti i JPG in `public/images/` con i nomi già referenziati in `<ImagePlaceholder name="…">`. Finché non ci sono, il componente mostra un placeholder blu con nome file.

## Nomi immagine attesi in `public/images/`

`hero-bg.jpg`, `chi-siamo-team.jpg`. (Le altre referenziate nel brief — `installazione-01.jpg`, `installazione-02.jpg`, `showroom.jpg`, `unita-esterna.jpg`, `comfort-casa.jpg`, `hero-team.jpg` — non sono attualmente usate in questa build; drop-in futuro.)

## Script

```bash
npm run dev      # http://localhost:5173
npm run build    # bundle produzione in dist/
npm run preview  # preview del build
npm run lint
```

## Regole

- Tutto il testo del sito è in **italiano**.
- **Mai** link a pagine inesistenti: ogni anchor corrisponde a un `id` presente.
- Il form **non** invia davvero — stato locale + AnimatePresence per il success state.
- Numeri telefono: `tel:+390931441616` per chiamate, `https://wa.me/393356511087` per WhatsApp.
- `prefers-reduced-motion` è rispettato: disabilita animazioni tramite CSS global + `useReducedMotion()` di framer-motion nei componenti.
