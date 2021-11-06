const Notification = (props) => {

    if (props.popUpMsg === "") {
        return null;
    }

    let notificationClass;
    if (props.popUpMsg === "Wrong selection") {
        notificationClass = "notificationNotFound";
    } else {
        notificationClass = "notificationFound";
    }

    return (
        <div className={notificationClass} id="notify">
            {props.popUpMsg}
        </div>
    );
}

export default Notification;