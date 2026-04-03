## 2024-11-20 - Concurrent file reads in directory traversal
**Learning:** When traversing directory hierarchies to locate configuration or ignore files, doing sequential synchronous file reads (e.g. `await fs.promises.readFile` inside a `for` loop) causes a performance bottleneck due to sequential I/O latency.
**Action:** Optimize by collecting target paths first and performing concurrent file reads using `Promise.all` to reduce I/O latency, while ensuring result parsing is kept sequential to maintain hierarchy-based precedence of the configuration rules.
