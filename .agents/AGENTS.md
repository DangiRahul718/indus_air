# Project Design Rules — Indus Air Compressor / pros-main

These rules apply to **every** task performed in this workspace. Follow them strictly unless the user explicitly overrides a specific rule.

---

## 1. Antigravity UI & Motion Design Standard

This project uses the **Antigravity Design** philosophy. All UI work must conform to the following principles.

### Tech Stack (Default)
| Layer | Technology |
|-------|-----------|
| Framework | React / Next.js (App Router) |
| Styling | CSS Modules for component styles; Vanilla CSS for globals |
| Animation | GSAP + ScrollTrigger **or** Framer Motion (`motion`, `useInView`) |
| 3D / Depth | CSS 3D Transforms (`perspective`, `rotateX`, `rotateY`) |

### Design Principles — "The Antigravity Vibe"

#### Weightlessness
- Cards and interactive elements must appear to **float**.
- Use layered, soft drop-shadows:
  ```css
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.05);
  ```
- Hover states should lift elements (`translateY(-4px)` to `-8px`).

#### Spatial Depth
- Use Z-axis layering — backgrounds must feel **deep**, foreground elements must **pop**.
- Apply CSS `perspective` on parent containers when using 3D card effects.

#### Glassmorphism
- Semi-transparent surfaces with blur:
  ```css
  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.12);
  ```
- Always pair with a richly textured or gradient background so the glass effect is visible.

#### Isometric / Tilt
- For dashboards and card grids, consider subtle CSS tilt:
  ```css
  transform: rotateX(4deg) rotateY(-4deg);
  ```

---

## 2. Motion & Animation Rules

| Rule | Requirement |
|------|-------------|
| No instant snaps | Every state change (hover, focus, active) needs `transition: 0.3s ease-out` minimum |
| Scroll entrance | Use GSAP ScrollTrigger **or** Framer `useInView` — elements float up from Y-axis |
| Stagger | Card grids must stagger entrance by `0.08s–0.12s` per card |
| Parallax | Background layers scroll slower than foreground (`0.3×–0.6× scroll speed`) |
| Floating cards | Animate card idle float with slow `translateY` loop (`6s–10s ease-in-out infinite alternate`) |
| `prefers-reduced-motion` | **Required** — wrap all GSAP / motion logic with a reduced-motion check |
| GPU offload | Use `will-change: transform` on all animated elements. **Never** animate `box-shadow` or `filter` in a continuous loop |

---

## 3. Component Architecture Rules

- **Modular only** — every section is its own component + CSS Module pair.
- **No inline styles** for layout or visual properties (only dynamic computed values like particle positions).
- **No duplicate components** — always reuse or extend existing components rather than copy-pasting.
- Prop-driven variants over creating separate components.

---

## 4. Performance Constraints

- All animated properties must be `transform` or `opacity` (GPU-composited).
- Do **not** animate: `width`, `height`, `top`, `left`, `box-shadow` (in loops), or `filter` (in loops).
- Use `will-change: transform` for animated cards, heroes, and floating elements.
- Lazy-load heavy sections with Next.js `dynamic()` if they use 3D libraries.

---

## 5. Accessibility

- All animations must respect:
  ```css
  @media (prefers-reduced-motion: reduce) {
    * { animation: none !important; transition: none !important; }
  }
  ```
- All interactive elements need keyboard focus styles.
- Form fields require associated `<label>` elements with `htmlFor`.

---

## 6. Color System (This Project)

| Role | Value |
|------|-------|
| Primary (Orange) | `#FF7A1A` |
| Secondary (Navy) | `#081B45` |
| Glow / Shadow | `rgba(255, 122, 26, 0.35)` |
| Glass surface | `rgba(255, 255, 255, 0.06)` |
| Glass border | `rgba(255, 255, 255, 0.12)` |
| Text on dark | `rgba(255, 255, 255, 0.72)` |
| Muted text on dark | `rgba(255, 255, 255, 0.50)` |

---

## 7. Typography

- **Font:** `Outfit` (Google Fonts) — already loaded in `globals.css`.
- Headlines: `font-weight: 800`, `line-height: 1.05–1.15`.
- Body: `font-weight: 400–500`, `line-height: 1.6–1.7`.
- Labels / badges: `font-weight: 600–700`, `letter-spacing: 0.04–0.08em`.

---

## 8. Routing & SEO Rules

- Every new page route must export a `metadata` object with `title`, `description`, and `alternates.canonical`.
- SEO-friendly slugs only (e.g., `/compressor-manufacturer`, not `/page2`).
- 301 redirects in `next.config.ts` for any deprecated routes.

---

*Skill source: `antigravity-design-expert` — installed at `.agents/skills/antigravity-design-expert/SKILL.md`*
