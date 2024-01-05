import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
 let store = configureStore({
    reducer:{
        cartItems:cartSlice
    }
 })

 export default store;