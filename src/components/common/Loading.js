import { Box, Skeleton } from "@mui/material";
import React from "react";

const Loading = () => {
  return (
    <Box>
      {Array(5)
        .fill(" ")
        .map((_, index) => (
          <Skeleton
            key={index}
            variant="rounded"
            animation="wave"
            sx={{ mt: 1 }}
            width={`${(5 - index) * 20}%`}
          />
        ))}
    </Box>
  );
};

export default Loading;
