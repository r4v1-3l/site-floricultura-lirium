import './Cards.css';
import { Heart, Handbag } from 'lucide-react';

export function Cards({ title, about, flowers, colors, price, image, index, isFavorite, onFavorite, onAbout }) {

  return (
    <div className="lirium-card"
      data-aos="fade-up"
      data-aos-delay={index * 30}>
          <div className="card-image-wrapper">
            <img src={image} alt={title} className="card-img" />
              <button className={`favorite-btn ${isFavorite ? "active" : ""}`} onClick={onFavorite}>
                <Heart size={14} fill={isFavorite ? "#55001A" : "transparent"} stroke={isFavorite ? "#55001A" : "white"}/>
              </button>
          </div>

      <div className="card-info">
        <strong><p className="card-title">{title}</p></strong>

          <p className="card-extra">{about}</p>
          <p className="card-flowers">
            {Array.isArray(flowers) ? flowers.join(", ") : flowers}
          </p>
          <p className="card-colors">
            {Array.isArray(colors) ? colors.join(", ") : colors}
          </p>
        </div>

        <div className="card-footer">
          <strong><p className="card-price">{price}</p></strong>
          <button className="about-btn" onClick={onAbout}>
            <p>Saiba Mais</p>
          </button>
        </div>
      </div>
  );
}