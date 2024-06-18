import React from 'react';
import './ProductRegistration.css';

const ProductRegistration = () => {
  return (
    <div className="product-registration">
      <button className="register-button">상품등록</button>
      <input type="text" placeholder="Search..." className="search-input" />
    </div>
  );
}

export default ProductRegistration;
