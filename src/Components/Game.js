import Astro from "../data/fight_club.png";
import {useState} from "react";

const Game = (props) => {

    const [menuOpen, setMenuOpen] = useState(false);

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
        trinity.className = "menuItem";
        trinity.addEventListener("click", function(e) {
            props.handleSelection(x,y,0);
            closeMenu();
        });
        const sarah = document.createElement('div');
        sarah.innerHTML = "Sarah";
        sarah.className = "menuItem";
        sarah.addEventListener("click", function(e) {
            props.handleSelection(x,y,1);
            closeMenu();
        });
        const astro = document.createElement('div');
        astro.innerHTML = "Astro Boy";
        astro.className = "menuItem";
        astro.addEventListener("click", function(e) {
            props.handleSelection(x,y,2);
            closeMenu();
        });
        if (!props.characters[0]) {
            menuDiv.appendChild(trinity);
        }
        if (!props.characters[1]) {
            menuDiv.appendChild(sarah);
        }
        if (!props.characters[2]) {
            menuDiv.appendChild(astro);
        }

        menuDiv.className = "menuDiv";
        menuDiv.style.position = "absolute";
        menuDiv.style.left = e.pageX+"px";
        menuDiv.style.top = e.pageY+"px";
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

    return (
        <div className="gameDiv" onClick={processClick}>
            <img src={Astro} alt="" className="gameImage"></img>
        </div>
    );
}

export default Game;