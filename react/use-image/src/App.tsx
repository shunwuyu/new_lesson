import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useImage } from './img' ;


function App() {
  const {
    src,
    isLoading,
    error
  } = useImage({
    src: 'https://img2.doubanio.com/view/photo/albumcover/public/p2396530441.webp'
  })

  console.log(src);
  return (
    <div>
    {}
    </div>
  );
}

export default App;
