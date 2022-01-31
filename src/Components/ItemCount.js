import React, { useState } from "react";
import "./ItemCount.css";

function ItemCount({ stock, initial, onAdd }) {
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

    function addToCart() {
        onAdd(contador);
    }


    return (
        <div className="containerContador">
            <div className="containerBotonAddItems">
                <button onClick={aumentarContador}>+</button>
                <p>{contador}</p>
                <button onClick={restarContador}>-</button>
            </div>
            <div className="ContainerBotonAddToCart">
                <button onClick={addToCart}>Agregar al carrito</button>
            </div>
        </div>

    )
};

export default ItemCount;