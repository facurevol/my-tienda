import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
    const { cart } = useContext(CartContext);

    return (
    <div> 
        {cart.lenght === 0 ? (
            <>
            <h2>
            No hay productos seleccionados, volver al home
            </h2>
            <Link to="/">Home</Link>
            </>
        ) : (
            <>
            {cart.map((producto) => (
                <div key={producto.id}>
                    <h3>{producto.nombre}</h3>
                </div>
            ))}
            </>

        )}               
        </div>
    );
};

export default Cart;