import { Grid } from "@mui/material";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData, filterdData } from "../../utils/data";
import { isFilterApplied } from "../../utils/filter-utils";
import Loading from "../common/Loading";
import NoDataFound from "../common/NoDataFound";
import Card from "./Card";

const Jobs = () => {
  const [jobsData, setJobsData] = useState([]);
  const [page, setPage] = useState(1);
  const filter = useSelector((state) => state.filter);
  const { jobs = [], loading, total } = useSelector((state) => state.jobs);
  const dispatch = useDispatch();

  const hasMoreData = useMemo(() => {
    return jobs?.length < total;
  }, [total, jobs]);

  /**
   * Get Filtered Data
   */
  useEffect(() => {
    const tempJobsData = [...jobs];
    const { isApplied } = isFilterApplied(filter);
    if (!isApplied) {
      setJobsData(tempJobsData);
    } else {
      setJobsData(filterdData(tempJobsData, filter));
    }
  }, [jobs, filter]);

  /**
   * Fetch data
   */
  useEffect(() => {
    dispatch(fetchData(page, jobs));
    // eslint-disable-next-line
  }, [page, dispatch]);

  /**
   *  Logic for infinite Scroll
   */
  const observer = useRef();
  const lastJobCard = useCallback(
    (node) => {
      if (loading || !node) return;
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
      {!!jobsData.length &&
        jobsData.map((job, index) => {
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
                <Card job={job} />
              </Grid>
            );
          }
          return (
            <Grid key={`${job?.jdUid}_${index}`} item lg={4} md={6} xs={12}>
              <Card job={job} />
            </Grid>
          );
        })}
      {!loading && !jobsData.length && (
        <Grid item xs={12}>
          <NoDataFound />
        </Grid>
      )}
      {loading && (
        <Grid item xs={12} pl={4}>
          <Loading />
        </Grid>
      )}
    </Grid>
  );
};

export default Jobs;
