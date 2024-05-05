import { FormControl, FormLabel, TextField, Typography } from "@mui/material";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateFilter } from "../../store/filter.js";

const Input = ({ label, name, placeholder }) => {
  const filter = useSelector((state) => state.filter);
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleChange = useCallback(
    (str) => {
      const filterData = { ...filter };
      filterData[name] = str ?? "";
      dispatch(updateFilter(filterData));

      return;
    },
    [dispatch, filter, name]
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      handleChange(text);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [text, handleChange]);

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

export default Input;
