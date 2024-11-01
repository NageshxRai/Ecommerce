import React from 'react';
import "../styles/Cart.css";
import Header from './Header';
import Footer from './Footer';
import { useCartContext } from './CartContext'; 

const Cart = () => {
    const { cartItems, removeFromCart, changeQuantity } = useCartContext(); 

    const totalAmount = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <div>
            <Header />
            <div className="Cart">
                <h2>Your Cart</h2>

                {cartItems.length === 0 ? (  
                    <div className="emptycart-message">
                        <h3>Your cart is empty!</h3>
                    </div>
                ) : (
                    <>
                        <ul>
                            {cartItems.map(item => (
                                <li key={item.id} className="cart-item">
                                    <img src={item.image} alt={item.title} className="cart-item-image" />
                                    <span>{item.title} - ${item.price} x {item.quantity}</span>
                                    <div className='button-container'>
                                        <button onClick={() => changeQuantity(item.id, -1)}>-</button>
                                        <button onClick={() => changeQuantity(item.id, 1)}>+</button>
                                        <button style={{ backgroundColor: 'red', color: 'white' }} onClick={() => removeFromCart(item.id)}>Remove</button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div className="total">
                            <h3>Total: ${totalAmount.toFixed(2)}</h3>
                            <button className="checkout-button">Continue To Checkout</button>
                        </div>
                    </>
                )}

            </div>
            <Footer />
        </div>
    );
};

export default Cart;
