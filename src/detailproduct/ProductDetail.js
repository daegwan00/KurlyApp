import React from 'react';
import './ProductDetail.css';
import productImage from './path/to/image.png'; // 이미지 경로를 올바르게 설정해주세요.

const ProductDetail = () => {
  return (
    <div className="product-detail">
      <div className="product-image-section">
        <img src={productImage} alt="Product" className="product-image" />
      </div>
      <div className="product-info-section">
        <h1 className="product-title">[금주의라면] 농심 라면 7종 골라담기(택3)</h1>
        <div className="product-price">
          <span className="discount">26%</span>
          <span className="price">3,900원</span>
          <span className="original-price">5,300원</span>
        </div>
        <div className="product-description">
          <p>원산지: 상품설명/상세정보 참조</p>
          <p>로그인 후, 적립 혜택이 제공됩니다.</p>
        </div>
        <button className="coupon-button">쿠폰 + 최대 7% 적립 받기</button>
        <div className="product-details">
          <div>배송: 샛별배송</div>
          <div>판매자: 컬리</div>
          <div>포장타입: 상온/냉장 (종이포장)</div>
        </div>
        <div className="product-selection">
          <label htmlFor="product-options">상품 선택</label>
          <select id="product-options">
            <option value="">상품을 선택해 주세요</option>
            {/* 옵션을 추가할 수 있습니다 */}
          </select>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
