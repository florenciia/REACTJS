import React from 'react';
import './NavBar.css';
import { Icon } from 'semantic-ui-react';


const NavBar = () => {
    return (
        <>
             <nav className="navbar navbar-expand-lg container-fluid">
                <div className="container-fluid">
                        <a className="navbar-brand" href="#"> PERFUMES.SENSCIONES</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">INICIO</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">NOSOTROS</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    FRAGANCIAS
                                    </a>
                                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <li><a className="dropdown-item" href="#">Mujer</a></li>
                                            <li><a className="dropdown-item" href="#">Hombre</a></li>
                                            <li><a className="dropdown-item" href="#">Niños</a></li>
                                        </ul>
                                </li>
                                <li className="carrito">
                                    <Icon name='cart arrow down' />                        
                                </li>
                            </ul>
                        </div>
                    </div>
            </nav> 
        </>
            
    
    );
};

export default NavBar;