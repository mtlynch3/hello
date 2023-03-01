import './App.css';

import Homepage from './components/Homepage';
import Lodging from './components/Lodging';
import Attractions from './components/Attractions';
import Restaurants from './components/Restaurants';

import { Routes, Route, Outlet, Link } from "react-router-dom";


export default function App() {
  return (
    <div className="App">
      <h1>HELLO</h1>
    </div>
  );
}
const navStyle = {textDecoration: "none", color: "blue"};
function Layout() {
  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      <nav>
        <ul>
          <li>
            <Link style={navStyle} to="/">Home</Link>
          </li>
          <li>
            <Link style={navStyle} to="/lodging">Lodging</Link>
          </li>
          <li>
            <Link style={navStyle} to="/restaurants">Restaurants</Link>
          </li>
          <li>
            <Link style={navStyle} to="/attractions">Attractions</Link>
          </li>
          <li>
            <Link style={navStyle} to="/nothing-here">Nothing Here</Link>
          </li>
        </ul>
      </nav>

      <hr />

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

