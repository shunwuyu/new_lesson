// const obj = {a: 5};
const obj = Object.freeze({a: 5}); // 无法冻结嵌套的对象
// const obj = Object.freeze({a: {a: 5}});
// obj.a.a = 10;
function A(b) {
  return obj.a + b;
}
A(5);