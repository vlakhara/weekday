import {
  Autocomplete,
  FormControl,
  FormLabel,
  TextField,
  Typography,
} from "@mui/material";
import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateFilter } from "../../store/filter.js";
import { getRandomNumber } from "../../utils/common.js";

const SelectComp = ({ label, name, options = [], multiple = false }) => {
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const handleChange = (value) => {
    let updatedValue = value.map((item) => item?.label ?? item);
    const filterData = { ...filter };
    filterData[name] = updatedValue ?? "";
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
      {showLabel && (
        <FormLabel>
          <Typography fontWeight="600">{label}</Typography>
        </FormLabel>
      )}
      <Autocomplete
        autoHighlight
        freeSolo
        forcePopupIcon
        options={options}
        multiple={multiple}
        onChange={(_, value) => handleChange(value)}
        value={filter[name]}
        fullWidth
        size="small"
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder={!filter[name].length ? label : ""}
            fullWidth
            size="small"
          />
        )}
      />
    </FormControl>
  );
};

export default SelectComp;
