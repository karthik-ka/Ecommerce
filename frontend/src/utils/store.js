import {configureStore} from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import listSlice from "./listSlice";

const store = configureStore({
    reducer: {
        cart: cartSlice,
        wishlist: listSlice,
    },
});

export default store;