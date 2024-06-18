import React from 'react';
import './ProductListItem.css';

const ProductListItem = ({ id, productName, quantity }) => {
  return (
    <tr className="product-list-item">
      <td>{id}</td>
      <td>{productName}</td>
      <td>{quantity}</td>
      <td className="actions">
        <button className="edit-button">✏️</button>
        <button className="delete-button">🗑️</button>
      </td>
    </tr>
  );
}

export default ProductListItem;
