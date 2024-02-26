---
  lang: zh-CN
  title: react面试题
  description: react 面试题 前端 js
---

# React面试题
## useEffect和useLayoutEffect有什么区别
`useEffect`和`useLayoutEffect`都是`React Hooks`中的函数，用于处理副作用。但是，它们之间存在一些主要区别：

- 执行时间：`useEffect`在每次渲染后异步执行，不会阻塞浏览器更新屏幕，使得你的应用看起来响应更快。相反，`useLayoutEffect`在浏览器布局与绘制之后同步执行，可能会导致一些性能问题。
- 使用场景：由于`useEffect`是异步的，所以如果你需要等待DOM更新完成后再进行操作（例如获取元素的尺寸或位置），那么就需要使用`useLayoutEffect`。而对于大部分网络请求或者订阅事件这样的异步操作，则推荐使用`useEffect`。
- 服务器端渲染(SSR)：在服务器端渲染时，由于没有DOM环境，所以`useLayoutEffect`会直接跳过不执行。而`useEffect`也不会执行，但可以设置为在客户端再次渲染时执行。
- 总结来说，在大多数情况下我们都应该使用 `useEffect`, 但当我们需要同步修改 DOM，并且希望用户在渲染前看到更新结果时, 应该使用 `useLayoutEffect`.