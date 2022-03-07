[source](https://juejin.cn/post/6844903986479251464#heading-49)
- 箭头函数和普通函数的区别
  箭头函数是不存在原型的
  const fn  = () => {}
  
- 写一个函数 判断是对象 
  const isObject = (target) => (typeof target === 'object' || typeof target === 'function') && target !== null;
- 那些对象可以遍历？
  如何写这个代码？
  const canTraverse = {
    '[object Map]': true,
    '[object Set]': true,
    '[object Array]': true,
    '[object Object]': true,
    '[object Arguments]': true,
  };


- 浅拷贝  英文是？    
  shallow  Clone 
- 谈到深拷贝，首先会想到什么？
  JSON.parse(JSON.stringify());
  能覆盖大多数的应用场景
  某些严格的场景来说，这个方法是有巨大的坑的
  那些？
  1. 无法解决循环引用问题
  9.js
    拷贝a会出现系统栈溢出
    因为出现了无限递归的情况
  2. 一些特殊对象
    RegExp, Date, Set, Map
  3. 无法拷贝函数

- 深拷贝中有哪个es6 特性 可以用上？ 
  weakmap


1. 什么是拷贝
  1.js  有拷贝吗？
  这是直接赋值的情况，不涉及任何拷贝， 那是什么？
  引用式赋值

2. 浅拷贝
  1.js 如何实现拷贝呢？ 2.js
  - newArr是arr浅拷贝后的结果 不是同一块空间
    这就是浅拷贝
    还有什么方法可以实现一样的效果
    ...  concat 
  - 这会有什么问题？ 3.js
    浅拷贝的限制  如果有对象的嵌套，那么浅拷贝将无能为力
    深拷贝 无限极的对象嵌套问题 实现彻底的拷贝

3. 实现浅拷贝的方式
  - 手动实现 4.js
  - Object.assign
    Object.assgin() 拷贝的是对象的属性的引用，而不是对象本身
  - concat浅拷贝数组
  - slice浅拷贝
  - 展开运算符

- 深拷贝
  1. 简易版及问题
  8.js

- pass掉 JSON.parse(JSON.stringify())后
  以问题为导向， 一步步完善我们的代码
  写的好 10.js
  - 循环引用怎么解决？
    创建一个Map。记录下已经拷贝过的对象，如果说已经拷贝过，那直接返回它行了。
    11.js
    好像是没有问题了, 拷贝也完成了。但还是有一个潜在的坑, 就是map 上的 key 和 map 构成了强引用关系，这是相当危险的。

    map 和 a一直是强引用的关系， 在程序结束之前，a 所占的内存空间一直不会被释放
    让 map 的 key 和 map 构成弱引用即可
    WeakMap，它是一种特殊的Map, 其中的键是弱引用的。其键必须是对象，而值可以是任意的

  - 拷贝特殊对象
    12.js
