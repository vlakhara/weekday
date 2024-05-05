import { Grid, styled } from "@mui/material";
import React from "react";
import {
  EXPERIENCE,
  JOB_TYPE,
  MIN_BASE_SALARY,
  NUMBER_EMPLOYEES,
  ROLES,
  TECKS,
} from "../../utils/filter-utils";
import CustomInput from "./CustomInput";
import SelectComp from "./SelectComp";

const StyledGrid = styled(Grid)`
  display: flex;
  align-items: flex-end;
  min-width: 200px;
  width: ${({ theme }) =>
    theme.breakpoints.between("sm", "lg")} ? 'unset' : 'auto';
`;

/**
 * Filter
 *
 * Some filter might filter different data because of some of the data is randomly
 * generated so those data might change on each load
 *
 * @returns HtmlElement
 */
const Filter = () => {
  return (
    <Grid container spacing={0.5}>
      <StyledGrid key="roles" item>
        <SelectComp
          label="Roles"
          name="roles"
          multiple
          options={ROLES}
          isGrouped
        />
      </StyledGrid>
      <StyledGrid key="employees" item>
        <SelectComp
          label="No Of Employees"
          name="employees"
          multiple
          options={NUMBER_EMPLOYEES}
        />
      </StyledGrid>
      <StyledGrid key="experience" item>
        <SelectComp label="Experience" name="experience" options={EXPERIENCE} />
      </StyledGrid>
      <StyledGrid key="remote" item>
        <SelectComp label="Remote" name="remote" multiple options={JOB_TYPE} />
      </StyledGrid>
      <StyledGrid key="tecks" item>
        <SelectComp label="Teck Stack" name="tecks" multiple options={TECKS} />
      </StyledGrid>
      <StyledGrid key="basePay" item>
        <SelectComp
          label="Min Base Pay Salary"
          name="basePay"
          options={MIN_BASE_SALARY}
        />
      </StyledGrid>
      <StyledGrid key="searchText" item>
        <CustomInput
          label="Search Text"
          name="searchText"
          placeholder="Search company name"
        />
      </StyledGrid>
    </Grid>
  );
};

export default Filter;
