import React, { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import Notfount from "./Notfount";
import {filterData} from './utils/common';
import useOnline from "./utils/useOnline";
import { Link } from "react-router-dom";
import userContext from "./utils/userContext";


const Cards = function () {
  const [search, setSearch] = useState("");
  const [restaurantsData, setRestrauntData] = useState([]);
  const [filterrestaurantsData, setFilterRestrauntData] = useState([]);
  const onlineStatus = useOnline();
  const {user} = useContext(userContext);
  const [userdata, setuserData] = useState(user);
  const getRestraunts = async function () {
    
    let restraunts = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.661057794970286&lng=76.69559217989445&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      let result = await restraunts.json();
    setRestrauntData(
      result?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilterRestrauntData(
      result?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
        );
      };
      // console.log(filterrestaurantsData, "length");
      useEffect(() => {
        getRestraunts();
      }, []);
  if(!onlineStatus) return (<><h4>Please check your internet connection</h4></>)
  return (
    <div className="cards-container">
      <div className="search-input items-center border rounded p-2">
  <input
    type="text"
    name="search"
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    placeholder="Search restaurants..."
    className="flex-1 border-none outline-none focus:ring focus:border-dark-300 p-2"
  />
  <button
    type="button"
    onClick={() => setFilterRestrauntData(filterData(restaurantsData, search))}
    className="bg-yellow-100 text-black ml-2 px-4 py-2 rounded hover:bg-yellow-100 focus:outline-none focus:ring focus:border-blue-300"
  >
    Search
  </button>
</div>
      <div className="flex flex-wrap">
        {!filterrestaurantsData?.length ? (
          <Shimmer />
        ) : (
          filterrestaurantsData?.map((restaurant, index) => (
            <Link className="card"
              key={restaurant?.info?.id || index}
              to={`restaurants/kfc-jp-nagar-chandigarh/${restaurant?.info?.id}`}
            >
              <div>
                <img
                  className="img-card"
                  src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${restaurant?.info?.cloudinaryImageId}`}
                  alt={restaurant?.info?.name}
                />
                <div className="offer">
                  {restaurant?.info?.aggregatedDiscountInfoV3?.header}{" "}
                  {restaurant?.info?.aggregatedDiscountInfoV3?.subHeader}
                </div>
                <div className="card-container">
                  <h4>
                    <b>{restaurant?.info?.name}</b>
                  </h4>
                  <p>
                    {restaurant?.info?.avgRating} .{""}
                    {restaurant?.info?.sla?.slaString}
                  </p>
                  <span className="font-rating">
                    {restaurant?.info?.cuisines.join(",")}
                  </span>
                  <br />
                  <span>{restaurant?.info?.areaName}</span>
                  <h4>{userdata.name}</h4>
                </div>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Cards;
