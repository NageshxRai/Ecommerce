import { Link } from "react-router-dom";
import Nav from "./Nav";
import '../styles/Header.css';

const Header = () => {
  return (
    <div>
      <header className="header">
        <div className="header-container">
          <div className="logo-container">
            <Link to="/">
              <img src="/images/logo.png" alt="Logo" className="logo" />
            </Link>
            <h1 className="title" style={{color:"white"}}>SASTOFY</h1>
          </div>
          <div className="search-container">
            <form className="search-form">
              <input
                className="search-input"
                type="search"
                placeholder="Search..."
                aria-label="Search"
              />
            </form>
            <Nav />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
