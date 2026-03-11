## 2026-03-11 - Optimizing BlurView on Web
**Learning:** In React Native Web components like `BlurView.web.tsx`, styles generated during render from props (like `getBlurStyle`) can cause unnecessary re-renders if not memoized, especially if passed as inline objects to primitives like `View`.
**Action:** Use `useMemo` to memoize derived styles based on props in web implementations of native components.
