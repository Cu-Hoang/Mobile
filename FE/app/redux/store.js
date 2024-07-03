import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlicer";
import wishlistReducer from "./FavoriteSlicer"

const rootReducer = {
  cart: cartReducer,
  wishlist: wishlistReducer,
};
const store = configureStore({
  reducer: rootReducer,
});
export default store;
