const Navbar = (props) => {
    
    let charClassName = [];
    for (let i=0;i<3;i++) {
        if (props.characters[i].found) {
            charClassName.push("found");
        } else {
            charClassName.push("notFound");
        }
    }

    return(
        <div key={props.characters}>
            <ul className="charList">
                <li className={charClassName[0]}>{props.characters[0].name}</li>
                <li className={charClassName[1]}>{props.characters[1].name}</li>
                <li className={charClassName[2]}>{props.characters[2].name}</li>
            </ul>
        </div>
    );
}

export default Navbar;