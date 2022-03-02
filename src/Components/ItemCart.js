import React, { useEffect, useState } from "react";
import "./ItemCartCount.css";

function ItemCount({ stock, quantity, add, sub }) {
  const [initial, setinitial] = useState(quantity);
  useEffect(() => {}, [initial]);

  function addCount() {
    if (initial < stock){
    setinitial(initial + 1);
    add(initial);       
  };};

  function subCount() {  
    if (initial > 1 ) { 
    setinitial(initial - 1);
    sub(initial);};  
  };

  return (
    <div className="detail-cart-count">
      <div className="count-add-detail">
        <div className="count-add-title">
          <h6 className="count-text-titles">Cantidad de Unidades:</h6>
        </div>
        <div className="count-add-content">
        <h4 className="count-text-content">{initial}</h4>
        <button  onClick={addCount}>+</button>
        <button onClick={subCount}>-</button>
        </div>
        
      </div>
      </div>
    
  );
}

export default ItemCount;