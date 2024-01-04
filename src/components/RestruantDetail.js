// RestruantDetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import useRestraunts from './utils/useRestraunts';

const RestruantDetail = () => {
  const { id } = useParams();
  const getRestrauntsDetail = useRestraunts(id);
  

  return (
    <div>
      {/* Your RestruantDetail component content */}
      <p>Restaurant ID: {id}</p>
      <div>
         {getRestrauntsDetail?.data?.cards[0]?.card?.card?.info?.name}
      </div>
      <div>
         {getRestrauntsDetail?.data?.cards[0]?.card?.card?.info?.locality}
      </div>
      <img className='img-res' src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/'+getRestrauntsDetail?.data?.cards[0]?.card?.card?.info?.cloudinaryImageId}></img>
    </div>
  );
};

export default RestruantDetail;
