import './App.css';
import React, { Component, useState, useContext, useReducer, useEffect } from "react";

const myReducer = (state, action) => {
  switch(action.type)  {
    case('countUp'):
      return  {
        ...state,
        count: state.count + 1
      }
    default:
      return  state;
  }
}



// 这种写法有重大限制，必须是纯函数，不能包含状态，也不支持生命周期方法，因此无法取代类。
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

// class Button extends Component {
//   constructor() {
//     super();
//     this.state = { buttonText: "Click me, please" };
//     this.handleClick = this.handleClick.bind(this);
//   }
//   handleClick() {
//     this.setState(() => {
//       return { buttonText: "Thanks, been clicked!" };
//     });
//   }
//   render() {
//     const { buttonText } = this.state;
//     return <button onClick={this.handleClick}>{buttonText}</button>;
//   }
// }

const AppContext = React.createContext({});


function  Button()  {
  const  [buttonText, setButtonText] =  useState("Click me,   please");

  function handleClick()  {
    return setButtonText("Thanks, been clicked!");
  }

  return  <button  onClick={handleClick}>{buttonText}</button>;
}

const Navbar = () => {
  const { username } = useContext(AppContext);
  return (
    <div className="navbar">
      <p>AwesomeSite</p>
      <p>{username}</p>
    </div>
  );
}

const Messages = () => {

  const { username } = useContext(AppContext)

  return (
    <div className="messages">
      <h1>Messages</h1>
      <p>1 message for {username}</p>
      <p className="message">useContext is awesome!</p>
    </div>
  )
}

const Person = ({ personId }) => {
  const [loading, setLoading] = useState(true);
  const [person, setPerson] = useState({});

  useEffect(() => {
    setLoading(true); 
    fetch(`https://swapi.dev/api/films/${personId}/`)
      .then(response => response.json())
      .then(data => {
        setPerson(data);
        setLoading(false);
      });
  }, [personId])

  if (loading === true) {
    return <p>Loading ...</p>
  }

  return <div>
    <p>You're viewing: {person.name}</p>
    <p>Height: {person.height}</p>
    <p>Mass: {person.mass}</p>
    
  </div>
}



function App() {
  const [state, dispatch] = useReducer(myReducer, { count:   0 });
  return (
    <AppContext.Provider value={{
      username: 'superawesome'
    }}>
      <div className="App">
        <Person personId="1" />
        <button onClick={() => dispatch({ type: 'countUp' })}>
          +1
        </button>
        <p>Count: {state.count}</p>
        <Button />
        <Navbar/>
        <Messages/>
      </div>
    </AppContext.Provider>
  );
}

export default App;
