import React from 'react';

function App() {
  // return (
    // <div className="box" >
    //     <div className="item"  >生命周期</div>
    //     <React.Fragment> Flagment </React.Fragment>
    //     { /*  */ }
    //     text文本
    // </div>
    
  // );
  // **第一个参数:**如果是组件类型，会传入组件，如果是dom元素类型，传入div或者span之类的字符串。
  // 第二个参数::第二个参数为一个对象，在dom类型中为属性，在组件类型中为props。
  // 其他参数:，依次为children，根据顺序排列。
  return React.createElement("div", { className: "box" },
            React.createElement("div", { className: "item" }, "生命周期"),
            React.createElement(React.Fragment, null, " Flagment "),
            "text文本");
}

export default App;
