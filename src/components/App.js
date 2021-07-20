import React, { useState } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { Paper, Grid, useMediaQuery } from "@material-ui/core";

import Header from "./Header";
import ImageGallery from "./imageGallery/ImageGallery";
import About from "./About";
import Leadership from "./leadership/Leadership";
import Affiliations from "./affiliations/Affiliations";
import { darkTheme, lightTheme } from "./../theme";

export default function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [darkMode, setDarkMode] = useState(prefersDarkMode);
  return (
    <Grid container>
      <Paper>
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
          <Grid container item direction="column">
            <Header setDarkMode={setDarkMode} darkMode={darkMode} />
            <ImageGallery />
            <About />
            <Leadership />
            <Affiliations />
          </Grid>
        </ThemeProvider>
      </Paper>
    </Grid>
  );
}
