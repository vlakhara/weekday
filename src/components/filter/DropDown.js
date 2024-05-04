import { Autocomplete, FormControl, TextField } from "@mui/material";
import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateFilter } from "../../store/filter.js";

const DropDown = ({ label, name, options = [], multiple = false }) => {
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const handleChange = (value) => {
    console.log({ value: value });
    const filterData = { ...filter };
    filterData[name] = value ?? "";
    dispatch(updateFilter(filterData));
  };

  const showLabel = useMemo(() => {
    if (multiple) {
      return !!filter[name].length;
    }
    return !!filter[name];
  }, [name, filter, multiple]);

  return (
    <FormControl fullWidth>
      <Autocomplete
        autoHighlight
        options={options}
        multiple={multiple}
        onChange={(_, value) => handleChange(value)}
        value={filter[name]}
        fullWidth
        size="small"
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder={!filter[name].length && label}
            fullWidth
            size="small"
            label={showLabel ? label : ""}
          />
        )}
      />
    </FormControl>
  );
};

export default DropDown;
