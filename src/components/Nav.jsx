
import React, {useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import '../styles/Nav.css';
import { useCartContext } from './CartContext';

const Nav = () => {
    const { cartCount } = useCartContext(); 
    const [showMenu, setShowMenu] = useState(false);
    const navigate = useNavigate();

    const menuHandler = () => {
        setShowMenu(!showMenu);
    };

    const handleCartClick = () => {
        navigate('/cart');
        setShowMenu(false);
    };

    return (
        <div className="nav-container">
            <div className="ham-menu">
                <button
                    className="ham-button"
                    onClick={menuHandler}
                    aria-expanded={showMenu}
                    aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} size="lg" />
                </button>
            </div>
            <nav className={`menu ${showMenu ? "menu-mob" : "menu-web"}`}>
                <ul className="nav-list">
                    <li className="nav-item">
                        <NavLink to="/" className={({ isActive }) => (isActive ? "nav-link active-link" : "nav-link")} onClick={() => setShowMenu(false)}>HOME</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/about" className={({ isActive }) => (isActive ? "nav-link active-link" : "nav-link")} onClick={() => setShowMenu(false)}>ABOUT</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/contact" className={({ isActive }) => (isActive ? "nav-link active-link" : "nav-link")} onClick={() => setShowMenu(false)}>CONTACT</NavLink>
                    </li>
                </ul>
            </nav>
            <div className="cart-container">
                <button className="nav-link" onClick={handleCartClick}>
                    <FontAwesomeIcon icon={faShoppingCart} size="lg" />
                    <span className={`cart-count ${cartCount > 0 ? "red" : ""}`}>
                        {cartCount}
                    </span>
                </button>
            </div>
        </div>
    );
};

export default Nav;
