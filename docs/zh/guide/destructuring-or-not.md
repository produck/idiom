# 是否结构命名空间 {#destructuring-or-not}

Idiom 提供了一套命名空间的设计，但对比经典编码方式，会带来一些负担。你可能并不希望带着命名空间符号使用它，而是用 `const { ... }` 这样的方式将命名空间解构。

首先可以放心的是，这样做并不会破坏程序的正确性。

但问题发生在构建阶段。Rollup 会探测到这个命名空间的“包”符号被使用，从而导致生成一个“module对象”使最终构建制品的体积增大。

<<< @/../packages/example/src/destructuring/raw.mjs{3 js} [原始代码]

**构建目标**

::: code-group

<<< @/../packages/example/src/destructuring/.gen.mjs{10-21 js} [ESM]

<<< @/../packages/example/src/destructuring/.min.gen.mjs{js} [ESM+Terser]

<<< @/../packages/example/src/destructuring/.gen.cjs{12-23 js} [CJS]

<<< @/../packages/example/src/destructuring/.min.gen.cjs{js} [CJS+Terser]

:::

由于Rollup的特性。导致ES命名空间被生成为一个模块，这将增大一定的体积。尽管如此，如果工程源码量很大时，这也许也不值一提。

## 最佳实践

<<< @/../packages/example/src/no-destructuring/raw.mjs{3 js} [原始代码]

**构建目标**

::: code-group

<<< @/../packages/example/src/no-destructuring/.gen.mjs{3 js} [ESM]

<<< @/../packages/example/src/no-destructuring/.min.gen.mjs{js} [ESM+Terser]

<<< @/../packages/example/src/no-destructuring/.gen.cjs{5 js} [CJS]

<<< @/../packages/example/src/no-destructuring/.min.gen.cjs{js} [CJS+Terser]

:::

## 讨论&建议 {#discussion-and-suggestions}

总之针对具体情况 Idiom 希望开发者对于：

::: warning 模块工程

建议严格地遵守不展开命名空间的使用规范，把有益的一方面交给用户。

:::

::: tip 最终工程

允许比较宽松的使用，由于此时的程序量足够大，“模块对象”造成的体积增加可以被忽略。

:::
