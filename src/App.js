import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { Container, Grid } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import Filter from "./components/filter";
import Jobs from "./components/jobs";
import { useEffect, useState } from "react";
import { addJobs, setTotal } from "./store/jobs";
import theme from "./theme";

function App() {
  let lastMaxScrolledPosition = 300;
  const myHeaders = new Headers();
  const dispatch = useDispatch();
  myHeaders.append("Content-Type", "application/json");

  const payload = JSON.stringify({
    limit: 10,
    offset: 10,
  });
  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    payload,
  };

  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (lastMaxScrolledPosition < scrollY) {
      lastMaxScrolledPosition = scrollY;
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [window.scrollY]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      "https://api.weekday.technology/adhoc/getSampleJdJSON",
      requestOptions
    );
    const data = await response.json();
    dispatch(addJobs(data?.jdList));
    dispatch(setTotal(data?.totalCount));
  };

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md">
        <Grid container>
          <Grid item xs={12}>
            <Filter />
          </Grid>
          <Grid item xs={12}>
            <Jobs />
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default App;
