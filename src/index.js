import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { Route, HashRouter } from "react-router-dom";

ReactDOM.render(
  <HashRouter>
    <div>
      <Route path="/" component={App} />
    </div>
  </HashRouter>,
  document.getElementById("root")
);
registerServiceWorker();
