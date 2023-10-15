import React from "react";
import './Header.modul.css'

function Header(): JSX.Element {
    return (
        <div className="heading">
            <p>Lets add what you have to do!</p>
            <p>Fill the input and click button or "Enter" to and a new task into the list</p>
            <p>To mark as completed, just click directly to the task</p>
        </div>
    )
}

export default Header;