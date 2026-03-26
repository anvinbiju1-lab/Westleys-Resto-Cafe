# Design System Strategy: The Cinematic Epicurean

## 1. Overview & Creative North Star
The Creative North Star for this design system is **"The Digital Sommelier."** 

Unlike generic restaurant templates that rely on rigid grids and clinical white space, this system treats the screen as a dimly lit, high-end dining room. We move away from "UI as a tool" toward "UI as an atmosphere." The experience is defined by **intentional asymmetry**, where high-fashion editorial layouts meet cinematic depth. We achieve this by overlapping elements (e.g., a dish image bleeding behind a glassmorphic card) and using high-contrast typography scales that command attention. 

The goal is to evoke the tactile feeling of a heavy, linen-paper menu and the warmth of candlelight against dark wood.

---

## 2. Colors & Atmospheric Depth
This palette is designed to replicate a low-light, premium environment. All colors must be used to build depth, not just fill space.

### The "No-Line" Rule
**Strict Mandate:** Designers are prohibited from using 1px solid borders to section content. Boundaries must be defined solely through background color shifts. To separate a menu category from the hero section, transition from `surface-dim` (#121316) to `surface-container-low` (#1a1c1e). 

### Surface Hierarchy & Nesting
Treat the UI as physical layers of frosted glass and obsidian.
- **Base Layer:** `surface-dim` (#121316) for the overall background.
- **Secondary Sections:** `surface-container-low` (#1a1c1e).
- **Interactive Cards:** `surface-container-highest` (#343538).
*Example:* A reservation card should sit as a `surface-container-highest` element nested within a `surface-container-low` section to create natural, borderless elevation.

### The Glass & Gradient Rule
To achieve the "Cinematic" requirement, use Glassmorphism for all floating overlays (Modals, Navigation Bars, and Floating Action Buttons).
- **Glass Token:** `surface-variant` (#343538) at 60% opacity with a `20px` backdrop-blur.
- **Signature Glow:** Apply a subtle radial gradient behind primary CTA areas using `primary-container` (#d1a352) at 15% opacity to mimic the soft glow of a table lamp.

---

## 3. Typography: Editorial Authority
The typography pairing is a dialogue between classic heritage (`Playfair Display`) and modern precision (`Inter`).

- **Display & Headlines (Playfair Display):** These are your "Hero" moments. Use `display-lg` (3.5rem) with tighter letter-spacing (-0.02em) for signature dish names. The serif evokes the high-end printed menu.
- **Body (Inter):** Used for descriptions. The clean, neutral sans-serif ensures legibility against dark backgrounds. Use `body-lg` (1rem) for descriptions to maintain a premium, easy-to-read feel.
- **Labels (DM Sans/Inter):** For technical data (prices, timestamps, calories), use `label-md` in All Caps with +0.05em letter spacing. This differentiates "functional" text from "storytelling" text.

---

## 4. Elevation & Depth
We reject the "drop shadow" of the 2010s. We use **Tonal Layering** and **Ambient Light**.

- **The Layering Principle:** Depth is achieved by "stacking" surface tiers. A `surface-container-lowest` (#0d0e11) element can act as a "well" or "inset" within a `surface` background.
- **Ambient Shadows:** If a floating element (like a mobile "Book Now" bar) requires a shadow, it must be `on-surface` (#e3e2e5) at 4% opacity with a `40px` blur. It should feel like a soft occlusion, not a dark smudge.
- **The "Ghost Border" Fallback:** If a divider is functionally required for accessibility, use the `outline-variant` token (#4f4538) at **15% opacity**. It should be felt, not seen.
- **Subtle Grain:** Apply a global fixed overlay of a low-opacity (2%) noise texture. This breaks the "digital" flatness and gives the surfaces a textured, paper-like quality.

---

## 5. Components & Interface Elements

### Buttons
- **Primary:** Background `primary` (#f0bf6b), text `on-primary` (#422c00). Shape: `md` (0.375rem) for a sophisticated "slightly rounded" look.
- **Secondary (Glass):** `surface-variant` at 40% opacity, backdrop-blur 12px, with a "Ghost Border" of `primary` at 20% opacity.
- **Sizing:** Minimum height 48px for mobile accessibility (exceeding the 44px minimum for a premium, spacious feel).

### Cards & Lists
- **The Divider Ban:** Never use lines between list items. Use the **Spacing Scale** `spacing-4` (1.4rem) to create clear groupings through negative space.
- **Visual Lead:** List items (like menu entries) should lead with high-quality photography or a large-scale `display-sm` price.

### Input Fields
- **Style:** Underline only or "Ghost" style. No full-box containers. 
- **States:** The label (`label-md`) should sit above the input. Upon focus, the underline transitions from `outline-variant` to `primary-fixed-dim` (#f0bf6b) with a soft amber outer glow.

### Signature Component: The "Chef’s Choice" Carousel
- **Asymmetric Layout:** A horizontal scroller where cards are not centered. The first card has a `spacing-8` left margin, while the second card partially overlaps a background image to create depth and movement.

---

## 6. Do’s and Don'ts

### Do:
- **Do** use large amounts of `spacing-16` (5.5rem) between sections to create an "exclusive" feeling of space.
- **Do** use the `primary-container` (#d1a352) for highlights in text (e.g., highlighting an ingredient).
- **Do** ensure all images have a subtle `surface-dim` vignette to blend them into the dark background.

### Don’t:
- **Don’t** use pure black (#000000) or pure white (#FFFFFF). Use the provided `background` and `on-background` tokens to maintain the "warm" atmosphere.
- **Don’t** use standard "Material" ripple effects. Use soft "Fade-In" transitions (200ms ease-out) for interactions.
- **Don’t** center-align everything. Use left-aligned editorial stacks for a more modern, sophisticated look.

### Accessibility Note:
While the atmosphere is "dim," the `on-surface` (#e3e2e5) text against `surface` (#121316) provides a high contrast ratio (over 10:1), exceeding WCAG AAA standards for readability. Mobile touch targets must strictly adhere to the `48px` height standard to ensure the premium experience remains functional.