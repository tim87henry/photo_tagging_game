import Trinity from "../data/trinity.jpg";
import Sarah from "../data/sarah.jpg";
import Astro from "../data/astro.png";
import Timer from "./Timer.js";

const Navbar = (props) => {
    console.log("Chars are "+props.characters)
    return (
        <div className="navbar">
            <img src={Trinity} className="navbar_image" alt="" />
            <img src={Sarah} className="navbar_image" alt="" />
            <img src={Astro} className="navbar_image" alt="" />
            <Timer 
            className="timer"
            time={props.time}
            gameStart={props.gameStart}
            gameEnd={props.gameEnd}
            increaseTime={props.increaseTime}
            />
        </div>
    );
}

export default Navbar;