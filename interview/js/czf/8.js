class A {
  constructor(count) {
      this.count = count
  }
  toString() {
      return '我有这么多钱：' + this.count
  }
  valueOf() {
    return this.count
  }
}
let a = new A(100)

console.log(a)              // A {count: 100}
console.log(a.toString())   // 我有这么多钱：100
console.log(a + 1)    