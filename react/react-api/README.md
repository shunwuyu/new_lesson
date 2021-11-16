- createElement
  App1.js
  React.createElement(
    type,
    [props],
    [...children]
  )
  **第一个参数:**如果是组件类型，会传入组件，如果是dom元素类型，传入div或者span之类的字符串。
  第二个参数::第二个参数为一个对象，在dom类型中为属性，在组件类型中为props。
  其他参数:，依次为children，根据顺序排列。

- App2.js
  class Index extends React.PureComponent
  class Index extends React.Component{
  PureComponent  纯组件
  性能调优，减少render次数  浅比较
  // 两次指向的是同一个对象data 

  - 执行是怎么样的？
    componentDidMount  
      [HMR] Waiting for update signal from WDS...
      App.js:23 TaskContainer Render
      App.js:48 AddTask Render
      App.js:60 TaskList Render
      App.js:23 TaskContainer Render
      App.js:48 AddTask Render
      App.js:60 TaskList Render
      10App.js:68 Task Render
    点击按钮时，AddTask 组件的状态其实也没有变动，但由于 TaskContainer 组件中任务列表新增一条任务，
    AddTask多了一次， 因为
    - 如果一个组件的 属性 和 状态 均为发生变化，则我们可以认为该组件重新渲染是没有必要的
    
  - 自定义hooks实战
    hooks 有什么用？
    App6.js Hooks 是函数， -》 useMemo 性能优化了

- 防抖
  ```
  在事件被触发n秒后再执行回调，如果在这n秒内又被触发，则重新计时。
  function debounce(fn, ms) {
    let timer;
    return function(...args) {
      if (timer) {
        clearTimeout(timer)
      }
      timer = setTimeout(() => {
        fn(...args)
        timer = null;
      }, ms);
    }
  }


  ```

