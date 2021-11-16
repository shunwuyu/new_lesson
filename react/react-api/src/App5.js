import React from 'react';
// React.lazy和Suspense配合一起用，能够有动态加载组件的效果
// 2 秒后加载， 怎么办？
import Test from './Test';

const LazyComponent =  React.lazy(()=> new Promise((resolve)=>{
  setTimeout(()=>{
      resolve({
          default: ()=> <Test />
      })
  },2000)
}))


const App = () => {
  return (<div className="context_box"  style={{ marginTop :'50px' }}   >
    <React.Suspense fallback={ <div className="icon" ><div >Loading....</div></div> } >
        <LazyComponent />
    </React.Suspense>
  </div>)
}

export default App