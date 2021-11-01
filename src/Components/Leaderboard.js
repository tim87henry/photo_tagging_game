import {useState} from "react";

const Leaderboard = (props) => {

    const [leaderboard, setLeaderboard] = useState([]);
    const [name,setName] = useState("");
    const [showModal, setShowModal] = useState(true);

    const setUserName = (e) => {
        setName(e.target.value);
    }

    const addScore = () => {
        let leaderboardCopy = leaderboard;
        leaderboardCopy.push([name,props.time]);
        setLeaderboard(leaderboardCopy);
    }

    const closeModal = () => {
        setShowModal(false);
        addScore();
    }

    let modalClass;
    modalClass = (showModal)? "nameModal": "hideModal";

    return (
        <div>
            <div className={modalClass}>
                <label for="name" className="userName">Enter your stupid name</label> 
                <input id="name" onChange={setUserName}></input>
                <button onClick={closeModal} className="modalLink">Okay</button>
            </div>
            <h3>
                TOP SCORES
            </h3>
            <table className="leaderboard">
                <tr>
                    <th>Name</th>
                    <th>Time</th>
                </tr>
                {
                    leaderboard.map(item => {
                    return(
                        <tr>
                            <td>{item[0]}</td>
                            <td>{item[1]} sec</td>
                        </tr>
                    )
                    })
                }
            </table> 
        </div>
    );
}

export default Leaderboard;