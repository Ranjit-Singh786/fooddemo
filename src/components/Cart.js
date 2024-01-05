import { useSelector } from "react-redux";
import CartInfo from "../CartInfo";
const Cart =()=>{
    const CartItem = useSelector((val)=>val.cartItems.value);
    console.log(CartItem,'checkout')
      return(
        <>
          <h1>Card info</h1>
          {CartItem?.map((val)=>{
                // console.log(val,'val'),
             return <CartInfo key={val?.info?.id} cartItems={val}/>
            })
}
        </>
      )
}

export default Cart;