import Navbar from "./Navbar.js";
import Game from "./Game.js";
import {BrowserRouter, Switch, Route, Link} from "react-router-dom";
import {useState} from "react";

function App() {

  const [characters,setCharacters] = useState(
    ["Trinity",
    "Sarah Connor",
    "Astro Boy",
    ]);
  
  const [userName, setUserName] = useState("");
  // const [foundName, setFoundName] = useState("");
  // const [charFound, setCharFound] = useState(false);
  let foundName = "";
  let charFound = false;

  const checkSelection = (x,y,character) => {
    
    let correctSelection = false;
    let xMin, xMax, yMin, yMax = 0;
    let charactersCopy = [];
    
    if (character === 0) {
      xMin = 645;
      xMax = 740;
      yMin = 1310;
      yMax = 1430;
    } else if (character === 1) {
      xMin = 210;
      xMax = 280;
      yMin = 700;
      yMax = 870;
    } else {
      xMin = 280;
      xMax = 300;
      yMin = 1300;
      yMax = 1330;
    }

    if (x >= xMin && x <= xMax && y >= yMin && y <= yMax) {
      foundName = characters[character].name
      charFound = true;
    } else {
      foundName = " ";
      charFound = false;
    }
    
    
    const menus = document.getElementsByClassName("menuDiv");
    for (let i=0;i<menus.length;i++) {
        menus[i].style.display = "none";
    }
  }

  return (
    <div className="App">
      <Navbar 
      characters={characters} 
      foundName={foundName}
      charFound={charFound}
      />
      <BrowserRouter>
        <Switch>
          <Route path="/game" render={() => <Game checkSelection={checkSelection} userName={userName} />}></Route>
          <Link to="/game">Start Game</Link>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
