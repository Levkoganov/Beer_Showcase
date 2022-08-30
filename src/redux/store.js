import { configureStore } from "@reduxjs/toolkit";

// Redux reducers
import beerReducer from "./beer";

export const store = configureStore({
  reducer: {
    allbeers: beerReducer,
  },
});
