import Navbar from "./Navbar.js";
import Game from "./Game.js";
import {BrowserRouter, Switch, Route, Link} from "react-router-dom";
import {useState} from "react";

function App() {

  const [characters,setCharacters] = useState(
    [
      ["Trinity", false],
      ["Sarah Connor",false],
      ["Astro Boy",false],
      []
    ]);
  
  //const [leaderboard, setLeaderboard] = useState([]);
  const [userName, setUserName] = useState("");
  const [time, setTime] = useState(0);
  const [gameStatus, setGameStatus] = useState({
    "status":"init",
    "leaderboard":[]
  });

  const setName = (name) => {
    setUserName(name)
  }

  const changeGameStatus = (status) => {
    let lb;
    if (characters[0][1] && characters[1][1] && characters[2][1]) {
      console.log("ENDS")
      lb = [...gameStatus["leaderboard"],[userName,time]];
    } else {
      lb = gameStatus["leaderboard"]
    }
    setGameStatus({
      "status":status,
      "leaderboard":lb
    });
  }

  const increaseTime = () => {
    let current_time = time;
    current_time++;
    setTime(current_time);
  }

  const checkSelection = (x,y,character) => {
    
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
      for (let i=0;i<3;i++) {
        if (i === character) {
          charactersCopy.push([characters[i][0],true])
        } else {
          charactersCopy.push(characters[i])
        }
      }
    } else {
      charactersCopy.push(...characters);
    }

    if (charactersCopy[0][1] && charactersCopy[1][1] && charactersCopy[2][1]) {
      console.log("FINALS")
      charactersCopy.push([userName,time])
    }
    
    setCharacters(charactersCopy)
    
    const menus = document.getElementsByClassName("menuDiv");
    for (let i=0;i<menus.length;i++) {
        menus[i].style.display = "none";
    }
  }

  return (
    <div className="App">
      <Navbar 
      characters={characters}
      time={time}
      increaseTime={increaseTime}
      gameStatus={gameStatus}
      changeGameStatus={changeGameStatus}
      />
      <BrowserRouter>
        <Switch>
          <Route path="/game" render={() => 
          <Game 
          checkSelection={checkSelection} 
          userName={userName} 
          setName={setName}
          gameStatus={gameStatus}
          changeGameStatus={changeGameStatus}
          characters={characters}
          time={time}
          />}>
          </Route>
          <Link to="/game">Start Game</Link>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
