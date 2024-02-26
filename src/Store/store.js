import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../Components/ProductPages/productSlice";
import loadingSlice from "./loadingSlice";
import loginSlice from "../Components/Login/loginSlice";

export const store = configureStore({
  reducer: { products: productReducer, loadingSlice, login: loginSlice },
});
