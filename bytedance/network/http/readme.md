HTTP 常用的请求方式
  http/1.1 规定如下请求方法：
  - GET：通用获取数据
  - HEAD：获取资源的元信息 ?
    - 只请求资源的首部；
    - 检查超链接的有效性；
    - 检查网页是否被修改；
    - 多用于自动搜索机器人获取网页的标志信息，获取rss种子信息，或者传递安全认证信息等
  - POST：提交数据
  - PUT：修改数据
  - PATH: 修改数据
  - DELETE：删除数据
  - CONNECT：建立连接隧道，用于代理服务器
  - OPTIONS：列出可对资源实行的请求方法，常用于跨域 ?
  - TRACE：追踪请求-响应的传输路径

http://localhost:3000/posts/
设计这个url
http://localhost:3000/posts/1/comments

PUT
http://localhost:3000/posts/2
{
  title: ""
}

PATH
http://localhost:3000/posts/1
{
  title: ""
}


DELETE
http://localhost:3000/posts/2

