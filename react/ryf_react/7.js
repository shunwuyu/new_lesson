function A(a) {
  a = 0;
  return function(b) {
    return a + b;
  }
}
var B = A(5);