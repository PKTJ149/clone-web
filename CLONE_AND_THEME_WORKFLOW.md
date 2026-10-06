# Website Cloning and Multi-Theme Implementation Workflow

This document defines the exact workflow an AI agent must follow when cloning a reference website into code and adding multiple color themes.

The workflow is intentionally strict. Visual similarity is not achieved by changing colors alone. The agent must first reproduce the reference structure, behavior, assets, responsive compositions, and visual hierarchy. Theme work begins only after the original theme is stable.

## 1. Objective

Given a reference website URL, produce a maintainable frontend clone that:

1. Reproduces the reference website's visible layout and interaction model.
2. Treats Desktop and Mobile as separate compositions when the source uses different components.
3. Preserves the original theme as an immutable baseline.
4. Adds additional themes through data-driven configuration rather than duplicated markup.
5. Allows the base surface system, accent colors, and sign-up button colors to be changed independently.
6. Is verified in a real browser at representative Desktop and Mobile viewports.

The final implementation must distinguish between:

- **Reference behavior**: what the live source actually does.
- **Implementation behavior**: what the clone currently does.
- **Requested changes**: modifications explicitly requested by the user, such as additional themes.

Do not silently replace verified reference behavior with an assumption.

## 2. Non-Negotiable Rules

### 2.1 Inspect before implementing

Before writing UI code, inspect the reference site in a browser. Do not infer the layout from the URL, page title, or a single screenshot.

Record:

- Page dimensions and scroll height.
- Desktop layout structure.
- Mobile layout structure.
- Header and navigation behavior.
- Promotion/banner behavior.
- Game/card grid behavior.
- Fixed and sticky elements.
- Search, filter, carousel, menu, and theme interactions.
- Visible asset paths and image dimensions.
- Typography, spacing, border radius, shadows, and colors.

### 2.2 Mobile and Desktop are separate compositions

This is a core requirement.

Never assume that Mobile is Desktop reduced to one column. Inspect Mobile separately and implement a separate composition whenever the reference changes components, order, navigation, or interaction patterns.

Examples of valid differences:

- Desktop top navigation becomes a fixed Mobile bottom navigation.
- Desktop sidebar becomes a narrow Mobile category rail.
- Desktop promotion cards become one full-width Mobile banner.
- Desktop three/five-column game grid becomes a two-column Mobile grid.
- Desktop affiliate/promotion actions disappear while a Mobile-only wheel action remains.
- Desktop floating controls move above the Mobile bottom navigation.

Use shared data and shared small components where useful, but do not force one DOM structure to serve both layouts when that makes the Mobile result inaccurate.

### 2.3 Preserve the original theme

The original theme is the baseline and must remain visually unchanged unless the user explicitly requests an original-theme change.

When adding themes:

- Keep the original theme as the first theme.
- Keep its swatch position stable.
- Keep its base surfaces, accent, button colors, and layout unchanged.
- Test switching back to the original after every theme change.

### 2.4 Keep theme values data-driven

Do not duplicate full page markup for each color theme. Store theme values in one configuration list and apply them through CSS custom properties.

Each theme should define at least:

```js
{
  id: 'ocean',
  name: 'Ocean Blue',
  base: '#08243c',
  baseDeep: '#020a12',
  primary: '#1596ff',
  secondary: '#04366b',
  signup: '#15c7d8',
  signupDeep: '#08728a',
  button: '#15c7d8'
}
```

Use these meanings consistently:

- `base`: upper/light end of the theme's dark base gradient.
- `baseDeep`: lower/darker end of the theme's dark base gradient.
- `primary`: main accent used for active states, pagination, and primary emphasis.
- `secondary`: darker accent used for deep gradients and contrast.
- `signup`: top color of the sign-up button gradient.
- `signupDeep`: lower color of the sign-up button gradient.
- `button`: supporting color used by installation buttons and win-rate bars.

The sign-up button must not accidentally inherit the green installation/progress color.

## 3. Recommended Project Structure

For a small Vite/vanilla frontend, use this structure:

```text
project-root/
├── .gitignore
├── README.md
├── CLONE_AND_THEME_WORKFLOW.md
├── index.html
├── package.json
├── package-lock.json
├── public/
│   ├── assets/
│   │   ├── icons/
│   │   ├── menu/
│   │   ├── games/
│   │   └── promotions/
│   └── reference-notes/
└── src/
    ├── main.js
    ├── styles.css
    ├── data/
    │   ├── themes.js
    │   ├── categories.js
    │   ├── games.js
    │   └── winners.js
    └── components/
        ├── desktop-layout.js
        ├── mobile-layout.js
        ├── theme-picker.js
        └── shared.js
```

For a very small first pass, `src/main.js` and `src/styles.css` may contain the data and markup together. As soon as the page becomes difficult to reason about, move themes and repeated content into `src/data/` and Desktop/Mobile composition into separate modules.

The current clone uses the compact version:

```text
project-root/
├── index.html
├── package.json
├── README.md
├── public/
│   └── promo-1.jpeg
└── src/
    ├── main.js
    └── styles.css
```

Do not add a framework, component library, or state-management dependency unless it provides clear value for the requested scope.

## 4. Initial Setup

### 4.1 Confirm the working directory

Before editing:

```bash
pwd
ls
```

Read all applicable instruction files, especially:

- `AGENTS.md`
- `GLOBAL.md`
- `CODING_STANDARDS.md`
- Feature-specific documentation

Preserve unrelated dirty files. Do not reset or overwrite user work.

### 4.2 Create the minimal Vite app

For a new vanilla implementation:

```bash
npm init -y
npm install -D vite
```

Set `package.json` scripts:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
}
```

Create `index.html` with a single mount point:

```html
<body>
  <div id="app"></div>
  <script type="module" src="/src/main.js"></script>
</body>
```

Run the first build before implementing the page:

```bash
npm run build
```

This proves that the project setup is valid before visual work begins.

## 5. Reference-Site Inspection

### 5.1 Inspect Desktop first

Use a real browser. Check at least one wide viewport, such as:

- 1280×720
- 1440×900

Record:

- Header height and horizontal padding.
- Sidebar width and whether it is sticky.
- Main content width and maximum width behavior.
- Promotion count, size, order, and carousel controls.
- Game grid column count and gap.
- Winner/footer placement.
- Floating controls and their fixed offsets.

### 5.2 Inspect Mobile independently

Use a real Mobile-sized viewport, such as:

- 375×812
- 390×844
- 430×932
- 440×956

Start from the top of the page and inspect the full scrollable composition. Record:

- Mobile install strip height.
- Mobile header height and visible actions.
- Whether Desktop actions are hidden or replaced.
- Promotion size and whether only one slide is visible.
- Marquee or announcement strips.
- Category rail width and item dimensions.
- Search field size and placement.
- Game grid column count.
- Floating contact button size and bottom offset.
- Fixed bottom navigation height, item count, icons, and center-button elevation.
- Mobile footer and bottom padding so fixed navigation does not cover content.

### 5.3 Capture a layout contract

Before implementation, write a short contract such as:

```text
Desktop:
- 200px left category rail.
- Top navigation has wheel, promotion, affiliate, register, and login.
- Promotions are shown in three columns.
- Games use five columns at wide desktop.

Mobile:
- 95px left category rail.
- Header shows only the wheel action plus auth buttons.
- Promotion is one full-width card.
- Marquee appears below promotion.
- Games use two columns.
- LINE contact is fixed above the bottom nav.
- Bottom nav has five fixed actions.
```

The implementation must be checked against this contract.

## 6. Asset Strategy

### 6.1 Prefer real reference assets

Use the reference website's real images, icons, fonts, and menu assets when legally and technically appropriate.

Do not redraw a logo or icon with CSS when the real asset is available and important to visual fidelity.

### 6.2 Stabilize expiring assets

Signed CDN URLs can expire. If a reference asset is legally available for local development, copy a stable local capture into `public/assets/` and document its origin.

Example:

```js
const signedPromotions = [
  '/assets/promotions/promo-1.jpeg',
  '/assets/promotions/promo-2.jpeg',
  '/assets/promotions/promo-3.jpeg'
];
```

If only one stable capture is available, do not pretend that the original promotion set was recovered. Document the limitation in `README.md` and keep the replacement point obvious.

### 6.3 Use an asset helper

Centralize remote or local asset paths:

```js
const asset = 'https://example.com/assets';
const icon = (folder, file) => `${asset}/${folder}/${file}`;
```

This prevents inconsistent paths across Desktop and Mobile compositions.

### 6.4 Validate assets in the browser

After rendering, check for broken images:

```js
const brokenImages = [...document.images]
  .filter((image) => !image.complete || image.naturalWidth === 0);
```

The expected result is an empty list.

## 7. Implement the Original Layout First

### 7.1 Build semantic page regions

Use semantic regions that map to the reference:

```html
<div class="app-shell">
  <div class="install-strip"></div>
  <header class="site-header"></header>
  <div class="layout">
    <aside class="category-rail"></aside>
    <main class="main-content">
      <section class="promotion-area"></section>
      <section class="games-section"></section>
      <section class="winner-section"></section>
      <footer></footer>
    </main>
  </div>
</div>
```

### 7.2 Separate layout composition from shared data

Keep repeated content data shared:

```js
const categories = [...];
const games = [...];
const winners = [...];
```

Use different layout wrappers when Mobile and Desktop differ:

```text
Shared:
- categories
- games
- promotions
- winner records
- theme values

Desktop composition:
- desktop header actions
- wide sidebar
- multi-column promotions
- five-column game grid

Mobile composition:
- mobile header actions
- narrow category rail
- one promotion card
- two-column game grid
- fixed bottom navigation
```

### 7.3 Implement interactions before themes

Implement and test:

- Theme picker open/close.
- Promotion dot selection.
- Game search filtering.
- Category active state.
- Navigation anchor behavior.
- Fixed bottom navigation.
- Floating contact control.

Do not add nine new themes while the original interactions are still broken.

## 8. Implement Responsive Layouts as Separate Contracts

### 8.1 Desktop rules

Desktop CSS should define the wide composition first:

```css
.layout {
  display: flex;
}

.category-rail {
  flex: 0 0 var(--sidebar-width);
}

.game-grid {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
}
```

### 8.2 Mobile rules

Mobile should explicitly define its composition rather than relying only on shrinking Desktop rules:

```css
@media (max-width: 500px) {
  .layout {
    display: grid;
    grid-template-columns: 95px minmax(0, 1fr);
  }

  .main-content {
    display: contents;
  }

  .promotion-area {
    grid-column: 1 / -1;
  }

  .category-rail {
    grid-column: 1;
  }

  .games-section {
    grid-column: 2;
  }

  .game-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .mobile-bottom-nav {
    position: fixed;
    inset-inline: 0;
    bottom: 0;
  }
}
```

If the source uses completely different Mobile markup, render a Mobile-specific component instead of forcing `display: contents` or excessive overrides.

### 8.3 Mobile validation checklist

At the Mobile viewport, verify:

- No horizontal scrolling.
- Fixed bottom navigation does not cover the last game row.
- Floating contact button does not cover important content.
- Search input remains usable.
- Category labels do not overflow.
- Game titles are clipped intentionally and consistently.
- Touch targets are large enough.
- The center bottom-nav action is visually elevated if the source does that.
- Desktop-only actions are not visible.
- Mobile-only actions are present.

## 9. Theme-System Implementation

### 9.1 Define CSS custom-property roles

Use role-based variables instead of hardcoding theme colors throughout CSS:

```css
:root {
  --accent: #e90211;
  --accent-deep: #770006;
  --base: #000;
  --base-deep: #000;
  --signup: #f0a500;
  --signup-deep: #ac7600;
  --green-btn: #44d245;
}
```

For the full dark/gray surface system, use dedicated variables:

```css
:root {
  --surface-top: #030303;
  --surface-header: #111;
  --surface-panel: #171717;
  --surface-rail: #202020;
  --surface-card: linear-gradient(120deg, #3b3b3b, #050505 75%);
  --surface-winner: #262626;
  --surface-marquee: #313133;
  --surface-image: #222;
}
```

Every dark/gray background that belongs to the theme system must use one of these roles. Do not leave random `#111`, `#202020`, or `#262626` values scattered through CSS for themed surfaces.

### 9.2 Preserve the original surface system

When the original theme is selected, explicitly restore the original surface values:

```js
const originalSurfaces = {
  top: '#030303',
  header: '#111',
  panel: '#171717',
  rail: '#202020',
  card: 'linear-gradient(120deg, #3b3b3b, #050505 75%)',
  winner: '#262626',
  marquee: '#313133',
  image: '#222'
};
```

Do not make the Original theme depend on a newly generated tint.

### 9.3 Tint the complete base surface system for new themes

For a non-original theme, create accent-tinted gradients for all surface roles. A practical approach is to use `color-mix()`:

```js
const surface = {
  top: `linear-gradient(
    180deg,
    color-mix(in srgb, ${theme.primary} 10%, #101010),
    color-mix(in srgb, ${theme.primary} 4%, #030303)
  )`,
  rail: `linear-gradient(
    180deg,
    color-mix(in srgb, ${theme.primary} 20%, #202020),
    color-mix(in srgb, ${theme.primary} 7%, #050505)
  )`
};
```

Apply each generated value as a CSS variable. This ensures the header, sidebar, cards, panels, marquee, and page background all feel like one theme rather than isolated color changes.

### 9.4 Apply the theme in one function

Use one function to set all theme variables:

```js
function applyTheme(themeId) {
  const theme = themes.find((item) => item.id === themeId) ?? themes[0];

  document.documentElement.style.setProperty('--accent', theme.primary);
  document.documentElement.style.setProperty('--accent-deep', theme.secondary);
  document.documentElement.style.setProperty('--base', theme.base);
  document.documentElement.style.setProperty('--base-deep', theme.baseDeep);
  document.documentElement.style.setProperty('--signup', theme.signup);
  document.documentElement.style.setProperty('--signup-deep', theme.signupDeep);
  document.documentElement.style.setProperty('--green-btn', theme.button);
}
```

Never change only the swatch color and assume the rest of the page will update automatically.

### 9.5 Theme-aware icons

Separate UI icons from brand/content artwork. UI icons such as category icons, top actions, winner icons, and Mobile bottom-navigation icons may receive a theme-aware accent filter or glow. Logos, promotion banners, game artwork, and LINE artwork should retain their original colors.

Use a dedicated class and CSS variable:

```css
:root {
  --icon-filter: none;
}

.theme-icon {
  filter: var(--icon-filter);
}
```

The Original theme must set `--icon-filter: none`. Non-original themes may set an accent-based filter such as a subtle `drop-shadow()` and saturation adjustment. Preserve the source artwork's readability; do not blindly convert detailed multicolor artwork to a single flat color.

## 10. Adding Nine Additional Colors

Follow this order:

1. Keep the original theme unchanged.
2. Add exactly one new theme object.
3. Define its base gradient endpoints.
4. Define primary and secondary accent colors.
5. Define independent sign-up button colors.
6. Define the supporting button/progress color.
7. Add one swatch from the same theme object.
8. Verify Desktop.
9. Verify Mobile.
10. Compare the original theme before and after switching back.

Do not add all nine themes and debug them as one undifferentiated change. Add them as data, then verify representative themes:

- A cool theme, such as Ocean Blue.
- A saturated theme, such as Neon Pink.
- A light accent theme, such as Soft Coral.
- A high-contrast theme, such as Acid Lime.

## 11. Browser Verification

### 11.1 Required build check

Run:

```bash
npm run build
```

Only claim the build passed if the command actually exits successfully.

### 11.2 Required Desktop check

At 1280px or wider, verify:

- Desktop header composition.
- Sidebar width and alignment.
- Promotion layout.
- Game column count.
- Theme picker placement.
- Register button color.
- Original theme restoration.

### 11.3 Required Mobile check

At approximately 430×932 or 440×956, verify:

- Mobile-only header composition.
- Full-width promotion.
- Mobile marquee.
- Left category rail.
- Two-column game grid.
- Floating LINE/contact control.
- Fixed five-item bottom navigation.
- Bottom padding and scroll coverage.
- No horizontal overflow.

### 11.4 Required theme check

For one additional theme, verify the actual computed values:

```js
({
  accent: getComputedStyle(document.documentElement)
    .getPropertyValue('--accent').trim(),
  base: getComputedStyle(document.documentElement)
    .getPropertyValue('--base').trim(),
  signup: getComputedStyle(document.documentElement)
    .getPropertyValue('--signup').trim()
})
```

Then verify that:

- The page base changes.
- All dark/gray surfaces receive the theme treatment.
- The sign-up button uses its own configured colors.
- The original theme can be selected again.

### 11.5 Asset check

Verify there are no broken images:

```js
[...document.images].filter(
  (image) => !image.complete || image.naturalWidth === 0
)
```

Expected result: `[]`.

## 12. Common Failure Modes

### Failure: Mobile is only a scaled Desktop

**Symptom:** Desktop navigation remains visible, the sidebar is too wide, there is no fixed bottom nav, and the promotion/grid arrangement does not match the source.

**Fix:** Reinspect the source at a Mobile viewport and create an explicit Mobile composition.

### Failure: Theme changes only the active button

**Symptom:** Accent changes, but header, sidebar, panels, and base surfaces remain black/gray.

**Fix:** Route all theme-owned dark/gray surfaces through surface CSS variables and apply accent-tinted gradients for non-original themes.

### Failure: Original theme drifts

**Symptom:** Switching back to the original leaves tinted surfaces or changes the original register button.

**Fix:** Store and explicitly restore original surface values and all original theme variables.

### Failure: Sign-up button inherits the wrong color

**Symptom:** The sign-up button becomes green because it shares the installation/progress variable.

**Fix:** Use independent `signup` and `signupDeep` variables.

### Failure: Expiring promotion images

**Symptom:** The page works initially but banners disappear later.

**Fix:** Use stable local development copies or document the signed-URL limitation and replacement point.

### Failure: Fixed Mobile controls cover content

**Symptom:** The bottom row of games or footer is hidden behind the fixed navigation.

**Fix:** Add Mobile bottom padding to the content and verify at the bottom of the page.

## 13. Completion Checklist

Before reporting completion, confirm every item below:

### Repository and setup

- [ ] Working directory and instruction files were checked.
- [ ] Existing unrelated changes were preserved.
- [ ] `package.json` scripts work.
- [ ] `npm run build` passes.

### Reference fidelity

- [ ] Desktop reference was inspected in a real browser.
- [ ] Mobile reference was inspected separately in a real browser.
- [ ] Mobile and Desktop composition differences were recorded.
- [ ] Important assets were reused or limitations documented.
- [ ] Interactions match the observed reference behavior.

### Responsive implementation

- [ ] Desktop layout is correct at a wide viewport.
- [ ] Mobile layout is correct at a Mobile viewport.
- [ ] Mobile does not rely on accidental Desktop shrinking.
- [ ] Mobile fixed controls do not cover content.
- [ ] No horizontal overflow exists.

### Theme implementation

- [ ] Original theme remains unchanged.
- [ ] Nine additional themes are data-driven.
- [ ] Base background changes with the theme.
- [ ] All dark/gray base surfaces use theme roles.
- [ ] Sign-up button has independent colors.
- [ ] Theme swatches match their actual theme values.
- [ ] Switching back to Original restores the original surfaces.

### Verification and reporting

- [ ] Browser preview was checked after the final edit.
- [ ] Broken image check returned no broken images.
- [ ] Console errors were checked when available.
- [ ] Final report states what was verified and what remains uncertain.
- [ ] No unverified claim is reported as complete.

## 14. Recommended Final Report Format

Use a concise report with these sections:

```text
## Outcome

What was implemented.

## Changes

Which files and behaviors changed.

## Verification

Which commands, viewports, interactions, and asset checks passed.

## Risks

What remains approximate, such as unavailable source assets or unverified production APIs.

## Preview

The exact local URL and route used for review.
```

Do not say “pixel perfect,” “fully verified,” or “production ready” unless the evidence supports that claim.
