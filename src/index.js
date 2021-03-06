import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "react-responsive-carousel/lib/styles/carousel.min.css";

ReactDOM.render(
  // <React.StrictMode> TODO: CAUSES RERENDER (IN DEV MODE) ?? https://medium.com/@andreasheissenberger/react-components-render-twice-any-way-to-fix-this-91cf23961625
  <Router>
    <App />
  </Router>,
  // </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
