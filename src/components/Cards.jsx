import './Cards.css';
import {Handbag} from 'lucide-react';

export function Cards({title, flowers, colors, price, image}){
    
    return(
        <div className="lirium-card">
            <img src={image} alt={title} className='card-img' />

            <div className="card-info">
                <h4>{title}</h4>
                <p>{Array.isArray(flowers) ? flowers.join(", ") : flowers}</p>
                <p>{Array.isArray(colors) ? colors.join(", ") : colors}</p>
                <h4>{price}</h4>

                <br />
                <button className="buy-btn"><Handbag size={14} fill='none' stroke='#F2D7D9'/></button>
            </div>

        </div>
    )
}