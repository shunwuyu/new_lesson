[source](https://www.zhangxinxu.com/wordpress/2021/05/promise-all-race-any/)

- 请求用户信息要些时间， 先显示loading,  请求后隐藏loading , 如何至少显示200ms?

- Vue3.0在unpkg和jsdelivr都有在线的CDN资源，都是国外的CDN 国内直接调用不确定哪个站点会抽风，加载慢，这时候可以两个资源都请求，哪个请求先成功就使用哪一个。

- 请求本来很快，还非要显示一个loading，这不是舍本逐末了吗？
  如果请求可以在200ms内完成，则不显示loading，如果要超过200ms，则至少显示200ms的loading。

- 什么时候用哪些？
  Promise.all 保证了并行， 并最终知识执行的结果  批量上传图片
  loading 一闪而过， 不太好看

- 一句话描述下Promise.all()、Promise.race()和Promise.any()的区别
  1. Promise.all()中的Promise序列会全部执行通过才认为是成功，否则认为是失败
  2. Promise.race()中的Promise序列中第一个执行完毕的是通过，则认为成功，如果第一个执行完毕的Promise是拒绝，则认为失败；
  3. Promise.any() 中的Promise序列只要有一个执行通过，则认为成功，如果全部拒绝，则认为失败；


