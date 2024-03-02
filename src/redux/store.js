import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "../redux/features/productsSlice";

export const store = configureStore({
  reducer: productsSlice,
});
