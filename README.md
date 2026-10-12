# hosam.info

Personal portfolio of Hosam Othman, full stack developer. Plain HTML, CSS and ES modules with no build step, hosted on GitHub Pages.

## Features

- **Five indexable pages**: Home, About, Experience, Skills, Contact, each with its own title, description and canonical URL
- **3D hero**: the full stack as three floating layers (Frontend, API, Database) with requests and responses flowing between them, rendered with [three.js](https://threejs.org) (loaded from jsDelivr only on the home page)
- **English / German**: English is in the HTML; German translations live in `js/i18n.js`
- **Light / dark theme**: follows the system setting by default and remembers the choice
- **Responsive and accessible**: works from 320px wide, keyboard friendly, respects `prefers-reduced-motion`

## Running locally

ES modules don't load from `file://`, so serve the folder:

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Structure

```
├── index.html, about.html, experience.html, skills.html, contact.html
├── css/styles.css        # tokens (colors, fonts, spacing) at the top, then sections
├── js/
│   ├── main.js           # entry point
│   ├── i18n.js           # language switcher + German strings
│   ├── theme.js          # light/dark toggle
│   ├── navigation.js     # mobile menu, header on scroll
│   ├── reveal.js         # scroll-in animations
│   ├── copy.js           # copy-to-clipboard on the contact page
│   └── hero-scene.js     # three.js scene in the home hero
└── assets/img/           # portrait and social preview image
```

## Editing content

- **Text**: edit the English directly in the HTML. If the element has `data-i18n="key"`, update the German string with the same key in `js/i18n.js`.
- **Colors**: change the custom properties at the top of `css/styles.css` (`:root` for light, `[data-theme="dark"]` for dark). The 3D scene reads `--accent` and the `--scene-*` colors from there too.
- **3D scene**: tweak the constants at the top of `js/hero-scene.js` (layer size and spacing, camera, packet speed). The layer labels are the `.scene-tag` elements in `index.html`. To use a different 3D piece, replace that module. It only has to export `initHeroScene(container)` and draw into the `<canvas>` inside `[data-hero-scene]`.
- **Header and footer** are repeated in every page, so change them in all five files.
