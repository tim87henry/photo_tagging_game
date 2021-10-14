import {useState} from "react";

const Navbar = (props) => {
    
    const charClassName = useState([]);
    let foundCount=0;
    for (let i=0;i<3;i++) {
        if (props.characters[i] === props.foundName) {
            charClassName.push("found");
            foundCount++;
        } else {
            charClassName.push("notFound");
        }
    }
    let displayMsg;

    if (foundCount === 3) {
        displayMsg = displayMsg = "You found "+props.foundName+". You have found all 3. Game over";
    } else if (props.foundName !== "" && !props.charFound) {
        displayMsg = "Sorry, wrong selection";
    } else if (props.foundName !== '') {
        displayMsg = "You found "+props.foundName;
    }

    return(
        <div key={props.characters} className="navbar">
            <ul className="charList">
                <li className={charClassName[0]}>{props.characters[0]}</li>
                <li className={charClassName[1]}>{props.characters[1]}</li>
                <li className={charClassName[2]}>{props.characters[2]}</li>
            </ul>
            <div>{displayMsg}</div>
        </div>
    );
}

export default Navbar;