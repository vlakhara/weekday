import BoltIcon from "@mui/icons-material/Bolt";
import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import styles from "./jobCard.module.css";
import {
  getFormatedString,
  truncateString,
  updateExperienceStr,
} from "../../utils/common";
const JobCard = ({ job }) => {
  return (
    <Box className={`${styles.jobCard} job-card`}>
      <Grid container px={2.5} py={2.5}>
        <Grid item xs={12}>
          <Typography className={styles.chip}>⏳{job?.postedDate}</Typography>
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
              {getFormatedString(job?.companyName)}
            </Typography>
            <Typography component="p">
              {getFormatedString(job?.jobRole)}
            </Typography>
            <Typography component="p">
              {getFormatedString(job?.location)}
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12} mt={2} display="flex" gap={1}>
          {job?.tecks?.map((item) => (
            <Typography className={styles.chip}>{item}</Typography>
          ))}
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
        <Grid item xs={12} mt={1}>
          <Typography>{`Employees: ${job?.noOfEmployees}`}</Typography>
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
