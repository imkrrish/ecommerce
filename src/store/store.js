import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productsSlice";
const store = configureStore({
  reducer: {
    product: productReducer,
  },
});

export default store;
