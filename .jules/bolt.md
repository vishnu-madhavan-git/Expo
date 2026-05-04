## 2024-11-20 - Optimize readFileSync by removing intermediate buffer allocations
**Learning:** Calling `.toString()` on the buffer returned by `fs.readFileSync` allocates unnecessary memory for the intermediate Buffer object.
**Action:** Always pass the encoding, such as `utf8`, directly to `fs.readFileSync(filepath, "utf8")` when the goal is to read the file contents as a string.
