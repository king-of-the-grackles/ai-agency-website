# CLAUDE.md for AI Agency Website

## Build/Development Commands
- `npm run dev` - Start development server
- `npm run build` - Build production application
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code linting

## Code Style Guidelines
- **TypeScript**: Use strict typing with interfaces for props and state
- **Components**: Functional components with "use client" directive where needed
- **Naming**: PascalCase for components, camelCase for functions/variables
- **Imports**: Group by: 1) React/Next.js, 2) Components, 3) Utilities
- **UI Design**: Use Shadcn UI components and Tailwind for styling
- **Theme**: Default shadcn/ui theme with neutral color palette
- **Error Handling**: Use try/catch for async operations with appropriate state management
- **CSS Utilities**: Use `cn()` utility for merging class names
- **Type Exports**: Export interfaces alongside components

## Project Structure
- `/app`: Next.js app router pages
- `/components`: Reusable UI components
- `/lib`: Utility functions and shared code
- `/hooks`: Custom React hooks
- `/public`: Static assets and images