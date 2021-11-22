import { useState, useEffect, useCallback, useRef } from 'react';
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
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  
  function useDebounce(fn, delay, dep = []) {
    const { current } = useRef({ fn, timer: null });
    useEffect(function () {
      current.fn = fn;
    }, [fn]);
  
    return useCallback(function f(...args) {
      if (current.timer) {
        clearTimeout(current.timer);
      }
      current.timer = setTimeout(() => {
        current.fn.call(this, ...args);
      }, delay);
    }, dep)
  }


  // const handleClick = () => {
  //   setCounter(counter + 1)
  // }

  // function useDebounce(fn, time) {
  //   return debounce(fn, time);
  // }

  // function useDebounce(fn, time) {
  //   return useCallback(debounce(fn, time), [])
  // }
  // function useDebounce(fn, time) {
  //   console.log('usedebounce')
  //   return debounce(fn, time);
  // }
  

  // const handleClick = useDebounce(function() {
  //   console.count('click1')
  //   setCounter1(x => x + 1)
  // }, 500)

  const handleClick = useDebounce(function() {
    console.count('click1')
    setCounter1(counter1 + 1)
  }, 500)

  useEffect(function() {
    const t = setInterval(() => {
      setCounter2(x => x + 1)
    }, 500);
    return clearInterval.bind(undefined, t)
  }, [])


  return (
    <div style={{ padding: 30 }}>
      <button
        onClick={handleClick}
      >click</button>
      <div>{counter1}</div>
      <div>{counter2}</div>
    </div>
  );
}

export default App;
