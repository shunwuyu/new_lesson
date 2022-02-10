[source](https://mp.weixin.qq.com/s/3J5daDIfeH6Ezy0kTJwXxQ)

- 前端代码从 tsx/jsx 到部署上线被用户访问，中间大致会经历哪些过程？
- 上述过程中分别都有哪些考虑、指标和优化点，以满足复杂的业务需求？
- 可能大部分同学都知道强缓存/协商缓存，那前端各种产物（HTML、JS、CSS、IMAGES 等）应该用什么缓存策略？以及为什么？


- 前端三剑客何为？
  一个简单的页面, HTML、JavaScript、CSS 三剑客
- 怎么让简单的页面被网友访问？
  Nginx作为 Web 服务器
  过程
   只需将 HTML、JavaScript、CSS 等静态资源通过 FTP 等软件，上传到 Web 服务器（如 Nginx）某目录，将 Nginx 启动做简单配置即可让用户访问。

  link href="foo.css"
  link href="bar.css"
- 数据图表如何？ Network 如何?
  Name        Status  Type        Size      
  index.html   200    text/html   2.0kb
  foo.css      200    stylesheet  1.0kb
  bar.css      200    stylesheet  1.0KB
- 如何优化？
  - 利用缓存
    但仔细观察，用户每次访问都会请求 foo.css, bar.css 等静态文件，即使该文件并无变更。对带宽甚是浪费，对页面首屏性能等也有影响。于是在网络带宽紧张的互联网早期，计算机先贤们在 HTTP 协议上制定了多种缓存策略。

    浏览器缓存：浏览器缓存(Brower Caching)是浏览器对之前请求过的文件进行缓存，以便下一次访问时重复使用，节省带宽，提高访问速度，降低服务器压力。

    - 协商缓存
      一种策略是浏览器先问问服务器有没有变化，没变化就用旧资源。毕竟"问一问"的通信成本，远小于每次重新加载资源的成本。大致流程如下：
      协商缓存: 向服务器发送请求，服务器会根据这个请求的 Request Header 的一些参数ETag | Last-Modifed 来判断是否命中协商缓存，如果命中，则返回 304 状态码并带上新的 Response Header 通知浏览器从缓存中读取资源；
      ![](https://mmbiz.qpic.cn/mmbiz/mshqAkialV7HJWJU84PVdplKeh3EdLs9gT47fH9ztedNQaak1389ibmn6xiaSyts4XQUJhMYibRJMsoJf28SRw1E7g/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)
    
- 协商缓存后Network 变成了什么？
  ![](https://mmbiz.qpic.cn/mmbiz/mshqAkialV7HJWJU84PVdplKeh3EdLs9gN1NMtI0jWTH9X0LWJ077UKicDmlfSTf5uynMME0HTTibh10OMYUhvxHg/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

    - 强缓存
      通过协商缓存，我们大幅优化了资源未变更时的网络请求，节约大量带宽，网站首屏性能也有不错的提升，美滋滋！
      有什么缺点呢？
        一百个静态文件就有一百个协商请求。在资源未发生变更时，追求极致的我们也应该优化掉这个协商请求，毕竟没有买卖就没有伤害！
        强缓存：浏览器不会向服务器发送任何请求，直接从本地缓存中读取文件并返回Status Code: 200 OK。
        ![](https://mmbiz.qpic.cn/mmbiz/mshqAkialV7HJWJU84PVdplKeh3EdLs9gyiasFsAJLKOGyicfPInq7G14VunwhLfZGFFnNcxMPeOUQdoD4O0o0O1A/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

      缓存生效期间，浏览器是【自言自语】，和服务器无关。
    
- 强缓存  Network 是怎么样的？
  ![](https://mmbiz.qpic.cn/mmbiz/mshqAkialV7HJWJU84PVdplKeh3EdLs9gt7LLyDN8H2tw9wh2bib1TnXJR44e2q3J5Coc5nhicaN1kZWzdtLhAN3g/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)
  From DiskCache：从硬盘中读取。From MemoryCache：从内存中读取，速度最快。注：强缓存一般可在服务端通过设置 Cache-Control:max-age、Expires 等 ResponseHeader实现。

- 缓存更新问题
  鉴于页面（index.html）会频繁更新，而静态资源则相对稳定
    index.html 适合走协商缓存
    JS、CSS、IMAGES 等应该消灭协商请求，使用强缓存
    - 都不让浏览器发请求，但缓存还未到期我们发现有 bug，想更新 foo.css 怎么办？
      又想设置尽量长的时间走缓存，又想要能随时更新？
      href="foo.css?v=001"
      href="foo.css?v=002"

    统一加版本号的优点是简单粗暴快捷，
    对文件求摘要信息，摘要信息与文件内容一一对应，就有了一种可以精确到单个文件粒度的缓存控制依据。现在，我们把 URL 改成带文件摘要信息的：
    query-hash   foo.css?v=ddfa8798f
