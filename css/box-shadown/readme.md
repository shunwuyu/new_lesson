[source](https://juejin.cn/post/6992374133392670757)

- blur效果的话会出现三个方向的阴影
  第三参数和第四参数相互抵消，可以让其他边框效果隐藏。

- 如何给元素加阴影， 一个元素可以添加几个阴影？
  box-shadow:offset-x offset-y blur spread color position
  offset-x
  - 指定阴影的水平偏移量。即在x轴上阴影的位置。正值使阴影出现在元素的右边，而负值使阴影出现在元素的左边。
  offset-y
  - 指定阴影的垂直偏移量。即在y轴上阴影的位置。正值使阴影出现在元素的下边，而负值使阴影出现在元素的上边。
  blur 
  - 阴影的模糊程度,值越大越模糊。
  spred
  - 阴影的延伸尺寸，值越大，增加的越多。
  - posiiton  inset内部阴影

  - box-shadow 属性能在单个元素上接受多个阴影
  , 逗号分隔


https://juejin.cn/post/7011693734496583710
