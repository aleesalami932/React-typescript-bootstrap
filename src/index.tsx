import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// use this to be able to use bootstrap in react apps
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
