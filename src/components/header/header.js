import React from 'react'
import './header.css';


const header = (props) => {
    console.log(props);
    return (
        <div style={{backgroundColor: `${props.color}`}} className="Header">
            <h1 className="titulo">{props.title}</h1>
        </div>
    );
};

export default header;
