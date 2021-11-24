// JS 的提升是什么 https://www.cnblogs.com/chargeworld/p/12044650.html
// 提升是指 JS 解释器将所有变量和函数声明移动到当前作用域顶部的操作，提升有两种类型
// 变量提升
// 函数提升
// 用到了哪些语法特性？ 作用域， 变量提升
// JavaScript是解释型语言，这就是说它无需编译，直接由JavaScript引擎直接执行。
// 编译型语言：.exe  执行效率高 跨平台性差
// 解释型语言 程序不需要编译，程序在运行的过程中才用解释器编译成机器语言, 边编译边执行
// 跨平台性好 执行效率低 
// 在整体上，JavaScript的解析执行过程分为两个步骤：
// 编译
// 运行
// 编译是在解释器中进行，将代码编译成可执行码。运行是在JavaScript引擎中进行，执行可执行码。

// 编译过程
// 编译过程不必多说，我们只要清楚这个过程会将字符串代码编译为可执行码。
// 执行过程
// 重点是运行过程，运行又由两个过程组成
// 预解析  
//   1. 收集变量  变量提升
//     var声明的变量，初始值为undefined
//     arguments参数，值为传入的实参
//     function声明定义
//     优先级来确定：
//       function声明定义>函数参数>var声明的变量
//       let和const声明的变量不会在预解析阶段变量提升，只有在执行阶段执行到该行时才会声明该变量

//       当我们给一个未声明的变量赋值时，JavaScript引擎会认为我们是要声明一个全局变量。但如果我们访问一个为声明的全局变量，会报错
//       var a = function(){}，变量提升时，a是值为undefined的变量而不是函数定义
//   2. 分号补全
// 执行


var a = 2
foo() // 正常运行, foo 已被提升

function foo() {
  a = 3
  console.log(a)   // 3
  var a                        
}

console.log( a )

// 在 ES6 中，let 和const 跟 var、class和function一样也会被提升，只是在进入作用域和被声明之间有一段时间不能访问它们，这段时间是临时死区(TDZ)。

// console.log(aLet)  // would throw ReferenceError Cannot access 'aLet' before initialization
let  aLet;
console.log(aLet); // undefined
aLet = 10;
console.log(aLet); // 10
