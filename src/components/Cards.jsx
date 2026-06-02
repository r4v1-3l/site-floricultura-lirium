import './Cards.css';
import { Handbag } from 'lucide-react';

export function Cards({ title, about, flowers, colors, price, image, onAbout }) {

  return (
    <div className="lirium-card">
      <img src={image} alt={title} className="card-img" />

      <button className={`favorite-btn ${isFavorite ? "active" : ''}`} onClick={onFavorite}>
        <Heart size={14}fill={isFavorite ? "#7c3aed" : "transparent"} stroke={isFavorite ? "#7c3aed" : "white"}/>
      </button>

      <div className="card-info">
        <h4 className="card-title">{title}</h4>

          <p className="card-extra">{about}</p>
          <p className="card-flowers">
            {Array.isArray(flowers) ? flowers.join(", ") : flowers}
          </p>
          <p className="card-colors">
            {Array.isArray(colors) ? colors.join(", ") : colors}
          </p>
        </div>

        <div className="card-footer">
          <h4 className="card-price">{price}</h4>
          <button className="about-btn" onClick={onAbout}>
            <p>Saiba Mais</p>
          </button>
        </div>
      </div>
  );
}