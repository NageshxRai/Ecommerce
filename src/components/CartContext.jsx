
import React, { createContext, useContext, useEffect, useState } from 'react';

const CartContext = createContext();

export const useCartContext = () => {
    return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {
        const savedCart = localStorage.getItem('cartItems');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (product) => {
        setCartItems((prevItems) => {
            const newItems = [...prevItems];
            const existingItem = newItems.find(item => item.id === product.id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                newItems.push({ ...product, quantity: 1 });
            }
            return newItems;
        });
    };

    const changeQuantity = (id, delta) => {
        setCartItems((prevItems) => {
            return prevItems
                .map(item => {
                    if (item.id === id) {
                        const newQuantity = item.quantity + delta;
                        return newQuantity > 0 ? { ...item, quantity: newQuantity } : null;
                    }
                    return item;
                })
                .filter(Boolean);
        });
    };

    const removeFromCart = (id) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== id));
    };

    const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, changeQuantity, cartCount }}>
            {children}
        </CartContext.Provider>
    );
};
