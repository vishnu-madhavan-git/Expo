## 2024-05-18 - Avoid recording routine standard work
**Learning:** Only add journal entries for critical learnings like unexpected bottlenecks, failed optimizations, or surprising edge cases. Standard improvements like passing `utf8` directly to `readFileSync` (unless there is a surprise) do not need journaling.
**Action:** Do not journal standard optimizations.
