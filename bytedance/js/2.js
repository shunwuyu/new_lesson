const myInstanceof = (obj, Fn) => {
  if (typeof obj !== 'object') return false
  const structure = obj.__proto__
  if (structure === null) return false
  if (structure !== Fn.prototype) {
    return myInstanceof(structure, Fn)
  } else {
    return true
  }
}

// 测试用例
myInstanceof([], Array) // true
myInstanceof({}, Object) // true
myInstanceof(/1/, RegExp) // true
const Fn1 = function () {}
const a = new Fn1()
myInstanceof(a, Fn1) // true
myInstanceof(a, Object) // true
myInstanceof(1, Number) // false
myInstanceof('', String) // false
myInstanceof(new String('11'), String) // true
