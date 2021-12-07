// 不纯的， minimum 可能被其他操作改变
// let minimum = 21;

// function checkAge(age) {
//   return age >= minimum;
// }


// 纯的
function checkAge(age) {
  const minimum = 21;
  return age >= minimum;
}