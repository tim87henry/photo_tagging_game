import {useState, useEffect} from "react";

const Timer = (props) => {
    
    let min = 0;
    let sec = 0;

    min = Math.floor(props.time / 60).toString().padStart(2,0);
    sec = (props.time % 60).toString().padStart(2,0);
    
    useEffect(() => {
        setTimeout(() => {
            if (props.gameOngoing) {
                props.increaseTime();
            }
        }, 1000);
    })

    return(
        <div className="timer">
            {min}:{sec}
        </div>
    );
}

export default Timer;