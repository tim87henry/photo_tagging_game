import Navbar from "./Navbar.js";
import Game from "./Game.js";
import {BrowserRouter, Switch, Route, Link} from "react-router-dom";

function App() {

  const checkSelection = (x,y,character) => {
    console.log("The corodinates you selected are "+x+" "+y);
    let correctSelection = false;
    let xMin, xMax, yMin, yMax = 0;
    if (character === 1) {
      xMin = 645;
      xMax = 740;
      yMin = 1310;
      yMax = 1430;
      console.log("Trinity")
    } else if (character === 2) {
      xMin = 210;
      xMax = 280;
      yMin = 700;
      yMax = 870;
      console.log("Sarah")
    } else {
      xMin = 280;
      xMax = 300;
      yMin = 1300;
      yMax = 1330;
      console.log("Astro")
    }

    correctSelection = (x >= xMin && x <= xMax && y >= yMin && y <= yMax)? true : false;
    console.log("That's "+correctSelection)

  }

  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Switch>
          <Route path="/game" render={() => <Game checkSelection={checkSelection} />}></Route>
          <p>
            Click <Link to="/game">Here</Link>
          </p>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
