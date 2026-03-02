# Mobile Healthcare — Frontend

A multilingual React/Vite frontend for **Mobile Healthcare**, a home medical services company based in Casablanca, Morocco. The site offers information about nursing care, medical consultations, medical transport, and home blood sampling, available 24/7.

Live site: [mobile-healthcare.org](https://www.mobile-healthcare.org)

---

## Tech Stack

| Category             | Technology                       |
| -------------------- | -------------------------------- |
| Framework            | React 18 + Vite 5                |
| Routing              | react-router-dom v6              |
| Internationalization | i18next + react-i18next          |
| SEO                  | react-helmet-async               |
| Maps                 | Leaflet + react-leaflet          |
| Animations           | Framer Motion                    |
| Icons                | react-icons, ionicons            |
| Compression          | vite-plugin-compression (Brotli) |
| Linting              | ESLint 9 + vite-plugin-eslint    |

---

## Features

- **4 languages**: French (default), English, Spanish, Arabic
- **RTL support**: Arabic pages use `dir="rtl"` automatically
- **SEO**: Per-page `<title>`, `<meta description>`, canonical links, hreflang tags, and schema.org `LocalBusiness` JSON-LD
- **Performance**: Lazy-loaded routes, Brotli compression, AVIF images
- **Sitemap**: Auto-generated via `sitemap-generator.js` on build
- **WhatsApp CTA**: Floating button + Google Ads conversion tracking

---

## Project Structure

```
src/
├── App.jsx                     # Router — 4 root paths (/, /en, /es, /ar)
├── main.jsx                    # Entry point — imports i18n config
├── i18n.js                     # i18next setup
├── index.css                   # Global styles
├── hooks/
│   └── useLangPrefix.js        # Returns the current lang prefix ("", "/en", "/es", "/ar")
├── locales/
│   ├── fr/translation.json     # French (default)
│   ├── en/translation.json     # English
│   ├── es/translation.json     # Spanish
│   └── ar/translation.json     # Arabic
├── components/
│   ├── UI/
│   │   ├── Applayout.jsx       # Root layout — lang detection, hreflang, schema.org
│   │   ├── MainHeader.jsx      # Header + LanguageSwitcher
│   │   ├── MainNavigation.jsx  # Nav links (translated + lang-prefixed)
│   │   ├── Footer.jsx          # Translated footer links
│   │   ├── LanguageSwitcher.jsx# Floating language widget (FR EN ES ع)
│   │   ├── Hero.jsx            # Hero section
│   │   ├── LayoutContent.jsx   # Two-column content/image layout
│   │   ├── DestinationMap.jsx  # Leaflet map
│   │   ├── Modal.jsx           # Modal dialog
│   │   ├── ReviewCard.jsx      # Testimonial card
│   │   ├── Logo.jsx            # Logo component
│   │   └── Spinner.jsx         # Loading spinner
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── ConsultationDomicile.jsx
│   │   ├── SoinsInfirmiers.jsx
│   │   ├── Prelevement.jsx
│   │   ├── TransportSanitaire.jsx
│   │   └── Contact.jsx
│   ├── FAQ.jsx                 # FAQ from translation JSON (returnObjects)
│   ├── ServicesView.jsx        # Services grid
│   ├── ServicesDomicile.jsx
│   ├── OperationZones.jsx
│   └── Testimonials.jsx
```

---

## Routing

All pages share the same child routes under 4 root paths:

| Language         | Root path |
| ---------------- | --------- |
| French (default) | `/`       |
| English          | `/en`     |
| Spanish          | `/es`     |
| Arabic           | `/ar`     |

Available pages (example in French):

| Page                 | Path                       |
| -------------------- | -------------------------- |
| Home                 | `/`                        |
| Medical consultation | `/consultation-a-domicile` |
| Nursing care         | `/soins-infirmiers`        |
| Home blood sampling  | `/prelevement-a-domicile`  |
| Medical transport    | `/transport-sanitaire`     |
| Contact              | `/contact`                 |

---

## Internationalization

Language is detected from the URL path in `AppLayout` and applied via `i18n.changeLanguage()`.

- Translation files are in `src/locales/{fr,en,es,ar}/translation.json`
- All page components use `useTranslation()` and `t()` for text
- The `useLangPrefix` hook returns the correct path prefix for internal links
- Image `alt` text uses `t("img.keyName")` — defined in the `"img"` section of each locale file
- Arabic triggers `dir="rtl"` on `<html>` via Helmet

---

## Getting Started

### Prerequisites

- Node.js >= 18
- npm

### Install

```bash
npm install --legacy-peer-deps
```

> `--legacy-peer-deps` is required due to a peer dependency conflict between `eslint-config-react-app` and ESLint v9.

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

This runs `vite build` and then generates `sitemap.xml` via `sitemap-generator.js`.

### Preview production build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

> The build will **fail** on lint errors (enforced by `vite-plugin-eslint`).

---

## SEO Notes

- `react-helmet-async` manages all `<head>` tags per page
- `hreflang` links are set dynamically in `AppLayout` for all 4 languages + `x-default`
- Schema.org `LocalBusiness` JSON-LD is injected on every page
- All image `src` use absolute paths (`/filename.avif`) — never relative
- JSX requires `hrefLang` (camelCase) — ESLint enforces this

---
