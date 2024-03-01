# Idiom 是什么？ {#what-is-idiom}

Idiom（土语）是用于替代一些常用语句的符号集合。它只帮助那些遵循了 ESM 规范，并使用 [Rollup](https://cn.rollupjs.org/) 构建的工程。利用[去屑](https://cn.rollupjs.org/faqs/#what-is-tree-shaking)特性和 [@rollup/plugin-terser](https://github.com/rollup/plugins/tree/master/packages/terser#readme)，让构建后的制品更简短、更晦涩。有时也对提升常用语句的重用程度有所帮助。

总之，Idiom 只是用于实现另一种编码方式的模块，很纯粹，不多做额外的事情。

::: tip 提示

试一下？跳到[快速开始](./getting-started)。

:::

## 背景 {#background}

我们时常觉得在一个构建制品中，存在`Object.defineProperty(...)`这样的表达式，是有优化空间的。目前至少存在两个问题：
  - 原表达式字符串较长，多次使用这个语句会 **使制品偏大**。
  - 有时不希望在制品中 **暴露程序意图**，但上述的表达式最终不能被构建工具安全替换。

由此，为了适应 Rollup + [@rollup/plugin-terser](https://github.com/rollup/plugins/tree/master/packages/terser#readme) 的工具链特性，Idiom 使用函数定义的标识符取代了这些表达式，从而降低制品大小，表达更晦涩。

::: tip 提示

看看效果？跳到[示例](/zh/examples/new)。

:::

## 使用场景 {#use-cases}

任何 ECMAScript / [TypeScript](https://www.typescriptlang.org/) 工程，遵循 ESM 标准开发，最终使用 Rollup 构建，构建目标可以是任意格式（[`output.format`](https://rollupjs.org/configuration-options/#output-format)）。支持所有执行环境包括 [Node.js](https://nodejs.org/en)、浏览器（Firefox、Chrome、Edge 等）。

具体地说，`@produck/idiom`模块只针对 [ECMAScript](https://tc39.es/ecma262/) 的标准所包含的内容进行实现。也就是说，该项目不包含有关 DOM、Node.js 标准库等相关内容

## 开发体验 {#developer-experience}

Idiom 致力于在实现核心目标的基础上，保持符号使用时的可读性以基于直觉地使用。

- **按需取用**：即使您使用 Idiom 也可以根据实际情况，来决定是否用 Idiom 替代原始表达式。

- **可扩展**：如果您也认同 Idiom 的目标，可以使用[访问器生成器](/)接口，创建符合 Idiom 约定的新符号。

- **破坏性**：有些使用了“链式调用”风格的原始语句，使用 Idiom 改造时，会破坏原有的表达便利。例如连续对数组进行操作（filter、map、forEach...），推荐您按照实际情况，考虑是否进行改造。

## 性能 {#performance}

- **一般情况**

  就大多数情况来说，例如符号`Object.assign`是上下文不敏感的，Idiom 的实现只是使用新的常量标识符引用了它。所以理论上使用新标识符的调用并不会对性能产生影响。

- **可预期的影响**

  有一部分静态方法的符号是上下文敏感的，它们可能会存在绑定导致的性能损失。例如，所有的 [TypedArray](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) 和 [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) 的静态方法。

	::: info 例如

	[Int8Array.from()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/from)，从一个类数组或者可迭代对象中创建一个新类型数组。这个方法和 Array.from() 类似。

	[Promise.all()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all)，静态方法接受一个 Promise 可迭代对象作为输入，并返回一个 Promise。

	:::

	另外，所有的 [Instance](/) 命名空间下的符号，都存在绑定。但请回顾上述的[开发体验](#developer-experience)，任何时候使用 Idiom 都可以按需取用。

## Idiom 又是什么？ {#what-about-idiom}

Idiom 是 [Produck](https://produckjs.com) 在经过多年开发后，逐渐总结出的关于提高制品交付要求的集中体现。Idiom 是开放的，还将首先与多个 Produck 开发的工程深度协作，持续提升完备水平。

同时，也同样欢迎有类似目标的同行，一起参与构建更严谨、更兼容、更广泛的 Idiom 体系。您可以通过发布关于您项目的 Idiom 符号，帮助用户受益。也可以向我们提问题，以改善命名空间、接口、文档、规范等。

## 展望 {#future}

我们可以一同期待，有更多的工程引入了 Idiom。可以想象到用得越多，构建制品越小。最终工程的依赖模块使用 Idiom 越多，那么最终工程的用户越收益。
