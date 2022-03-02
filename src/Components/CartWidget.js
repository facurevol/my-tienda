import React, { useContext } from "react";
import "./CartWidget.css"
import carrito from ".././img/carrito.svg";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";


function CartWidget() {
  const { totalItems } = useContext(CartContext);
  return (
    <div className="carrito">
      
      <div className="nav-carrito">
        <Link to="/cart" ><img src={carrito} alt="Carrito" />
        </Link>
      </div>
      <div className="nav-cantidad"><p>{totalItems()}</p></div>

    </div>


  );
};

export default CartWidget;
