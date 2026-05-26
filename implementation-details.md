# LISSI Documentation Platform: Implementation Details

This document provides a technical overview of how the LISSI Documentation Platform was built and how the various technologies were integrated.

## Technical Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) (CSS-first configuration)
- **Documentation**: [MDX](https://mdxjs.com/) (via `@next/mdx`)
- **Graphics**: [ShaderGradient](https://www.shadergradient.co/) + [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber)
- **Typography**: [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) (Headings) and [Inter](https://fonts.google.com/specimen/Inter) (Body)

## Project Structure

- `src/app/`: Contains the application routes and layout.
  - `page.tsx`: The landing page with the ShaderGradient hero.
  - `docs/`: The MDX-driven documentation routes.
- `src/components/`: Reusable UI components.
  - `HeroSection.tsx`: Integrates the 3D gradient background.
  - `Sidebar.tsx`: The multi-level navigation system.
- `src/app/globals.css`: Tailwind v4 theme configuration with LISSI colors.

## ShaderGradient Integration

The platform uses `@shadergradient/react` to create a fluid, professional 3D background in the Hero section.

### Configuration
The gradient is implemented as a Client Component in `HeroSection.tsx`. It uses the LISSI brand colors:
- Primary Accent: `#B01267`
- Secondary Accent: `#C61B2A`
- Search Accent: `#C8F0EA`

These colors are passed via a URL setting string to the `<ShaderGradient>` component, ensuring a consistent and "intelligent laboratory" feel.

## MDX Routing

Next.js is configured via `next.config.ts` to support `.mdx` files. Each documentation page is a simple Markdown file located in `src/app/docs/.../page.mdx`. These pages are automatically wrapped in a shared `layout.tsx` that provides the Sidebar and Browser-style header.

## Styling & Typography

The design follows the "LISSI Design Philosophy":
- **Corners**: `border-radius: 20px` (via `--radius-lissi`).
- **Colors**: A professional grayscale palette with sharp magenta/red accents.
- **Typography**: Space Grotesk provides a geometric, technical feel for titles, while Inter ensures readability for dense documentation content.
