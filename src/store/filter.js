import { createSlice } from "@reduxjs/toolkit";

const initialFilterState = {
  roles: [],
  employees: [],
  experience: "",
  remote: [],
  tecks: [],
  basePay: "",
  searchText: "",
};

export const FilterSlice = createSlice({
  name: "filter",
  initialState: initialFilterState,
  reducers: {
    updateFilter: (state, action) => {
      state = { ...state, ...action.payload };
      return state;
    },
    resetFilter: (state) => {
      state = initialFilterState;
      return state;
    },
  },
});

export const { updateFilter, resetFilter } = FilterSlice.actions;

export default FilterSlice.reducer;
