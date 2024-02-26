---
  lang: zh-CN
  title: 深拷贝
  description: 深拷贝,js,javascript
---

# JS-深拷贝

## 简单版 - 适用于简单的数据对象
```js

const data = {a: 1,b:[1,2,3],c:[{a:345}],d:function(){console.log(this.a)}};

const stringfyData = JSON.stringify(data);

const copiedData = JSON.parse(stringfyData);

data.a = 2;
console.log(data) // {a: 1,b:[1,2,3],c:[{a:345}],d:function(){console.log(this.a)}}
console.log(copiedData) // {a: 1,b:[1,2,3],c:[{a:345}]}
```
缺点： 无法拷贝函数属性,只适用于简单的数据对象


## 个人版
```js
function deepClone(obj = {}, hash = new WeakMap()) {
  if (typeof obj != 'object' || obj == null) {
    return obj;
  }
  if (hash.get(obj)) {
    return hash.get(obj);
  }
  let result;


  if (obj instanceof Array) {
    result = []
  } else {
    result = {}
  }
  hash.set(obj,result);
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      result[key] = deepClone(obj[key], hash)
    }
  }
  return result;
}
```

## ChatGPT版
```js
function deepCopy(obj, cache = new WeakMap()) {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }
  
  if (cache.has(obj)) {
    return cache.get(obj);
  }
  
  let result = Array.isArray(obj) ? [] : {};
  
  cache.set(obj, result);
  
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      result[key] = deepCopy(obj[key], cache);
    }
  }
  
  return result;
}
```

