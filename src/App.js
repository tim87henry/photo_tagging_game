import {useState} from "react";
import  Navbar from "./Components/Navbar.js";
import Leaderboard from "./Components/Leaderboard.js";
import Game from "./Components/Game.js";
import Intro from "./Components/Intro.js";
// import fire from "./fire";
// import * as firebase from 'firebase';
// import 'firebase/firestore';
import "./style.css";
import { doc, getDoc } from "firebase/firestore";


function App() {

  const [leaderboard, setLeaderboard] = useState([]);
  const [time, setTime] = useState(0);
  const [gameStart, setGameStart] = useState(false);
  const [gameEnd, setGameEnd] = useState(false);
  const [charList, setCharList] = useState([]);

  const startGame = () => {
    // var db = firebase.firestore();
    // var docRef = db.collection("charLocation");
    // console.log("FIRE IS ")
    setGameStart(true);
  }

  const increaseTime = () => {
    let current_time = time;
    current_time++;
    setTime(current_time);
  }

  return (
    <div className="App">
      <Navbar 
      time={time}
      gameStart={gameStart}
      gameEnd={gameEnd}
      increaseTime={increaseTime}
      />

      {!gameStart ? 
      <Intro 
      startGame={startGame}
      /> 
      : null}
      
      {gameStart ? 
      <Game />
      : null}
    </div>
  );
}

export default App;
