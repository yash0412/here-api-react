import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import React from "react";
import ButtonAppBar from "./components/toolbar";
import { darkTheme, lightTheme } from "./ui/theme";

function App() {
  const [isDarkMode, setDarkMode] = React.useState(false);
  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <ButtonAppBar modeChanged={{ isDarkMode, setDarkMode }} />
    </ThemeProvider>
  );
}

export default App;
