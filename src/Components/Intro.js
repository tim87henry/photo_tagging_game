import Trinity from "../data/trinity.jpg";
import Sarah from "../data/sarah.jpg";
import Astro from "../data/astro.png";

const Intro = (props) => {
    return (
        <div className="intro">
            You need to find the following Characters in the image.
            <div className="imageList">
                <img src={Trinity} className="intro_image" alt="" />
                <img src={Sarah} className="intro_image" alt="" />
                <img src={Astro} className="intro_image" alt="" />
            </div>
            <button className="startGameButton" onClick={props.startGame}>Start Game</button>
        </div>
    );
}

export default Intro;