## 2023-10-27 - Memoization in React Native Web
**Learning:** Recreating style objects inline on every render can cause unnecessary re-renders in React Native Web components.
**Action:** Use `useMemo` to memoize style objects that depend on props, like `blurStyle` in `BlurView`, to prevent unnecessary object recreation and potential re-renders downstream.
