// RestrantHead.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import RestruantDetail from './RestruantDetail';
const RestrantHead = () => {
  return (
    <div>
      {/* Your RestrantHead component content */}
      <Outlet />
    </div>
  );
};

export default RestrantHead;
