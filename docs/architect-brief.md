# Flush Website – Architect Brief

This document orients new team members to the technical and visual foundations of the Flush site.  
It draws from the Flush brand book, our wireframe ideas, and architecture decisions made so far.

---

## 1. Brand & Style Foundation
The **Flush brand book** is our north star:contentReference[oaicite:0]{index=0}:

- **Typography**  
  - Headings: *Awakenings* (image-only, used for logo treatments)  
  - Body: *Oswald Bold* at 16pt, supported by *Source Sans Pro* for flexibility

- **Colors**  
  - Burnt Red: `#962800`  
  - Black: `#0F0D0D`  
  - Light Gray: `#E9E8F1`  
  - Muted Acid Yellow: `#FFD447` (highlight/CTA color from visual designer update)

- **Tone & Imagery**  
  - Punk/grunge DIY aesthetic; distressed, collage-like visuals  
  - Hero/antagonist character: **Gorgo** (tiger-headed figure representing everything the band opposes):contentReference[oaicite:1]{index=1}

Accessibility and readability remain critical—no dark text on dark images, no unnecessary movement.

---

## 2. Wireframes & Site Structure

- **Header**  
  - Logo (image, links home)  
  - Nav links: About, Music, Gigs, Blog  
  - Optional splash toggle (major release)

- **Hero Section**  
  - One large visual element at top (photo, poster, or logo)  
  - Optional hero title & lede text (controlled via page front matter)

- **Main Content Area**  
  - Two-column layout:  
    - **Content column** for text, images, embeds  
    - **Sidebar** for:
      - Tags (from Eleventy collections, X/V model)  
      - Social feed placeholder (latest post preview)  

- **Footer**  
  - Contact email, social links, copyright

- **Content Types**  
  - Pages: About, Music (releases + links), Gigs (upcoming/past), Blog (news/updates)  
  - **Arcade Game** (X/V legacy integration, `/arcade/`)  
  - **Gig Tracker** (future: scraped events from venues, auto-compiled to a page)  
  - **Splash Screen** (optional homepage intro for new releases)

---

## 3. Architecture Decisions (so far)

- **SSG**: Eleventy v2.0.1 (static site generator)
- **Runtime**: Node 22.x, npm 10.9.3 (pinned in `package.json`)
- **Config**: Using **ESM** (`.eleventy.js` with `export default …`) to match `"type": "module"`:contentReference[oaicite:2]{index=2}
- **Project Layout**:  
  - Input: `src/`  
  - Output: `_site/`  
  - Includes: `_includes/`  
  - Layouts: `_includes/layouts/`  
  - Assets: `src/assets/` → `/assets/` passthrough  
- **Templating**: Nunjucks only (to avoid filter mismatches)  
- **Links**: All internal paths use `| url` filter for pathPrefix safety  
- **Fonts**: Google Fonts delivery only (Oswald, Source Sans Pro); no local TTFs  
- **Logo**: Awakenings font used as logo image; not a webfont  
- **Hero**: Controlled via front matter (`hero_image`, `hero_title`, `hero_lede`); fallback to large logo  
- **Splash**: Toggleable via site data (`showSplash: true/false`)  
- **Sidebar**: Tags (Nunjucks-safe implementation) + social placeholder  
- **Accessibility**: Alt text for images, `aria-label` on logo, visible focus outlines  
- **Motion**: No “bouncy” text; respect `prefers-reduced-motion`  
- **Domain/Hosting**: Hosted on Netlify; registrar remains external, DNS delegated to Netlify  
- **Git Hygiene**: `.gitignore` excludes `_site/`, `node_modules/`, `.DS_Store`; lockfile optional later  

---

## 4. Open Decisions

- **Layout reference normalization**  
  - Currently some pages use `layout: base.njk`, others `layout: layouts/base.njk`.  
  - Decision: standardize all pages to one convention (likely `layouts/base.njk`) and keep the canonical file at `src/_includes/layouts/base.njk`.

- **Tag detail pages**  
  - Links point to `/tags/<slug>/` but template not implemented yet.  
  - Need: add `src/tags.njk` template to render posts per tag.

- **Splash logic**  
  - Needs final placement in build flow—show splash only if `showSplash: true`.

- **Social feed integration**  
  - Decide which channel to embed first (Instagram, YouTube, or X).  
  - Placeholder currently in place.

- **Gig tracker**  
  - Approach for scraping external sites (serverless function vs. scheduled build step).  
  - Data format for gigs (JSON vs. Markdown).

- **Lockfile policy**  
  - If we can run `npm install` locally, commit the generated `package-lock.json` for build reproducibility.

---

## 5. Team Roles & Workflow
From the **Flush Website Agent Team doc**:contentReference[oaicite:3]{index=3}:

- **The Architect**: defines structure, tools, and decisions.  
- **The Visualist**: ensures visuals follow brand book, accessible, UX-sound.  
- **The Developer(s)**: write actual code (layouts, arcade integration, gig tracker).  
- **The Code Reviewer**: reviews PRs for maintainability, scalability, correctness.

**Workflow preference:**  
- Changes done via **GitHub UI** (direct edits/commits) instead of local dev.  
- Developer tasks are phrased as prompts that return full files, ready to paste into GitHub.

---

## 6. Next Immediate Steps

1. Confirm `.eleventy.js` is in ESM syntax (no CommonJS) and returning `dir` block.  
2. Normalize `base.njk` layout references across content.  
3. Add `.gitignore` to root (if not done).  
4. Add `src/tags.njk` template to handle tag pages.  
5. Once builds are stable: start migrating WordPress content (About, Music, Gigs, Blog posts).  
6. After core migration: integrate Arcade and prep Gig Tracker.  

---

📌 This document lives in `docs/architect-brief.md` and should be updated as new decisions are made.
