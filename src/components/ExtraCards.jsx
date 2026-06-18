import './ExtraCards.css';

import { Heart } from "lucide-react";

export function ExtraCards( {title, image, price, index, isFavorite, onFavorite, onAbout} ){

    return(
        <div className="extra-lirium-card"
              data-aos="fade-up"
              data-aos-delay={index * 30}>
                  <div className="extra-card-image-wrapper">
                    <img src={image} alt={title} className="extra-card-img" />
                      <button className={`favorite-btn ${isFavorite ? "active" : ""}`} onClick={onFavorite}>
                        <Heart size={14} fill={isFavorite ? "#55001A" : "transparent"} stroke={isFavorite ? "#55001A" : "white"}/>
                      </button>
                  </div>
        
              <div className="extra-card-info">
                <strong><p className="card-title">{title}</p></strong>
        
    
        
                <div className="extra-card-footer">
                  <strong><p className="card-price">{price}</p></strong>
                  <button className="about-btn" onClick={onAbout}>
                    <p>Saiba Mais</p>
                  </button>
                </div>
            </div>
        </div> 
          );
}