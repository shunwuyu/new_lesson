import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './Login';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import LifeCycle from './LifeCycle';
ReactDOM.render(
  <>
    <LifeCycle />
  </>,
  document.getElementById('root')
)
// ReactDOM.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <Switch>
//         <Route path="/login" component={Login} />
//         <Route path="/home" component={App} />
//         <Redirect path="/" to="/login" exact />
//       </Switch>
//     </BrowserRouter>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
