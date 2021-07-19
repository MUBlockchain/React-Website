import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";

import Header from "./Header";
import Leadership from "./leadership/Leadership";
import { darkTheme } from "./../theme";

export default function App() {
  return (
    <Paper>
      <ThemeProvider theme={darkTheme}>
        <Header />
        <Leadership />
      </ThemeProvider>
    </Paper>
  );
}
