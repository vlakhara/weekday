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
      return state;
    },
    setTotal: (state, action) => {
      state.total = action.payload;
      return state;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
      return state;
    },
  },
});

export const { addJobs, setTotal, setLoading } = JobsSlice.actions;

export default JobsSlice.reducer;
