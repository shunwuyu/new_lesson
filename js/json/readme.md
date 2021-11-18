[source](https://juejin.cn/post/7017588385615200270)
- 如何确定对象是否有循环引用? 9.js
  let cyclicObj = {
    name: '前端胖头鱼',
  }
  cyclicObj.obj = cyclicObj
- getType 返回 type 的确切类型 10.js


- 环境
  产品同学在诉苦：线上用户不能提交表单了，带来了好多客诉，估计会是p0故障，希望尽快解决。
  测试同学在纳闷：这个场景测试和预发环境明明验过的，怎么线上就不行了。
  后端同学在讲原因：接口缺少了value字段，导致出错了。

  就是木有人说问题怎么解决!!!

- JSON.stringify()  方法将一个 JavaScript 对象或值转换为 JSON 字符串

- 当在循环引用时会抛出异常TypeError ("cyclic object value")（循环对象值）

- 当尝试去转换 BigInt 类型的值会抛出TypeError ("BigInt value can't be serialized in JSON")（BigInt值不能JSON序列化）

- undefined、任意的函数以及symbol值，出现在非数组对象的属性值中时在序列化过程中会被忽略
- undefined、任意的函数以及symbol值出现在数组中时会被转换成 null。
- undefined、任意的函数以及symbol值被单独转换时，会返回 undefined

