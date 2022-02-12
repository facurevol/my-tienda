import React from "react";
import "./CartWidget.css"
import carrito from ".././img/carrito.svg";
import { Link } from "react-router-dom";

function CartWidget() {
  return (
    <div className="carrito">
      
      <div className="nav-carrito">
      <Link to="/cart" ><img src={carrito} alt="Carrito"/>  
      </Link>     
      </div>
      <div className="nav-cantidad"><p>6</p></div>
      
    </div>


  );
};

export default CartWidget;
