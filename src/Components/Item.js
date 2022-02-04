import './Item.css';

export default function Item({ item }) {
    return (
        <div key={item.id} className='cardItems'>
            <div className='card-img-top'>
            <img src={item.img} alt='Imagen del producto' className='card-img-top' />
            </div>            
            <div className='card-body'>
            <h4 className='card-title'>{item.title}</h4>
            <p className='card-price'>$ {item.price}</p>
            </div>
            
        </div>
    );
}