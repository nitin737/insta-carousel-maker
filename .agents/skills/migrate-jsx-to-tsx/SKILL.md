---
name: migrate-jsx-to-tsx
description: Guide for migrating React components from JSX/JS to TypeScript (TSX/TS). Use when the user wants to convert a React codebase or specific components to TypeScript, or asks to "migrate to typescript", "convert jsx to tsx".
---

# Enterprise-Grade React JSX to TSX Migration Guide

This skill provides a modular, deterministic, multi-phased state machine approach for migrating a React JavaScript (`.jsx`/`.js`) codebase to TypeScript (`.tsx`/`.ts`) end-to-end without breaking production.

When executing a migration, you MUST follow this structured pipeline, evaluating the project's health at each phase.

## The Migration State Machine

```
[Phase 1: Discovery] ──> [Phase 2: Bootstrapping] ──> [Phase 3: Dependency Graph Mapping]
                                                                  │
[Phase 6: Strict Enforcement] <── [Phase 5: Iterative Fixing] <───┘ [Phase 4: AST Conversion]
```

---

## Phase 1: Environment Discovery & Baselining
Capture the "source of truth" and verify that the application compiles and passes tests *before* altering code.

**Actions:**
1. Scan for the package manager (`package-lock.json`, `yarn.lock`, `pnpm-lock.yaml`).
2. Run existing test suites (e.g., `npm run test`).
3. Run the current build script (`npm run build`).
4. Cache the results as a benchmark.
5. Analyze codebase metrics: Count total `.js`/`.jsx` files, identify core entry points, and detect bundler configuration.

---

## Phase 2: Environment Bootstrapping
Prepare the repository for TypeScript by introducing configurations in a relaxed/permissive state.

**Actions:**
1. Install core devDependencies: `npm install -D typescript @types/react @types/react-dom @types/jest` (if applicable).
2. Generate a highly permissive `tsconfig.json` to allow incremental adoption:
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["DOM", "DOM.Iterable", "ES2020"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "allowJs": true,
    "checkJs": false,
    "strict": false
  },
  "include": ["src"]
}
```
3. Update or rename configs if needed (e.g., `vite.config.js` -> `vite.config.ts`).

---

## Phase 3: Dependency Graph Mapping
Migrating a codebase from the top-down causes massive type-resolution loops. Map the import hierarchy to migrate leaf nodes first.

**Actions:**
1. Parse file imports to find components/utilities with zero internal project dependencies (leaf nodes).
2. Group files into execution batches:
   - Batch 1: Leaves (e.g., UI primitives, basic utilities)
   - Batch 2: Intermediate Components
   - Batch 3: Contexts/Hooks
   - Batch 4: Pages/Routes/Entry Points

---

## Phase 4: AST-Driven Structural Conversion
Safely mutate extensions and structural syntax.

**Actions:**
1. Rename target file from `.jsx` to `.tsx` (or `.js` to `.ts`).
2. Convert the file following these rules:
   - Extract component props based on destructuring, defaultProps, or propTypes.
   - Define a clean TypeScript `interface Props` above the component definition.
   - Replace `PropTypes` validations with the newly defined TypeScript interface. Remove the `prop-types` import entirely.
   - Strongly type standard React hooks (see syntax reference below).
   - Use `React.FC<Props>` or directly type function arguments: `function MyComponent({ propA }: Props)`.
   - DO NOT use `any`. If a type cannot be explicitly deduced, fall back temporarily to `unknown`.
   - Preserve all existing business logic, hooks, styling, classes, and JSX markers exactly as they are.

---

## Phase 5: Iterative Compilation Fixing (The Loop)
Act as an on-the-fly compiler engineer, reading `tsc` errors and fixing them line-by-line.

**Actions:**
1. Run `npx tsc --noEmit`.
2. Catch standard output and extract error logs containing filename, line number, and error code.
3. Auto-correct specific compiler complaints:
   - **TS2339 (Property does not exist on type)**: Scan the interface definition and add the missing property, or typecast safely.
   - **TS2322 (Type is not assignable)**: Provide explicit unions, check for null/undefined, or implement type assertions.
   - **Event Handling**: Automatically map generic events (e.g., converting an anonymous `e` parameter in an `onChange` handler to `React.ChangeEvent<HTMLInputElement>`).

---

## Phase 6: Tightening and Quality Assurance
Raise the standards to eliminate temporary gaps and enforce enterprise invariants.

**Actions:**
1. Flip `"strict": true` and `"noImplicitAny": true` in `tsconfig.json`.
2. Re-run `npx tsc --noEmit` and track down/refactor any leftover `unknown` or implicit `any` definitions.
3. Validate E2E runtime: Run final production build and all test suites to verify runtime behavior is unchanged.

---

## Execution Guardrails
- **Atomic Rollbacks**: If a file conversion introduces more than 10 unresolvable type errors after 3 repair loops, execute a `git checkout -- <file>` rollback, log the bottlenecks, and skip it for human evaluation.
- **Incremental PR Strategy**: Commit and branch in small batches (e.g., 5 to 10 correlated components at a time) rather than attempting a monolithic rewrite.

---

## Syntax Reference

### Typing Props
```tsx
import { ReactNode, MouseEvent } from 'react';

interface ButtonProps {
  label: string;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  children?: ReactNode;
}

const Button = ({ label, onClick, disabled = false, children }: ButtonProps) => { ... }
```

### Typing Hooks
```tsx
const [user, setUser] = useState<User | null>(null);
const [items, setItems] = useState<string[]>([]);
const inputRef = useRef<HTMLInputElement>(null);
```

### Typing Context
```tsx
interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
};
```
