import { createSlice } from "@reduxjs/toolkit";

const initialJobsState = {
  jobs: [],
  total: 0,
  loading: false,
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
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { addJobs, setTotal, setLoading } = JobsSlice.actions;

export default JobsSlice.reducer;
