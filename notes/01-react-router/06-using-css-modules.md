# USING CSS MODULES

```bash
├── App.jsx
├── assets
│   └── react.svg
├── components
│   ├── app-navigation.jsx
│   ├── app-navigation.module.css
│   ├── navigation.jsx
│   └── navigation.module.css
├── index.css
├── main.jsx
└── pages
    ├── app-layout.jsx
    ├── homepage.jsx
    ├── page-not-found.jsx
    ├── pricing.jsx
    └── product.jsx
```

```css
.nav :global(.active) {
  background-color: blue;
```

[Next: Building the pages](./07-building-the-pages.md)
