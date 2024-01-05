
const CartInfo = function ({cartItems}) {
  return (
    <div className="cards-container ">
      <div className="flex flex-wrap">
        { (
            
              console.log(cartItems,'ressss'),
              <div className="card" key={cartItems?.card?.info?.id}> 
                <img
                  className="img-card"
                  src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cartItems?.card?.info?.imageId}`}
                  alt={cartItems?.info?.name}
                />
                <div className="offer">
                
                  {cartItems?.card?.info?.price/100}
                </div>
                <div className="card-container">
                  <h4>
                    <b>{cartItems?.card?.info?.name}</b>
                  </h4>
                  <span className="font-rating">
                    {cartItems?.card?.info?.category}
                  </span>
                  <br />  
                  <span>{cartItems?.card?.info?.description}</span>
                  {/* <h4>{userdata.name}</h4> */}
                </div>
              </div>
          
        )}
      </div>
    </div>
  );
};

export default CartInfo;
