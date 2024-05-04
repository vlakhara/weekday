import { Container, Grid } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import "./App.css";
import Filter from "./components/filter";
import Jobs from "./components/jobs";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg" sx={{ my: 2 }}>
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
