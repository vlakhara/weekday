import { Grid } from "@mui/material";
import React from "react";
import {
  EXPERIENCE,
  JOB_TYPE,
  MIN_BASE_SALARY,
  NUMBER_EMPLOYEES,
  ROLES,
  TECKS,
} from "../../utils/filterUtils";
import DropDown from "./DropDown";
import CustomInput from "./CustomInput";

const Filter = () => {
  return (
    <Grid container spacing={0.5}>
      <Grid item display="flex" alignItems="flex-end" minWidth="200px">
        <DropDown
          label="Roles"
          name="roles"
          key="roles"
          multiple
          options={ROLES}
        />
      </Grid>
      <Grid item display="flex" alignItems="flex-end" minWidth="200px">
        <DropDown
          label="No Of Employees"
          name="employees"
          key="employees"
          multiple
          options={NUMBER_EMPLOYEES}
        />
      </Grid>
      <Grid item display="flex" alignItems="flex-end" minWidth="150px">
        <DropDown
          label="Experience"
          name="experience"
          key="experience"
          options={EXPERIENCE}
        />
      </Grid>
      <Grid item display="flex" alignItems="flex-end" minWidth="200px">
        <DropDown
          label="Remote"
          name="remote"
          key="remote"
          multiple
          options={JOB_TYPE}
        />
      </Grid>
      <Grid item display="flex" alignItems="flex-end" minWidth="200px">
        <DropDown
          label="Teck Stack"
          name="tecks"
          key="tecks"
          multiple
          options={TECKS}
        />
      </Grid>
      <Grid item display="flex" alignItems="flex-end" minWidth="200px">
        <DropDown
          label="Min Base Pay Salary"
          name="basePay"
          key="basePay"
          options={MIN_BASE_SALARY}
        />
      </Grid>
      <Grid item display="flex" alignItems="flex-end" minWidth="200px">
        <CustomInput
          label="Search Text"
          name="searchText"
          key="searchText"
          placeholder="Search company name"
        />
      </Grid>
    </Grid>
  );
};

export default Filter;
