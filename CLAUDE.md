# CLAUDE.md for AI Agency Website

## Build/Development Commands
- `npm run dev` - Start development server
- `npm run build` - Build production application
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code linting
- `next dev` - Alternative way to start development server
- `next build` - Alternative way to build production application

## Code Style Guidelines
- **TypeScript**: Use strict typing with interfaces for props and state
- **React**: Use functional components with hooks and "use client" directive where needed
- **Naming**: PascalCase for components, camelCase for functions/variables, lowercase-hyphen for filenames
- **Imports**: Group imports: 1) React/Next.js, 2) External libraries, 3) Components, 4) Utils/Types
- **UI Design**: Use Shadcn UI components and Tailwind for styling
- **Formatting**: Use 2-space indentation, consistent line length, and clean code patterns
- **Error Handling**: Use try/catch for async operations with appropriate error messaging
- **CSS**: Prefer utility classes with Tailwind; use `cn()` utility for merging class names
- **Form Handling**: Use react-hook-form with zod validation
- **State Management**: Use React hooks (useState, useContext) for state management

## Project Structure
- `/app`: Next.js app router pages and routing structure
- `/components`: Reusable UI components (ui/ contains shadcn components)
- `/lib`: Utility functions and shared code (utils.ts contains common utilities)
- `/hooks`: Custom React hooks
- `/public`: Static assets and images

## Additional Notes
- This is a Next.js web app using the App Router pattern
- Uses Radix UI primitives with Shadcn UI components
- Tailwind CSS for styling with a customizable theme