import React, { useState } from 'react';

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

function useDebounce(fn, time) {
  return debounce(fn, time);
}

function App() {
  const [counter, setCounter] = useState(0);
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
  )
}

export default App;