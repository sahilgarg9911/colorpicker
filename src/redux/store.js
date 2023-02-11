import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./reducers";
// import { Checklogin } from "./Checklogin";
// import { cartReducerremoveall } from './cartSlice';
// import cartReducerall from "./cartSlice";

const store = configureStore({
    reducer: {
        cart: cartReducer,
        // all: cartReducerall
        // Checklogin

    },
});

export default store;