import { createSlice } from "@reduxjs/toolkit";

const initialJobsState = {
  jobs: [],
  total: 0,
};

export const JobsSlice = createSlice({
  name: "jobs",
  initialState: initialJobsState,
  reducers: {
    addJobs: (state, action) => {
      state.jobs = action.payload;
    },
    setTotal: (state, action) => {
      state.total = action.payload;
    },
  },
});

export const { addJobs, setTotal } = JobsSlice.actions;

export default JobsSlice.reducer;
