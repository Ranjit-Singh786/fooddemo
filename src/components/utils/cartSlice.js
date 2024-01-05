import { createSlice } from "@reduxjs/toolkit";

let cartSlice = createSlice({
    name:"cartItems",
    initialState:{
        value:[]
    },
    reducers:{
        additem:(state,action)=>{
            state.value.push(action.payload);
        }
    }
    
})

export const {additem} = cartSlice.actions;

export default cartSlice.reducer;