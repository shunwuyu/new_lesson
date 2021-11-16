// 非闭包
function makeSalary(base, performance) {
  return base + performance;
}

const S5 = 10000;
const S6 = 20000;
let A,B,C;
A = makeSalary(S5, 3000);
B = makeSalary(S6, 4000);
C = makeSalary(S5, 2000);
console.log(A, B, C);