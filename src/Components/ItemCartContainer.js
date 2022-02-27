import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import "./Cart.css";
import Cart from "./Cart";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";



const ItemCartContext = () => {
  const { cart, vaciarCart, borrarItem, sumarItem, restarItem, sumaTotal } =
    useContext(CartContext);

  function sumarEnCartItem(id) {
    sumarItem(id);

  }

  function restarEnCartItem(id) {

    restarItem(id);
  }

//boton de compra que muestra el id en pantalla y vuelve al home.

  let [comprado, setComprado] = useState(true);
const Comprar = () => {

console.log (comprado);

  if (comprado === true) {
    return  console.log("estoy andando")
} 
}









  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  const handleNameChange = event => setName(event.target.value)
  const handleEmailChange = event => setEmail(event.target.value)
  const handlePhoneChange = event => setPhone(event.target.value)


  const onSubmit = (event) => {
    event.preventDefault();

    if (![name, email, phone].some(field => field === "")) {

      const itemCollection = collection(db, 'compra')
      const newItem = {
        name,
        email,
        phone,
        cart,
        precio: sumaTotal(),

      }

      addDoc(itemCollection, newItem)
        .then(doc => {
          console.log('se guardo correctamente', doc.id)

        })
        .catch(error => {
          console.log(error)
        })


    } else {}
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
            <div>
              <form onSubmit={onSubmit}>
                <div>
                  <label>Nombre</label>
                  <input value={name} onChange={handleNameChange} type="text" />
                </div>
                <div>
                  <label>Email</label>
                  <input value={email} onChange={handleEmailChange} type="text" />
                </div>
                <div>
                  <label>Telefono</label>
                  <input value={phone} onChange={handlePhoneChange} type="text" />
                </div>
                <div>

                </div>
                <button type="submit">Comprar</button>

              </form>

            </div>

            <div>
              <button onClick={Comprar}>boton de prueba de la compra</button>
              
            </div>

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