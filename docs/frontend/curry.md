---
  lang: zh-CN
  title: 前端柯里化
  description: 前端柯里化,curry,柯里化,js,前端
---

# 前端柯里化

## 什么是前端柯里化
>*柯里化（Currying）是一种在函数式编程中常见的技术。它的名字来源于数学和计算机科学家哈斯凯尔·柯里。柯里化是将一个>多参数函数转换成一个嵌套的一元函数（即每次只接受一个参数的函数）的过程。* -- 来源于OpenAI。

举个例子:

```js
// 3个数相加
const add = function (a, b, c) {
  return a + b + c;
}
```

我们可以将它转成这样:

```js
const addCurry = function(a) {
  return function(b, c) {
    return a + b + c;
  }
}
```
此时，我们就相当于把`add`函数3个入参拆分: 

```js
add(1,2,3); // 6

addCurry(1)(2,3);

// 我们也可以这样
const add1 = addCurry(1);
add1(2,3); // 6
```

当然我们还可以这样拆分

```js
const addCurry = function(a) {
  return function(b) {
    return function(c) {
      return a + b + c;
    }
  }
}
const add1 = addCurry(1);
const add2 = add1(2);
add2(3); // 6

```

这个过程我们把一个多参数的`add`函数拆分成接收部分入参的其他函数`add1`，并返回一个函数`add2`，该函数又用来接收其他参数。然后该函数又可以重复之前的操作，也就是柯里化。


# 参数定长的柯里化
```js
function fn(a, b, c) {
  return a + b + c
}
function curry(fn) {
  const preParams = [].slice.call(arguments, 1);
  return function () {
    const currentParams = [].slice.call(arguments)
    const allParams = [...preParams, ...currentParams]
    if (allParams.length >= fn.length) {
      return fn.apply(this, allParams)
    } else {
      return curry.call(null,fn,...allParams);
    }
  }
}

var curried = curry(fn);
curried(1, 2, 3); // 6
curried(1, 2)(3); // 6
curried(1)(2, 3); // 6
curried(1)(2)(3); // 6
curried(7)(8)(9); // 24

```

# 参数不定长的柯里化

```js
function dynamicAdd() {
  return [...arguments].reduce((prev, curr) => {
    return prev + curr
  }, 0)
}
function curry(fn) {
  // 保存预置参数
  const presetArgs = [].slice.call(arguments, 1)
  // 返回一个新函数
  function curried () {
    // 新函数调用时会继续传参
    const restArgs = [].slice.call(arguments)
    const allArgs = [...presetArgs, ...restArgs]
    return curry.call(null, fn, ...allArgs)
  }
  // 重写toString
  curried.toString = function() {
    return fn.apply(null, presetArgs)
  }
  return curried;
}

```