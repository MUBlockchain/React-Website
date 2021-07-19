import { responsiveFontSizes, createTheme } from "@material-ui/core/styles";

let darkTheme = createTheme({
  palette: {
    primary: {
      main: "#e57373",
      light: "#ffa4a2",
      dark: "#af4448",
    },
    secondary: {
      main: "#73e5e5",
      light: "#a9ffff",
      dark: "#39b3b3",
    },
    type: "dark",
  },
});

darkTheme = responsiveFontSizes(darkTheme);

let lightTheme = createTheme({
  palette: {
    primary: {
      main: "#185adb",
      light: "#6786ff",
      dark: "#0032a8",
    },
    secondary: {
      main: "#fdd835",
      light: "#ffff6b",
      dark: "#c6a700",
    },
  },
});

lightTheme = responsiveFontSizes(lightTheme);

export { darkTheme, lightTheme };
