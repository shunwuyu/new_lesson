for (var i = 0; i < 5; i++) {
  (function(j) {
      setTimeout(function() {
          console.log(new Date, j);
      }, 1000 * j);  // 这里修改 0~4 的定时器时间
  })(i);
}

setTimeout(function() { // 这里增加定时器，超时设置为 5 秒
  console.log(new Date, i);
}, 1000 * i);

