export function filterData(restaurants, searchData) {
    let filteredRestaurants = restaurants?.filter((restaurant) =>
      restaurant?.info?.name?.toLowerCase().includes(searchData.toLowerCase())
    );
    return filteredRestaurants;
  }