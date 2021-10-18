import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

// type UserInfo = {
//   name: string,
//   age: number,
// }

// export const User = ({ name, age }: UserInfo) => {
//   return (
//     <div className="App">
//       <p>{ name }</p>
//       <p>{ age }</p>
//     </div>
//   )
// }

// export const User:React.FC<UserInfo> = ({ name, age }) => {
//   return (
//     <div className="User">
//       <p>{ name }</p>
//       <p>{ age }</p>
//     </div>
//   )
// }

const Counter:React.FC<{ initial: number }> = ({ initial = 0 }) => {
  const [count, setCount] = useState<number>(initial)

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count+1)}>加</button>
      <button onClick={() => setCount(count-1)}>减</button>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      {/* <User name='vortesnail' age={25} /> */}
      <Counter initial={0}/>
    </div>
  );
}

export default App;
