// 如果比较的两个值中有一个是数字类型，就会尝试将另外一个值强制转换成数字，再进行比较
console.log(2 == "2")
console.log(2 === "2") // false
// 数组强制转换成数字的过程会先调用它的 toString方法转成字符串
console.log( [2].toString(), typeof [2].toString);
// 递归调用
console.log(2 == [[[2]]])