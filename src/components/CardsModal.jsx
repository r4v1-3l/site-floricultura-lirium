import "./CardsModal.css";
import { X } from "lucide-react";

export function CardsModal({ flower, onClose}) {
    if (!flower) return null;
    
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-btn" onClick={onClose}>
                    <X/>
                </button>

                <img src={flower.image} alt={flower.title} className="modal-banner" />

                <div className="modal-body">
                    <span className="modal-category">{flower.category}</span>
                    <h2>{flower.title}</h2>
                    <p className="description">
                        {flower.about}
                    </p>

                    <button className="buy-btn">Adicionar ao Carrinho</button>

                </div>

            </div>

        </div>
    )
}