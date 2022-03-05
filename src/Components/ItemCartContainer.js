import React, { useContext, useState } from "react";

import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";
import "./Cart.css";

import Cart from "./Cart";


const ItemCartContext = () => {
  const { cart, deleteCart, deleteItem, addItem, subItem, totalPrice } =
    useContext(CartContext);

  function addCartItem(id) {
    addItem(id);
  }

  function subCartItem(id) {
    subItem(id);
  }

  const [orderId, setOrderId] = useState('');
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [repEmail, setRepEmail] = useState('')
  const [phone, setPhone] = useState('')

  const handleNameChange = event => setName(event.target.value)
  const handleEmailChange = event => setEmail(event.target.value)
  const handleRepEmailChange = event => setRepEmail(event.target.value)
  const handlePhoneChange = event => setPhone(event.target.value)

  const onSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    if (![name, email, repEmail, phone].some(field => field === "")) {

      const itemCollection = collection(db, 'orders')
      const newOrder = {
        date: new Date(),
        buyer: { email, name, phone },
        items: cart,
        total: totalPrice(),
      };

      addDoc(itemCollection, newOrder)
        .then((doc) => {
          setOrderId(doc.id);
        })
        .catch(error => {
          console.log(error)
        })
        .finally(() => {
          setLoading(false);
          deleteCart();
        });
    };
  }

  if (orderId !== '') {
    return (
      <div className="succes-item-order">
        <h2>Compra finalizada</h2>
        <h3>{name} su compra se realizo con éxito</h3>
        <h4> En las próximas 24 horas un representante de la marca se va a comunicar al email: {email} para coordinar la entrega.</h4>
        <p> Su número de orden es: {orderId} </p>
        <Link to='/'><button>Confirmar</button></Link>
      </div>
    )
  }

  return (
    <div>
      {cart.length === 0 ? (
        <div className="cart-empty">
          <h2>No hay productos seleccionados</h2>
          <Link to="/"><button>Volver al Home</button></Link>
        </div>
      ) : (
        <div>
          {cart.map((products) => (
            <>
              <Cart product={products} functionAdd={addCartItem} functionSub={subCartItem} deleteItem={deleteItem} />
            </>

          ))}
          <div className="cart-total-price">
            <h5>Total: $ {totalPrice()}</h5>
          </div>
          <div className="cart-btn-container">
            <Link to="/" ><button className="add-items-cart-btn">Agregar items</button></Link>
            <button className="delete-cart-btn" onClick={deleteCart}>Vaciar carrito</button>
          </div>
          <div>
            <div className="cart-form-container">
              <div className="cart-form-title">
                <h2>Completar con tus datos personales para finalizar la compra</h2>
              </div>
              <form onSubmit={onSubmit}>
                <div className="cart-form-content">
                  <label>Nombre completo del comprador:</label>
                  <input value={name} onChange={handleNameChange} type="text" placeholder="nombre y apellido" />
                </div>
                <div className="cart-form-content">
                  <label>Email:</label>
                  <input value={email} onChange={handleEmailChange} type="email" placeholder="email@tudominio.com" />
                </div>
                <div className="cart-form-content">
                  <label>Repetir Email:</label>
                  <input value={repEmail} onChange={handleRepEmailChange} type="email" placeholder="email@tudominio.com" />
                </div>
                <div className="cart-form-content">
                  <label>Teléfono:</label>
                  <input value={phone} onChange={handlePhoneChange} type="text" placeholder="+ 54 9 351 0 000000" />
                </div>
                <div className="cart-form-content">
                  {email === repEmail ? <button disabled={(name === '') | (email === '') | (repEmail === '') | (phone === '')} type="submit">
                    {loading ? 'Generando orden...' : 'Finalizar compra'}
                  </button> : <p>Chequear dirección de email</p>}
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemCartContext;