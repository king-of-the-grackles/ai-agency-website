# AI Agency Website - Development Guide

## Build/Development Commands
- `npm run dev` - Start development server
- `npm run build` - Build production application
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code linting
- Note: Test setup not yet implemented in package.json

## Code Style Guidelines
- **TypeScript**: Strict typing with interfaces/types for props; paths alias `@/*`
- **React**: Functional components with hooks; "use client" for client components
- **Naming**: PascalCase for components/types, camelCase for functions/variables
- **Imports**: Order: 1) React/Next.js, 2) External libraries, 3) Components, 4) Utils
- **Formatting**: 2-space indentation, single quotes, max 100 chars per line
- **CSS**: Tailwind utility classes; use `cn()` from lib/utils.ts for conditionals
- **Components**: Shadcn UI with Radix primitives; prioritize accessibility
- **Forms**: react-hook-form with zod validation schemas

## Project Structure
- `/app`: Next.js app router pages and routing structure
- `/components`: Reusable UI components (ui/ contains shadcn components)
- `/lib`: Utility functions and shared code
- `/hooks`: Custom React hooks
- `/public`: Static assets and images
- `/v0`: Previous version of the site (cursorrule: "This is a next.js web app")

## Development Practices
- Test responsive designs with Tailwind breakpoints (sm, md, lg, xl)
- Optimize images with Next.js Image component
- Use destructuring for props; React.forwardRef when needed
- Segment client components with "use client" directive
- Implement proper error handling with user feedback