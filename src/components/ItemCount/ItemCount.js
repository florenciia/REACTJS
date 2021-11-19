import React, { useState } from "react";
import './ItemCount.css'

const ItemCount = () => {    
  const [counter, setCounter] = useState(0);
    
       const handlerCounterUp = () => {
         if(counter < 10){
             setCounter(counter + 1);
         };
       }
       
       const handlerCounterDown = () => {
         if(counter > 0) {
             setCounter(counter - 1);
       }
      };

          return (
            <div className="ItemCount">
              <p>{counter}</p>
              <button onClick={handlerCounterDown}>Decrementar</button>
              <button onClick={handlerCounterUp}>Incrementar</button>
            </div>
          );
};

export default ItemCount;