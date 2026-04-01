## 2024-04-01 - Avoid .toString() on readFileSync buffers
**Learning:** Calling `.toString()` on the buffer returned by `readFileSync` causes an unnecessary intermediate memory allocation. Passing the encoding directly as the second argument (e.g., `'utf8'`) is more efficient.
**Action:** Always prefer `readFileSync(path, 'utf8')` over `readFileSync(path).toString()` to avoid unnecessary intermediate memory allocations when reading text files in Node.js components of the codebase.
