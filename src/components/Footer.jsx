import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="icons">
          <a href="https://instagram.com/" title="Instagram">
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a>
          <a href="https://facebook.com/" title="Facebook">
            <FontAwesomeIcon icon={faFacebook} size="lg" />
          </a>
          <a href="https://youtube.com/" title="YouTube">
            <FontAwesomeIcon icon={faYoutube} size="lg" />
          </a>
        </div>
        <p className="footer-text">
          &copy; 2024 My Inventory, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
