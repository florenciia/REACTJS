import React from 'react';
import './NavBar.css';
import { Icon } from 'semantic-ui-react';


const CartWidget = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg container-fluid">
                <div className="container-fluid">
                 
                    <li className="carrito">
                        <Icon name='cart arrow down' />                        
                    </li>
                      
                </div>
            </nav> 
        </>
            
    
    );
};

export default CartWidget;

