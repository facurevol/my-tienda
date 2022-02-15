import "./ItemDetailContainer.css"
import ItemCount from "./ItemCount.js";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";


export default function ItemDetail({ item }) {
    const [itemCount, setItemCount] = useState();
    const { addCart, cart } = useContext(CartContext);

    useEffect(()=> {
        console.log(itemCount);
    },[itemCount]);

    function addToCart(newItemCount) {        
        setItemCount(newItemCount);
        addCart(newItemCount, item);

    };

    console.log(cart);

    return (

        <div key={item.id} className="item-detail">
            <div className="left-column">
                <img src={item.img} className="img-fluid" alt="..." />
            </div>
            <div className="rigth-column">
                <div className="details">
                    <h6 className='categoria'>{item.categoria}</h6>
                    <h4 className='title'>{item.title}</h4>
                    <p className='price'>$ {item.price}</p>
                    <p className='description'>{item.description}</p>                    
                </div>
                <div className="card-footer">
                    { !itemCount ?                    
                    <ItemCount stock={5} initial={1} onAdd={addToCart}/> :
                    <Link to="/cart"><button className="btn-compra">Ir al carrito</button></Link> 
                    }           
                </div>
            </div>

        </div>



    );
}