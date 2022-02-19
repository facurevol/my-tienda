import React, { useState } from "react";
import "./ItemCount.css";

function ItemCount({ stock, initial }) {
    const [contador, setContador] = useState(initial);

    function aumentarContador() {
        if (contador < stock) {
            setContador(contador + 1);
        }
    }

    function restarContador() {
        if (contador > 0) {
            setContador(contador - 1);
        }
    }

    


    return (
        
        <div className="count-container">
            <div className="count-add-detail">
                <div>Cantidad de Unidades: <p className="count">{contador}</p></div>
                <button onClick={aumentarContador}>+</button>                
                <button onClick={restarContador}>-</button>
            </div>
            
        </div>

    )
};

export default ItemCount;