[source](https://juejin.cn/post/6844903448664604680)

https://juejin.cn/post/6844903569087266823

https://juejin.cn/post/6844903779700047885#heading-9

1.    anim.html https://chenjigeng.github.io/example/share/%E9%81%BF%E5%85%8D%E5%9B%9E%E6%B5%81%E9%87%8D%E7%BB%98/%E5%B0%86%E5%A4%8D%E6%9D%82%E5%8A%A8%E7%94%BB%E6%B5%AE%E5%8A%A8%E5%8C%96.html  看到了什么？

- 浏览器使用流式布局模型 (Flow Based Layout)。
- 浏览器会把HTML解析成DOM，把CSS解析成CSSOM，DOM和CSSOM合并就产生了Render Tree。
- 有了RenderTree，我们就知道了所有节点的样式，然后计算他们在页面上的大小和位置，最后把节点绘制到页面上。
- 由于浏览器使用流式布局，对Render Tree的计算通常只需要遍历一次就可以完成，但table及其内部元素除外，他们可能需要多次计算，通常要花3倍于同等元素的时间，这也是为什么要避免使用table布局的原因之一。

回流 (Reflow)

当Render Tree中部分或全部元素的尺寸、结构、或某些属性发生改变时，浏览器重新渲染部分或全部文档的过程称为回流。
  - 页面首次渲染
  - 浏览器窗口大小发生改变  resize   防抖
  - 元素尺寸或位置发生改变
  - 元素内容变化（文字数量或图片大小等等）
  - 元素字体大小变化
  - 添加或者删除可见的DOM元素
  - 激活CSS伪类
  - 查询某些属性或调用某些方法
  clientWidth、clientHeight、clientTop、clientLeft
  offsetWidth、offsetHeight、offsetTop、offsetLeft
  scrollWidth、scrollHeight、scrollTop、scrollLeft
  scrollIntoView()、scrollIntoViewIfNeeded()
  getComputedStyle()
  getBoundingClientRect()
  scrollTo()


- 重绘 (Repaint)
  color、background-color、visibility等

  回流比重绘的代价要更高

  有时即使仅仅回流一个单一的元素，它的父元素以及任何跟随它的元素也会产生回流。

  现代浏览器会对频繁的回流或重绘操作进行优化：

  浏览器会维护一个队列，把所有引起回流和重绘的操作放入队列中，如果队列中的任务数量或者时间间隔达到一个阈值的，浏览器就会将队列清空，进行一次批处理，这样可以把多次回流和重绘变成一次。

css
  - 避免使用table布局。
  - 尽可能在DOM树的最末端改变class。
  - 避免设置多层内联样式。
  - 将动画效果应用到position属性为absolute或fixed的元素上。\
  - 避免使用CSS表达式（例如：calc()）。

JavaScript
  - 避免频繁操作样式，最好一次性重写style属性，或者将样式列表定义为class并一次性更改class属性。
  - 避免频繁操作DOM，创建一个documentFragment，在它上面应用所有DOM操作，最后再把它添加到文档中。
  - 也可以先为元素设置display: none，操作结束后再把它显示出来。因为在display属性为none的元素上进行的DOM操作不会引发回流和重绘。
  - 避免频繁读取会引发回流/重绘的属性，如果确实需要多次使用，就用一个变量缓存起来。
  - 对具有复杂动画的元素使用绝对定位，使它脱离文档流，否则会引起父元素及后续元素频繁回流。


let el = document.getElementById('app');
el.style.width = (el.offsetWidth + 1) + 'px';
el.style.width = 1 + 'px'

现代浏览器（也就是说有渲染队列的）应当是一次，古董的应当是2次

