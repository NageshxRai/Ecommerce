import React, { createContext, useContext, useEffect, useState } from 'react';

const ProductContext = createContext();

export const useProductContext = () => {
    return useContext(ProductContext);
};

export const ProductProvider = ({ children }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        const response = await fetch("https://fakestoreapi.com/products");
        const fetchedData = await response.json();
        setData(fetchedData);
    };

    return (
        <ProductContext.Provider value={data}>
            {children}
        </ProductContext.Provider>
    );
};
