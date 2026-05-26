# LISSI Documentation Platform: Guidelines

Welcome to the LISSI Documentation Platform. This platform is designed to be a scalable, modular "knowledge system" for our laboratory's research in robotics and motion analysis.

## Content Guidelines

### Adding New Documentation
To add a new documentation topic:
1. Create a new directory in `src/app/docs/` that matches your category (e.g., `src/app/docs/robotics/my-new-sensor/`).
2. Create a `page.mdx` file inside that directory.
3. Write your documentation in standard Markdown. You can also import and use React components directly in the MDX file if needed.
4. Update `src/components/Sidebar.tsx` to include a link to your new page.

### Writing Style
- **Technical & Calm**: Avoid flashy language. Focus on practical instructions, setup commands, and technical parameters.
- **Structured**: Use clear headings (`H1`, `H2`, `H3`) to organize content.
- **Code Blocks**: Always provide example commands for terminal-based tasks (ROS2, Linux, etc.).

## Visual Identity Rules

- **Colors**: Use the LISSI accent color (`#B01267`) sparingly for emphasis, links, and buttons.
- **Typography**: 
  - Use **Space Grotesk** for titles and high-level navigation.
  - Use **Inter** for all body text and documentation paragraphs.
- **Geometry**: Maintain a consistent `20px` border-radius for all cards, buttons, and panels to echo the curves in the LISSI logo.

## UI Components

### Sidebar
The Sidebar is the primary navigation tool. It is grouped into high-level research areas:
- Robotics
- Motion Analysis
- Sensors
- Pipeline

### Browser Header
The header reinforces the "navigator" concept. It features a "tab" that displays the current documentation category and a search bar for quick access.

## Maintenance

- **Dependencies**: Keep `@shadergradient/react` and `@react-three/fiber` updated to ensure smooth background animations.
- **Next.js**: The platform uses the App Router. Ensure all new layout-level changes are compatible with Server Components where possible.
