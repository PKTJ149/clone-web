# LSMBERLIN777 Website Clone

## Required Reading for AI Agents

Before starting any work, read `AGENTS.md` and the complete [CLONE_AND_THEME_WORKFLOW.md](CLONE_AND_THEME_WORKFLOW.md). Follow its Desktop/Mobile inspection, theme preservation, and verification requirements.

A Vite implementation of the supplied LSMBERLIN777 landing page reference.

## Run

```bash
npm install
npm run dev
```

The UI preserves the reference layout and content structure: install strip, top navigation, category rail, promotion carousel, searchable game grid, win-rate bars, winner ticker, and footer.

The floating `สี` control exposes the original Berlin Red theme plus nine additional color themes. Each non-original theme tints the full dark/gray surface system with an accent-based gradient across the header, sidebar, cards, panels, and page background, while Berlin Red preserves the original black/gray surfaces. Theme values are centralized in `src/main.js` and applied through CSS variables.

Theme-aware UI icons receive an accent-colored glow/filter for non-original themes while logos, banners, game artwork, and LINE artwork preserve their original brand colors.

The promotion strip uses a local capture of the supplied reference asset at `public/promo-1.jpeg`, so the preview does not depend on expiring signed URLs. Replace the three entries in `signedPromotions` with the final promotion set when the user supplies the production assets.

The complete AI-executable cloning and multi-theme workflow is documented in `CLONE_AND_THEME_WORKFLOW.md`. It includes setup, folder structure, reference inspection, separate Desktop/Mobile composition rules, asset handling, theme variables, verification, and completion criteria.

Open `/desktop-theme-overview.html` during local development to compare all ten Desktop themes in a 5×2 overview using the same 1280×720 preview viewport.

Open `/mobile-theme-overview.html` to compare all ten Mobile themes in a 5×2 overview using the same 430×720 Mobile preview viewport.

Downloadable overview images are available at `public/desktop-theme-overview.png` and `public/mobile-theme-overview.png`.
