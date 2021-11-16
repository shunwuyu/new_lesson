// 如果是一个结象， 怎么让基isNaN 为false
// let print = console.log;
// var person = {
//     age: 10,
//     name: "tom",
//     valueOf(){
//         return this.name 
//     }
// }
// console.log(isNaN(person))  // true


let print = console.log;
var person = {
    age: 10,
    name: "tom",
    valueOf(){
        return this.age 
    }
}
console.log(isNaN(person)) 
