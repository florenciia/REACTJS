//import logo from './logo.svg';
import React, { Fragment } from 'react';
import './App.css';
import './styles.css';

//fragment es igual que hacerlo con un div general
function App() {
  return (
    <Fragment>
      <div className="App" id="container-fluid">
          <nav class="navbar navbar-expand-lg">
            <ul class="nav justify-content-center">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">NOSOTROS</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">FRAGANCIAS</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">CONTACTO</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">COMPRA POR WPP</a>
              </li>
            </ul>
          </nav>
      </div>
      
    </Fragment>
  );
}

export default App;
