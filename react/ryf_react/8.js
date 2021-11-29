function A(a) {
  return function(b) {
    return a = a + b;
  }
}
// 不纯
var B = A(5);
console.log(B(1)) // 6
console.log(B(1)) // 7