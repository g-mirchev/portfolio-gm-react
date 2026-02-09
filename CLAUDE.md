# CLAUDE.md - Project Instructions for Claude Code

## Project Overview

This is **Georgi Mirchev's personal portfolio website** - a React-based single-page application showcasing professional experience, skills, and interactive demo projects. The site serves as both a portfolio and a playground for experimenting with modern React patterns.

## Tech Stack

- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite 7
- **UI Library**: Material-UI (MUI) v7
- **State Management**: Redux Toolkit + Redux Persist
- **Routing**: React Router v7
- **Styling**: Emotion (via MUI)
- **Code Quality**: ESLint 9, Prettier, TypeScript strict mode

## Project Structure

```
src/
├── components/     # Shared/reusable components
├── data/           # Static data (profile, projects, experience, navigation)
├── hooks/          # Custom React hooks
├── layout/         # Layout components (Navbar, Footer, GlobalLayout)
├── lib/            # Redux store config, typed hooks, utilities
├── modules/        # Feature modules with self-contained logic
│   ├── cat/        # Cat Finder feature
│   ├── pager/      # Retro pager UI component
│   ├── theme/      # Theme management (light/dark mode)
│   ├── tictactoe/  # Tic-Tac-Toe game
│   └── v1426/      # VCard component
├── pages/          # Route page components
└── router/         # React Router configuration
```

## Key Commands

```bash
# Development
npm install          # Install dependencies
npm run dev          # Start dev server (Vite)

# Build & Preview
npm run build        # TypeScript check + production build
npm run preview      # Preview production build

# Code Quality
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues
npm run format       # Format with Prettier
```

## Coding Conventions

### TypeScript

- Use explicit return types for functional components: `FC = (): ReactElement =>`
- Prefer `type` over `interface` for simple object shapes
- Use path aliases (configured in `tsconfig.app.json`): `import { profile } from 'data'`

### React Components

- Functional components only with explicit typing
- JSDoc comments for exported components
- Components follow this pattern:
  ```tsx
  import { type FC, type ReactElement } from 'react';

  const ComponentName: FC = (): ReactElement => {
    return <div>...</div>;
  };

  export default ComponentName;
  ```

### State Management

- Redux Toolkit slices in `modules/[feature]/slice.ts`
- Typed hooks from `lib/hooks.ts`: `useAppSelector`, `useAppDispatch`
- Persist whitelisted reducers via Redux Persist

### Styling

- MUI's `sx` prop for component-level styling
- Theme defined in `modules/theme/theme.ts`
- No CSS modules or styled-components - use MUI patterns

### Module Structure

Each feature module follows this pattern:
```
modules/[feature]/
├── index.ts           # Public exports
├── slice.ts           # Redux slice (if stateful)
├── types.ts           # TypeScript types
└── components/
    ├── index.ts       # Component exports
    └── Component.tsx  # Feature components
```

## Important Files

- [src/App.tsx](src/App.tsx) - Root component with Redux Provider setup
- [src/router/Router.tsx](src/router/Router.tsx) - Route definitions
- [src/layout/GlobalLayout.tsx](src/layout/GlobalLayout.tsx) - Main layout wrapper with theme
- [src/lib/store.ts](src/lib/store.ts) - Redux store configuration
- [src/lib/hooks.ts](src/lib/hooks.ts) - Typed Redux hooks
- [src/data/profile.ts](src/data/profile.ts) - Profile data (name, title, bio, socials)
- [src/data/projects.ts](src/data/projects.ts) - Project showcase data

## Routes

| Path           | Page Component | Description                    |
| -------------- | -------------- | ------------------------------ |
| `/`            | Home           | Landing page with profile info |
| `/experience`  | Experience     | Professional experience        |
| `/projects`    | Projects       | Project showcase gallery       |
| `/cat`         | Cat            | Cat Finder API demo            |
| `/tic-tac-toe` | TicTacToe      | Interactive Tic-Tac-Toe game   |
| `/v1426`       | V1426          | VCard component demo           |

## ESLint Rules

Key enforced rules:
- `prefer-arrow-callback` - Use arrow functions for callbacks
- `object-shorthand` - Use ES6 object shorthand
- `react-refresh/only-export-components` - Vite HMR compatibility
- No unused variables or imports
- Prettier integration for consistent formatting

## When Making Changes

1. **Adding a new page**: Create in `pages/`, add route in `router/Router.tsx`, update `data/navigation.ts`
2. **Adding a new feature module**: Follow existing module structure, export via `index.ts`
3. **Modifying theme**: Update `modules/theme/theme.ts`
4. **Adding static data**: Add to appropriate file in `data/`
5. **Creating shared components**: Place in `components/` with barrel export

## Testing

No test framework is currently configured. When adding tests, consider:
- Vitest (recommended for Vite projects)
- React Testing Library
- MSW for API mocking

## Environment

- Node.js 18+ recommended
- ES Modules (`"type": "module"` in package.json)
- Path aliases resolve via `vite-tsconfig-paths`
