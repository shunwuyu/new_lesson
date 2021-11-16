var http = require('http');

var server = http.createServer(function (req, res) {
  // location 首部去获取到返回的地址 
  // http  httpssss
  // res.writeHead(301, {'Location': 'http://itbilu.com/'});
  // 如果不删除历史就访问不了了  永久
  res.writeHead(302, {'Location': 'http://itbilu.com/'});
  console.log(res._header, '--------'); // 请求头
  res.end();
});

server.listen(3100)