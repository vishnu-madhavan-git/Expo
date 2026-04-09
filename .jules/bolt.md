## 2024-05-24 - [Avoid Buffer Allocations in fs.readFileSync]
**Learning:** Using `fs.readFileSync(path).toString()` instead of `fs.readFileSync(path, 'utf8')` creates an intermediary `Buffer` object before converting to a string. This causes unnecessary memory allocation. The Node.js `fs` API is designed to return a string immediately when the encoding parameter is provided, skipping the buffer step.
**Action:** When reading files as strings in Node.js environments (like `@expo/cli`), always pass the encoding directly to the file read method.
