import {useState} from "react";
import  Navbar from "./Components/Navbar.js";
import Leaderboard from "./Components/Leaderboard.js";
import Timer from "./Components/Timer.js";
import Game from "./Components/Game.js";
import Intro from "./Components/Intro.js";
import "./style.css";

function App() {

  const [leaderboard, setLeaderboard] = useState([]);
  const [time, setTime] = useState(0);
  const [gameStart, setGameStart] = useState(false);
  const [gameEnd, setGameEnd] = useState(false);
  const [charList, setCharList] = useState([]);

  return (
    <div className="App">
      <Navbar time={time}/>
      {!gameStart ? 
      <Intro /> 
      : null}
      {gameStart ? 
      <Game />
      : null}
    </div>
  );
}

export default App;
