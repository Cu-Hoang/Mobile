import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlicer";
import favoriteReducer from "./FavoriteSlicer"

const rootReducer = {
  cart: cartReducer,
  favorite: favoriteReducer,
};
const store = configureStore({
  reducer: rootReducer,
});
export default store;
