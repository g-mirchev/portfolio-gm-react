# GitHub Copilot Instructions

## Project Context

This is **Georgi Mirchev's personal portfolio website** built with React 19, TypeScript, Vite, and Material-UI. It showcases professional experience, skills, and interactive demo projects like Tic-Tac-Toe and Cat Finder.

## Tech Stack

- React 19 with TypeScript (strict mode)
- Vite 7 for build tooling
- Material-UI (MUI) v7 for UI components
- Redux Toolkit + Redux Persist for state management
- React Router v7 for navigation
- ESLint 9 + Prettier for code quality

## Code Style Guidelines

### TypeScript Patterns

```typescript
// Always use explicit FC typing with ReactElement return type
import { type FC, type ReactElement } from 'react';

const Component: FC = (): ReactElement => {
  return <div>Content</div>;
};

export default Component;
```

- Use `type` keyword for importing types: `import { type FC } from 'react'`
- Prefer `type` over `interface` for simple shapes
- Use path aliases: `import { profile } from 'data'` not relative paths

### React Conventions

- Functional components only (no class components)
- Use JSDoc comments for exported components and functions
- Explicit return types on all components
- Prefer named exports for utilities, default exports for page components

### State Management

```typescript
// Redux slice pattern
import { createSlice } from '@reduxjs/toolkit';

export const featureSlice = createSlice({
  name: 'feature',
  initialState: {},
  reducers: {
    actionName: (state) => {
      // mutation logic
    },
  },
});

export const { reducer: featureReducer, actions: { actionName } } = featureSlice;
```

- Use typed hooks: `useAppSelector`, `useAppDispatch` from `lib/hooks`
- Keep slices in `modules/[feature]/slice.ts`

### Styling

```tsx
// Use MUI sx prop for styling - no CSS modules
<Box
  sx={{
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'background.default',
    '&:hover': {
      boxShadow: 6,
    },
  }}
>
  Content
</Box>
```

- Use MUI theme tokens: `'primary.main'`, `'text.secondary'`
- Responsive design via MUI breakpoints
- No inline color codes - use theme palette

### Module Structure

```
modules/[feature]/
├── index.ts           # Public API exports
├── slice.ts           # Redux slice (if needed)
├── types.ts           # TypeScript types
└── components/
    ├── index.ts       # Barrel exports
    └── Component.tsx
```

## ESLint Rules to Follow

- Use arrow functions for callbacks: `prefer-arrow-callback`
- Use object shorthand: `{ name }` not `{ name: name }`
- No unused variables or imports
- Components must work with React Refresh (Vite HMR)

## File Naming

- Components: `PascalCase.tsx`
- Hooks: `camelCase.ts` with `use` prefix
- Types: `types.ts` within module
- Data files: `camelCase.ts`

## Common Imports

```typescript
// React
import { type FC, type ReactElement, useState, useMemo } from 'react';

// MUI
import { Box, Typography, Button, Card, Grid } from '@mui/material';

// Redux
import { useAppSelector, useAppDispatch } from 'lib/hooks';

// Router
import { Link, useNavigate } from 'react-router';

// Data
import { profile, projects, navItems } from 'data';
```

## When Generating Code

1. **New Components**: Follow the FC pattern with explicit return types
2. **New Pages**: Add route in `router/Router.tsx`, create in `pages/`
3. **New Features**: Create module folder with `index.ts`, `types.ts`, `components/`
4. **API Calls**: Use React hooks pattern, handle loading/error states
5. **Forms**: Use MUI form components with controlled inputs

## Project Scripts

```bash
npm run dev      # Start development server
npm run build    # Production build
npm run lint     # Check code quality
npm run format   # Format with Prettier
```

## Key Files Reference

- Entry: `src/main.tsx`
- App Root: `src/App.tsx`
- Routes: `src/router/Router.tsx`
- Layout: `src/layout/GlobalLayout.tsx`
- Store: `src/lib/store.ts`
- Theme: `src/modules/theme/theme.ts`
- Profile Data: `src/data/profile.ts`

## Do NOT

- Use class components
- Use CSS modules or styled-components
- Use relative imports when path aliases work
- Skip TypeScript types
- Leave unused imports
- Use `any` type without justification
