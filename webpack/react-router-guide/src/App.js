import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import { useHistory, useParams, } from "react-router-dom";

function App() {
  const name = "tom";
  const isAuthenticated = true;
  return (
    <Router>
      <main>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to={`/about/${name}`}>About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </main>
      <Switch>
        <Route path="/" exact component={Home} />
        {isAuthenticated ? (
            <>
              <Route path="/about/:name" component={About} />
              <Route path="/contact" component={Contact} />
            </>
          ) : (
            <Redirect to="/" />
          )}
      </Switch>
    </Router>
  );
}

const Home = () => (
  <>
    <h1>Home</h1>
    <FakeText />
  </>
);
// About Page
const About = () => {
  const { name } = useParams();
  return (
  <>
    {name !== "tom" ? <Redirect to="/" /> : null}
    <h1>About, {name}</h1>
    <FakeText />
  </>)
};
// Contact Page
const Contact = () => {
  const history = useHistory();
  return (
    <>
      <h1>Contact</h1>
      <button onClick={() => history.push("/")}>Go to home</button>
      <FakeText />
    </>
  )
};

const FakeText = () => (
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </p>
);

export default App;
