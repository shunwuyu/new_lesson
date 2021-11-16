// 单词的边界
var str = "aa bb cc dd";
var reg = /\b\w+\b/g;
console.log(str.match(reg));//aa