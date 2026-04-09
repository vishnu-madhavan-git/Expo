
## 2024-03-14 - React Native Web Style Memoization Trap
**Learning:** Memoizing simple style objects using `useMemo` in React Native (or React Native Web) provides zero performance benefit and just adds hook overhead if the resulting object is passed to a `style` prop inside an inline array literal (e.g., `style={[baseStyle, memoizedStyle]}`). The parent component will still create a brand new array reference on every render, defeating any downstream referential equality checks.
**Action:** Avoid `useMemo` for simple style objects unless referential equality is preserved all the way down. Focus on eliminating unnecessary object allocations entirely, or target actual costly work (like network/blob memory leaks).
