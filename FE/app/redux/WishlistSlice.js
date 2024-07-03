import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../config/axios';

// Tạo một async thunk để xử lý việc thêm sản phẩm vào wishlist
export const addToWishlist = createAsyncThunk(
  'wishlist/addToWishlist',
  async ({ userId, productId }) => {
    const response = await axios.post('/api/wishlist/add', { userId, productId });
    return response.data;
  }
);

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState: {
    items: [], // Khởi tạo mảng items trống
    status: null, // Khởi tạo trạng thái null
  },
  reducers: {},
  extraReducers: (builder) => {
    // Sử dụng builder callback notation để xử lý các trạng thái của async thunk
    builder
      .addCase(addToWishlist.pending, (state) => {
        state.status = 'loading'; // Khi yêu cầu đang được xử lý
      })
      .addCase(addToWishlist.fulfilled, (state, action) => {
        state.status = 'success'; // Khi yêu cầu thành công
        state.items.push(action.payload); // Thêm sản phẩm vào wishlist
      })
      .addCase(addToWishlist.rejected, (state) => {
        state.status = 'failed'; // Khi yêu cầu thất bại
      });
  },
});

export default wishlistSlice.reducer;
