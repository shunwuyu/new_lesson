[source](https://juejin.cn/post/6844903922453200904#heading-2)

# 虚拟DOM实现原理?

- 虚拟DOM本质上是JavaScript对象,是对真实DOM的抽象
- 状态变更时，记录新树和旧树的差异
- 最后把差异更新到真正的dom中


- 先序深度优先遍历的算法找到最少的转换步骤

