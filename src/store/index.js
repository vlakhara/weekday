import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./filter";
import JobsReducer from "./jobs";
export const store = configureStore({
  reducer: {
    filter: filterReducer,
    jobs: JobsReducer,
  },
});
