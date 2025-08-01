# Product Requirements Document (PRD)

## Project: Fylo Dark Theme Landing Page (Frontend Mentor Challenge)

### Overview
A responsive landing page for "Fylo" (Frontend Mentor Challenge), designed with a dark theme. The project is built using React, TypeScript, SCSS (with BEM methodology), and Vite. It features modular components, accessibility best practices, and a mobile-first approach.

---

## 1. Purpose
Deliver a visually appealing, accessible, and performant landing page for Fylo, showcasing its features, testimonials, and call-to-action, following the provided design and style guide.

---

## 2. Features & Requirements

### 2.1. General
- Responsive design (mobile-first, adapts to tablet and desktop)
- Dark theme with gradients and SVG backgrounds according to the design
- Semantic HTML5 structure (header, main, section, etc.)
- Accessibility (a11y): proper heading order, alt text, keyboard navigation
- BEM methodology for SCSS modules
- All colors, spacing, and typography follow the design system

### 2.2. Components
- **Navbar**: Logo and navigation links, spaced as per design
- **Main**: Hero section with illustration, title, description, and CTA button
- **Info**: Feature cards, rendered dynamically from a JSON file
- **Cards**: Testimonial cards (user avatars, quotes, etc.)
- **Form**: Email subscription form with validation
- **Footer**: Contact info, social links, and legal text
- **Button**: Reusable, styled with gradient background

### 2.3. Assets
- All images .webp and SVGs are stored in the `public/images` directory
- Favicon preview images and screenshots included

### 2.4. Styling
- SCSS modules for each component
- Use of CSS variables for colors and gradients
- Use rem units for scalable typography and layout where appropriate
- Minified and clean SCSS (no unused code, grouped rules)

### 2.5. Data
- Feature card data is stored in `src/data/infoData.json` and rendered via `.map()`

### 2.6. Accessibility
- Headings are in sequential order (h1, h2, ...)
- All images have descriptive alt text
- Sufficient color contrast
- Navigation is keyboard accessible
- ARIA roles and properties where necessary
- Font sizes and colors follow WCAG guidelines

---

## 3. Non-Functional Requirements
- Fast load times (optimized images, minimal bundle)
- Code linting and formatting (ESLint, Prettier)
- Version control with Git (GitHub repository)
- Clear and maintainable folder structure

---

## 4. Out of Scope
- Backend/API integration
- User authentication
- Dynamic content beyond the provided JSON/static assets

---

## 5. Acceptance Criteria
- Matches the provided Figma/design files
- Passes Lighthouse accessibility and performance audits
- No console errors or warnings
- All navigation and buttons are functional
- Responsive on all major device sizes

---

## 6. Deliverables
- Complete source code (React + SCSS + assets)
- `README.md` with setup instructions
- `PRD.md` product requirements document (this document)

---

## 7. Stakeholders
- Developer: Daniel Alejandro Cano Cardona
- Designer: Frontend Mentor
- Reviewer: Who is interested

---

## 8. Risks & Mitigation
- **Design drift**: Regularly compare with Figma
- **Accessibility issues**: Use Lighthouse and manual testing
- **Performance**: Optimize images and use code splitting if needed

---
