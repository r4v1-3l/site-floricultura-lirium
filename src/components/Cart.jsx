import './Cart.css';

import { CartCards } from './CartCards';
import { eventFlowersData } from '../data/eventCards';

import { motion, AnimatePresence } from "framer-motion";

export function Cart({ cart, price, increaseQuantity, decreaseQuantity, favorites, toggleFavorite, isFavorite, onFavorite, removeFromCart }){

    const cartItems = cart.map(g => {

        const flower = eventFlowersData.find(
            f => f.id === g.id
        );

        return {
            ...flower,
            quantity: g.quantity
        };
    });

    return(
        <div className="lirium-cart">
            <div className="cart-carousel">
                
            </div>

            <div className="cart-buying-container">
            <div className="cart-cards-container">
                  {cartItems.map(g => (
                <CartCards
                    key={g.id}
                    title={g.title}
                    flowers={g.flowers}
                    colors={g.colors}
                    price={g.price}
                    rating={g.rating}
                    image={g.image}
                    quantity={g.quantity}
                    onIncrease={() => increaseQuantity(g.id)}
                    onDecrease={() => decreaseQuantity(g.id)}
                    isFavorite={favorites.includes(g.id)}
                    onFavorite={() => toggleFavorite(g.id)}
                    onRemove={() => removeFromCart(g.id)}
                />
            ))}
            </div>

            <div className="cart-right">

                <div className="cart-sum">
                    <h1 className="cart-sum-title">Resumo do Pedido</h1>
                
                {cartItems.length > 0 && (
                <div className={`cart-summary-items ${cartItems.length > 0 ? "has-items" : ""}`}>
                    <AnimatePresence>
                    {cartItems.map(g => {

                    const itemPrice = Number(
                        g.price
                        .replace("R$", "")
                        .replace(".", "")
                        .replace(",", ".")
                        .trim()
                    );

                    const subtotal = itemPrice * g.quantity;

                    return (
                        <motion.div
                            layout
                            key={g.id}
                            className="cart-summary-item"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.25 }}
                        >
                            <span>{g.title} ({g.quantity}x)</span>

                            <span>
                                {subtotal.toLocaleString('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL'
                                })}
                            </span>
                        </motion.div>
                    );
            })}
            </AnimatePresence>
            
            </div>
            )}


                    <div className="cart-sum-price">
                        <p>Preço estimado:</p>
                        <h1>{price.toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'})}
                        </h1>
                    </div>

                    <button className="cart-buy-btn">COMPRE AGORA</button>
                    <p className='cart-sum-text'>Compre na Lirium™ e cultive boas lembranças.</p>      
                    
                </div>
            
            </div>
            </div>
        </div>
    )
}