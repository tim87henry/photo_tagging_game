import Timer from "./Timer.js";

const Navbar = (props) => {
    
    let charClassName=[];

    for (let i=0;i<3;i++) {
        if (props.characters[i][1] === true) {
            charClassName.push("found");
        } else {
            charClassName.push("notFound");
        }
    }

    if (charClassName[0]==="found" && charClassName[1]==="found" && charClassName[2]==="found") {
        //props.changeGameStatus("over");
    }

    return(
        <div key={props.characters} className="navbar">
            <ul className="charList">
                <li className={charClassName[0]}>{props.characters[0]}</li>
                <li className={charClassName[1]}>{props.characters[1]}</li>
                <li className={charClassName[2]}>{props.characters[2]}</li>
            </ul>
            <Timer 
            time={props.time}
            increaseTime={props.increaseTime}
            gameStatus={props.gameStatus}
            characters={props.characters}
            />
        </div>
    );
}

export default Navbar;