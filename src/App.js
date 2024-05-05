import { Container, Grid } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import "./App.css";

import theme from "./theme";
import Filter from "./components/filter/Filter";
import Jobs from "./components/jobs/Jobs";

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
