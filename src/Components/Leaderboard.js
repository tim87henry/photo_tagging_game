import {useState} from "react";
import {collection, addDoc, getDocs} from "firebase/firestore";
import db from "../firebase";

const Leaderboard = (props) => {

    const [leaderboard, setLeaderboard] = useState([]);
    const [name,setName] = useState("");
    const [showModal, setShowModal] = useState(true);

    const setUserName = (e) => {
        setName(e.target.value);
    }

    const addScore = async () => {
        const querySnapshot = await getDocs(collection(db, "leaderboard"));
        let leaderboardTemp = [];
        querySnapshot.forEach((item) => {
            leaderboardTemp.push([item.data()["name"],item.data()["time"]])
        });
        insertSort(leaderboardTemp);
        setLeaderboard(leaderboardTemp);
    }

    const closeModal =  async () => {
        setShowModal(false);
        addScore();
        let time = props.time;
        await addDoc(collection(db, "leaderboard"), {
            name: name,
            time: time
          });
    }

    const insertSort = (arr) => {
        let i,j,key;
        for (i=1;i<arr.length;i++) {
            key = arr[i][1];
            j = i - 1;
            while (j >= 0 && arr[j][1] > key) {
                let temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp;
                j=j-1;
            }
            arr[j+1][1] = key;
        } 
        return arr;
    }

    let modalClass, scoresClass;
    modalClass = (showModal)? "nameModal": "hideModal";
    scoresClass = (!showModal)? "showScores": "hideScores";

    return (
        <div>
            <div className={modalClass}>
                <label for="name" className="userName">Enter your name</label> 
                <input id="name" onChange={setUserName} className="nameText"></input>
                <button onClick={closeModal} className="modalLink">Okay</button>
            </div>
            <div className={scoresClass}>
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
        </div>
    );
}

export default Leaderboard;