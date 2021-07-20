import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { Paper, Grid } from "@material-ui/core";

import Header from "./Header";
import Leadership from "./leadership/Leadership";
import ImageGallery from "./imageGallery/ImageGallery";
import { darkTheme } from "./../theme";

export default function App() {
  return (
    <Paper>
      <ThemeProvider theme={darkTheme}>
        <Grid item container direction="column">
          <Header />
          <Grid item container>
            <Grid item xs={1} />
            <Grid item xs={10}>
              <ImageGallery />
            </Grid>
            <Grid item xs={1} />
          </Grid>
          <Leadership />
        </Grid>
      </ThemeProvider>
    </Paper>
  );
}
