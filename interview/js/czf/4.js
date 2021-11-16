// add(1)(3,4)(3,5)
// add(2)(2)(3,5)

// function add(){
//   // 1 把所有参数转换成数组
//   let args = Array.prototype.slice.call(arguments)
//   // 2 再次调用add函数，传递合并当前与之前的参数
//   let fn = function() {
//       let arg_fn = Array.prototype.slice.call(arguments)
//       return add.apply(null, args.concat(arg_fn))
//   }
//   // 3 最后默认调用，返回合并的值
//   fn.toString = function() {
//       return args.reduce(function(a, b) {
//           return a + b
//       })
//   }
//   return fn
// }

// console.log(add(1)(3,4)(3,5).toString());
// // ES6写法
function add () {
  let args = [...arguments];
  let fn = function(){
      return add.apply(null, args.concat([...arguments]))
  } 
  fn.toString = () => args.reduce((a, b) => a + b)
  return fn;
}
console.log(add(2)(2)(3,5).toString())
