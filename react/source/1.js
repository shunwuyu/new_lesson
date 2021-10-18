
function createElement(type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      children: children.map(child =>
        // 为了区分 基本类型 和引用类型，我们单独 用 createTextElement 来创造 文本节点
        typeof child === "object"
        ?child
        : createTextElement(child)
      )
    }
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

function render(element, container) {
  const dom =
    element.type == "TEXT_ELEMENT"
      ? document.createTextNode("")
      : document.createElement(element.type)
 
  const isProperty = key => key !== "children"
  // 将元素属性 一一 写入 dom 节点上
  Object.keys(element.props)
    .filter(isProperty)
    .forEach(name => {
      dom[name] = element.props[name]
    })
  
  element.props.children.forEach(child =>
    render(child, dom)
  )
  container.appendChild(dom)
}

// render(createElement(
//   "h1",
//   {
//     title:"foo"
//   },
//   'hello'
// ),document.getElementById('root'))

render(createElement(
  "h1",
  {
    title:"foo"
  },
  createElement(
    "span", 
    {
      id: 'w5'
    },
    "hello"
  ),
  "world"
),document.getElementById('root'))
