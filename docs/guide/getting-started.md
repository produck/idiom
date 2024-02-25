# 快速开始 {#getting-started}

## 安装 {#installation}

- [Node.js](https://nodejs.org/) 18 及以上版本。

使用以下方式安装它：

::: code-group

```sh [npm]
$ npm add @produck/idiom
```

```sh [pnpm]
$ pnpm add @produck/idiom
```

```sh [yarn]
$ yarn add @produck/idiom
```

```sh [bun]
$ bun add @produck/idiom
```

:::

::: tip 注意

Idiom 是仅 ESM 的软件包，且为了使用 Rollup 的去屑特性也应该使用 ESM 标准。

不推荐用 `require()` 导入它。

:::

## 使用 {#importing-and-using}

```js
import { ES, Static } from '@produck/idiom';
```

## 不应解构命名空间 {#expand-namespaces}

不建议这样做，虽然并不会破坏程序的正确性。但在构建时，导致Rollup将名空间生成为一个模块对象，从而导致最终制品体积变大。

### 最佳实践

<<< @/../packages/example/src/no-destructuring/raw.mjs{3 js} [原始代码]

**构建目标**

::: code-group

<<< @/../packages/example/src/no-destructuring/.gen.mjs{3 js} [ESM]

<<< @/../packages/example/src/no-destructuring/.min.gen.mjs{js} [ESM+Terser]

<<< @/../packages/example/src/no-destructuring/.gen.cjs{5 js} [CJS]

<<< @/../packages/example/src/no-destructuring/.min.gen.cjs{js} [CJS+Terser]

:::

可以观察到，构建结果是简洁的，符合预期的。

### 不推荐的做法

<<< @/../packages/example/src/destructuring/raw.mjs{3 js} [原始代码]

**构建目标**

::: code-group

<<< @/../packages/example/src/destructuring/.gen.mjs{10-21 js} [ESM]

<<< @/../packages/example/src/destructuring/.min.gen.mjs{js} [ESM+Terser]

<<< @/../packages/example/src/destructuring/.gen.cjs{12-23 js} [CJS]

<<< @/../packages/example/src/destructuring/.min.gen.cjs{js} [CJS+Terser]

:::

由于Rollup的特性。导致ES命名空间被生成为一个模块，这将增大一定的体积。尽管如此，如果工程源码量很大时，这也许也不值一提。

总之关于各种工程的具体情况，Idiom 希望您：

::: danger 模块工程

建议严格地遵守不展开命名空间的使用规范，把有益的一方面交给用户。

:::

::: info 最终工程

允许比较宽松的使用，由于此时的程序量足够大，“模块对象”造成的体积增加可以被忽略。

:::

## 下一步 {#what-s-next}

- 了解所有命名空间

- 相关Rollup的构建配置

- 它的简单使用范围
