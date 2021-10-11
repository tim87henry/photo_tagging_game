import Navbar from "./Navbar.js";
import Game from "./Game.js";
import {BrowserRouter, Switch, Route, Link} from "react-router-dom";
import {useState} from "react";

function App() {

  const [characters,setCharacters] = useState(
    [{
      "name": "Trinity",
      "found": false
    },{
      "name": "Sarah Connor",
      "found": false
    },{
      "name": "Astro Boy",
      "found": false
    }]);

  const checkSelection = (x,y,character) => {
    
    let correctSelection = false;
    let xMin, xMax, yMin, yMax = 0;
    let charactersCopy = [];
    
    if (character === 1) {
      xMin = 645;
      xMax = 740;
      yMin = 1310;
      yMax = 1430;
      charactersCopy.push({
        "name": "Trinity", 
        "found": true
      },characters[1],characters[2]);
    } else if (character === 2) {
      xMin = 210;
      xMax = 280;
      yMin = 700;
      yMax = 870;
      charactersCopy.push(characters[0],{
        "name": "Sarah Connor",
        "found": true
      },characters[2]);
    } else {
      xMin = 280;
      xMax = 300;
      yMin = 1300;
      yMax = 1330;
      charactersCopy.push(characters[0],characters[1],{
        "name": "Astro Boy",
        "found": true
      });
    }

    correctSelection = (x >= xMin && x <= xMax && y >= yMin && y <= yMax)? true : false;
    if (correctSelection) {
      setCharacters(charactersCopy);
    }
    
    const menus = document.getElementsByClassName("menuDiv");
    for (let i=0;i<menus.length;i++) {
        menus[i].style.display = "none";
    }
  }

  return (
    <div className="App">
      <Navbar characters={characters} />
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
