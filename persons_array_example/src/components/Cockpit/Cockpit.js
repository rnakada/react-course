import React from "react";
import "./Cockpit.css";

import Radium from 'radium';

const cockpit = (props) => {

    const classes = [];

    if (props.user.length <= 2) {
        classes.push("red"); // className="red"
        console.log("<= 2");
    }

    if (props.user.length <= 1) {
        classes.push("bold"); // className="bold"
        console.log("<= 1");
    }

    if (props.user.length < 1) {
        classes.push("large");
        console.log("< 0");
    }

    return (
        <div>
            <h1>Hi, I'm a React App</h1>
            <p className={classes.join(" ")}>This is realling working! DUH MAX its working :P</p>
            < button
                // onClick={switchNameHandler}
                onClick={props.toggle}
                style={props.style} > Switch Name</button>
        </div>
    );
};

export default Radium(cockpit);