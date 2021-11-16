function makeSalary(base) {
  return function(performance){
    return base + performance;
  }
}
const S5 = 10000; // 基本工资都是有档的
const S6 = 20000;
const makeSalaryS5 = makeSalary(S5);
const makeSalaryS6 = makeSalary(S6);

let A,B,C; // ....
A = makeSalaryS5(3000);
B = makeSalaryS6(4000);
C = makeSalaryS5(2000);
console.log(A, B, C);
