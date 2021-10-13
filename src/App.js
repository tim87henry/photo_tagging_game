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
  
  const [userName, setUserName] = useState("");
  const [foundName, setFoundName] = useState("");
  const [charFound, setCharFound] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  const checkSelection = (x,y,character) => {
    
    let correctSelection = false;
    let xMin, xMax, yMin, yMax = 0;
    let charactersCopy = [];
    
    if (character === 0) {
      xMin = 645;
      xMax = 740;
      yMin = 1310;
      yMax = 1430;
      correctSelection = (x >= xMin && x <= xMax && y >= yMin && y <= yMax)? true : false;
      if (correctSelection) {
        charactersCopy.push({
          "name": "Trinity", 
          "found": true
        },characters[1],characters[2]);
        setCharacters(charactersCopy);
      }
    } else if (character === 1) {
      xMin = 210;
      xMax = 280;
      yMin = 700;
      yMax = 870;
      correctSelection = (x >= xMin && x <= xMax && y >= yMin && y <= yMax)? true : false;
      if (correctSelection) {
        charactersCopy.push(characters[0],{
          "name": "Sarah Connor",
          "found": true
        },characters[2]);
        setCharacters(charactersCopy);
      }
    } else {
      xMin = 280;
      xMax = 300;
      yMin = 1300;
      yMax = 1330;
      correctSelection = (x >= xMin && x <= xMax && y >= yMin && y <= yMax)? true : false;
      if (correctSelection) {
        charactersCopy.push(characters[0],characters[1],{
          "name": "Astro Boy",
          "found": true
        });
        setCharacters(charactersCopy);
      }
    }

    if (characters[0].found && characters[1].found && characters[2].found) {
      setGameOver(true);
    } else {
      if (correctSelection) {
        setCharFound(true);
        setFoundName(charactersCopy[character].name)
      } else {
        setFoundName('  ')
        setCharFound(false);
      }
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
      gameOver={gameOver}
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
