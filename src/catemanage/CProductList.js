import React from 'react';
import CProductListItem from './CProductListItem';
import CPagination from './CPagination';
//import './cProductList.css';

import CProductRegist from './CProductRegist';


const CProductList = () => {
  const dummyProducts = [
    { id: 1, productName: '불닭볶음면', quantity: 100 },
    { id: 2, productName: '신라면', quantity: 50 },
    { id: 3, productName: '햇반 10묶음', quantity: 100 },
    { id: 4, productName: '감자 10kg', quantity: 30 },
    { id: 5, productName: '불닭볶음면', quantity: 100 },
    { id: 6, productName: '신라면', quantity: 50 },
    { id: 7, productName: '햇반 10묶음', quantity: 100 },
  ];

  return (
    <div className="product-list">
     
      <CProductRegist/>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>ProductName</th>
            <th>Quantity</th>
            <th>price</th>
          </tr>
        </thead>
        <tbody>
          {dummyProducts.map(product => (
            <CProductListItem
              key={product.id}
              id={product.id}
              productName={product.productName}
              quantity={product.quantity}
            />
          ))}
        </tbody>
      </table>
      <CPagination />
    </div>
  );
}

export default CProductList;
