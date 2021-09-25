import Navbar from "./Navbar.js";
import Game from "./Game.js";
import {BrowserRouter, Switch, Route, Link} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Switch>
          <Route path="/game" render={() => <Game />}></Route>
          <p>
            Click <Link to="/game">Here</Link>
          </p>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
