## 2024-03-24 - File Reading Micro-optimization
**Learning:** In Node.js, passing the encoding string (e.g., 'utf8') directly to `fs.readFileSync` avoids an unnecessary intermediate memory allocation for a Buffer, making it slightly more efficient than calling `.toString()` on the returned Buffer.
**Action:** When refactoring file reads in Node.js code, prefer passing the encoding string directly to `fs.readFileSync`.
