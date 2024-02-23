import { createSlice } from "@reduxjs/toolkit";

const loadingSlice = createSlice({
  name: "isLoading",
  initialState: { loading: false },
  reducers: {
    setLoading(state, action) {
      console.log("action", action);
      state.loading = action.payload.isLoading;
    },
  },
});

export const { setLoading } = loadingSlice.actions;
export default loadingSlice.reducer;
