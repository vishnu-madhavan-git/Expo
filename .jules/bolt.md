## 2024-05-19 - Buffer Allocation Micro-Optimization
**Learning:** In Node.js, `fs.readFileSync(path).toString()` allocates a temporary Buffer object before converting it to a string. This is unnecessary overhead.
**Action:** Use `fs.readFileSync(path, 'utf8')` to directly read the file as a string, saving memory allocations and Garbage Collection cycles.
