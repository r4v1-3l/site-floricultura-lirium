import './CartCards.css';

import { RatingStars } from "./RatingStars";

import { Search, Heart, Trash2, ChevronUp, ChevronDown } from 'lucide-react';

export function CartCards({title, rating, flowers, colors, price, image, quantity, onIncrease, onDecrease, isFavorite, onFavorite, onRemove }){

    const colorMap = {
        Vermelho: "#E53935",
        Rosa: "#EC4899",
        Branco: "#FFFFFF",
        Amarelo: "#FACC15",
        Laranja: "#F97316",
        Roxo: "#9333EA",
        Lilás: "#C084FC",
        Azul: "#3B82F6",
        Verde: "#22C55E",
        Champagne: "#F5E6C8",
        Bege: "#D6BFA7",
        Preto: "#111111",
    };

    return(
        <div className="lirium-cart-card">

            <div className="cart-card-image-wrapper">
                <img src={image} alt={title} className="cart-card-img" />      
            </div>

                <div className="cart-card-content">
            
                    <div className="cart-card-info">
                        <strong><p className="cart-card-title">{title}</p></strong>
                        <div className="cart-card-rating">
                        <RatingStars rating={rating} />
                        </div>

                        <h6 className="cart-info-title">Flores</h6>
                        <div className="cart-flowers">
                            {flowers?.map((flower) => (
                                        <div key={flower} className="cart-flower"  onClick={() => onFlowerClick(flower)}>
                                            <span>{flower}</span>
                                        </div>
                                    ))}
                        </div>
                        
                        <h6 className="cart-info-title">Cores</h6>
                        <div className="cart-colors">
                            {colors?.map((color) => (
                                <div key={color} className="cart-color"  onClick={() => onColorClick(color)} style={{backgroundColor: color === "Branco" ? "#ffffff93": `${colorMap[color]}20`}}>
                                    <span
                                        className="color-dot"
                                        style={{
                                        backgroundColor: colorMap[color] || "#ccc",
                                        border: color === "Branco" ? "1px solid #ccc" : "none",
                                        }}
                                    />
                                <span>{color}</span>
                        </div>
                        ))}
                    </div>
                    </div>

                    <div className="cart-card-footer">

                        <strong><p className="cart-card-price">{price}</p></strong>

                        <div className="cart-card-footer-icons">

                            <div className="item-quantity-wrapper">
                                <button className="quantity-btn" onClick={onDecrease} disabled={quantity === 1}>
                                <ChevronDown size={14} color={quantity === 1 ? "#BDBDBD" : "#55001A"}/>
                                </button>
                                    {quantity}
                                <button className="quantity-btn" onClick={onIncrease} >
                                <ChevronUp size={14}/>
                                </button>
                            </div>

                            <button className="cart-card-action-btn"><Search size={18} stroke={'#55001A'}/></button>

                            <button className={`cart-card-action-btn ${isFavorite ? "active" : ""}`} onClick={onFavorite}>
                                <Heart size={18} fill={isFavorite ? "#55001A" : "transparent"} stroke={isFavorite ? "#55001A" : "#55001A"}/>
                            </button>

                            <button className="cart-card-action-btn" onClick={onRemove}><Trash2 size={18} stroke={'#55001A'} /></button>

                        </div>

                    </div>

                </div>

        </div>
    )
}