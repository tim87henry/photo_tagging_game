const Navbar = (props) => {
    
    let charClassName = [];
    for (let i=0;i<3;i++) {
        if (props.characters[i].found) {
            charClassName.push("found");
        } else {
            charClassName.push("notFound");
        }
    }
    let displayMsg;

    if (props.foundName !== "" && !props.charFound) {
        displayMsg = "Sorry, wrong selection";
    } else if (props.foundName !== '' && props.gameOver) {
        displayMsg = "You found "+props.foundName+". You have found all 3. Game over";
    } else if (props.foundName !== '') {
        displayMsg = "You found "+props.foundName;
    }

    return(
        <div key={props.characters} className="navbar">
            <ul className="charList">
                <li className={charClassName[0]}>{props.characters[0].name}</li>
                <li className={charClassName[1]}>{props.characters[1].name}</li>
                <li className={charClassName[2]}>{props.characters[2].name}</li>
            </ul>
            <div>{displayMsg}</div>
        </div>
    );
}

export default Navbar;