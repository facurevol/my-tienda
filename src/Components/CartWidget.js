import React from "react";
import "./CartWidget.css"
import carrito from ".././img/cart.svg";

function CartWidget() {
  return (
    
      <div className="nav carrito">
        <img src={carrito} alt="Carrito" /> <h3 className="nav">6</h3>
      </div>       
  );
};

export default CartWidget;
