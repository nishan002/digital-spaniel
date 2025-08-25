import { configureStore } from "@reduxjs/toolkit";
import testimonialsReducer from "./slice";

const store = configureStore({
  reducer: {
    testimonials: testimonialsReducer,
  },
});

export default store;
