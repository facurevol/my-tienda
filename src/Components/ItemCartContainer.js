import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import "./Cart.css";
import Cart from "./Cart";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";




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
    return <h2> Este es el Id: {orderId} </h2>
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
          {cart.map((products) => (
            <>
              <Cart product={products} functionAdd={addCartItem} functionSub={subCartItem} deleteItem={deleteItem} />
            </>

          ))}
          <div className="cart-total-price">
            <h5>Total: $ {totalPrice()}</h5>
          </div>

          <div className="delete-cart">
            <button onClick={deleteCart}>Vaciar carrito</button>
          </div>

          <div>
            <div className="cart-form-container">
              <div className="cart-form-title">
                <h2>Completar con sus datos personales para finalizar la compra</h2>
              </div>
              <form onSubmit={onSubmit}>
                <div className="cart-form-content">
                  <label>Nombre Completo</label>
                  <input value={name} onChange={handleNameChange} type="text" placeholder="Nombre y Apellido" />
                </div>
                <div className="cart-form-content">
                  <label>Email</label>
                  <input value={email} onChange={handleEmailChange} type="email" placeholder="email@mail.com" />
                </div>
                <div className="cart-form-content">
                  <label>Repetir Email</label>
                  <input value={repEmail} onChange={handleRepEmailChange} type="email" placeholder="email@mail.com" />
                </div>
                <div className="cart-form-content">
                  <label>Telefono</label>
                  <input value={phone} onChange={handlePhoneChange} type="text" placeholder="+ 54 9 351 0 000000" />
                </div>
                <div >                
                {email === repEmail ? <button disabled={(name === '') | (email === '') | (repEmail === '') | (phone === '')} type="submit">
                  {loading ? 'Generando orden...' : 'Finalizar compra'}
                </button> : <p>No coincide el Email</p>}
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