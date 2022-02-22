import React, { useEffect, useState } from "react";
import "./ItemCount.css";

function ItemCount({ cantidad, agregar, sacar }) {
  const [inicial, setinicial] = useState(cantidad);
  useEffect(() => {}, [inicial]);

  function aumentarContador() {

    setinicial(inicial + 1);
    agregar(inicial);   
    
  }

  function restarContador() {  
    if (inicial > 1) { 
    setinicial(inicial - 1);
    sacar(inicial);};  
  };

  return (
    <div className="count-container">
      <div className="count-add-detail">
        <div>
          Cantidad de Unidades: <p className="count">{inicial}</p>
        </div>
        <button onClick={aumentarContador}>+</button>
        <button onClick={restarContador}>-</button>
      </div>
    </div>
  );
}

export default ItemCount;