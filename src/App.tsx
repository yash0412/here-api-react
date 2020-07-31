import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import React from "react";
import theme from "./ui/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Button variant="contained" color="primary">
        Hello World
      </Button>
      <Button variant="contained" color="secondary">
        Hello World
      </Button>
    </ThemeProvider>
  );
}

export default App;
