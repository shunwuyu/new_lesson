[source](https://juejin.cn/post/6999995384911265806#heading-2)

- 新手
  这段代码违背了我们各司其责这个原则的！
  1. 可读性
    修改一些样式，修改一些结构
    网页深色与浅色模式的切换
  2. 换成别的颜色, 修改JS代码来操作?过渡效果?
- 新手优化版
  修改元素的类名className，没有直接操作页面的样式，可读性也得到了很大的提升。
- 大师版
  最好的JS代码，就是不写JS！！！如何写出没有bug的JS，那就是不写JS！

# slide
  1. display:table 好用

# React2-路由
  服务端路由
  服务端路由，请求发送到服务端，服务端返回对应的页面内容
  服务端路由是多页面应用，我们通过向服务端请求不同的路径，服务端返回我们不同的页面

  客户端路由
  请求不发送到服务端，由客户端更新页面
  客户端路由是单页面应用，我们通过js来动态控制页面展示的内容，对于数据来说，通过ajax的方式异步从服务端获取。

  https://juejin.cn/post/7000905043666796574
  