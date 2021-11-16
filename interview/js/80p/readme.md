[source](https://juejin.cn/post/6844903470466629640)
- 同步和异步代码的区别 变量作用域(let)、闭包  用立即执行函数
- 定时器工作机制  定时器工作机制  
  几乎同时设置了 5 个定时器，一般情况下，这些定时器都会在 1 秒之后触发，而循环完的输出是立即执行的，显而易见，正确的描述是 B。
  5 -> 0, 1, 2, 3, 4

- IIFE  Immediately Invoked Function Expression   声明即执行的函数表达式

  for (var i = 0; i < 5; i++) {
    (function(j) {  // j = i
        setTimeout(function() {
            console.log(new Date, j);
        }, 1000);
    })(i);
}

console.log(new Date, i);

- 基本类型（Primitive Type）的参数传递是按值传递（Pass by Value）的特征，

- 块级作用域