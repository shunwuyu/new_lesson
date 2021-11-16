// a===1&&a===2&&a===3 为 true

// class A {
//   constructor(value) {
//       this.value = value;
//   }
//   valueOf() {
//       return this.value++;
//   }
// }
// const a = new A(1);
// if (a == 1 && a == 2 && a == 3) {
//   console.log("Hi Libai!");
// }

let value = 1;
Object.defineProperty(window, 'a', {
    get() {
        return value++
    }
})
if (a === 1 && a === 2 && a === 3) {
    console.log("Hi Libai!")
}
