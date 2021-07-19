import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./components/App";
import CssBaseline from "@material-ui/core/CssBaseline";

ReactDOM.render(
  <Router>
    <CssBaseline />
    <App />
  </Router>,
  document.querySelector("#root")
);
