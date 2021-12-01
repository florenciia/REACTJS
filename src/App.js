  import React, { Component } from 'react';
  import './App.css';
  //components
  import Header from './components/Header/Header';
  import { header } from 'semantic-ui-react';
  import NavBar from './components/NavBar/Navbar';
  import UserCard from './components/ItemListContainer/ItemListContainer';
  // import ItemList from './components/ItemListContainer/ItemList';
  //import CartWidget from './components/NavBar/CartWidget';
  import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
  class App extends Component {
  	render() {
        return (
          
          <div className="App" id="container-fluid">
                <NavBar/>       

                <ItemDetailContainer />
                
                  <Header
                        title="Deja elegir a tus sentidos"
                  />
                  
                    <div className="UserSection container-fluid">
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
  }; 
  export default App;




























// //CLASE 4 -- COMPONENTES
// /*
// import React, { Component } from "react";
// import './App.css';
// //components
// import Header from "./components/header/header";
// import { Card } from 'semantic-ui-react'

// const src = '/images/wireframe/image.png'
// class App extends Component {
//   //método sólo en class no en funciones
//   render(){
//     return (
//       <div className="App">
//                    <Header title='soy el titulo a partir de una prop'
//                    subtitle='soysubtitle'
//                    />
//                   <Card.Group itemsPerRow={6}>
//                     <Card raised image={src} />
//                     <Card raised image={src} />
//                     <Card raised image={src} />
//                     <Card raised image={src} />

//                   </Card.Group>
//       </div>
//     );
//   }
// }
// export default App;
// */













//COMPONENTES DE TIPO CLASE
//CICLOS DE VIDA
// import React from "react";
// import './App.css';

// class App extends React.Component{
//   constructor() {
//     console.log('Constructor');
//     super();

//     this.state = {
//       nombre: 'Nicolas'
//     };
//   }

//   componentDidMount() {
//   setTimeout(() => {
//       console.log('ComponentDidMount');
//     }, 2000);
//   }

//   componentDidUpdate(){
//     console.log('ComponentDidUpdate');
//   }

//   handlerChangeName = () => {
//     this.setState({name: 'Jorge'});
//   };


//   render(){
//     return(
//       <div className="App">
//         <h1>Ciclos de vida React</h1>
//           <p>{this.state.nombre}</p>
//             <button onClick={this.handlerChangeName}> Actualizar nombre</button>
//       </div>
//     );
//   }
// }

// export default App;





//FORMA MODERNA
//HOOKS --> COMPONENTES FUNCIONALES

// import React, { useState } from "react";
// import './App.css';

// const App = () => {
//   /* counter: la vaeriable que define nuestro state
//   setCounter: es la funcion que nos permite modificar el estado,
//   useState: lo que le pasamos dentro es el valor de counter
//   */
//   const [counter, setCounter] = useState(0);

//   const handlerCounterUp = () => {
//     setCounter(counter + 1);
//   }

//      return(
//        <div className="App">
//          <h1>HOOKS REACT</h1>
//          <p>{counter}</p>
//          <button onClick={handlerCounterUp}>Incrementar</button>
//          <button onClick={() => setCounter(counter-1)}>Decrementar</button>
//        </div>
//      );
// };
// export default App;



// import React, { useState } from 'react';
// import './App.css';

// //components
// import Header from './components/Header/Header';
// import { header } from 'semantic-ui-react';
// import NavBar from './components/NavBar/Navbar';
// import UserCard from './components/ItemListContainer/ItemListContainer';
// import CartWidget from './components/NavBar/CartWidget';
// //fragment es igual que hacerlo con un div general


//   return (
//           <div className="App" id="container-fluid">
//               <NavBar/>

//               <Header
//                     title="Deja elegir a tus sentidos"
//               />
//                <div className='CounterSection'>
//                     <p>Counter: {counter}</p>
                    
//                     <div className='btn-section'>
//                     <button onClick={handlerCounterDown}>Decrementar</button>
//                     <button onClick={handlerCounterUp}>Incrementar</button>
//                     </div>

//                 </div>

//                 <div className="UserSection container-fluid">
//                       <UserCard
//                         name='Perfume Uno'
//                         price='$1500'
//                         img='https://react.semantic-ui.com/images/avatar/large/matthew.png'
//                         boton='Agregar al carrito'
//                       />
//                       <UserCard
//                         name='Perfume Dos'
//                         price='$ 2500'
//                         img='https://react.semantic-ui.com/images/avatar/large/elliot.jpg'
//                         boton='Agregar al carrito'
//                       />
//                       <UserCard
//                         name='Perfume Tres'
//                         price='$4000'
//                         img='https://react.semantic-ui.com/images/avatar/large/daniel.jpg'
//                         boton='Agregar al carrito'
//                       />
//                       <UserCard
//                         name='Perfume Cuatro'
//                         price='$4600'
//                         img='https://react.semantic-ui.com/images/avatar/large/daniel.jpg'
//                         boton='Agregar al carrito'
//                       />
//                       <UserCard
//                         name='Perfume Cinco'
//                         price='$7000'
//                         img='https://react.semantic-ui.com/images/avatar/large/daniel.jpg'
//                         boton='Agregar al carrito'
//                       />
//                 </div>
//           </div>
//       );
//     }
  
// export default App;
    