import React from "react";
import "./Cart.css";
import ItemCart from "./ItemCart";

const Cart = ({ product, functionAdd, functionSub, deleteItem }) => {

  function addCount(quantity) {
    functionAdd(product.id, quantity);
  }

  function subCount(quantity) {
    functionSub(product.id, quantity);
  }

  return (
    <div key={product.id} className="detail-cart-container">
      
        <spam className="detail-cart-img">
          <img
          src={product.img}
          alt="Imagen del producto"
          className=""
        />
        </spam>
      
        <div className="detail-cart-title">
          <h6 className="cart-text-titles">Producto:</h6>
          <h4 className="cart-text-content">{product.title}</h4>
        </div>
        
        <ItemCart stock= {product.stock} quantity={product.newItemCount} add={addCount} sub={subCount} />
        
        <div className="detail-cart-price">
          <h6 className="cart-text-titles">Precio Unidad:</h6>
          <p className="cart-text-content">$ {product.price}</p>
        </div>
        <div className="detail-cart-total-price">
          <h6 className="cart-text-titles">Total:</h6>
          <p className="cart-text-content">$ {product.newItemCount * product.price}</p>
        </div>
        <div className="detail-cart-btn-delete-item">
        <button className="btn-delete-item" onClick={() => deleteItem(product.id)}>X</button>
        </div>
        
     
    </div>
  );
};

export default Cart;