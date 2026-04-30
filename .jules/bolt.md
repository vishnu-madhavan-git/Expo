## 2026-04-30 - Refactored fs.readFileSync calls
**Learning:** Calling `.toString()` on the Buffer returned by `fs.readFileSync(path)` causes unnecessary intermediate memory allocations and string conversion overhead. Passing the encoding directly as `fs.readFileSync(path, 'utf8')` is faster and more memory efficient.
**Action:** Always prefer `fs.readFileSync(path, 'utf8')` over chaining `.toString()` in Node.js scripts.
