import './Item.css';

export default function Item({ item }) {
    return (
        <div key={item.id} className='cardProductos'>
            <img src={item.img} alt='Imagen del producto' className='imgCard' />
            <p className='title'>{item.title}</p>
            <p className='price'>$ {item.price}</p>
            
        </div>
    );
}