import Trinity from "../data/trinity.jpg";
import Sarah from "../data/sarah.jpg";
import Astro from "../data/astro.png";
import Timer from "./Timer.js";

const Navbar = (props) => {
    console.log("Chars are "+props.characters)
    const charClass=[];
    for(let i=0;i<3;i++) {
        charClass[i] = (props.characters[i])? "navbar_image_found": "navbar_image_not_found"; 
    }

    return (
        <div className="navbar">
            <img src={Trinity} className={charClass[0]} alt="" />
            <img src={Sarah} className={charClass[1]} alt="" />
            <img src={Astro} className={charClass[2]} alt="" />
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