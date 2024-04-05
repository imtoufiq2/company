import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import BASE_URL from "../../utils/api";

// Define the initial state
const initialState = {
  banks: {},
  loading: false,
  error: null,
};

// Define the async thunk for fetching bank info
export const fetchBankInfo = createAsyncThunk(
  "allBankInfo/fetchBankInfo",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`${BASE_URL}/dashboard/fd?count=4`);
      return response;
    } catch (error) {
      throw error;
    }
  }
);

// Create a slice
const allBankSlice = createSlice({
  name: "allBankInfo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBankInfo.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBankInfo.fulfilled, (state, action) => {
        state.loading = false;
        state.banks = { ...action.payload?.data };
      })
      .addCase(fetchBankInfo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

// Export actions and reducer
export default allBankSlice.reducer;
