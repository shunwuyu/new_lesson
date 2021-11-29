https://www.ruanyifeng.com/blog/2019/09/react-hooks.html

- 例二， 有什么问题？ 怎么改
  

- 纯函数
  相同的输入，永远会得到相同的输出
  可变数据类型和不可变数据类型




- Hook 的意思是什么？
  Hook 这个单词的意思是"钩子"。
  React Hooks 的意思是，组件尽量写成纯函数，如果需要外部功能和副作用，就用钩子把外部代码"钩"进来。 React Hooks 就是那些钩子
  所有的钩子都是为函数引入外部功能，所以 React 约定，钩子一律使用use前缀命名，便于识别。你要使用 xxx 功能，钩子就命名为 usexxx。
  - useState()：状态钩子   纯函数不能有状态，所以把状态放在钩子里面。
  - useContext()：共享状态钩子
  - useReducer()：action 钩子
    Redux 的核心概念是，组件发出 action 与状态管理器通信。状态管理器收到 action 以后，使用 Reducer 函数算出新的状态，Reducer 函数的形式是(state, action) => newState。
  - 副作用钩子
    useEffect()用来引入具有副作用的操作，最常见的就是向服务器请求数据。以前，放在componentDidMount里面的代码，现在可以放在useEffect()


  

- 要在组件间共享状态？
  useContext()

- react 之前有函数组件吗？
  有 , 缺点是？
  之前为了UI。 
  这种写法有重大限制，必须是纯函数，不能包含状态，也不支持生命周期方法，因此无法取代类。



- react 写button   点击后更换文字
  传统方式
  Click me, please -> Thanks, been clicked!
  
  代码很"重", 
  真实的 React App 由多个类按照层级，一层层构成，
  复杂度成倍增长。再加入 Redux，就变得更复杂。
  Redux 的作者 Dan Abramov 总结了组件类的几个缺点
  - 大型组件很难拆分和重构，也很难测试。 class 中类相比函数嵌函数， 难
  - 业务逻辑分散在组件的各个方法之中，导致重复逻辑或关联逻辑。
    this,
  - 组件类引入了复杂的编程模式，比如 render props 和高阶组件。

二、 函数组件
  组件不要变成复杂的容器，最好只是数据流的管道。开发者根据需要，组合管道即可。 组件的最佳写法应该是函数，而不是类。

