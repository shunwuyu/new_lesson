[source](https://juejin.cn/post/6844903907651485710)
[source](https://juejin.cn/post/6939129392715005983)

- 如果要给闭包拟人一下的吗？ 谁比较适合
  四大名著
- 闭包 closure
  贾宝玉  
  一个函数和对其周围状态（lexical environment，词法环境）的引用捆绑在一起（或者说函数被引用包围）
  闭包让你可以在一个内层函数中访问到其外层函数的作用域
  在 JavaScript 中，每当创建一个函数，闭包就会在函数创建的同时被创建出来。

  执行栈上, 当函数执行完毕之后会从执行栈上移除, 但是堆上的作用域成员因为被外部引用不能释放, 因此内部函数依然可以访问外部函数的成员。   引用的放在堆内存中

  // 函数作为返回值
  function makeFun() {
    const msg = "Hello function";
    return function () {
      console.log(msg)
    }
  }
  const fn = makeFun()
  fn()

- once 函数
- 工资计算

