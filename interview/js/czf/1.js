class A {
  valueOf() {
      return 2
  }
  toString() {
      return '哈哈哈'
  }
}
let a = new A()
console.log('///')
console.log(a == 2) 
console.log(a === 2) 

console.log(String(a))
console.log(Number(a))