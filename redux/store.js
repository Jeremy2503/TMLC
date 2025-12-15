import { configureStore } from "@reduxjs/toolkit";
import { themeReducer } from "./reducesrs/themeReduces";

// Reducers


export const store = configureStore({
  reducer: {
    activeTheme: themeReducer,
  },
});