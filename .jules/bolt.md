
## 2025-02-19 - Regex Optimization over Reducers in Routing
**Learning:** Routing systems like `expo-router` frequently match segments against groups iteratively. Recompiling or applying dynamic regex within array loop structures like `.reduce` over-allocates objects and runs significantly slower than using `.filter` with a static pre-compiled regex for segment checks.
**Action:** When inspecting array iteration on hot code paths (such as path resolution or routing matchers), prefer extracting the check to a static pre-compiled Regex test rather than using `.reduce` with an inline complex matcher, which yielded a ~27% speedup on 100k segment passes.
