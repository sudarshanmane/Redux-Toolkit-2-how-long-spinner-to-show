import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { http } from "../../Store/Axios/baseUrl";

const initialState = { loginRes: false, loading: false };

export const postLogin = createAsyncThunk("login/post", async (payload) => {
  try {
    const res = await http.post(payload.url, payload.values);

    if (res?.status === 200) {
      localStorage.setItem("userDetails", JSON.stringify(res.data));
      return { data: res.data };
    }
  } catch (error) {
    return { data: null };
  }
});

const loginSlice = createSlice({
  name: "login",
  reducers: {
    setLoginFalse(state, action) {
      state.loginRes = false;
    },
  },
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(postLogin.fulfilled, (state, action) => {
        state.loginRes = action.payload.data;
        state.loading = false;
      })
      .addCase(postLogin.pending, (state, action) => {
        state.loading = true;
      });
  },
});

export const { setLoginFalse } = loginSlice.actions;
export default loginSlice.reducer;
