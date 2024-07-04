import { createSlice } from "@reduxjs/toolkit";
const favoriteSlice = createSlice({
  name: "favorite",
  initialState: {
    list: [],
  },
  reducers: {
    addToFavorite(state, action) {
      const check = state.list.findIndex(
        (product) => product._id === action.payload._id
      );
      if (check === -1) {
        state.list.push(action.payload);
      }
    },
    removeFromFavorite(state, action) {
      state.list = state.list.filter(
        (product) => product._id !== action.payload._id
      );
    },
    resetFavorite(state, action) {
      state.list = [];
    },
  },
});
const { actions, reducer } = favoriteSlice;
export const { addToFavorite, removeFromFavorite, resetFavorite } = actions;
export default reducer;
