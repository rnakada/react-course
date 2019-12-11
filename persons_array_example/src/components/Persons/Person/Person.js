import React from 'react';
import Radium from 'radium';
import './Person.css';

const Person = (props) => {
    const style = {
        '@media (min-width: 500px)': {
            width: "450px"
        }
    }
    
    return (
        <div style={style} className="Person" >
            <p onClick={props.clicked}>I'm a {props.name} and I am {props.age} years old!</p>
            <p style={{ fontWeight: "bold", textDecoration: "underline" }}>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
};

export default Radium(Person);

// let names = ['Barky', 'Stark', 'Clark'];

    // const fullName = names.map((name) => {
    //     let lastName = ' Mitchells';
    //     return <div key={Math.random()}>{name + lastName}</div>
    // })

    // return fullName;