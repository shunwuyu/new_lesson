// 生成指定长度随机字符串
function randomString(n) {
  var str = 'abcdefghijklmnopqrstuvwxyz0123456789';
  var tmp = ''
  for (var i = 0; i < n; i++) {
    tmp += str.charAt(Math.round(Math.random()*str.length))
  }
  return tmp;
}

console.log(randomString(5))