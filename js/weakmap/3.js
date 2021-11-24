// https://juejin.cn/post/6844903991550181390#heading-19
// 如何在 JS 中“深冻结”对象
// 如何让name 属性不能改变  Object.freeze
let person = {
  name: "Leonardo",
  profession: {
    name: "developer"
  }
}

Object.freeze(person); 
person.name = 'sss';
// person.profession.name = "doctor";
console.log(person.name, person);

// 怎么深冻结  哪一种算法思想？ 递归
function deepFreeze(object) {
  // 如何拿到所有的属性？  getOwnPropertySymbols
  let propNames = Object.getOwnPropertyNames(object);
  console.log(propNames, '---------------');
  for (let name of propNames) {
      let value = object[name];
      object[name] = value && typeof value === "object" ?
          deepFreeze(value) : value;
  }
  return Object.freeze(object);
}

deepFreeze(person);
person.profession.name = "doctor";
console.log(person);