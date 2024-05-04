import { Grid } from "@mui/material";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import JobCard from "./JobCard";
import { fetchData } from "../../utils/data";

const Jobs = () => {
  const { jobs = [], loading, total } = useSelector((state) => state.jobs);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const hasMoreData = useMemo(() => {
    return jobs?.length < total;
  }, [total, jobs]);

  useEffect(() => {
    dispatch(fetchData(page, jobs));
  }, [page]);

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
      {jobs.map((job, index) => {
        if (jobs.length === index + 1) {
          return (
            <Grid key={job?.jdUid} ref={lastJobCard} item lg={4} md={6} xs={12}>
              <JobCard key={job?.jdUid} job={job} />
            </Grid>
          );
        }
        return (
          <Grid key={job?.jdUid} item lg={4} md={6} xs={12}>
            <JobCard key={job?.jdUid} job={job} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Jobs;
