import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import "./Cart.css";
import Cart from "./Cart";

const ItemCartContext = () => {
  const { cart, vaciarCart, borrarItem, sumarItem, sumaTotal } =
    useContext(CartContext);

  function sumarEnCartItem(id) {
    sumarItem(id);
  }
  //console.log(cart);



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

              <Cart producto={productos} funcion={sumarEnCartItem} borrarItem={borrarItem} />

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