import React, { useState } from "react";
import "./ItemCount.css";

function ItemCount({ stock, initial, onAdd }) {
    const [count, setContador] = useState(initial);

    function addCount() {
        if (count < stock) {
            setContador(count + 1);
        }
    }

    function subCount() {
        if (count > 1) {
            setContador(count - 1);
        }
    }

    function addToCart() {
        
        onAdd(count);
    }


    return (
        <div className="count-container">
            <div className="count-add-detail">
                <div>Cantidad de Unidades: <p className="count">{count}</p></div>
                <button onClick={addCount}>+</button>                
                <button onClick={subCount}>-</button>
            </div>
            <div>
                <button onClick={addToCart} className="btn btn-primary">
                Agregar al carrito
                </button>
            </div>
        </div>

    )
};

export default ItemCount;