function myNew(fn, ...args) {
  let obj = Object.create(fn.prototype);
  console.log(obj.__proto__, '-------------');
  let res = fn.call(obj, ...args);
  // if (res && (typeof res === "object" || typeof res === "function")) {
  //   return res;
  // }
  return obj;
}

function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.say = function() {
  console.log(this.age);
};

// let p1 = new Person("lihua", 18);
let p2 = myNew(Person, "lihua", 18)
console.log(p2);