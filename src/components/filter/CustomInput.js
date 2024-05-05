import {
  Autocomplete,
  FormControl,
  FormLabel,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateFilter } from "../../store/filter.js";

const CustomInput = ({ label, name, placeholder }) => {
  const filter = useSelector((state) => state.filter);
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleChange = (text) => {
    const filterData = { ...filter };
    filterData[name] = text ?? "";
    dispatch(updateFilter(filterData));
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      handleChange(text);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [text]);

  const showLabel = useMemo(() => {
    return !!filter[name];
  }, [name, filter]);

  return (
    <FormControl fullWidth>
      {showLabel && (
        <FormLabel>
          <Typography fontWeight="600">{label}</Typography>
        </FormLabel>
      )}
      <TextField
        placeholder={placeholder}
        fullWidth
        value={text}
        onChange={({ target: { value } }) => setText(value)}
        size="small"
      />
    </FormControl>
  );
};

export default CustomInput;
