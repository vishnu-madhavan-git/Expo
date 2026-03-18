## 2024-03-18 - Avoid array recreation in style prop for React Native Web
**Learning:** In React Native Web components, avoid passing array literals to style props like `style={[style, blurStyle]}` when one of the elements is a dynamically computed object. Doing so breaks referential equality on every render, which negates the benefits of memoization and causes unnecessary re-renders.
**Action:** Use `useMemo` or combine the objects beforehand to preserve referential equality.
