
````markdown
# Flush Site (Eleventy)

This is the source code for the **Flush** website.  
It is a static site built with [Eleventy (11ty)](https://www.11ty.dev/).

---

## Quick Start

**Install dependencies:**
```bash
npm install
````

**Run locally (development server):**

```bash
npm run dev
```

This starts Eleventy with live reload so you can preview the site in your browser.

**Build for production:**

```bash
npm run build
```

This outputs the generated site into the `_site/` folder.
Assets from `src/assets/` are copied into `_site/assets/`.

---

## Project Structure

* **src/** → All source files (Markdown pages, layouts, assets).

  * **\_includes/** → Layouts and partials (Nunjucks templates).
  * **\_data/** → Global data files.
  * **assets/** → CSS, images, and other static files.
  * **posts/** → Blog/zine-style content.
* **\_site/** → The generated site (created on build; not committed to GitHub).
* **.eleventy.cjs** → Eleventy configuration.
* **netlify.toml** → Netlify deployment settings.

---

## Layouts

* **home.njk** → Homepage layout (Header → Hero → Content → Social block → Tags → Footer).
* **page.njk** → Layout for all other pages (Header → Content → Tags → Footer).
* **partials/** → Reusable template parts (hero, tags, etc.).

---

## Brand Rules

* Dark background (`#0f0d0d`) with light text.
* **Yellow** is used only for links and highlights.
* **Fonts:**

  * [Oswald](https://fonts.google.com/specimen/Oswald) for headings, nav, and tags.
  * [Source Sans Pro](https://fonts.google.com/specimen/Source+Sans+Pro) for body text.

---

## Cache Busting

The stylesheet is loaded with a version string:

```njk
<link href="{{ '/assets/styles.css?v=clean' | url }}" rel="stylesheet">
```

If CSS changes don’t show up in the browser, bump the `?v=` value (e.g. `clean2`, `clean3`) and reload.

---

## Troubleshooting

* **Hero not showing?**
  Add `hero_title` and/or `hero_lede` in the front matter of `index.md`.

* **CSS changes not visible?**
  Increase the `?v=` value in the stylesheet link and hard-refresh.

* **Header looks too wide?**
  Make sure the wrapper is:

  ```html
  <div class="container header-row"> … </div>
  ```

* **Tags not visible?**
  Add `tags: [tagname]` in the page front matter.

---

## Contributing

* Branch from `main` using `feature/<name>` or `fix/<name>`.
* Open a pull request in GitHub for review.
* Checklist before merging:

  * Site builds without errors (`npm run build`).
  * Header, hero, main, and footer align properly on desktop.
  * Links and tags highlight correctly in yellow.
  * CSS cache-bust string bumped if styles changed.

---

© Flush – All rights reserved.

```

---

This README:
- Gives **quick install/run/build commands**.  
- Explains the **project structure**.  
- Documents the **brand rules** (so Visualist/Architect stay aligned).  
- Has a **cache-busting tip** and **troubleshooting FAQ**.  
- Includes a **lightweight PR checklist**.  

---

Do you want me to also give you a **new `.gitignore`** file so you can paste that in as well?
```
