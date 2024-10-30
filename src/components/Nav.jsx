import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import '../styles/Nav.css';
const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);

  const menuHandler = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="nav-container">
      <div className="ham-menu">
        <button
          className="ham-button"
          onClick={menuHandler}
          aria-expanded={showMenu}
          aria-label="Toggle navigation"
        >
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
    </div>
  );
};

export default Nav;
