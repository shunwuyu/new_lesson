// 转化为驼峰命名
var s1 = "get-element-by-id"
var f = function(s) {
  // [A-Z a-z 0-9_]
  return s.replace(/-\w/g, function(x) {
      console.log(x, '-----');
      // 数组还是slice
      return x.slice(1).toUpperCase();
  })
}
console.log(f(s1));