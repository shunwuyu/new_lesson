import {useState} from 'react';
import logo from './logo.svg';
import './App.css';
// https://juejin.cn/post/6844904135091814407

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



function App() {
  const [counter, setCounter] = useState(0);
  
  // const handleClick = () => {
  //   setCounter(counter + 1)
  // }

  function useDebounce(fn, time) {
    return debounce(fn, time);
  }

  const handleClick = useDebounce(function() {
    setCounter(counter + 1)
  }, 1000)
  return (
    <div style={{ padding: 30 }}>
      <button
        onClick={handleClick}
      >click</button>
      <div>{counter}</div>
    </div>
  );
}

export default App;
