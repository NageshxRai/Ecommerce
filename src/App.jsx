
import React from "react";
import { useNavigate, Routes, Route } from "react-router-dom";
import Card from "./components/Card";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductDetail from "./components/ProductDetail";
import "./App.css";
import { ProductProvider, useProductContext } from "./components/ProductContext";
import Error from "./components/Error";
import Cart from "./components/Cart";
import Nav from "./components/Nav"; 
import { CartProvider } from './components/CartContext'; 

const Home = () => {
    const data = useProductContext();
    const navigate = useNavigate();

    const handleCardClick = (id) => {
        navigate(`/products/${id}`);
    };

    return (
        <div>
            <Header />
            <div className="container">
                <div className="row">
                    {data.map((elem) => (
                        <div className="column" key={elem.id}>
                            <Card data={elem} onClick={() => handleCardClick(elem.id)} />
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

const App = () => {
    return (
        <ProductProvider>
            <CartProvider> 
                <Nav /> 
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<Error />} />
                    <Route path="/contact" element={<Error />} />
                    <Route path="*" element={<Error />} />
                    <Route path="/products/:id" element={<ProductDetail />} />
                    <Route path="/cart" element={<Cart />} />
                </Routes>
            </CartProvider>
        </ProductProvider>
    );
};

export default App;
