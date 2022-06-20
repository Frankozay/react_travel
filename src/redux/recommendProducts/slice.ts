import instance from "@/utils/axios";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

interface RecommendProductState {
  loading: boolean;
  error: string | null;
  productList: any;
}

const initialState: RecommendProductState = {
  loading: true,
  error: null,
  productList: [],
};

export const getRecommendProduct = createAsyncThunk(
  "recommendProduct/getRecommendProduct",
  async (thunkAPI) => {
    const { data } = await instance.get("/api/productCollections");
    return data;
  }
);

export const recommendProductSlice = createSlice({
  name: "recommendProduct",
  initialState,
  reducers: {},
  extraReducers: {
    [getRecommendProduct.pending.type]: (state) => {
      state.loading = true;
    },
    [getRecommendProduct.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.productList = action.payload;
    },
    [getRecommendProduct.rejected.type]: (
      state,
      action: PayloadAction<string | null>
    ) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
