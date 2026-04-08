# GEMINI.md

## Project Overview
**Pembelajaran Bahasa Arab & Tafsir by Fuad Rahman** is a specialized learning management system designed to streamline the study of Arabic and Tafsir for **santri** (students). The project focuses on converting complex, deeply nested educational content into a frictionless digital experience.

### Core Objectives
- **Frictionless Learning:** Ensure students spend more time studying and less time navigating.
- **Structural Clarity:** Resolve the challenge of complex "Durusullughah" hierarchies (Jilid 1-4) through intuitive UI patterns.
- **Professional Identity:** Reflect the scholarly nature of the content through a modern Islamic aesthetic.

## Design Principles
- **Visual Hierarchy:** Essential lesson access is always prioritized. Primary navigation paths are clearly distinguished from secondary utilities.
- **Accessibility:** High-contrast typography and large touch targets ensure the platform is usable by students of all ages, from children to adults.
- **Consistent Iconography:** Use of subtle, Arabic-themed geometric patterns and icons to reinforce the cultural and educational context.
- **Mobile-First Responsiveness:** Leveraging Tailwind CSS to ensure a seamless experience across smartphones, tablets, and desktops, acknowledging that many santri study on mobile devices.
- **Islamic Modernism:** A clean, minimalist aesthetic using **Emerald Green (#065f46)** for authority, **Gold (#d4af37)** for highlights, and ample white space for focus.

## Navigation Architecture
The system employs a simplified nested structure to manage complexity:
- **Root**
  - **Menu Utama Bahasa Arab**
    - **Durusullughah**
      - Jilid 1
      - Jilid 2
      - Jilid 3
      - Jilid 4
  - **Tafsir**
  - **Resources**

## Tech Stack
- **Framework:** [Astro](https://astro.build/) (v6.1.5)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) for utility-first, responsive design.
- **Language:** [TypeScript](https://www.typescriptlang.org/) (Strict mode) for robust and maintainable code.
- **Architecture:** Component-based architecture using Astro's island architecture where necessary.

## Project Structure
- `src/pages/`: Main entry points (Home, Jilid-specific pages).
- `src/components/navigation/`: Navbar, Sidebar, and Breadcrumb components.
- `src/components/ui/`: Styled buttons, cards, and decorative elements.
- `src/layouts/`: Base layout with the Emerald theme and global navigation.

## Building and Running

All commands are executed from the project root using `npm`:

| Command | Action |
| :--- | :--- |
| `npm run dev` | Starts the local development server at `http://localhost:4321` |
| `npm run build` | Builds the production site to the `dist/` directory |
| `npm run preview` | Previews the production build locally |
| `npm run astro ...` | Executes Astro CLI commands |

## Development Conventions
- **User-Centric Design:** Prioritize the santri's experience in every UI decision.
- **Structured Content:** Maintain a clear and logical folder structure for all learning materials.
- **Responsive Navigation:** Ensure menus and submenus work seamlessly across all device sizes.
- **Tailwind for Styling:** Use Tailwind's utility classes for all styling needs to ensure consistency.

## Roadmap / TODO
- [x] Define project vision and design principles in GEMINI.md.
- [ ] Integrate Tailwind CSS into the Astro project.
- [ ] Design and implement the primary navigation system (Sidebar/Mega Menu) for complex hierarchies.
- [ ] Create specialized components for Arabic text display (RTL support, specific typography).
