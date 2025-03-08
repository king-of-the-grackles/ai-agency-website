# CLAUDE.md for AI Agency Website

## Build/Development Commands
- `npm run dev` - Start development server
- `npm run build` - Build production application
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code linting
- To run a specific test: `npm test -- -t "test name"` (when implemented)

## Code Style Guidelines
- **TypeScript**: Strict typing with interfaces/types for props and state; paths alias `@/*`
- **React**: Functional components with hooks; "use client" directive for client components
- **Naming**: PascalCase for components/types, camelCase for functions/variables, kebab-case for files
- **Imports**: Order: 1) React/Next.js, 2) External libraries, 3) Components, 4) Utils/Types
- **Formatting**: 2-space indentation, single quotes, max 100 chars per line
- **Error Handling**: Try/catch for async operations; provide user feedback for errors
- **CSS**: Tailwind utility classes; use `cn()` from lib/utils.ts for conditional classes
- **Components**: Use Shadcn UI with Radix primitives; follow accessibility best practices
- **Forms**: react-hook-form with zod validation schemas
- **State Management**: React hooks (useState, useContext) for component/app state

## Project Structure
- `/app`: Next.js app router pages and routing structure
- `/components`: Reusable UI components (ui/ contains shadcn components)
- `/lib`: Utility functions and shared code
- `/hooks`: Custom React hooks
- `/public`: Static assets and images

## Development Practices
- Test across different viewport sizes; maintain responsive design with Tailwind
- Follow Next.js App Router patterns for routing and data fetching
- Destructure props at component level; use React.forwardRef where needed
- Group component files by feature; keep UI primitives in components/ui/