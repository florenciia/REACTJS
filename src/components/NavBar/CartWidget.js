import React, { Component } from 'react';
import './NavBar.css';
import { Icon } from 'semantic-ui-react';

class CartWidget extends Component {
	render() {
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
    }
};

export default CartWidget;

