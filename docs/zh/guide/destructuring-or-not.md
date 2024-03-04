# 是否解构命名空间 {#destructuring-or-not}

Idiom 提供了一套命名空间的设计，与经典方式相比会带来一些负担。你可能并不希望带着命名空间符号使用它，而是用 `const { ... }` 这样的方式将命名空间[解构](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)。

首先，可以放心的是，这样做程序仍然可以正确执行。

但问题发生在构建阶段。Rollup 会探测到这个命名空间的符号被**使用**，从而导致生成一个“module 对象”，使最终构建制品的体积增大。

<<< @/../packages/example/src/destructuring/raw.mjs{3 js} [原始代码]

::: code-group

<<< @/../packages/example/src/destructuring/.gen.mjs{10-21 js} [ESM]

<<< @/../packages/example/src/destructuring/.min.gen.mjs{js} [ESM+Terser]

<<< @/../packages/example/src/destructuring/.gen.cjs{12-23 js} [CJS]

<<< @/../packages/example/src/destructuring/.min.gen.cjs{js} [CJS+Terser]

:::

由此导致`ES`命名空间被生成为一个模块，制品尺寸增大。尽管如此，如果工程源码量足够大，这也许也不值一提。

## 最佳实践 {#best-practice}

保持符号的引用关系，令 Rollup “不认为”使用了模块。

<<< @/../packages/example/src/no-destructuring/raw.mjs{3 js} [原始代码]

::: code-group

<<< @/../packages/example/src/no-destructuring/.gen.mjs{3 js} [ESM]

<<< @/../packages/example/src/no-destructuring/.min.gen.mjs{js} [ESM+Terser]

<<< @/../packages/example/src/no-destructuring/.gen.cjs{5 js} [CJS]

<<< @/../packages/example/src/no-destructuring/.min.gen.cjs{js} [CJS+Terser]

:::

## 讨论&建议 {#discussion-and-suggestions}

总之针对具体情况， Idiom 希望开发者，对于：

::: warning 模块工程

严格地遵守不展开命名空间的使用规范，把有益的结果提供给用户。

:::

::: tip 最终工程

允许比较宽松的使用，尽可能遵守约定。

:::
