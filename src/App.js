import {useState} from "react";
import  Navbar from "./Components/Navbar.js";
import Leaderboard from "./Components/Leaderboard.js";
import Game from "./Components/Game.js";
import Intro from "./Components/Intro.js";
import db from "./firebase";
import { collection, getDocs } from "firebase/firestore"; 
import "./style.css";


function App() {

  const [leaderboard, setLeaderboard] = useState([]);
  const [time, setTime] = useState(0);
  const [gameStart, setGameStart] = useState(false);
  const [gameEnd, setGameEnd] = useState(false);
  const [characters, setCharacters] = useState([false, false, false]);

  if (characters.every((char) => char)) {
    console.log("ALLLL WINNERSSSSSSSs")
  }

  const startGame = () => {
    setGameStart(true);
  }

  const increaseTime = () => {
    let current_time = time;
    current_time++;
    setTime(current_time);
  }

  const handleSelection = async (x,y,char) => {
    const querySnapshot = await getDocs(collection(db, "characters"));
    let xMin, xMax, yMin, yMax = 0;
    querySnapshot.forEach((item) => {
      if (item.data()["charId"] === char) {
        xMin = item.data()["xMin"];
        xMax = item.data()["xMax"];
        yMin = item.data()["yMin"];
        yMax = item.data()["yMax"];
      }
    });
    if (x >= xMin && x <= xMax && y >= yMin && y <= yMax)  {
      let charactersCopy = characters;
      charactersCopy[char] = true;
      setCharacters(charactersCopy);
    } else {
      console.log("wrong")
    }
  }

  return (
    <div className="App">
      <Navbar 
      time={time}
      gameStart={gameStart}
      gameEnd={gameEnd}
      increaseTime={increaseTime}
      characters={characters}
      />

      {!gameStart ? 
      <Intro 
      startGame={startGame}
      /> 
      : null}
      
      {gameStart ? 
      <Game 
      handleSelection={handleSelection}/>
      : null}
    </div>
  );
}

export default App;
