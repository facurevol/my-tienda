import './ItemList.css';
import Item from './Item';

export default function ItemList({ productos }) {
    return (
        <div className='item-list-container'>
            {
                productos.map ( function(producto) {
                    return (
                        <Item key={producto.id} item={producto} />
                    )
                })
            }            
        </div>
    );
}
