[source](https://qcsite.gatsbyjs.io/build-your-own-react/)

- 这是一张什么图？
  

- 不适用react  怎么渲染了和 React 相同的内容。
  ```js
    const element = <h1 title="foo">Hello</h1>
    const container = document.getElementById("root")
    ReactDOM.render(element, container)
  ```
  1. 对象
  2. dom api

- react 最最基本的任务是什么？
  把 JSX 代码变成原生 JS 代码吧
  ```js
    const element = <h1 title="foo">Hello</h1>
    const container = document.getElementById("root")
    ReactDOM.render(element, container)
  ```

- const element = <h1 title="foo">Hello</h1>  
  从原生js角度看  有什么问题？
  不是合法的 JavaScript 代码
  将其替换成合法的 JavaScript 代码
  为什么要这么干呢？
  好读， 

- 你觉的大概流程是怎么样的呢？
  - JSX 通过构建工具 Babel 转换成 JS
  将标签中的代码替换成 createElement
  并把标签名、参数和子节点作为参数传入
  - React.createElement 验证入参并生成了一个对象。因此我们将其替换成如下代码。
    ```js
      const element = React.createElement(
        "h1",
        { title: "foo" },
        "Hello"
      )
    ```

- JSX 元素 转成什么对象？
  ```js
    const element = {
    type: "h1",  // 字符串， 节点类型  tagName 传给 document.createElement 创建HTML元素。 还可以是什么？  函数
    props: {  // 对象   key, value,  
      title: "foo",
      children: "Hello", // 特别  字符串， 还可以是什么？ 元素组成的数组
    },
  }
  ```

- 要替换的另外一部分是？
  ReactDOM.render
  render 函数作用是什么？
  React 在 render 函数里改变 DOM，我们先手动更新下DOM。

- 以上代码， 对应原生DOM
  element代指 React Element， 用 “node” 来代指 DOM Element
  ```
  const node = document.createElement(element.type)
  node["title"] = element.props.title
  const text = document.createTextNode("") // show 一下
  text["nodeValue"] = element.props.children
  ```
- 为什么用createTextNode 而不用innerText?  
  有助于我们稍后统一处理所有的 element
  props: {nodeValue: "hello"}  

- createElement 开始
  JSX -> JS 
  ```js
  const element = (
    <div id="foo">
      <a>bar</a>
      <b />
    </div>
  )
  const container = document.getElementById("root")
  ReactDOM.render(element, container)
  ```
  element 是一个带有type 和props的对象。 createElement 参数需要做的就是创建这样一个对象。
  element -> JSX -> JS 对象
  ```js
  const element = React.createElement(
    "div",
    { id: "foo" },
    React.createElement("a", null, "bar"),
    React.createElement("b")
  )
  ```
  - 以上写法， 那么， 如何收集子节点？  es6的那个属性？
    ...  children 参数永远是数组

- createElement  return ?
  ```js
  function createElement(type, props, ...children) {
    return {
      type,
      props: {
        ...props,
        children,
      },
    }
  }
  ```
  createElement("div")
  {
    "type": "div",
    "props": { "children": [] }
  }

  createElement("div", null, a) 返回:
  {
    "type": "div",
    "props": { "children": [a] }
  }
  createElement("div", null, a, b) 
  {
  "type": "div",
  "props": { "children": [a, b] }
  }

  TEXT_ELEMENT

- 升级一下
  ```js
  function createElement(type, props, ...children) {
    return {
      type,
      props: {
        ...props,
        children: children.map(child =>
          typeof child === "object"
            ? child
            : createTextElement(child)
        )
      },
    }
  }
  function createTextElement(text) {
    return {
      type: "TEXT_ELEMENT",
      props: {
        nodeValue: text,
        children: [],
      },
    }
  }
  ```
  React 对于一个基本值的子元素，不会创建空数组也不会包一层 TEXT_ELEMENT，但是为了简化代码，我们的实现和 React 有差异，毕竟在这里我们只想要简单的代码而不是完美的代码

- 开始写吧， 给我们的框架去个名字  Didactic  也叫？  命名空间 
  const element = (
  <div id="foo">
    <a>bar</a>
    <b />
  </div>
  )
  ```js
  const Didact = {
    createElement
  }
  const elment = Didact.createElement(
    "div",
    {id: "foo"},
    Didact.createElement("a", null, "bar"),
    Didact.createElement("b")
  )
  ```

# render 函数

```
  function render(element, container) {
  // TODO create dom nodes
  const dom =
    element.type == "TEXT_ELEMENT"
      ? document.createTextNode("")
      : document.createElement(element.type)
   // const dom = document.createElement(element.type)
   <!-- 我们对每一个子节点递归地做相同的处理。 -->
  ​ element.props.children.forEach(child =>
    render(child, dom)
    )

    const isProperty = key => key !== "children"
  Object.keys(element.props)
    .filter(isProperty)
    .forEach(name => {
      dom[name] = element.props[name]
    })
    container.appendChild(dom)
  }
  ​
  const Didact = {
    createElement,
    render,
  }
  const element = (
    <div id="foo">
      <a>bar</a>
      <b />
    </div>
  )​
  const container = document.getElementById("root")
  Didact.render(element, container)
```

- 重构代码
  哪里需要重构？
  递归调用会导致一些问题
  一旦开始渲染，在我们将 react element 数渲染出来之前没法暂停。 如果这颗树很大，可能会对主线程进行阻塞。这意味着浏览器的一些高优先级任务会一直等待渲染完成，如：用户输入，保证动画顺畅。

- 因此我们需要将整个任务分成一些小块
  每当我们完成其中一块之后需要把控制权交给浏览器，让浏览器判断是否有更高优先级的任务需要完成。

  我们使用 requestIdleCallback 作为一个循环。你可以把 requestIdleCallback 类比成 setTimeout，只不过这次是浏览器来决定什么时候运行回调函数，而不是 settimeout 里通过我们指定的一个时间。浏览器会在主线程有空闲的时候运行回调函数。

- requestIdCallback
  let nextUnitOfWork = null
  function workLoop(deadline) {
    let shouldYield = false
    while (nextUnitOfWork && !shouldYield) {
      nextUnitOfWork = performUnitOfWork(
        nextUnitOfWork
      )
      shouldYield = deadline.timeRemaining() < 1
    }
    requestIdleCallback(workLoop)
  }
  <!-- window.requestIdleCallback()方法插入一个函数，这个函数将在浏览器空闲时期被调用。 -->
  requestIdleCallback(workLoop)
  function performUnitOfWork(nextUnitOfWork) {
  // TODO
  }

  我们需要先设置渲染的第一个任务单元，然后开始循环。performUnitOfWork 函数不仅需要执行每一小块的任务单元，还需要返回下一个任务单元。

为了把所有任务单元组织起来我们需要一个数据结构： fiber 树
每一个 element 都是一个 fiber，每一个 fiber 都是一个任务单元。

Didact.render(
  <div>
    <h1>
      <p />
      <a />
    </h1>
    <h2 />
  </div>,
  container
)

在 render 中，我们创建了 根fiber，并且将其设为 nextUnitOfWork 作为第一个任务单元，剩下的任务单元会通过 performUnitOfWork 函数完成并返回，每个 fiber 节点完成下述三件事：
  1. 把 element 添加到 DOM 上
  2. 为该 fiber 节点的子节点新建 fiber
  3. 挑出下一个任务单元
  这个数据结构的其中一个目的是为了更方便地找到下一个任务单元。因此每个 fiber 都会指向它的第一个子节点、它的下一个兄弟节点 和 父节点。

  当我们处理完了一个 fiber 节点之后。它的 child fiber 节点将作为下一个任务单元。

  在这个例子中，紧接着 div fiber 节点的是 h1 fiber 节点。

  如果这个 fiber 没有 child，那么它的兄弟节点（sibling）会作为下一个任务单元。

  在这个例子中，紧接着 p fiber 节点任务完成后，我们需要处理 a fiber 节点，因为 p 节点没有 child 节点。

  如果一个 fiber 既没有 child 又没有 sibling，它的 “uncle” 节点（父节点的兄弟）将作为下一个任务单元。在这个例子中 a 对应的 “uncle” 节点是 h2。

  如果 parent 节点没有 silbing，就继续找父节点的父节点，直到该节点有 sibling，或者直到达到根节点。到达根节点意味着完成了整个树的 render。