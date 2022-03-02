import React, { useEffect, useState } from "react";
import "./ItemListContainer.css";
import { getProducts } from '../api/api.js';
import ItemList from "./ItemList.js";
import { useParams } from "react-router-dom";
import { getDocs, collection } from "firebase/firestore";
import { db } from '../firebase';

function Item({ greeting }) {
    const [products, setProducts] = useState([]);
    const { categoryName } = useParams();

   useEffect(() => {
        getProducts().then(function (products) {
            console.log(products);
            if (!categoryName){
                setProducts (products);
            } else {
            const categoryProducts = products.filter((product) => {
                return product.category === categoryName;
            });

            setProducts(categoryProducts);
        }
        });

        getDocs(collection(db, 'items'))
        .then(snapshot => {
            const products = snapshot.docs.map( (doc) => ({ id: doc.id, ...doc.data() }))
            console.log(products)
        })
        .catch(error => {
            console.log(error);
        });

    }, [categoryName]);

   
    return (
        <div className='container'>
            <div className='container'>
                <h2>Somos Casa Pelgo!!!</h2>
                <p>{greeting}</p>
            </div>
            {products.length > 0 ? <ItemList products={products} /> : <p>Cargando productos...</p>}            
        </div>
    );
};
export default Item;