// 他们只能被替换，不能被修改 基本数据类型都是不可变的
var str = 'I am hero';
console.log(str.toUpperCase());	// "I AM HERO"
// console.log(str);
// 返回的新字符串重新赋值给变量。
str = str.toUpperCase();	
console.log(str)

const obj = {a: 1}
obj.a = 2
console.log(obj);