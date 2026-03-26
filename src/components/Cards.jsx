import './Cards.css';
import {Handbag} from 'lucide-react';

export function Cards({title, price, image}){
    
    return(
        <div className="lirium-card">
            <img src={image} alt={title} className='card-img' />

            <div className="card-info">
                <h4>{title}</h4>
                <h4>{price}</h4>
                <br />
                <button className="buy-btn"><Handbag size={14} fill='none' stroke='#3A5A40'/></button>
            </div>

        </div>
    )
}