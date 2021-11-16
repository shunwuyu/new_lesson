https://juejin.cn/post/6873215243804213262#heading-1

- +-*/==><  会想到什么？ 
  所有JS数据类型都拥有 valueOf 和 toString 两个方法
- 有哪个操作数自身与自身不等？ NaN   Object.is(NaN, NaN)
  有哪两个操作数会相等 undefined == null
- 如何判断两个对象相等？ 
  指向相同的引用。
- true == 2   false   类型转换   true 1 
true == "1"  true 
- +0 === -0  true   怎么为false 
  Object.is(+0, -0);


- class A {
    valueOf() {
        return 2
    }
    toString() {
        return '哈哈哈'
    }
  }
let a = new A()

- a == 1&& a == 2 && a == 3

== ===  以及Object.is 的区别

1. ==
  - 会进行强制类型转换
  - 转换规则
    - 如果有一个操作数是布尔值 则在比较相等性之前先将其转换为数值——false 转换为 0，而true 转换为 1   true == 1  true == 2
    - 如果一个操作数是字符串，另一个操作数是数值，在比较相等性之前先将字符串转换为数值;
    - 如果一个操作数是对象，另一个操作数不是，则调用对象的 valueOf()方法，用得到的基本类型值按照前面的规则进行比较; 这两个操作符在进行比较时则要遵循下列规则。
    - null 和 undefined 是相等的。
    - 要比较相等性之前，不能将 null 和 undefined 转换成其他任何值。
    - 如果有一个操作数是 NaN，则相等操作符返回 false，而不相等操作符返回 true。重要提示⚠️：即使两个操作数都是 NaN，相等操作符也返回 false;因为按照规则，NaN 不等于 NaN。
    - 如果两个操作数都是对象，则比较它们是不是同一个对象。如果两个操作数都指向同一个对象，则相等操作符返回 true;否则，返回 false


基本上，所有JS数据类型都拥有这两个方法, null除外
它们俩是位于原型链上的方法，也是为了解决javascript值运算与显示的问题。

自动调用？


- Object.is
  1.也不会进行强制类型转换。
  与===有以下几点不同：
  1.+0===-0，Object.is(+0, -0)为 false



