import { Box, Container, Grid } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import JobCard from "./JobCard";

const Jobs = () => {
  const { jobs = [], total } = useSelector((state) => state.jobs);

  return (
    <Grid container spacing={3} mt={2}>
      {jobs.map((job) => (
        <Grid key={job?.jdUid} item md={4} sm={6} xs={12}>
          <JobCard key={job?.jdUid} job={job} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Jobs;
