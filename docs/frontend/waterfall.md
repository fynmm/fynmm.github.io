---
  lang: zh-CN
  title: 原生js实现
  description: 瀑布流 js 
---

# 瀑布流 - 原生js实现

效果图
![效果图](image.png)



## 思路
::: tip 第一步
用一个`<div class="container"></div>`作为所有图片的容器。
:::

::: tip 第二步
用一个`<div class="box"></div>`作为每一项
:::

::: tip 第三步
在每个`box`里添加`<div class="box-img"></div>`
:::

::: tip 第四步
在每个`box-img`里添加图片`<img src="xxx" />`
:::

::: tip 第五步
由于我们使用了`float`布局，我们需要计算每张图片的`left top`,首先第一行图片`top=0`,`left=index *  每个box的offsetWidth`,从第二行开始我们需要知道上一行高度最小的那个，所以在设置第一行图片时我们还需要维护第一行的高度，然后取最小值。就可以作为top,然后这个值对应的`index` * 150 就可以是left，最后再把这个高度再更新下。
:::


## 样式
```css

// 设置父元素相对布局
.container {
  position: relative;
}
// 设置box浮动效果、绝对布局
.box {
  position: absolute;
  float: left;
  padding: 5px;
}

// 给图片添加宽度、边框、阴影等效果
.box-img {
  width: 150px;
  padding: 5px;
  border: 1px solid #484848;
  box-shadow: 0 0 5px #484848;
}

.box-img img {
  width: 100%;
}
```


## 维护每张图片的位置
```js
  <script> 
    function render() {
      const a = document.getElementById('container');
      const boxes = a.children;
      // 获取第一张图片的"宽度"
      const boxWidth = boxes[0].offsetWidth;
      // 计算每行最多能放几张图片
      const number = Math.floor(document.documentElement.clientWidth / boxWidth)

      //高度缓存
      const heightArr = [];
      for (let index = 0; index < boxes.length; index++) {
        
        if (index < number) {
          //第一行 设置left和top
          heightArr.push(boxes[index].offsetHeight);
          boxes[index].style.left = index * boxWidth + 'px';
          boxes[index].style.top = 0
        } else {
          // 获取heightArr的最小值
          const min = Math.min.apply(null, heightArr);
          // 获取heightArr的最小值的index
          const minIndex = heightArr.indexOf(min)
          boxes[index].style.left = minIndex * boxWidth + 'px';
          boxes[index].style.top = min + 'px';
          // 更新高度最小值
          heightArr[minIndex] = boxes[index].offsetHeight + min;
        }
      }
    }

    window.onload = function () {
      // window加载完成之后执行onload
      render()
    }
  </script>
```

::: danger offsetWidth 和 offsetHeight 
注意：offsetWidth / offsetHeight = width/height + border + padding
:::

::: tip resize 
最后不要忘记
`window.addEventListener('resize', render)`
:::

## 源码
[源码](https://github.com/fynmm/projects/blob/main/frontend/index.html)





