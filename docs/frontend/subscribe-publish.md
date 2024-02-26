---
  lang: zh-CN
  title: 订阅发布模式
  description: 订阅 发布 publish subscribe
---

# 订阅发布模式实现

``` js
class PubSub {
  constructor() {
    this.subscribers = {};
  }

  // 订阅事件
  subscribe(event, callback) {
    if (!this.subscribers[event]) {
      this.subscribers[event] = []
    }
    this.subscribers[event].push(callback)
  }
  // 发布事件
  publish(event,data) {
    (this.subscribers[event] || []).forEach(callback => callback(data))
  }
  unsubscribe(event, callback) {
    if (callback) {
      this.subscribers[event] = (this.subscribers[event] || []).filter(cb => cb !== callback)
    } else {
      this.subscribers[event] = [];
    }
  }
}

const ps = new PubSub();

const func1 = (data) => console.log('func1',data);
const func2 = (data) => console.log('func2',data);

console.log('111')
ps.subscribe('data', func1);
ps.publish('data',{data: 'data'});

console.log('222')  
ps.subscribe('data', func2);
ps.publish('data',{data: 'data'});

console.log('333')
ps.unsubscribe('data',func1);
ps.publish('data',{data: 'data'});

//输出
/*
111 //订阅事件名为data的事件1
func1 { data: 'data' }
222 //订阅事件名为data的事件2
func1 { data: 'data' }
func2 { data: 'data' }
333 //取消订阅事件名为data的事件1
func2 { data: 'data' }
444 //取消事件名为data的所有事件
*/
```

## 分析
- `subscribe`函数用于保存事件名以及回调事件，考虑到事件名对应的回调事件可能有多个，所以用数组保存。
- `publish`根据事件名取出所有的回调事件，然后进行遍历调用。
- `unsubscribe`根据事件名取出所有的回调事件，然后过滤想要过滤的事件，如果事件为空，则将整个事件的回调事件数组置空。