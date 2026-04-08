# GEMINI.md

## Project Overview
**pembelajaran-bahasa-arab-blog** is a web project built using [Astro](https://astro.build/) (v6.1.5). Based on the project name, it is intended to be a blog or educational platform focused on Arabic language learning (Pembelajaran Bahasa Arab).

The project is currently based on the **Astro Basics Starter Kit**, featuring:
- **Framework:** Astro 6.x
- **Language:** TypeScript (Strict mode enabled)
- **Styling:** Scoped CSS within Astro components
- **Layouts:** Centralized `Layout.astro` for HTML structure

## Project Structure
- `src/pages/`: Contains the routes of the application (e.g., `index.astro`).
- `src/components/`: Reusable UI components (e.g., `Welcome.astro`).
- `src/layouts/`: Shared layout components (e.g., `Layout.astro`).
- `src/assets/`: Static assets like images or SVGs used within components.
- `public/`: Static files served directly (favicons, etc.).

## Building and Running

All commands are executed from the project root using `npm`:

| Command | Action |
| :--- | :--- |
| `npm run dev` | Starts the local development server at `http://localhost:4321` |
| `npm run build` | Builds the production site to the `dist/` directory |
| `npm run preview` | Previews the production build locally |
| `npm run astro ...` | Executes Astro CLI commands (e.g., `astro add`, `astro check`) |

## Development Conventions

- **Component-Driven Development:** Use `.astro` components for UI logic and templating.
- **TypeScript:** Strict type checking is enabled via `tsconfig.json` (`astro/tsconfigs/strict`).
- **Static Assets:** Prefer placing images/icons in `src/assets/` if they need optimization, or `public/` for raw static files.
- **Styling:** Use scoped `<style>` tags within components to maintain modularity.

## Roadmap / TODO
- [ ] Initialize content collections for blog posts.
- [ ] Implement Arabic language support (RTL direction, specific fonts).
- [ ] Create custom components for Arabic grammar/vocabulary lessons.
- [ ] Configure deployment (e.g., Vercel, Netlify, or GitHub Pages).
