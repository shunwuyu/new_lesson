https://juejin.cn/post/6939691851746279437#heading-2

- 302 表示临时重定向
  暂时不能被访问了，但是之后过一段时间还是可以继续访问
  - 资源需要权限， 去登录 登录回来后， 可以继续访问
  
  - 301 一个新的网站 地址的资源被永久移除了
    以后都不应该访问这个地址，搜索引擎抓取的时候也会用新的地址替换这个老的
    location 首部去获取到返回的地址 
    http://baidu.com     https://www.baidu.com

    HTTP/1.1 301 Moved Permanently
    Location: http://itbilu.com/

    HTTP/1.1 302 Found
    Location: http://itbilu.com/