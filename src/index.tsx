import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// use this to be able to use bootstrap in react apps
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { ThemeProvider } from "react-bootstrap";

ReactDOM.render(
  <ThemeProvider dir="rtl">
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
