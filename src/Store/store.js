import { configureStore } from "@reduxjs/toolkit";
import productReducer, { all } from "../Components/ProductPages/productSlice";
import loadingSlice from "./loadingSlice";

export const store = configureStore({
  reducer: { products: productReducer, loadingSlice },
});
