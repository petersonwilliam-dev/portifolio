# CLAUDE.md

## Project Overview

**Project:** Professional Software Developer Portfolio
**Goal:** Showcase my work and projects in the IT field

---

## Tech Stack

- **React.js** + **TypeScript**
- **Bootstrap**

---

## Directory Structure

```
src/
├── components/     # Reusable components
├──── sections/     # Page sections  
├── assets/         # Static files (images, fonts, consts, icons, etc.)
```

---

## Rules & Guidelines

### Token Efficiency
- Write concise, focused code — avoid unnecessary abstractions or boilerplate
- Prefer small, composable functions over large monolithic blocks
- Do not generate placeholder comments or filler code

### Component Reuse
- Before creating a new component, check whether an existing one already covers the need
- If a similar component exists, evaluate whether it can be generalized to satisfy both use cases rather than duplicating it
- New components should only be created when reuse or generalization is not feasible

### Package Installation
- Always ask for explicit permission before installing any new package
- When requesting approval, include:
  - The package name
  - Why it is needed
  - What it will be used for
  - Whether a native or already-installed alternative exists

### Responsiveness
- Every new component must be responsive
- Design mobile-first, then adapt for larger breakpoints
- Avoid fixed widths or heights that would break the layout on smaller screens

### Colors
- Background Color: #333331 
- Text Color: #f6f6f6
- Secondary color: #37c9ef

### Scope
- Keep all logic and rendering on the **frontend only**
- No backend, server-side code, or external API integrations unless explicitly requested