import React from "react";
import { Route, Switch } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";

import Home from "./Home";
import Contact from "./Contact.js";
import About from "./About";
import Header from "./Header";
import Leadership from "./leadership/Leadership";
import { darkTheme } from "./../theme";

export default function App() {
  return (
    <Paper>
      <ThemeProvider theme={darkTheme}>
        <Header />
        <Leadership />
        {/* <Switch>
          <Route
            exact
            path="/contact"
            render={(props) => <Contact {...props} />}
          />
          <Route exact path="/about" render={(props) => <About {...props} />} />
          <Route
            exact
            path="/leadership"
            render={(props) => <Leadership {...props} />}
          />
          <Route exact from="/" render={(props) => <Home {...props} />} />
        </Switch> */}
      </ThemeProvider>
    </Paper>
  );
}
