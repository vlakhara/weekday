import { createSlice } from "@reduxjs/toolkit";

const initialFilterState = {
  roles: [],
  employees: { from: 0, to: 0 },
  experience: 0,
  jobType: "",
  tecks: [],
  basePay: 0,
  searchText: "",
};

export const FilterSlice = createSlice({
  name: "filter",
  initialState: initialFilterState,
  reducers: {
    updateFilter: (state, action) => {
      state = { ...state, ...action.payload };
    },
    resetFilter: (state) => {
      state = initialFilterState;
    },
  },
});

export const { updateFilter, resetFilter } = FilterSlice.actions;

export default FilterSlice.reducer;
