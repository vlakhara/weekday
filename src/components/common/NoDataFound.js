import { Box, Typography } from "@mui/material";
import React from "react";

const NoDataFound = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        mt: 10,
      }}
    >
      <img
        src="/images/nothing-found.png"
        alt="nor data found"
        style={{ height: "200px", width: "200px" }}
      />
      <Typography fontWeight="600" mt={2} fontSize={18} letterSpacing={1}>
        No Jobs available for this category at the moment
      </Typography>
    </Box>
  );
};

export default NoDataFound;
