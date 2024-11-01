
import React from "react";
import { useParams } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import '../styles/ProductDetail.css';
import { useProductContext } from "./ProductContext";
import { useCartContext } from './CartContext'; 

const ProductDetail = () => {
    const data = useProductContext();
    const { id } = useParams();
    const { addToCart } = useCartContext(); 

    const selectedItem = data.find(item => String(item.id) === id);

    if (!selectedItem) {
        return <div>Loading...</div>;
    }

   
    const handleAddToCart = () => {
        console.log("Adding product to cart:", selectedItem); 
        addToCart(selectedItem); 
        
    };

    return (
        <div>
            <Header />
            <div className="container">
                <div className="row">
                    <div className="product-card">
                        <div className="center-content">
                            <div className="image-wrapper">
                                <img
                                    src={selectedItem.image}
                                    alt="Product pic"
                                    className="product-image"
                                />
                            </div>
                            <div className="title-spacing">
                                <h5 className="title">{selectedItem.title}</h5>
                                <h6 className="price">${selectedItem.price}</h6>
                            </div>
                        </div>
                        <div className="description-wrapper">
                            <div className="left-text">
                                <p className="description">{selectedItem.description}</p>
                            </div>
                        </div>
                        <div className="rating-container">
                            <span className="star-rating">
                                {[...Array(5)].map((_, index) => (
                                    <FontAwesomeIcon key={index} icon={faStar} className={index < 4 ? 'warning' : 'muted'} />
                                ))}
                            </span>
                        </div>
                        <div className="button-container">
                            <button className="button-yellow" onClick={handleAddToCart}>
                                Add to Cart
                            </button>
                            <button className="button-green">
                                Buy Now
                            </button>
                        </div>
                    </div>
                </div>
                <div className="reviews-section">
      <h3 className="title">CUSTOMER REVIEWS</h3>
      <div className="review-item">
        <div className="flex-align">
          <img
            src="/images/a.JPG"
            alt="Image"
            className="avatar"
          />
          <h6>Ram</h6>
        </div>
        <p>A1 Quality Product.</p>
        <div className="text-warning">
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} className="muted" />
        </div>
      </div>
      <hr />
      <div className="review-item">
        <div className="flex-align">
          <img
            src="/images/b.jpg"
            alt="Image"
            className="avatar"
          />
          <h6>Shyam</h6>
        </div>
        <p>Amazing Product!</p>
        <div className="text-warning">
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} className="muted" />
        </div>
      </div>
      <hr />
      <div className="review-item">
        <div className="flex-align">
          <img
            src="/images/c.jpg"
            alt="Image"
            className="avatar"
          />
          <h6>Hari</h6>
        </div>
        <p>Nice product. Very satisfied.</p>
        <div className="text-warning">
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} className="warning" />
        </div>
      </div>
    </div>
    <Footer />
  </div>
</div>

  
  );
};

export default ProductDetail;