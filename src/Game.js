import fight_club from "./data/fight_club.png";
import "./style.css";

const Game = () => {

    const checkClick = (e) => {
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
        console.log("Position is "+PosX+" , "+PosY)
    }

    return (
        <div className="imageDiv">
            <img src={fight_club} alt="" useMap="#gamemap" className="gameImage" onClick={checkClick}></img>
            <map name="gamemap">
                {/* <area shape="poly" coords="280,1300, 300,1300, 300,1330, 280,1330" href="google.com"></area> */}
            </map>
        </div>
    );
}

export default Game;