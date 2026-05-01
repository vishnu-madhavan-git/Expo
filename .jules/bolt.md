## 2024-05-24 - readFileSync toString buffer allocation bypass
**Learning:** In standard Node.js applications, omitting the encoding parameter on `readFileSync` reads the file as a raw `Buffer`. If the immediate next operation is `.toString()`, this incurs an extra, temporary memory allocation for the intermediate buffer object that is then garbage collected. This is a common but subtle memory overhead pattern.
**Action:** Always prefer `readFileSync(path, 'utf8')` over `readFileSync(path).toString()` to directly create the string from the C++ layer and skip intermediate buffer allocations.
