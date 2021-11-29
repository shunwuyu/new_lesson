// var a = 5;
const a = 5;
function A(b) {
  // 非常不纯  变量a很容易被修改，这就会导致每次调用A(5)的返回值改变。
  return a + b;
}
A(5);