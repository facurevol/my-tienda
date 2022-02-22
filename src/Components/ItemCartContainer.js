import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import "./Cart.css";
import Cart from "./Cart";

const ItemCartContext = () => {
  const { cart, vaciarCart, borrarItem, sumarItem, restarItem, sumaTotal } =
    useContext(CartContext);

  function sumarEnCartItem(id) {
    sumarItem(id);
    //restarItem(id);
  }

  function restarEnCartItem(id) {
   
    restarItem(id);
  }
  



  return (
    <div>
      {cart.length === 0 ? (
        <>
          <h2>No hay productos seleccionados, volver al home</h2>
          <Link to="/">Home</Link>
        </>
      ) : (
        <div>
          {cart.map((productos) => (
            <>

              <Cart producto={productos} funcion={sumarEnCartItem} funcion2={restarEnCartItem} borrarItem={borrarItem} />

              <button onClick={() => borrarItem(productos.id)}>X</button>

            </>

          ))}
          <div>
            <h5>Total: $ {sumaTotal()}</h5>
          </div>
          <div>
            <button>Comprar</button>
          </div>
          <div>
            <button onClick={vaciarCart}>Vaciar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemCartContext;