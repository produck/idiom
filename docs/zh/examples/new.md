---
outline: deep
---

# 构造函数调用（new）
`New`的成员代理了ECMAScript 2023+所有可以被使用的[标准内置对象](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects)。`New`命名空间使用来自`Global`的符号。以下实例包含`New`导出的所有符号。

## 示例原文
<<< @/../packages/example/src/new-constructor/raw.mjs{js}

## 构建成：ESM / 非压缩
<<< @/../packages/example/src/new-constructor/.gen.mjs{js}

## 构建成：ESM / 压缩后
<<< @/../packages/example/src/new-constructor/.min.gen.mjs{js}

## 构建成：CJS / 非压缩
<<< @/../packages/example/src/new-constructor/.gen.cjs{js}

## 构建成：CJS / 压缩后
<<< @/../packages/example/src/new-constructor/.min.gen.cjs{js}
