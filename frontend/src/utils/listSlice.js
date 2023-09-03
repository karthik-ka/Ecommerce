import { createSlice } from "@reduxjs/toolkit";

const listSlice = createSlice({
    name:"wishlist",
    initialState:{
        items:[]
    },
    reducers:{
        addListItem: (state, action) => {
            state.items.push(action.payload);
        },
        removeListItem: (state, action) => {
            state.items.splice(action.payload, 1);
        },
        clearList: (state) => {
            state.items = [];
        }
    }
});

export const {addListItem, removeListItem, clearList} = listSlice.actions;

export default listSlice.reducer;