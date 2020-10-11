import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import getUser from "./utils/API";

getUser();

ReactDOM.render(<App />, document.getElementById("root"));
