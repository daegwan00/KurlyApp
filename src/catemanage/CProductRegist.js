import React from 'react';
import './CProductRegist.css';

const CProductRegist = () => {
  return (
    <div className="product-registration">
      {/* <input type="text" placeholder="검색..." className="search-input" />
      <button className="search-button">검색하기</button> */}
      <input type="text" placeholder="카테고리 이름" className="input-field" />
      <button className="register-button">카테고리 등록</button>
    </div>
  );
}

export default CProductRegist;
