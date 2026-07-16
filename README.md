# 硅基守望 / SILICON PROSPECT

Static draft site for 硅基守望: an AI Agent trusted infrastructure company built around runtime explainability, internal-state monitoring, security assessment, audit traceability, and brand AI cognition.

## Local preview

Open `index.html` directly, or run:

```bash
python3 -m http.server 4173 --bind 127.0.0.1
```

Then visit `http://127.0.0.1:4173`.

## Render Static Site

Recommended first deploy:

1. In Render, choose **New > Static Site**.
2. Connect `suzakuzhang/siliconwatch`.
3. Branch: `main`.
4. Root Directory: leave blank.
5. Build Command: `true`.
6. Publish Directory: `.`.

`render.yaml` is included for Blueprint-based setup.

## Files

- `index.html` - full one-page site
- `styles.css` - brand and responsive layout
- `script.js` - navigation and product matrix interaction
- `assets/hero-interpretive-systems.png` - generated hero bitmap
- `assets/logo-oloid.svg` - purple oloid logo draft
