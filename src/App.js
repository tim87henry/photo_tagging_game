import {useState} from "react";
import  Navbar from "./Components/Navbar.js";
import Leaderboard from "./Components/Leaderboard.js";
import Game from "./Components/Game.js";
import Intro from "./Components/Intro.js";
import Notification from "./Components/Notification.js";
import db from "./firebase";
import { collection, getDocs } from "firebase/firestore"; 
import "./style.css";


function App() {

  const [time, setTime] = useState(0);
  const [gameStart, setGameStart] = useState(false);
  const [gameEnd, setGameEnd] = useState(false);
  const [characters, setCharacters] = useState([false, false, false]);
  const [popUpMsg, setPopUpMsg] = useState("");

  if (characters.every((char) => char) && !gameEnd) {
    setGameEnd(true);
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
    let characterName = "";
    querySnapshot.forEach((item) => {
      if (item.data()["charId"] === char) {
        xMin = item.data()["xMin"];
        xMax = item.data()["xMax"];
        yMin = item.data()["yMin"];
        yMax = item.data()["yMax"];
        characterName = item.data()["name"];
      }
    });
    if (x >= xMin && x <= xMax && y >= yMin && y <= yMax)  {
      let charactersCopy = characters;
      charactersCopy[char] = true;
      setCharacters(charactersCopy);
      setPopUpMsg("You found "+characterName)
    } else {
      setPopUpMsg("Wrong selection")
    }
    const notify = document.getElementById("notify");
    if (notify !== null) {
      notify.style.display = "block";
    }
    setTimeout(() => {
      const notify = document.getElementById("notify");
      if (notify !== null) {
        notify.style.display = "none";
      }
  }, 2000);
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
      
      {(gameStart && !gameEnd) ? 
      <div>
        <Game 
        handleSelection={handleSelection}/>
        <Notification 
        popUpMsg={popUpMsg} />
      </div>
      : null}

      {gameEnd ? 
      <Leaderboard
      time={time} 
      />
      : null}
    </div>
  );
}

export default App;
