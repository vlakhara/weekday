import { Box, Grid, Skeleton, Typography } from "@mui/material";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../../store/jobs";
import { fetchData, filterdData } from "../../utils/data";
import { isFilterApplied } from "../../utils/filterUtils";
import JobCard from "./JobCard";

const Jobs = () => {
  const [jobsData, setJobsData] = useState([]);
  const { jobs = [], loading, total } = useSelector((state) => state.jobs);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const hasMoreData = useMemo(() => {
    return jobs?.length < total;
  }, [total, jobs]);

  useEffect(() => {
    const tempJobsData = [...jobs];
    const { isApplied } = isFilterApplied(filter);
    if (!isApplied) {
      setJobsData(tempJobsData);
    } else {
      setJobsData(dispatch(filterdData(tempJobsData, filter)));
    }
  }, [jobs, filter]);

  useEffect(() => {
    dispatch(fetchData(page, jobs));
    // eslint-disable-next-line
  }, [page, dispatch]);

  const observer = useRef();
  const lastJobCard = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current?.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMoreData) {
          setPage((prev) => prev + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMoreData]
  );

  return (
    <Grid container spacing={3} mt={2}>
      {jobsData.map((job, index) => {
        if (jobsData.length === index + 1) {
          return (
            <Grid
              key={`${job?.jdUid}_${index}`}
              ref={lastJobCard}
              item
              lg={4}
              md={6}
              xs={12}
            >
              <JobCard job={job} />
            </Grid>
          );
        }
        return (
          <Grid key={`${job?.jdUid}_${index}`} item lg={4} md={6} xs={12}>
            <JobCard job={job} />
          </Grid>
        );
      })}
      {!loading && !jobsData.length && (
        <Grid item xs={12}>
          <Box>
            <Typography>No Data Found</Typography>
          </Box>
        </Grid>
      )}
      {loading && (
        <Grid item xs={12} pl={4}>
          <Skeleton variant="rounded" animation="wave" sx={{ mt: 2 }} />
          <Skeleton variant="rounded" animation="wave" sx={{ mt: 2 }} />
          <Skeleton variant="rounded" animation="wave" sx={{ mt: 2 }} />
          <Skeleton variant="rounded" animation="wave" sx={{ mt: 2 }} />
        </Grid>
      )}
    </Grid>
  );
};

export default Jobs;
