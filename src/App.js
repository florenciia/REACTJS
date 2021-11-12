import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';

//components
//import Header from './components/header/header';
import NavBar from './components/NavBar/Navbar';
import UserCard from './components/TarjetaPerfumes/TarjetaPerfumes';
import { Header } from 'semantic-ui-react';

//fragment es igual que hacerlo con un div general
class App extends Component {
	render() {
      return (
      <div className="App" id="container-fluid">
          
          <NavBar />

          <Header 
                title="Dejá elegir a tus sentidos"
          />

            <div className="UserSection">
                <UserCard
                  name='Perfume Uno'
                  price='$1500'
                  img='https://react.semantic-ui.com/images/avatar/large/matthew.png'
                  boton='Agregar al carrito'
                />
                <UserCard
                  name='Perfume Dos'
                  price='$ 2500'
                  img='https://react.semantic-ui.com/images/avatar/large/elliot.jpg'
                  boton='Agregar al carrito'
                />
                <UserCard
                  name='Perfume Tres'
                  price='$4000'
                  img='https://react.semantic-ui.com/images/avatar/large/daniel.jpg'
                  boton='Agregar al carrito'
                />
                <UserCard
                  name='Perfume Cuatro'
                  price='$4600'
                  img='https://react.semantic-ui.com/images/avatar/large/daniel.jpg'
                  boton='Agregar al carrito'
                />
                <UserCard
                  name='Perfume Cinco'
                  price='$7000'
                  img='https://react.semantic-ui.com/images/avatar/large/daniel.jpg'
                  boton='Agregar al carrito'
                />

            </div>
        </div>
      
    );
  }
}

export default App;




























//CLASE 4 -- COMPONENTES
/*
import React, { Component } from "react";
import './App.css';
//components
import Header from "./components/header/header";
import { Card } from 'semantic-ui-react'

const src = '/images/wireframe/image.png'
class App extends Component {
  //método sólo en class no en funciones
  render(){
    return (
      <div className="App">
                   <Header title='soy el titulo a partir de una prop'
                   subtitle='soysubtitle'
                   />
                  <Card.Group itemsPerRow={6}>
                    <Card raised image={src} />
                    <Card raised image={src} />
                    <Card raised image={src} />
                    <Card raised image={src} />
                    
                  </Card.Group>
      </div>
    );
  }
}
export default App;
*/