import { createSlice } from "@reduxjs/toolkit";
const favoriteSlice = createSlice({
  name: "favorite",
  initialState: {
    list: [],
    total: 0,
  },
  reducers: {
    addToFavorite(state, action) {
      const check = state.list.findIndex(
        (product) => product._id === action.payload._id
      );
      if (check !== -1) {
        state.list[check].quantity += action.payload.quantity;
      } else {
        state.list.push(action.payload);
      }
      state.total = state.list.reduce(
        (sum, product) => sum + product?.price * product?.quantity,
        0
      );
    },
    removeItem(state, action) {
        state.list = state.list.filter(
          (product) => product._id !== action.payload._id
        );
        state.total = state.list.reduce(
          (sum, product) => sum + product?.price * product?.quantity,
          0
        );
    },
    resetFavorite(state, action) {
      state.list = [];
      state.total = 0;
    },
  },
});
const { actions, reducer } = favoriteSlice;
export const { addToFavorite, removeItem, resetFavorite } =
  actions;
export default reducer;
