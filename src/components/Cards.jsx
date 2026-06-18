import './Cards.css';
import { Heart, ChevronLeft, ChevronRight, Handbag } from 'lucide-react';

import { useRef } from "react";

export function Cards({ title, about, flowers, colors, price, image, index, isFavorite, onFavorite, onAbout }) {

  const flowersRef = useRef(null);
  const colorsRef = useRef(null);

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

          <div className="items-wrapper">

            <button className="scroll-btn" onClick={() => flowersRef.current.scrollBy({ left: -150, behavior: "smooth" })}><ChevronLeft size={14}/></button>

              <div className="card-flowers"  ref={flowersRef}>
                {flowers?.map((flower) => (
                  <div key={flower} className="card-flower">
                    {flower}
                  </div>
                ))}
              </div>

            <button className="scroll-btn" onClick={() => flowersRef.current.scrollBy({ left: 150, behavior: "smooth" })}><ChevronRight size={14}/></button>

          </div>
          <div className="items-wrapper">

           <button className="scroll-btn" onClick={() => colorsRef.current.scrollBy({ left: -150, behavior: "smooth" })}><ChevronLeft size={14}/></button>

            <div className="card-colors" ref={colorsRef}>
              {colors?.map((color) => (
                  <div key={color} className="card-flower">
                    {color}
                  </div>
                ))}
            </div>

            <button className="scroll-btn" onClick={() => colorsRef.current.scrollBy({ left: 150, behavior: "smooth" })}><ChevronRight size={14}/></button>

          </div>
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