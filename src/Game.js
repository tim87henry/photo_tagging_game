import fight_club from "./data/fight_club.png";
import "./style.css";

const Game = () => {

    const checkClick = (e) => {
        //console.log(e.target.getBoundingClientRect().left)
        console.log("X axis "+e.clientX)
        console.log("Y axis "+e.clientY)
    }

    return (
        <div>
            <img src={fight_club} alt="" useMap="#gamemap" className="gameImage" onClick={checkClick}></img>
            <map name="gamemap">
                <area shape="poly" coords="280,1300, 300,1300, 300,1330, 280,1330" href="google.com"></area>
            </map>
        </div>
    );
}

export default Game;