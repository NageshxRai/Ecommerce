import React from "react";
import '../styles/Card.css';

const Card = ({ data, onClick }) => {
  const { title, image, price } = data;

  return (
    <div className="card" onClick={onClick}>
      <div className="image-container">
        <img src={image} alt="Product pic" className="card-image" />
      </div>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <h6 className="card-price">${price}</h6>
      </div>
    </div>
  );
};

export default Card;
