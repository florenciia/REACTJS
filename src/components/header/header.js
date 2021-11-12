import React from 'react'
import './header.css';


const header = (props) => {
    console.log(props);
    return (
        <div style={{backgroundColor: `${props.color}`}} className="Header">
            <h1>{props.title}</h1>
            <h2> {props.subtitle} </h2>
        </div>
    )
}

export default header;
