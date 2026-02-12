# Project Context: Al Nakhla Exchange

This repository contains a single-page React website for **Al Nakhla Exchange** (currency exchange / financial services). The UI is designed to support **Arabic (RTL)** and **English (LTR)** and includes sections like services, compliance, branch locator, contact, and a live USD rate display.

## Tech stack

- **Frontend**: React 18 + `react-scripts` (Create React App)
- **Backend (optional, local)**: Node.js + Express (`server.js`)
- **UI/Iconography**: `lucide-react`
- **Utilities / scripts**: Node.js scripts for fetching USD rate and image housekeeping (Sharp-based compression, organization, replacement)

## How to run

- **Frontend dev server**:

```bash
npm install
npm start
```

- **Backend server (USD rate / helpers)**:

```bash
npm run server
```

- **Run both together**:

```bash
npm run dev
```

## App entry points (frontend)

- **HTML shell**: `public/index.html`
- **React entry**: `src/index.js` (mounts `<App />` into `#root`)
- **App composition**: `src/App.js`
  - Maintains language state: `isArabic`
  - Sets `document.documentElement.lang/dir` and body direction in `useEffect`
  - Renders the site sections in order (header → hero → sections → footer)

## Main UI modules (high-level)

`src/App.js` composes these section components:

- `src/AlNakhlaHeader.js`: top navigation / language toggle
- `src/HeroSectionV2.js`: hero area; includes the USD rate widget
- `src/UsdRateDisplay.js`: fetches/displays USD rate (used by `HeroSectionV2`)
- `src/WhyChooseUsSection.js`: “why choose us” content
- `src/AboutSection.js`: about/company overview
- `src/VisionMissionSection.js`: vision/mission block
- `src/StatisticsSection.js`: stats counters/figures
- `src/ServicesSection.js`: services listing
- `src/OurValuesSection.js`: company values
- `src/PaymentMethodsSection.js`: payment methods/logos
- `src/ComplianceSection.js`: compliance/regulatory information
- `src/GetInTouchSection.js`: contact/WhatsApp and contact CTA
- `src/BranchLocatorSection.js`: branch location information
- `src/Footer.js`: footer content

Styling is handled by `src/App.css`. The HTML template also loads Tailwind via CDN in `public/index.html`.

## Backend (optional) and data flow

- `server.js` runs an Express server and exposes `/api/usd` as a proxy to the external USD API.
- The repo may also contain USD rate JSON files (`usd_rate.json`, `public/usd_rate.json`) that can be used as cached/static data.

## Scripts you can run (from `package.json`)

- **dev/build**
  - `npm start`: React dev server
  - `npm run build`: production build
  - `npm run deploy`: deploy build to GitHub Pages (uses `gh-pages`)
  - `npm run dev`: runs frontend + backend concurrently
- **USD rate**
  - `npm run update-usd`: removed local fetch script (USD comes from external API)
- **image maintenance**
  - `npm run compress-images`: `node scripts/images.js compress`
  - `npm run replace-images`: `node scripts/images.js replace`
  - `npm run remove-unused-images`: `node scripts/images.js prune-unused`
  - `npm run organize-images`: `node scripts/images.js organize`

## “Unused files” and how to interpret that

This repo includes both:

- **Runtime files** (imported by the React app or required by the server)
- **Developer utilities** (scripts you run manually or via npm scripts)
- **Legacy/leftovers** (not referenced anywhere; safe candidates to delete after confirming you don’t need them)

If you want, I can also create a `CLEANUP.md` with recommended deletions, or open a PR-style cleanup plan (delete files + remove dead scripts + verify build).

## Ras Al-Helal Redesign (Feb 2026)

In February 2026, the project was duplicated and redesigned to become **Ras Al-Helal Exchange**.

- **Project Location**: `d:\Projects\another_website\ras_al_helal`
- **Brand Identity**:
  - **Name**: Ras Al-Helal Exchange (راس الهلال للصرافة)
  - **Colors**: Deep Blue (`#003B49`), Green (`#28A745`), Gold (`#DAA520`)
  - **Fonts**: Tajawal, Cairo, IBM Plex Sans Arabic
- **Key Changes**:
  - **Header**: Text-based logo with `Gem` icon.
  - **Hero**: Abstract background, new CTA.
  - **Components**: Redesigned functional components (`UsdRateDisplay`, `ServicesSection`, `StatisticsSection`) with `lucide-react` icons and card-based layouts.
  - **Footer**: Dark theme with updated contact info.


