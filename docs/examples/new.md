---
outline: deep
---

# Calling constructor with new
All members of `New` proxy all [standard built-in objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects) of ECMAScript 2023+. `New` uses symbols of `Global`. There are all symbols of `New` exported in source code below.

## Source code
<<< @/../packages/example/src/new-constructor/raw.mjs{js}

## Building: ESM / Uncompressed
<<< @/../packages/example/src/new-constructor/.gen.mjs{js}

## Building: ESM / Compressed
<<< @/../packages/example/src/new-constructor/.min.gen.mjs{js}

## Building: CJS / Uncompressed
<<< @/../packages/example/src/new-constructor/.gen.cjs{js}

## Building: CJS / Compressed
<<< @/../packages/example/src/new-constructor/.min.gen.cjs{js}
