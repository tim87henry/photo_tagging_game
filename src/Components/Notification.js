const Notification = (props) => {

    if (props.popUpMsg === "") {
        return null;
    }

    return (
        <div className="notification" id="notify">
            {props.popUpMsg}
        </div>
    );
}

export default Notification;