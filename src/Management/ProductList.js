import React, { useState } from 'react';
import ProductListItem from './ProductListItem';
import Pagination from './Pagination';
import './ProductList.css';

const ProductList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7; // 페이지당 항목 수
  const totalItems = 20; // 전체 항목 수 (예시)
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // 예시 데이터
  const products = [
    { id: 1, productName: '불닭볶음면', quantity: 100 },
    { id: 2, productName: '신라면', quantity: 50 },
    { id: 3, productName: '햇반 10묶음', quantity: 100 },
    { id: 4, productName: '감자 10kg', quantity: 30 },
    { id: 5, productName: '불닭볶음면', quantity: 100 },
    { id: 6, productName: '신라면', quantity: 50 },
    { id: 7, productName: '햇반 10묶음', quantity: 100 },
    // 추가 데이터
  ];

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const displayedProducts = products.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div className="product-list">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>ProductName</th>
            <th>Quantity</th>
            
          </tr>
        </thead>
        <tbody>
          {displayedProducts.map(product => (
            <ProductListItem
              key={product.id}
              id={product.id}
              productName={product.productName}
              quantity={product.quantity}
            />
          ))}
        </tbody>
      </table>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default ProductList;
