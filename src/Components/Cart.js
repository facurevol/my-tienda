import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import './Cart.css';
//import Item from "./Item";
import ItemCart from "./ItemCart";

const Cart = () => {
    const { cart, vaciarCart, borrarItem, sumarItem, restarItem, sumaTotal } = useContext(CartContext);
    
  

    return (
        <div>
            {
                cart.length === 0 ? (
                    <>
                        <h2>
                            No hay productos seleccionados, volver al home
                        </h2>
                        <Link to="/">Home</Link>
                    </>
                ) : (
                    <div >
                        {cart.map((productos) => (
                            <div key={productos.id} className='producto-container'>
                                <div className='detail-carrito producto-img'>
                                    <img src={productos.img} alt='Imagen del producto' className='producto-img' />
                                    <div className="item-title">
                                        <h6 className='item-categoria'>Producto:</h6>
                                        <h4 className='producto-title'>{productos.title}</h4>
                                    </div>
                                    <div className="item-categoria">
                                        <h6 className='item-categoria'>Cantidad:</h6>
                                        <p className='producto-price'>{productos.newItemCount}</p>
                                        <button onClick={() => sumarItem(productos.id)}>+</button>
                                        <button onClick={() => restarItem(productos.id)}>-</button>
                                        <ItemCart stock={5} initial={1}/>
                                    </div>
                                    <div className="item-unidad">
                                        <h6 className='item-categoria'>Precio Unidad:</h6>
                                        <p className='item-price'>$ {productos.price}</p>
                                    </div>
                                    <div className="item-subTotal">
                                        <h6 className='item-categoria'>Total:</h6>
                                        <p className='item-price'>$ {productos.newItemCount * productos.price}</p>
                                    </div>
                                    <button onClick={() => borrarItem(productos.id)}>X</button>
                                </div>
                            </div>
                        ))}
                        <div>                        
                            <h5>
                            Total: $ {sumaTotal()}
                            </h5>                        
                        </div>
                        <div>
                            <button>Comprar</button>
                        </div>
                        <div>
                            <button onClick={vaciarCart}>Vaciar</button>
                        </div>
                    </div>


                )
            }
        </div>
    );
};

export default Cart;