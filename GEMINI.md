# GEMINI.md

## Project Overview
**Pembelajaran Bahasa Arab & Tafsir by Fuad Rahman** is a specialized learning management system designed to streamline the study of Arabic and Tafsir for beginners. The project focuses on converting complex, deeply nested educational content into a frictionless digital experience.

### Core Objectives
- **Frictionless Learning:** Ensure students spend more time studying and less time navigating.
- **Structural Clarity:** Resolve the challenge of complex hierarchies through intuitive UI patterns.
- **Professional Identity:** Reflect the scholarly nature of the content through a modern Islamic aesthetic.

## Design Principles
- **Principle 1: Zero-Friction Access:** Minimize clicks to reach learning materials. Essential content is never more than 2-3 clicks away.
- **Principle 2: Visual Hierarchy:** Use clear breadcrumbs and distinct navigation paths to prevent cognitive overload in nested submenus.
- **Visuals:** High-contrast typography and large touch targets for multi-generational accessibility.
- **Aesthetic:** "Clean Islamic Modernism" using **Emerald Green (#065f46)** for authority, **Slate (#0f172a)** for text, and **Gold (#d4af37)** for accents.

## Navigation Architecture
The system uses a recursive navigation hierarchy to handle multiple curriculum levels:
- **Root**
  - **Bahasa Arab**
    - **Durusullughah**
      - Jilid 1, 2, 3, 4
    - **Jurmiyyah**
      - Matan Jurmiyyah
      - Tuhfatus Saniyyah
  - **Tafsir**
  - **Tentang Fuad**

## Tech Stack
- **Framework:** [Astro](https://astro.build/) (v6.1.5)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Typography:** Inter (Sans-serif) for high readability.

## Project Structure
- `src/pages/`: Content entry points.
- `src/components/navigation/`: Multi-level Navbar & Breadcrumbs.
- `src/components/ui/`: Shortcut Cards & Navigation Grids.
- `src/layouts/`: Base Layout (Emerald/Slate theme).

## Roadmap / TODO
- [x] Define project vision and design principles.
- [x] Refactor navigation for recursive submenus (Durusullughah & Jurmiyyah).
- [x] Implement Shortcut-Driven Landing Page (Visual Table of Contents).
- [ ] Create specialized components for Arabic text (RTL support).
- [ ] Implement Breadcrumb navigation for nested paths.
