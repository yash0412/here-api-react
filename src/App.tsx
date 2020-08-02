import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider } from "@material-ui/core/styles";
import React from "react";
import ButtonAppBar from "./components/toolbar";
import { darkTheme, lightTheme } from "./ui/theme";

function App() {
  const [isDarkMode, setDarkMode] = React.useState(true);
  const theme = isDarkMode === true ? darkTheme : lightTheme;
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <ButtonAppBar modeChanged={{ isDarkMode, setDarkMode }} />
    </MuiThemeProvider>
  );
}

export default App;
