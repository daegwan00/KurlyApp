import React from 'react';
import ReactDOM from 'react-dom/client';
import Shopping from './shopping/Slist';

import Homebanner from './banner/Homebanner';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
    <Homebanner/>
    </div>
    <div>
      <Shopping/>
    </div>
    
    <p>h</p>
  </React.StrictMode>
);


