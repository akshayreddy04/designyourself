import { configureStore } from "@reduxjs/toolkit";
import loginreducer from "../features/loginslice";

export const store = configureStore({
  reducer: loginreducer,
});
