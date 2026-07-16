# 硅基守望 / SiliconWatch

Static first draft for the SiliconWatch company website: GEO promotion, AI agent safety testing, and AI safety research.

## Local preview

Open `index.html` directly in a browser.

## Render Static Site

Recommended first deploy:

1. Put this folder in a Git repo, or make it the repo root.
2. In Render, choose **New > Static Site**.
3. If this folder is the repo root:
   - Build Command: `true`
   - Publish Directory: `.`
4. If this folder lives inside a larger repo:
   - Root Directory: `siliconwatch`
   - Build Command: `true`
   - Publish Directory: `.`

`render.yaml` is included for Blueprint-based setup.

## Files

- `index.html` - full one-page site
- `styles.css` - brand and responsive layout
- `script.js` - navigation and service preview interactions
- `assets/hero-interpretive-systems.png` - generated hero bitmap
- `assets/logo-oloid.svg` - purple oloid logo draft
