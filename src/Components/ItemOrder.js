import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";

//import { Link } from "react-router-dom";

const ItemOrder = () => {
    
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')  
    
    const handleNameChange = event => setName(event.target.value)
    const handleEmailChange = event => setEmail(event.target.value)
    const handlePhoneChange = event => setPhone(event.target.value)
    
    const onSubmit = (event) => {
        event.preventDefault();

        if (![name, email, phone].some(field => field ==="")) {

            const itemCollection = collection(db, 'compra')
            const newItem = {
                name,
                email,
                phone,
                
                          
                    
            }

            addDoc(itemCollection, newItem)
            .then(doc => {
                console.log('se guardo correctamente', doc.id)
                
            })
            .catch(error => {
                console.log(error)
            })
            return (<h1>hola</h1>)

        } else {

        }

    }
    

   
        
    
    return (
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
                <button  type="submit">Comprar</button>
            </form>
           
        </div>

    );
}
export default ItemOrder;

/*const db = getFirestore();

        const orders = db.collection('orders');
        const newOrder = {
            buyer: userInfo,
            items: Cart,
            date: firebase.firestore.Timestamp.fromDate(new Date()),
            total: price(),
        };*/
