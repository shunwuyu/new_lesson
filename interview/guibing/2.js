let arr = [6, 4, 2, 5, 3, 1]
let m = Math.floor(arr.length / 2)
let left = arr.slice(0, m)
let right = arr.slice(m)
console.log(left, right)