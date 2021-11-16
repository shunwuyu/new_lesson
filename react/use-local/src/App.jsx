import { useState } from 'react'
import useStateWithLocalStorage from './beautiful-react-hooks';
// import { useLocalStorage } from 'beautiful-react-hooks'; 
import './App.css'

function App() {
  const [query, setQuery] = useState('')
  // const [todos, setTodos] = useState([]);
  const [todos, setTodos] = useStateWithLocalStorage('todos', ['buy milk'])
  console.log(typeof todos, '+++');
  function onClick() {
    setTodos([...todos, query])
    setQuery('')
  }
  return (
    <div className="App">
      <input value={query} onChange={e => setQuery(e.target.value)} />
      <button onClick={onClick}>Create</button>
      {todos.map((todo, index) => (<div key={index}>{todo}</div>))}
    </div>
  )
}

export default App
