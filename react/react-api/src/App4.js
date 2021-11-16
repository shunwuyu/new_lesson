import React, {useState, Fragment, memo} from 'react';
// 加一个memo  
// https://juejin.cn/post/7010278471473594404#heading-4
// 没有接受任何属性
// ChildComponent
// const ChildComponent = memo(() => { {/* + {2} */}
const ChildComponent = () => {
  return (
    <Fragment>
      {/* 只在挂载时执行 */}
      {console.log("ChildComponent Render")} {/* {1} */}
      <span>子组件</span>
    </Fragment>
  )
}

const ParentComponent = () => {

  const [count, setCount] = useState(0);

  return (
    <Fragment>
      <h5>hooks 性能优化篇 {count}</h5>
      <button onClick={() => setCount(count+1)}>+1</button>
      <ChildComponent /> {/* {3} */}
    </Fragment>
  )
}


const App = () => {
  return (
    <>
      <ParentComponent />
    </>
  )
}

export default App