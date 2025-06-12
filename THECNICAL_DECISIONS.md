# Technical Decisions Documentation

This document describes the key technical decisions made during the development of the project.

## Project Structure

The project consists of two main repositories:

1. **UI Library** (`@maj0codes/ui-library`)

- Contains reusable components (Header, Button, Cards, etc.).
- Use Tailwind CSS v4, Vite, and Storybook for development and documentation.

2. **Main App**

   - Application project that consumes the `@maj0codes/ui-library` library.
   - Also uses Tailwind CSS to maintain visual consistency.

---

## Tailwind CSS

### Version:

- Tailwind CSS v4.x in both projects (UI and App).

### Decisions:

- **Styles are not transpiled from the library**
- Instead, the App defines its own Tailwind settings and must import applicable styles.
- The approach of [twin-tailwind architecture](https://tailwindcss.com/docs/optimizing-for-production#separating-your-css) is followed.

### Problem Solved:

- Prevents conflicts between multiple Tailwind instances and ensures styles are not duplicated in production.

## Storybook

### Usage:

- Implemented only in the `ui-library` project.
- Allows testing and documentation of components in isolation.

### Plugins:

- `@storybook/react-vite`
- `@storybook/addon-docs`
- `@storybook/addon-a11y` (accesibilidad)

---

## Vite

### Why it was chosen:

- Fast, modern and compatible with modular projects.
- Good support for React, Storybook, and Tailwind v4.

---

## Publishing and Build

### Library:

- Published as a private npm package (`@maj0codes/ui-library`).
- Separate build for `es` and `cjs`.

```json
"exports": {
  ".": {
    "import": "./dist/ui-library.es.js",
    "require": "./dist/ui-library.cjs.js"
  }
}
```
