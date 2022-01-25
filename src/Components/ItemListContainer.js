import React from "react";
import "./ItemListContainer.css";

function Item({ greeting }) {

    return (
        <div className='item-list-container'>
            <h2>Somos Casa Pelgo!!!</h2>
            <p>{greeting}</p>
        </div>

    );
};
export default Item;