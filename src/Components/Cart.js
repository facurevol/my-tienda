import React, { useState } from "react";
import "./Cart.css";
//import Item from "./Item";
import ItemCart from "./ItemCart";

const Cart = ({ producto, funcion, borrarItem }) => {
  const [cart2, setcart2] = useState(producto.newItemCount);

  function cambiarCantidad(cantidad) {
    setcart2(cantidad);
    funcion(producto.id, cantidad)
    
  }

  
  
  return (
    <div key={producto.id} className="producto-container">
      <div className="detail-carrito producto-img">
        <img
          src={producto.img}
          alt="Imagen del producto"
          className="producto-img"
        />
        <div className="item-title">
          <h6 className="item-categoria">Producto:</h6>
          <h4 className="producto-title">{producto.title}</h4>
        </div>
        <div className="item-categoria">
          <ItemCart cantidad={producto.newItemCount} ojala={cambiarCantidad} />
        </div>
        <div className="item-unidad">
          <h6 className="item-categoria">Precio Unidad:</h6>
          <p className="item-price">$ {producto.price}</p>
        </div>
        <div className="item-subTotal">
          <h6 className="item-categoria">Total:</h6>
          <p className="item-price">$ {cart2 * producto.price}</p>
        </div>
       <button onClick={borrarItem}>X</button>
      </div>
    </div>
  );
};

export default Cart;