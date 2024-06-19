import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import './CProductListItem.css';

const CProductListItem = ({ id, Name}) => {
  return (
    <tr className="product-list-item">
      <td>{id}</td>
      <td>{Name}</td>
    
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
