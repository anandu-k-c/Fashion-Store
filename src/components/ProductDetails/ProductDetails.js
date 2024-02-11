import React, { useEffect, useState } from "react";
import { getProductId } from "../../ApiService/Api";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import "./ProductDetails.css";

function ProductDetails() {
  const { id } = useParams();

  const [ProductDetails, setProductDetails] = useState({});

  useEffect(() => {
    const fetchProductDetails = async () => {
      const data = await getProductId(id);
      setProductDetails(data);
    };

    fetchProductDetails();
  }, [id]);

  const handleBuyNow = () => {
    window.confirm("The product is out of stock");
  };

  return (
    <div className="product-details-container">
      <img src={ProductDetails.image} alt="image" className="product-image" />

      <div className="product-info">
        <h2 className="product-title">{ProductDetails.title}</h2>

        <p className="product-description">{ProductDetails.description}</p>

        <p className="product-price">${ProductDetails.price}</p>

        <button className="buy-now-btn" onClick={handleBuyNow}>
          Buy Now
        </button>

        <Link to="/">
          <button className="go-back-home-btn">Go Back Home</button>
        </Link>
      </div>
    </div>
  );
}

export default ProductDetails;
