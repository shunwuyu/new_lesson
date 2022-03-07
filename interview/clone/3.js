let arr = [1, 2, {val: 4}];
let newArr = arr.slice();
newArr[2].val = 1000;
// newArr[0] = 100;
console.log(arr);