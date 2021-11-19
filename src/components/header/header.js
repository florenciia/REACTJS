import React from 'react'
import './Header.css';


const header = ({title, color}) => {
    return (
        <div className="Header">
            <h1 className="titulo">{title}</h1>
        </div>
    );
};

export default header;

/* <div style={{backgroundColor: `${color}`}} className="Header"> */
