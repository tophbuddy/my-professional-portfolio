# Regressions Log

## 2025-03-04 11:41:14 PST - Security Vulnerabilities Fix

### Issue 1: Next.js Security Vulnerabilities
**Status**: Fixed
**Component**: Next.js Framework
**Impact**: Multiple high severity vulnerabilities including:
- Server-Side Request Forgery in Server Actions
- Cache Poisoning
- Denial of Service in image optimization
- Authorization bypass
- Denial of Service with Server Actions
**Fix Applied**: 
1. Updated Next.js to version 14.2.24 which patches all identified vulnerabilities
2. Verified fix with npm audit showing 0 vulnerabilities

## 2025-03-04 11:29:58 PST - Next.js Client Components Fix

### Issue 1: Server Component Errors
**Status**: Fixed
**Component**: Multiple Components (ThemeToggle.tsx, Header.tsx, NavigationContext.tsx, etc.)
**Error**: Cannot use client-side hooks (useState, useEffect) in Server Components
**Impact**: Application failed to compile
**Fix Applied**: 
1. Added 'use client' directive to all components using React hooks
2. Updated component hierarchy to properly handle client/server boundaries
3. Affected files:
   - ThemeToggle.tsx
   - ThemeContext.tsx
   - NavigationContext.tsx
   - Header.tsx
   - MainNav.tsx
   - MobileNav.tsx
   - HamburgerButton.tsx
   - RootLayout.tsx

### Issue 2: Tailwind CSS Configuration
**Status**: Fixed
**Component**: Global Styles
**Error**: Module not found: Can't resolve 'tailwindcss'
**Impact**: Styles not being applied
**Fix Applied**:
1. Reinstalled Tailwind CSS dependencies
2. Fixed globals.css configuration
3. Updated postcss and tailwind configuration files

## 2025-03-04 11:31:44 PST - Tailwind CSS Import Fix

### Issue 1: Tailwind CSS Import Error
**Status**: Fixed
**Component**: Global Styles (globals.css)
**Error**: Module not found: Can't resolve 'tailwindcss'
**Impact**: Styles not being applied, application failing to compile
**Fix Applied**: 
1. Removed direct Tailwind CSS import from globals.css
2. Updated Tailwind configuration with proper content paths
3. Reinstalled latest versions of Tailwind CSS and its dependencies
4. Fixed theme configuration in tailwind.config.js

## 2025-03-04 11:06:10 PST - TypeScript JSX Namespace Fix

### Issue 1: Missing JSX Namespace
**Status**: Fixed
**Component**: Multiple Components (ThemeToggle.tsx, RootLayout.tsx, FeaturedProjects.tsx, ThemeContext.tsx)
**Error**: Cannot find namespace 'JSX'
**Impact**: TypeScript compilation errors
**Fix Applied**: 
1. Added React import to all component files
2. Updated return type from JSX.Element to React.JSX.Element
3. Consolidated React-related imports

## 2025-03-04 11:03:22 PST - Component Fixes

### Issue 1: SSR Hydration Mismatch
**Status**: Fixed
**Component**: ThemeToggle.tsx, ThemeContext.tsx
**Error**: Theme state mismatch between server and client rendering
**Impact**: Console errors and potential flickering during page load
**Fix Applied**: 
1. Added mounted state check in ThemeToggle
2. Improved ThemeContext to handle SSR properly
3. Added default context values to prevent undefined errors

### Issue 2: Type Errors in FeaturedProjects
**Status**: Fixed
**Component**: FeaturedProjects.tsx
**Error**: Incorrect import and missing type definitions
**Impact**: TypeScript errors and potential runtime issues
**Fix Applied**:
1. Fixed framer-motion imports
2. Added proper typing for useRef
3. Consolidated motion imports

### Issue 3: Theme Provider Implementation
**Status**: Fixed
**Component**: ThemeContext.tsx
**Error**: Theme context could be undefined and lacked SSR handling
**Impact**: Potential runtime errors and hydration issues
**Fix Applied**:
1. Added default context values
2. Improved SSR handling with mounted state
3. Added proper effect dependencies

## 2025-03-04 11:34:07 PST - PostCSS Plugin Fix

### Issue 1: PostCSS Plugin Configuration
**Status**: Fixed
**Component**: PostCSS Configuration
**Error**: "It looks like you're trying to use `tailwindcss` directly as a PostCSS plugin"
**Impact**: Tailwind CSS styles not being processed
**Fix Applied**: 
1. Updated postcss.config.js to use @tailwindcss/postcss plugin
2. Uninstalled direct tailwindcss dependency
3. Installed @tailwindcss/postcss and related dependencies

## 2025-03-04: Custom Background Color Utility Classes Not Working

### Issue
Custom utility classes `bg-background` and `text-foreground` are not being recognized by Tailwind, causing build failures. This affects the theme system and layout components.

### Error Message
```
Error: Cannot apply unknown utility class: bg-background
```

### Root Cause
The custom color variables defined in globals.css are not properly configured in the Tailwind theme settings. We need to update tailwind.config.js to recognize these custom color values.

### Fix Plan
1. Update tailwind.config.js to properly extend the theme with our custom colors
2. Replace direct CSS variable usage with proper Tailwind configuration
3. Update components to use the new color utilities

## 2025-03-04: Tailwind CSS Utility Class Errors

### Issue: Cannot apply unknown utility class: bg-white

**Date:** March 4, 2025
**Status:** In Progress

**Description:**
Tailwind CSS is failing to recognize basic utility classes like `bg-white`. This appears to be related to either:
1. An outdated Next.js version (14.2.24)
2. Incorrect Tailwind configuration
3. Missing or misconfigured PostCSS setup

**Steps to Reproduce:**
1. Start the development server with `npm run dev`
2. Observe error in console:
```
./src/app/globals.css.webpack[javascript/auto]!=!./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[14].oneOf[12].use[2]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[14].oneOf[12].use[3]!./src/app/globals.css

Error: Cannot apply unknown utility class: bg-white
```

**Fix in Progress:**
1. Update Next.js to latest version
2. Review and update Tailwind configuration
3. Verify PostCSS setup

## 2025-03-06: Project Detail Page Type Safety and Performance Issues

### Issue
Several critical issues were identified in `src/app/projects/[id]/page.tsx`:

1. Type Safety:
   - Unsafe type casting of route parameter `id as string`
   - Missing Project type import and improper initial state typing
   - No error handling for invalid project IDs

2. Performance:
   - Unnecessary loading simulation with setTimeout
   - Unoptimized state management with inline component definition
   - Missing error boundaries for project data fetching

3. Core Web Vitals Impact:
   - FID affected by synchronous data loading
   - LCP impacted by unoptimized image loading
   - CLS risk from improper loading states

### Fix
1. Added proper TypeScript types and null checks:
   ```typescript
   import type { Project } from '@/types/project';
   const [project, setProject] = useState<Project | null>(null);
   ```

2. Improved performance:
   - Memoized BackButton component with useCallback
   - Used requestIdleCallback for non-critical data loading
   - Added proper error handling with try/catch

3. Core Web Vitals Optimization:
   - Removed artificial loading delays
   - Optimized image loading with proper error states
   - Added proper null checks to prevent layout shifts

### Prevention
To prevent similar issues:
1. Always import and use proper TypeScript types
2. Never use type assertions without validation
3. Implement proper error boundaries
4. Use performance optimization hooks (useMemo, useCallback)
5. Handle loading and error states properly
6. Consider Core Web Vitals impact in all UI components

## 2025-03-10: Next.js 15 Dynamic Route Parameters Type System Changes

### Issue: Type Error in Dynamic Route Parameters
**Status**: Fixed
**Component**: Dynamic Route Pages (`[id]/page.tsx`)
**Error**: Type 'Props' does not satisfy the constraint 'PageProps'. Types of property 'params' are incompatible.
**Impact**: Build failures in Next.js 15 due to type system changes for dynamic route parameters.

### Root Cause Analysis
In Next.js 15, dynamic route parameters (`params` and `searchParams`) are now handled asynchronously and must be typed as Promises. This is a breaking change from previous versions where these parameters were synchronously available.

### Error Messages
```typescript
Type error: Type 'Props' does not satisfy the constraint 'PageProps'.
Types of property 'params' are incompatible.
Type '{ id: string; }' is missing the following properties from type 'Promise<any>':
then, catch, finally, [Symbol.toStringTag]
```

### Fix Applied
1. Updated PageProps interface to handle params as Promise:
```typescript
interface PageProps {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}
```

2. Modified page components to properly await params:
```typescript
export default async function Page({ params }: PageProps) {
  const { id } = await params;
  // Use resolved id
}
```

3. Updated metadata generation to handle async params:
```typescript
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  // Generate metadata using resolved id
}
```

### Prevention
To prevent similar issues in future Next.js upgrades:
1. Always check the Next.js release notes for breaking changes
2. Pay special attention to type system changes in the App Router
3. Keep ESLint config in sync with Next.js version
4. Test builds with strict type checking enabled

### Related Core Web Vitals Impact
The fix maintains our Core Web Vitals optimizations:
- LCP: Font loading and content prioritization preserved
- FID: JavaScript execution patterns remain optimized
- CLS: Layout stability maintained through proper async handling

## Current Status
All identified issues have been addressed. The application should now:
- Handle SSR properly
- Have correct TypeScript types
- Prevent hydration mismatches
- Manage theme state correctly

## Previous Issues

## 2025-03-04 11:01:32 PST - Initial Component Implementation Issues

### Issue 1: Missing Context Provider
**Status**: Fixed
**Component**: RootLayout.tsx
**Error**: ThemeContext is used but ThemeProvider is not properly set up in the component hierarchy
**Impact**: Theme switching functionality is broken
**Fix Applied**: 
1. Moved ThemeProvider to layout.tsx
2. Removed duplicate ThemeProvider from RootLayout.tsx

### Issue 2: Missing Image Directory
**Status**: Fixed
**Component**: FeaturedProjects.tsx
**Error**: Image paths are hardcoded but the /images directory doesn't exist
**Impact**: Project images will not load
**Fix Applied**:
1. Created public/images directory
2. Updated project image to use existing vercel.svg as placeholder

### Issue 3: Incomplete Page Implementation
**Status**: Fixed
**Component**: page.tsx
**Error**: New homepage components not properly integrated
**Impact**: Homepage not displaying new components
**Fix Applied**:
1. Updated page.tsx with proper imports and component structure
2. Ensured all imports are working correctly

### Issue 4: Font Configuration Mismatch
**Status**: Fixed
**Component**: layout.tsx
**Error**: Font configuration changed from Geist to Inter but Tailwind config still references old values
**Impact**: Font styling inconsistencies
**Fix Applied**:
1. Updated Tailwind config to use Inter font
2. Added proper color configuration for theme support