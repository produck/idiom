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

::: warning 注意

Idiom 是仅 ESM 的软件包，且为了使用 Rollup 的去屑特性也应该使用 ESM 标准。不推荐用 `require()` 导入它。

:::

## 导入命名空间 {#importing-namespaces}

Idiom 使用起来非常简单，按需导入命名空间符号，按需改写原代码。以下导入`Instance`命名空间，给出一个简单操作数组的示例。

::: code-group

<<< @/../packages/example/src/simple/raw.mjs{1,6,7,8 js} [使用Idiom]

<<< @/../packages/example/src/simple-classical/raw.mjs{4,5,6 js} [传统形式]

:::

**构建目标**

::: code-group

<<< @/../packages/example/src/simple/.gen.mjs{22-30 js} [ESM]

<<< @/../packages/example/src/simple/.min.gen.mjs{js} [ESM+Terser]

<<< @/../packages/example/src/simple/.gen.cjs{24-32 js} [CJS]

<<< @/../packages/example/src/simple/.min.gen.cjs{js} [CJS+Terser]

:::

## 自定义别名 {#custom-alias}

基于刚才的示例，如果你觉得 `Instance` 这个符号过长，可以自定义符号映射来自由的替代它。

<<< @/../packages/example/src/simple-alias/raw.mjs{1,6,7,8 js} [使用Idiom]

## 下一步 {#what-s-next}

- 初步了解 Idiom 具体包含了哪些命名空间，继续阅读[命名空间总览](/zh/guide/namespaces)。

- 为了发挥 Idiom 的最大效果，请参考相关 [Rollup 配置](/zh/guide/rollup-configuration)。

- 使用命名空间看上去有些繁琐，也许可以结构它，参考[是否应该解构](/zh/guide/destructuring-or-not)来进一步思考。
