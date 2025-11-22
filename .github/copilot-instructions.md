# Spark Template - AI Coding Instructions

## Architecture & Project Structure
- **Framework**: React 19 + Vite + TypeScript.
- **Type**: Single Page Application (SPA) with a scrollable landing page layout.
- **Styling**: Tailwind CSS v4 (using `@tailwindcss/vite`).
- **UI Library**: Shadcn UI-like structure (Radix UI primitives + Tailwind).
  - Reusable primitives in `src/components/ui/`.
  - Feature components in `src/components/` (e.g., `Hero.tsx`, `Contact.tsx`).
  - Admin components in `src/components/admin/`.
- **Data Persistence**: Uses `@github/spark/hooks` (`useKV`) for dynamic site content (e.g., text, images).
- **Auth/Permissions**: Uses `spark.user()` to determine ownership (`isOwner`) and conditionally render the Admin Panel.
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

### State & Data Management
- **Local State**: Use `useState` for simple UI state and form handling (e.g., `Contact.tsx`, `AdminPanel.tsx`).
- **Persistent State**: Use `useKV` hook for site content that needs to be editable via the Admin Panel.
  ```tsx
  import { useKV } from "@github/spark/hooks"
  // ...
  const [content, setContent] = useKV("site-content", defaultContent)
  ```
- **User Context**: Use `spark.user()` to check for `isOwner` status.

### Forms
- Prefer `useState` for form state management as seen in existing components.
- `react-hook-form` and `zod` are available in dependencies if complex validation is required, but simple controlled inputs are the current pattern.

### Icons
- **Primary**: `@phosphor-icons/react` (e.g., `<GearSix />`, `<WhatsappLogo />`).
- **Secondary**: `lucide-react` (mostly used within Shadcn UI components).

## Workflows
- **Development**: `npm run dev` (starts Vite server).
- **Build**: `npm run build` (TypeScript check + Vite build).
- **Lint**: `npm run lint`.

## Key Files
- `src/lib/utils.ts`: Contains the `cn` utility.
- `src/App.tsx`: Main layout, conditional Admin rendering, and `spark.user()` check.
- `src/components/admin/AdminPanel.tsx`: Example of `useKV` for content management.
- `vite.config.ts`: Vite configuration with Spark and Tailwind plugins.
