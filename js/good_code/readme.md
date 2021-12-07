[source](https://mp.weixin.qq.com/s/_KQcmDK7rxw4BxfIlPkRWA)

- 1.js 怎么改
  使用 const 定义 担心变量被重新赋值而引起意外情况
  当这种模式写多之后，你会发现在项目中几乎找不到几个用 let 的地方。
  提高正确性

- 以下代码的缺点是什么？
  let temp = 1;
  临时变量也是有意义的，这些都会增加阅读代码时的噪点
  <!-- salary balance -->
  let sb = 2000;
  不要缩写/简写单词， 可读性下降，意义表达不明确
  let info    userInfo
    count     count
  避免无意义的命名，你起的每一个名字都要能表明意思
- function 如何给一个函数命名？
  动词/宾语顺序
  doLogin  getUserInfo 
- boolean 命名可以有哪些方案
  isString  是不是
  has 有没有
  can  能不能     can
  able 能不能怎么样   scaleable

- 改代码
  1.js
- 多分支代码如何改？
  这里我们推荐用 Object 或 Map 作为条件存储。

- 纯函数
  4.js

- 哪些纯哪些不纯 5.js
   

[source](https://juejin.cn/post/7017626732932890661#heading-0)

- 3 & 2 结果是多少？

按位与（&）
在JS中，位运算的操作数会先转换为Int32  32位有符号整型
0b000 0000 0000 0000 0000 0000 0000 0011   3
0b000 0000 0000 0000 0000 0000 0000 0010   2
3 & 2   2