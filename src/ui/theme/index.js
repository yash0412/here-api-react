import { createMuiTheme } from "@material-ui/core/styles";
import DarkTheme from "./darkTheme.json";
import LightTheme from "./lightTheme.json";

export const lightTheme = createMuiTheme(LightTheme);
export const darkTheme = createMuiTheme(DarkTheme);
