# CLAUDE.md for AI Agency Website

## Build/Development Commands
- `npm run dev` - Start development server
- `npm run build` - Build production application
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code linting
- `npm run test` - Run tests (if implemented)
- `npm run typecheck` - Run TypeScript type checking (if implemented)

## Code Style Guidelines
- **TypeScript**: Use strict typing with interfaces/types for props and state
- **React**: Functional components with hooks; include "use client" directive for client components
- **Naming**: PascalCase for components, camelCase for functions/variables, kebab-case for filenames
- **Imports**: Order: 1) React/Next.js, 2) External libraries, 3) Components, 4) Utils/Types
- **UI Components**: Use Shadcn UI components and follow their patterns
- **Formatting**: 2-space indentation, max 80-100 chars per line, consistent spacing
- **Error Handling**: Try/catch for async operations, proper error states in UI
- **CSS**: Tailwind utility classes; use `cn()` from lib/utils.ts to merge class names
- **Forms**: react-hook-form with zod validation schemas
- **State Management**: React hooks (useState, useContext) for component/app state

## Project Structure
- `/app`: Next.js app router pages and routing structure
- `/components`: Reusable UI components (ui/ contains shadcn components)
- `/lib`: Utility functions and shared code
- `/hooks`: Custom React hooks
- `/public`: Static assets and images

## Development Practices
- Test components in the browser at different viewport sizes
- Follow accessibility best practices using Radix UI primitives
- Use Next.js App Router patterns for routing and data fetching
- Maintain responsive design using Tailwind's responsive modifiers