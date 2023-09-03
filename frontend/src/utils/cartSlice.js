import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
    },
    reducers: {
        addItems: (state, action) => {
            state.items.push(action.payload)
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