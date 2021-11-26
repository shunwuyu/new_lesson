import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { useClipboard } from 'use-clipboard-copy';
import CacheDemo from './useImage.cache';
// import { useClipboard } from './use-clipboard-copy';

type DemoType = 'ImageDemo' | 'srcListDemo' | 'cacheDemo' | '';
const Divider = () => <div style={{ height: '10px' }}></div>;

function App() {
  const [demoType, showDemo] = useState<DemoType>('');
  const [count, setCount] = useState(0)
  // const clipboard = useClipboard()
  return (
    <div>
      {/* <input ref={clipboard.target} />
      <button onClick={clipboard.copy}>Copy</button> */}
      <h2>cache demo </h2>
      <Divider></Divider>
      <button onClick={() => showDemo('cacheDemo')}>show cache demo</button>
      {demoType === 'cacheDemo' && <CacheDemo></CacheDemo>}
    </div>
  )
}

export default App
