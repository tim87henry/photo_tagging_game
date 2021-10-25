import Trinity from "../data/trinity.jpg";
import Sarah from "../data/sarah.jpg";
import Astro from "../data/astro.png";

const Navbar = () => {
    return (
        <div className="navbar">
            <img src={Trinity} className="navbar_image" />
            <img src={Sarah} className="navbar_image" />
            <img src={Astro} className="navbar_image" />
        </div>
    );
}

export default Navbar;