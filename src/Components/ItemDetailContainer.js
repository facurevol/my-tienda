import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getDoc, doc } from "firebase/firestore";
import { db } from '../firebase';
import ItemDetail from "./ItemDetail.js";


export default function ItemDetailContainer () {
    const [products, setDetail] = useState([]);
    const { productId } = useParams();      
 
    useEffect (() => {

        const productRef = doc(db, 'items', productId)
        
        getDoc(productRef)
        .then((snapshot) => {

            if(snapshot.exists()) {
                setDetail({ id: snapshot.id, ...snapshot.data()})
            }
            
        })
        .catch(error => {
            console.log(error)
        })

    }, [productId]);

    return (
        <div>        
        <ItemDetail key={products.id} item={products} /> 
        </div>
    )
};