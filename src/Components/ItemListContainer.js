import React from "react";
//import { isElementOfType } from "react-dom/cjs/react-dom-test-utils.development";
import "./ItemListContainer.css";
import ItemCount from "./ItemCount.js";

function Item({ greeting }) {

    function addToCart(){
        console.log('se agregan los items');
   };

    return (
        <div className='item-list-container'>
            <h2>Somos Casa Pelgo!!!</h2>
            <p>{greeting}</p>
         <ItemCount stock={5} initial={1} onAdd={addToCart}/>
        </div>
    );
};
export default Item;