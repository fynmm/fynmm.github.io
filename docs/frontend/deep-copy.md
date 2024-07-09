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


## 进阶版
```js
function deepClone(obj,map = new WeakMap()) {
  if (typeof obj != 'object' || obj === null) {
    return obj;
  }
  if (obj instanceof Date) {
    return new Date(obj)
  }
  if (obj instanceof RegExp) {
    return new RegExp(obj)
  }
  if (map.has(obj)) {
    return map.get(obj)
  }
  let cloneObj = new obj.constructor();
  map.set(obj,cloneObj);
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      cloneObj[key] = deepClone(obj[key],map)
    }
  }
  return cloneObj;
}
```

