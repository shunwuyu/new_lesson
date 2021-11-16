// 实现一个无限累加函数
// https://juejin.cn/post/6873215243804213262#heading-9
// 用 JS 实现一个无限累加的函数 add，示例如下：
// add(1); // 1
// add(1)(2);  // 3
// add(1)(2)(3)； // 6
// add(1)(2)(3)(4)； // 10 

function add(a) {
  function sum(b) { // 使用闭包
      a = b ? a + b : a; // 累加
      return sum;
  }
  sum.toString = function() { // 只在最后一次调用
      return a;
  }
  return sum; // 返回一个函数
}

// console.log(typeof String(add(1)))				// 1
add(1)
add(1, 2)
// console.log(add(1)(2))  			// 3
add(1)(2)(3) 		// 6
console.log(add(1)(2)(3).toString())
