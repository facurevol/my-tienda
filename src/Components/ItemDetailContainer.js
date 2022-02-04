import { useEffect, useState } from "react";
import { getProductos } from "../api/api.js";
import ItemDetail from "./ItemDetail.js";


export default function ItemDetailContainer () {
    const [productos, setDetail] = useState([]);
        
    useEffect(() => {
        getProductos().then((productos) => {
            const producto = productos.find ((p) => p.id === 1);
            setDetail(producto);

            
        });
    }, []);

    return (
        <div>        
        <ItemDetail key={productos.id} item={productos} /> 
        </div>
    )


}