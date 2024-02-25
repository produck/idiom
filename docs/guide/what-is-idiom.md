# Idiom 是什么？ {#what-is-idiom}

Idiom（方言）是替代一些常用语句的符号集合，只针对基于 ESM 规范，并使用 Rollup 构建的工程。利用去屑特性，让它构建制品更简短、更晦涩。有时也对提升常用语句的重用程度有所帮助。总的来说，Idiom 只是用另一套符号代替原来的语句，且并不做额外的事情。

<div class="tip custom-block" style="padding-top: 8px">

只是想尝试一下？跳到[快速开始](./getting-started)。

</div>

<div class="tip custom-block" style="padding-top: 8px">

只是想看看效果？跳到[示例](/zh/examples/new)。

</div>

## 使用场景 {#use-cases}

任何 ECMAScript / TypeScript 工程，使用 ESM 标准开发，但最终使用 Rollup 构建，构建目标可以是任意格式（`output.format`），并使用@rollup/plugin-tersor 进行压缩。支持所有执行环境包括 Node.js、浏览器（Firefox、Chrome、Edge 等）。

## 开发体验 {#developer-experience}

Idiom 致力于在实现核心目标的基础上，保持符号使用时的可读性，让用户可以基于直觉使用它。

- **按需取用**：即使您使用 Idiom 也可以根据实际情况，来决定是否用 Idiom 替代原始表达式。

- **可扩展**：如果您也认同 Idiom 的目标，可以使用[访问器生成器](/)接口，创建符合 Idiom 约定的新符号。

- **破坏性**：有些使用了“链式调用”风格的原始语句，使用 Idiom 改造时，会破坏原有的表达便利。例如连续对数组进行操作（filter、map、forEach...），推荐您按照实际情况，考虑是否进行改造。

## 性能 {#performance}

- **一般情况**

  就大多数情况来说，例如符号`Object.assign`的实现只是使用任意的常量标识符引用了它。所以理论上使用新标识符的调用并不会对性能产生影响。

- **可预期的影响**

## Idiom 又是什么？ {#what-about-idiom}

Idiom 是Produck团队在经过多年开发后，逐渐总结出的关于提高制品交付要求的集中体现。虽然 Idiom 是开放的，但它将首先与多个 Produck 团队开发的工程深度协作。

Idiom 也同样欢迎有类似目标的同行，一起参与构建更严谨、更兼容、更广泛的土语体系。您可以通过发布关于您项目的 Idiom 符号，帮助用户受益。

## 展望

我们可以一同期待，有更多的工程引入了 Idiom。可以想象到用得越多，构建制品越小。最终工程的依赖模块使用 Idiom 越多，那么最终工程的用户越收益。
