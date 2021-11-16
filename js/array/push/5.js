let arr = [4,5,6]
// 一次性插入
arr.unshift(1,2,3)

console.log(arr) // [1, 2, 3, 4, 5, 6]

let arr2 = [4,5,6]
// 插入多次
arr2.unshift(1)
arr2.unshift(2)
arr2.unshift(3)

console.log(arr2); // [3, 2, 1, 4, 5, 6]
