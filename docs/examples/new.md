---
outline: deep
---

# Calling constructor with new
All members of `New` proxy all [standard built-in objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects) of ECMAScript 2023+. `New` uses symbols of `Global`. There are all symbols of `New` exported in source code below.

## Source code
<<< @/../packages/example/src/idiom/New/raw.mjs{js}

## Building: ESM / Uncompressed
<<< @/../packages/example/src/idiom/New/.gen.mjs{js}

## Building: ESM / Compressed
<<< @/../packages/example/src/idiom/New/.min.gen.mjs{js}

## Building: CJS / Uncompressed
<<< @/../packages/example/src/idiom/New/.gen.cjs{js}

## Building: CJS / Compressed
<<< @/../packages/example/src/idiom/New/.min.gen.cjs{js}
