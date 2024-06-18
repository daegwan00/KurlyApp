import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import './CProductListItem.css';

const CProductListItem = ({ id, productName, quantity, price}) => {
  return (
    <tr className="product-list-item">
      <td>{id}</td>
      <td>{productName}</td>
      <td>{quantity}</td>
      <td>{price}</td>
      <td className="price">
        <button className="edit-button"><EditIcon/></button>
        <button className="delete-button">
          <DeleteIcon />
        </button>
      </td>
    </tr>
  );
}

export default CProductListItem;
