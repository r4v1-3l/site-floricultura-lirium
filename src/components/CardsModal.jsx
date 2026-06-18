import "./CardsModal.css";

import { RatingStars } from "./RatingStars";

import { X, Handbag, Heart, ChevronLeft, ChevronRight } from "lucide-react";

import { useRef, useState, useEffect } from "react";

export function CardsModal({ flower, onFlowerClick, onColorClick, isFavorite, onFavorite, onAddToCart, onClose}) {
    if (!flower) return null;

    const flowersRef = useRef(null);
    const colorsRef = useRef(null);

    const [showFlowerArrows, setShowFlowerArrows] = useState(false);
    const [showColorArrows, setShowColorArrows] = useState(false);

   
    useEffect(() => {
    const checkOverflow = () => {
        if (flowersRef.current) {
            setShowFlowerArrows(
                flowersRef.current.scrollWidth > flowersRef.current.clientWidth
            );
        }

        if (colorsRef.current) {
            setShowColorArrows(
                colorsRef.current.scrollWidth > colorsRef.current.clientWidth
            );
        }
    };

    setTimeout(checkOverflow, 0);

    window.addEventListener("resize", checkOverflow);

    return () => {
        window.removeEventListener("resize", checkOverflow);
    };
    }, [flower]);

    const categoryNames = {
        event: "Dia dos Namorados",
        bouquet: "Arranjos",
        extra: "Extras",
        combo: "Combos",
    };

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

    return (
        <div className="modal-overlay" onClick={onClose}>

            <div className="modal-content" onClick={(e) => e.stopPropagation()}>

                <img src={flower.image} alt={flower.title} className="modal-banner" />

                <div className="modal-body">

                    <div className="modal-top">
                        <span className="modal-category">{categoryNames[flower.category] || flower.category}</span>

                        <button className="close-btn" onClick={onClose}>
                            <X/>
                        </button>   
                    </div>
                    
                    <p className="title">{flower.title}</p>

                    <RatingStars rating={flower.rating} />

                    <p className="price">{flower.price}</p>
                        
                    <p className="description">{flower.about}</p>

                        <div className="modal-details">
                            <h6 className="details-title">Flores</h6>
                                <div className="items-wrapper">
                                    {showFlowerArrows && (
                                        <button className="scroll-btn" onClick={() => flowersRef.current.scrollBy({ left: -150, behavior: "smooth" })}>
                                            <ChevronLeft size={14}/>
                                        </button>
                                    )}

                                    <div className="flowers" ref={flowersRef}>
                                        {flower.flowers.map((flower) => (
                                            <div key={flower} className="flower-item" onClick={() => onFlowerClick(flower)}>
                                                <span>{flower}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {showFlowerArrows && (
                                        <button className="scroll-btn" onClick={() => flowersRef.current.scrollBy({ left: 150, behavior: "smooth" })}>
                                            <ChevronRight size={14}/>
                                        </button>
                                    )}
                                </div>

                            <h6 className="details-title">Cores</h6>
                                <div className="items-wrapper">
                                    {showColorArrows && (
                                        <button className="scroll-btn" onClick={() => colorsRef.current.scrollBy({ left: -150, behavior: "smooth" })}>
                                            <ChevronLeft size={14}/>
                                        </button>
                                    )}

                                    <div className="colors" ref={colorsRef}>
                                        {flower.colors.map((color) => (
                                            <div key={color} className="color-item" onClick={() => onColorClick(color)} style={{backgroundColor: color === "Branco" ? "#ffffff93" : `${colorMap[color]}20`}}>
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

                                    {showColorArrows && (
                                        <button className="scroll-btn" onClick={() => colorsRef.current.scrollBy({ left: 150, behavior: "smooth" })}>
                                            <ChevronRight size={14}/>
                                        </button>
                                    )}
                                </div>
                        </div>

                        <div className="modal-bottom">

                            <button className="buy-btn" onClick={onAddToCart}>
                                <Handbag/>
                                ADICIONAR AO CARRINHO
                            </button>

                            <button className={`modal-favorite-btn ${isFavorite ? "active" : ""}`} onClick={onFavorite}>
                                <Heart fill={isFavorite ? "#55001A" : "transparent"} stroke={isFavorite ? "#55001A" : "#55001A"}/>
                            </button>

                        </div>

                </div>

            </div>

        </div>
    )
}