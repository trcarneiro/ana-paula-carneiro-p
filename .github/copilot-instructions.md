# Spark Template - AI Coding Instructions

## Architecture & Project Structure
- **Framework**: React 19 + Vite + TypeScript.
- **Styling**: Tailwind CSS v4 (using `@tailwindcss/vite`).
- **UI Library**: Shadcn UI-like structure.
  - Reusable primitives in `src/components/ui/`.
  - Feature components in `src/components/`.
  - Admin components in `src/components/admin/`.
- **Spark Integration**: Uses `@github/spark` for platform features (e.g., `spark.user()`).
- **Entry Point**: `src/main.tsx` mounts `App.tsx`.

## Conventions & Patterns

### Component Structure
- Use **Named Exports** for components: `export function MyComponent() { ... }`.
- Place new UI primitives in `src/components/ui/`.
- Place feature-specific components in `src/components/`.
- Use the `@` alias for imports from `src` (e.g., `import { Button } from "@/components/ui/button"`).

### Styling (Tailwind CSS)
- Use the `cn()` utility for class merging:
  ```tsx
  import { cn } from "@/lib/utils"
  // ...
  <div className={cn("base-class", className)}>
  ```
- Follow Tailwind v4 conventions.
- Theme variables are defined in `src/index.css` or `src/styles/theme.css`.

### State & Data
- Use `useState` for local UI state.
- Use `@tanstack/react-query` for server state if fetching external data.
- `spark` global object is available for user context (e.g., `spark.user()`).

### Icons
- Primary: `@phosphor-icons/react`.
- Secondary: `lucide-react` (often used by Shadcn components).

## Workflows
- **Development**: `npm run dev` (starts Vite server).
- **Build**: `npm run build` (TypeScript check + Vite build).
- **Lint**: `npm run lint`.

## Key Files
- `src/lib/utils.ts`: Contains the `cn` utility.
- `src/App.tsx`: Main layout and routing logic (including Admin toggle).
- `vite.config.ts`: Vite configuration with Spark and Tailwind plugins.
