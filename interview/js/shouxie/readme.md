https://juejin.cn/post/6968713283884974088#heading-28

https://juejin.cn/post/6844903475021627400#heading-2

- 原型继承 怎么搞？
  ```
  function object(o){
	function F(){}
	F.prototype = o;
	return new F();
  }
  ```

- 实现模板字符串解析功能
  - replace 贪婪匹配
  - 正则 /g 
- 分片思想解决大数据量渲染问题
  一次性画出来， 肯定死机
  requestAnimationFrame 

- instanceof 问题
  原型式继承
  __proto__  prototype 


# JS原型链与继承
  摘自JavaScript高级程序设计:
  继承是OO语言中的一个最为人津津乐道的概念.许多OO语言都支持两种继承方式: 接口继承 和 实现继承 .而实现继承则继承实际的方法， 由于js中方法没有签名,在ECMAScript中无法实现接口继承.ECMAScript只支持实现继承,而且其 实现继承 主要是依靠原型链来实现的.
  ts  interface 

  构造函数,原型和实例的关系: 三角关系
  每个构造函数(constructor)都有一个原型对象(prototype), fn.prototype
  原型对象都包含一个指向构造函数的指针 constructor.prototype.constructor
  而实例(instance)都包含一个指向原型对象的内部指针.__proto__

  原型的本质是
  如果试图引用对象(实例instance)的某个属性,会首先在对象内部寻找该属性,直至找不到,然后才在该对象的原型(instance.prototype)里去找这个属性.
  - constructor1.prototype = instance2 会发生什么？
    - 1).首先会在instance1内部属性中找一遍;
    - 接着会在instance1.__proto__(constructor1.prototype)中找一遍,而constructor1.prototype 实际上是instance2, 也就是说在instance2中寻找该属性p1;
    - 如果instance2中还是没有,此时程序不会灰心,它会继续在instance2.__proto__(constructor2.prototype)中寻找...直至Object的原型对象
    instance1--> instance2 --> constructor2.prototype…-->Object.prototype
    原型链 . 
  - 确定原型和实例的关系
    instanceof 
      alert(instance instanceof Object);//true
      alert(instance instanceof Father);//true
      alert(instance instanceof Son);//true
    isPrototypeOf() 
      alert(Object.prototype.isPrototypeOf(instance));//true
      alert(Father.prototype.isPrototypeOf(instance));//true
      alert(Son.prototype.isPrototypeOf(instance));//true


    - 原型并非十分完美， 它包含如下两个问题.
      问题一: 当原型链中包含引用类型值的原型时,该引用类型值会被所有实例共享;
      引用类型改变不可控制
      问题二: 在创建子类型(例如创建Son的实例)时,不能向超类型(例如Father)的构造函数中传递参数. super()  

    - 借用构造函数 constructor stealing
      为解决原型链中上述两个问题


- 组合继承
  组合继承避免了原型链和借用构造函数的缺陷,融合了它们的优点,成为 JavaScript 中最常用的继承模式.
  instanceof 和 isPrototypeOf( )

  两次父类构造函数, 造成了不必要的消耗,

- 原型继承
  在object()函数内部, 先创建一个临时性的构造函数, 然后将传入的对象作为这个构造函数的原型,最后返回了这个临时类型的一个新实例.

  function object(o){
    // 先创建一个临时性的构造函数, 
    function F(){}
    <!-- 传入的对象作为这个构造函数的原型 -->
    F.prototype = o;
    <!-- 临时类型的一个新实例. -->
    return new F();
  }

  <!-- 一些共享数据的问题 -->

  <!-- object.create() 规范化了上面的原型式继承. -->

