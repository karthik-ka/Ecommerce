import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
    },
    reducers: {
        addItems: (state, action) => {
            const item = state.items.find((item)=>item.id === action.payload.id)
            if(item){
                item.quantity++;
                item.attributes.price = item.oneQuantityPrice * item.quantity
            } else {
                state.items.push({...action.payload, quantity : 1})
            }
        },
        removeItem: (state, action) =>{
            state.items.splice(action.payload, 1);
        },
        clearCart: (state) => {
            state.items = [];
        },
    },
});

export const {addItems, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;