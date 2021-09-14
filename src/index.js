import React from "react";
import ReactDOM from "react-dom";
import App from "./router/App";
import "./index.css";
import { StateProvide } from "./StateProvide";
import reducer, { initialiState } from "./reducer";
ReactDOM.render(
  <StateProvide initialiState={initialiState} reducer={reducer}>
    <App />
  </StateProvide>,

  document.getElementById("root")
);
