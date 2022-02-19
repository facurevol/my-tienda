import React, { useState } from "react";


function CartCount({ stock, initial, onAdd }) {
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
        <div className="count-container">
            <div className="count-add-detail">
                <div>Cantidad de Unidades: <p className="count">{contador}</p></div>
                <button onClick={aumentarContador}>+</button>                
                <button onClick={restarContador}>-</button>
            </div>
            <div>
                <button onClick={addToCart} className="btn btn-primary">Agregar al carrito</button>
            </div>
        </div>

    )
};

export default CartCount;