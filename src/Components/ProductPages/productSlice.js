import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { http } from "../../Store/Axios/baseUrl";
import { message } from "antd";

const initialState = {
  allProducts: {
    data: false,
    isLoading: false,
  },
  allProductsDesc: {
    data: false,
    isLoading: false,
  },
};

export const getAllProducts = createAsyncThunk("products/all", async () => {
  try {
    const response = await http.get("/products");
    const data = await response.data;
    return { data };
  } catch (error) {
    message.error(error.message);
    return { data: [] };
  }
});

export const getAllProductsDesc = createAsyncThunk(
  "products/allDesc",
  async () => {
    try {
      return new Promise((resolve, reject) => {
        setTimeout(async () => {
          try {
            const response = await http.get("/products?sort=desc");
            resolve({ data: response.data });
          } catch (error) {
            message.error(error.message);
            resolve({ data: [] });
          }
        }, 5000); // 10 seconds delay
      });
    } catch (error) {}
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setAllProductsLoading(state, action) {
      state.allProducts.isLoading = action.payload.isLoading;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.allProducts.isLoading = false;
        state.allProducts.data = action.payload.data;
      })
      .addCase(getAllProducts.pending, (state, action) => {
        state.allProducts.isLoading = true;
      })

      //all products desc
      .addCase(getAllProductsDesc.fulfilled, (state, action) => {
        state.allProductsDesc.isLoading = false;
        state.allProductsDesc.data = action.payload.data;
      })
      .addCase(getAllProductsDesc.pending, (state, action) => {
        state.allProductsDesc.isLoading = true;
      });
  },
});

export default productSlice.reducer;
