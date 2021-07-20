import { responsiveFontSizes, createTheme } from "@material-ui/core/styles";

let darkTheme = createTheme({
  palette: {
    primary: {
      main: "#c62828",
      light: "#ff5f52",
      dark: "#8e0000",
    },
    secondary: {
      main: "#ffffff",
      light: "#ffffff",
      dark: "#cccccc",
    },
    type: "dark",
  },
});

darkTheme = responsiveFontSizes(darkTheme);

let lightTheme = createTheme({
  palette: {
    primary: {
      main: "#c62828",
      light: "#ff5f52",
      dark: "#8e0000",
    },
    secondary: {
      main: "#212121",
      light: "#484848",
      dark: "#000000",
    },
  },
});

lightTheme = responsiveFontSizes(lightTheme);

export { darkTheme, lightTheme };
