import fight_club from "./data/fight_club.png";
import "./style.css";
import {useState} from "react";

const Game = (props) => {

    const [menuOpen, setMenuOpen] = useState(false);
    const [showModal, setShowModal] = useState(true);

    const getCoords = (e) => {
        let oElement = e.target;
        let ImgPos=[];
        if(typeof(oElement.offsetParent ) != "undefined")
        {
            for(var posX = 0, posY = 0; oElement; oElement = oElement.offsetParent)
            {
                posX += oElement.offsetLeft;
                posY += oElement.offsetTop;
            }
            ImgPos=[posX,posY];
        }
        else
        {
            ImgPos=[oElement.x,oElement.y];
        }
        
        let PosX,PosY;
        if (e.pageX || e.pageY)
        {
            PosX = e.pageX;
            PosY = e.pageY;
        }
        else if (e.clientX || e.clientY)
        {
            PosX = e.clientX + document.body.scrollLeft
                + document.documentElement.scrollLeft;
            PosY = e.clientY + document.body.scrollTop
                + document.documentElement.scrollTop;
        }
        PosX = PosX - ImgPos[0];
        PosY = PosY - ImgPos[1];
        return [PosX, PosY]
    }

    const showMenu = (x,y,e) => {
        // Display menu to select character
        
        const menuDiv = document.createElement('div');
        const trinity = document.createElement('div');
        trinity.innerHTML = "Trinity";
        trinity.addEventListener("click", function(e) {
            props.checkSelection(x,y,0);
            closeMenu();
        });
        const sarah = document.createElement('div');
        sarah.innerHTML = "Sarah";
        sarah.addEventListener("click", function(e) {
            props.checkSelection(x,y,1);
            closeMenu();
        });
        const astro = document.createElement('div');
        astro.innerHTML = "Astro Boy";
        astro.addEventListener("click", function(e) {
            props.checkSelection(x,y,2);
            closeMenu();
        });
        menuDiv.appendChild(trinity);
        menuDiv.appendChild(sarah);
        menuDiv.appendChild(astro);

        menuDiv.className = "menuDiv";
        menuDiv.style.background = "lightgrey";
        menuDiv.style.position = "absolute";
        menuDiv.style.left = e.pageX+"px";
        menuDiv.style.top = e.pageY+"px";
        menuDiv.style.height = "100px";
        menuDiv.style.width = "200px";
        document.body.appendChild(menuDiv);
        setMenuOpen(true);
    }

    const closeMenu = () => {
        const menus = document.getElementsByClassName("menuDiv");
        for (let i=0;i<menus.length;i++) {
            menus[i].style.display = "none";
        }
        setMenuOpen(false);
    }

    const processClick = (e) => {
        if (menuOpen === false && e.target.className === "gameImage") {
            let PosX = getCoords(e)[0];
            let PosY = getCoords(e)[1];
            showMenu(PosX,PosY,e);
        } else {
            closeMenu();
        }
    }

    let className = (showModal)? "showModal": "hideModal";
    let gameOverClass = (props.gameOver)? "showLeaderboard" : "hideLeaderboard";

    const setName = (e) => {
        props.setName(e.target.value)
    }

    const closeModal = () => {
        props.changeGameStatus("start");
        setShowModal(false);
    }


    return (
        <div className="gameDiv">
            <div className={className}>
                <label for="name" className="userName">Enter the Player name</label> 
                <input id="name" onChange={setName}></input>
                <button onClick={closeModal} className="modalLink">Start Game</button>
            </div>
            <div className="imageDiv" onClick={processClick}>
                <img src={fight_club} alt="" className="gameImage" onClick={processClick}></img>
            </div>
            <div className={gameOverClass}>
                <h1>Game over!!!!!</h1>
            </div>
        </div>
    );
}

export default Game;