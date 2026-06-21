---
name: ui-ux-pro-max
description: "UI/UX design intelligence for web and mobile. Includes 50+ styles, 161 color palettes, 57 font pairings, 161 product types, 99 UX guidelines, and 25 chart types across 10 stacks (React, Next.js, Vue, Svelte, SwiftUI, React Native, Flutter, Tailwind, shadcn/ui, and HTML/CSS). Actions: plan, build, create, design, implement, review, fix, improve, optimize, enhance, refactor, and check UI/UX code. Projects: website, landing page, dashboard, admin panel, e-commerce, SaaS, portfolio, blog, and mobile app. Elements: button, modal, navbar, sidebar, card, table, form, and chart. Styles: glassmorphism, claymorphism, minimalism, brutalism, neumorphism, bento grid, dark mode, responsive, skeuomorphism, and flat design. Topics: color systems, accessibility, animation, layout, typography, font pairing, spacing, interaction states, shadow, and gradient. Integrations: shadcn/ui MCP for component search and examples."
---

# UI/UX Pro Max - Design Intelligence

Comprehensive design guide for web and mobile applications. Contains 50+ styles, 161 color palettes, 57 font pairings, 161 product types with reasoning rules, 99 UX guidelines, and 25 chart types across 10 technology stacks. Searchable database with priority-based recommendations.

## When to Apply

This Skill should be used when the task involves **UI structure, visual design decisions, interaction patterns, or user experience quality control**.

### Must Use

This Skill must be invoked in the following situations:

- Designing new pages (Landing Page, Dashboard, Admin, SaaS, Mobile App)
- Creating or refactoring UI components (buttons, modals, forms, tables, charts, etc.)
- Choosing color schemes, typography systems, spacing standards, or layout systems
- Reviewing UI code for user experience, accessibility, or visual consistency
- Implementing navigation structures, animations, or responsive behavior
- Making product-level design decisions (style, information hierarchy, brand expression)
- Improving perceived quality, clarity, or usability of interfaces

### Recommended

This Skill is recommended in the following situations:

- UI looks "not professional enough" but the reason is unclear
- Receiving feedback on usability or experience
- Pre-launch UI quality optimization
- Aligning cross-platform design (Web / iOS / Android)
- Building design systems or reusable component libraries

### Skip

This Skill is not needed in the following situations:

- Pure backend logic development
- Only involving API or database design
- Performance optimization unrelated to the interface
- Infrastructure or DevOps work
- Non-visual scripts or automation tasks

**Decision criteria**: If the task will change how a feature **looks, feels, moves, or is interacted with**, this Skill should be used.

## Quick Reference

### 1. Accessibility (CRITICAL)
- Minimum 4.5:1 contrast ratio for normal text
- Visible focus rings on interactive elements
- Descriptive alt text for meaningful images
- aria-label for icon-only buttons
- Tab order matches visual order
- Skip to main content for keyboard users

### 2. Touch & Interaction (CRITICAL)
- Min 44×44pt touch targets
- 8px+ gap between touch targets
- Don't rely on hover alone for primary actions
- Disable button during async operations
- Clear error messages near problem field

### 3. Performance (HIGH)
- Use WebP/AVIF images, lazy load non-critical assets
- Declare width/height or use aspect-ratio to prevent layout shift
- Use font-display: swap/optional
- Load third-party scripts async/defer
- Reserve space for async content

### 4. Style Selection (HIGH)
- Match style to product type
- Use SVG icons (Heroicons, Lucide), not emojis
- Choose palette from product/industry

### 5. Layout & Responsive (HIGH)
- Mobile-first design
- Readable 16px body text minimum on mobile
- No horizontal scroll on mobile
- Use 4pt/8dp incremental spacing system
- Consistent max-width on desktop

### 6. Typography & Color (MEDIUM)
- Line-height 1.5-1.75 for body text
- Limit to 65-75 characters per line
- Use semantic color tokens, not raw hex
- Dark mode uses desaturated lighter tonal variants

### 7. Animation (MEDIUM)
- 150-300ms for micro-interactions
- Use transform/opacity only
- Show skeleton when loading exceeds 300ms
- Use ease-out for entering, ease-in for exiting

### 8. Forms & Feedback (MEDIUM)
- Visible labels (not placeholder-only)
- Show error below the related field
- Loading then success/error state on submit
- Progressive disclosure of complex options

### 9. Navigation Patterns (HIGH)
- Bottom nav max 5 items with labels
- Predictable back navigation
- Deep linking for all key screens
- Current location must be visually highlighted

### 10. Charts & Data (LOW)
- Match chart type to data type
- Use accessible color palettes
- Provide table alternative for accessibility
- Always show legend with tooltips

## Search Reference

Domains: `product`, `style`, `color`, `typography`, `landing`, `chart`, `ux`, `google-fonts`, `react`, `web`, `prompt`

Stacks: `html-tailwind`, `react`, `nextjs`, `vue`, `svelte`, `swiftui`, `react-native`, `flutter`, `shadcn`, `jetpack-compose`

## Usage

1. Use `--design-system` for comprehensive recommendations
2. Use `--domain <name>` for specific deep-dive searches
3. Use `--stack <name>` for stack-specific guidelines
