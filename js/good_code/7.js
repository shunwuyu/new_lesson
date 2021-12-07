console.log(3 & 2)    // 2
console.log(10 | 3)   // 11

// 权限设计
let vue = 1
let react = 1 << 1
let node = 1 << 2
let webpack = 1 << 3
// console.log(node);
let woniu = vue | react | node;
console.log(woniu & vue);
console.log(woniu & webpack);

