import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import styles from "./jobCard.module.css";
import BoltIcon from "@mui/icons-material/Bolt";
import HourglassFullIcon from "@mui/icons-material/HourglassFull";
const JobCard = ({ job }) => {
  const getPostedAgoDayString = () => {
    const num = getRandomNumber(10);
    return num === 1 ? `Posted ${num} day ago` : `Posted ${num} days ago`;
  };

  const getRandomNumber = (range) => {
    return Math.ceil(Math.random() * range);
  };

  const getUpdatedString = (str = "") => {
    const nameArr = str?.split(" ");
    return nameArr
      .map((item) => item?.charAt(0).toLocaleUpperCase() + item.slice(1))
      .join(" ");
  };

  const truncateString = (string) => {
    return string?.length > 600 ? string.substring(0, 597) + "..." : string;
  };

  const updateExperienceStr = (year) => {
    const exp = year ?? getRandomNumber(6);
    return exp === 1 ? `${exp} year` : `${exp} years`;
  };

  return (
    <Box className={`${styles.jobCard} job-card`}>
      <Grid container px={2.5} py={2.5}>
        <Grid item xs={12}>
          <Typography className={styles.chip}>
            ⏳{getPostedAgoDayString()}
          </Typography>
        </Grid>
        <Grid
          item
          container
          xs={12}
          mt={1}
          columnSpacing={2}
          className={styles.logoAndDetails}
        >
          <Grid item xs={2} className={styles.logo}>
            <img src={job?.logoUrl} alt="compant logo" />
          </Grid>
          <Grid item xs={10} className={styles.details}>
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
        <Grid item xs={12} mt={1}>
          <Typography>{`Estimated Salary: ${job?.minJdSalary ?? ""}${
            job?.minJdSalary && job?.maxJdSalary ? " - " : ""
          }${job?.maxJdSalary ?? ""}`}</Typography>
        </Grid>
        <Grid item xs={12} mt={1} position="relative">
          <Typography>About Company:</Typography>
          <Typography fontWeight={600}>About us</Typography>
          <Typography variant="body1">
            {truncateString(job?.jobDetailsFromCompany)}
          </Typography>
          <Box className={styles.descriptionMask}>
            <Typography className={styles.viewJob}>View Job</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} mt={2}>
          <Typography className={styles.experienceText}>
            Minium Experience
          </Typography>
          <Typography className={styles.experience}>
            {updateExperienceStr(job?.minExp)}
          </Typography>
        </Grid>
        <Grid item xs={12} mt={1.5}>
          <button className={styles.applyButton}>
            <Typography component="p">
              <BoltIcon />
              Easy Apply
            </Typography>
          </button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default JobCard;
