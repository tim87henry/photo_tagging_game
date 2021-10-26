import Astro from "../data/fight_club.png";

const Game = () => {
    return (
        <div className="gameDiv">
            <img src={Astro} alt="" className="gameImage"></img>
        </div>
    );
}

export default Game;