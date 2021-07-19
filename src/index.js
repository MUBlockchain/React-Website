import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";

import App from "./components/App";

ReactDOM.render(
  // <Router>
  <CssBaseline>
    <App />
  </CssBaseline>,
  // </Router>,
  document.querySelector("#root")
);
