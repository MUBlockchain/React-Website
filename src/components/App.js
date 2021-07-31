import React, { useState } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { Paper, Grid, useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";

import Header from "./Header";
import ImageGallery from "./imageGallery/ImageGallery";
import About from "./About";
import Leadership from "./leadership/Leadership";
import Affiliations from "./affiliations/Affiliations";
import Course from "./course/Course";
import Calendar from "./calendar/Calendar";
import Newsletter from "./Newsletter";
import CryptoCommittee from "./CryptoCommittee";
import Footer from "./Footer";
import { darkTheme, lightTheme } from "./../theme";

export default function App() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [darkMode, setDarkMode] = useState(isMobile ? false : prefersDarkMode);
  return (
    <Grid container>
      <Paper>
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
          <Grid container item direction="column">
            <Header setDarkMode={setDarkMode} darkMode={darkMode} />
            <ImageGallery />
            <About />
            <Affiliations />
            <Calendar darkMode={darkMode} />
            <Course />
            <CryptoCommittee />
            <Leadership />
            <Newsletter />
            <Footer />
          </Grid>
        </ThemeProvider>
      </Paper>
    </Grid>
  );
}
