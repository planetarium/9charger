import React from "react";
import ReactDOM from "react-dom";
import { createClient } from "urql";
import View from "./components/view";

ReactDOM.render(
  <React.StrictMode>
    <View />
  </React.StrictMode>,
  document.getElementById("root")
);
