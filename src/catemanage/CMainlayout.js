import React from 'react';
import CProductList from './CProductList';
import './CMainlayout.css';
import CSidebar from './CSidebar';



const CMainlayout = () => {
  return (
    <div className="main-layout">
      <CSidebar />
      <div className="content">
        <CProductList />
      </div>
    </div>
  );
}

export default CMainlayout;
