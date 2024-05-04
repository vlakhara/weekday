import { Box, Chip, Grid, Typography } from "@mui/material";
import React from "react";
import styles from "./jobCard.module.css";

const JobCard = ({ job }) => {
  const getPostedAgoDayString = () => {
    const num = Math.ceil(Math.random() * 10);
    return num === 1 ? `Posted ${num} day ago` : `Posted ${num} days ago`;
  };

  const getUpdatedString = (str = "") => {
    const nameArr = str?.split(" ");
    return nameArr
      .map((item) => item?.charAt(0).toLocaleUpperCase() + item.slice(1))
      .join(" ");
  };

  return (
    <Box className={styles.jobCard}>
      <Grid container p={1.5}>
        <Grid item xs={12}>
          <Chip
            size="small"
            label={getPostedAgoDayString()}
            className={styles.chip}
          />
        </Grid>
        <Grid item container xs={12} mt={1} className={styles.logoAndDetails}>
          <Grid item xs={3} className={styles.logo}>
            <img src={job?.logoUrl} />
          </Grid>
          <Grid item xs={9} className={styles.details}>
            <Typography component="p">
              {getUpdatedString(job?.companyName)}
            </Typography>
            <Typography component="p">
              {getUpdatedString(job?.jobRole)}
            </Typography>
            <Typography component="p">
              {getUpdatedString(job?.location)}
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Typography>{`Estimated Salary: ${job?.minJdSalary ?? ""}${
            job?.minJdSalary && job?.maxJdSalary ? " - " : ""
          }${job?.maxJdSalary ?? ""}`}</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default JobCard;
