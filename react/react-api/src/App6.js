import React, { useState, useMemo } from 'react';
// https://juejin.cn/post/6890738145671938062
// 格式化数组将小写转成大写。 一般函数
function useFormatList(list){
  // 只是函数而已
  return list.map(item=>{
      console.log(1111)
      return item.toUpperCase()
  })
  // return useMemo(() => list.map(item => {
  //   console.log(1111)
  //   return item.toUpperCase()
  // }), [])
}

function Index({ list }){
  const [ number ,setNumber ] = useState(0)
  const newList = useFormatList(list)
  return <div>
      {/* newList多运行了, 怎么办？  */}
      <div className="list" >
         { newList.map(item=><div key={item} >{ item }</div>) }
       </div>
       <div className="number" >
           <div>{ number }</div>
           <button onClick={()=> setNumber(number + 1) } >add</button>
       </div>
  </div>
}

function App() {
  return (
    <>
      <Index list={["a","b", "c"]}/>
    </>
  )
}

export default App;