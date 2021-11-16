import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from "react-router-dom";
import Routes from './routes';
import Frame from './layout/Frame';

function App() {
  return (
    <BrowserRouter>
      <Frame>
        <Routes/>
      </Frame>
    </BrowserRouter>
  );
}

export default App;
