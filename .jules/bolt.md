## 2026-04-24 - Optimization: Direct encoding in fs.readFileSync
**Learning:** In Node.js components of the codebase, avoid unnecessary intermediate memory allocations by passing the encoding string directly to fs.readFileSync (e.g., `fs.readFileSync(file, 'utf8')`) instead of calling `.toString()` on the resulting Buffer. This serves as a valid micro-optimization.
**Action:** Replaced instances of `fs.readFileSync(...).toString()` with `fs.readFileSync(..., 'utf8')` and correctly updated type assertions (`as string`) in TypeScript tests utilizing memfs.
