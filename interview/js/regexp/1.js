/**
 * 
 * @desc   判断是否为邮箱地址
 * @param  {String}  str
 * @return {Boolean} 
 */
// \w：匹配包括下划线的任何单词字符 [A-Za-z0-9_] 。
// /\w+/.test("abc")
// /\w+/.test("国家") false 
// /\w/.test("-")
// + 一次或多次  
// * 一次或者多次（0次、或1次、或多次）。   
// ? 0 次或一次 {m, n} 怎么表达
function isEmail(str) {
  return /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(str);
}

var str1 = 'cn42du@163.com';
var str2 = 'ifat3@sina.com.cn';
var str3 = 'ifat3.it@163.com';
var str4 = 'ifat3_-.@42du.cn';
var str4 = '毛三胖@42du.cn';// false
console.log(isEmail(str1));
console.log(isEmail(str2));
console.log(isEmail(str3));
console.log(isEmail(str4));
