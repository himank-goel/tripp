import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Details from "./Details";
import registerServiceWorker from "./registerServiceWorker";
import { Route, HashRouter } from "react-router-dom";

ReactDOM.render(
  <HashRouter>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/details" component={Details} />
    </div>
  </HashRouter>,
  document.getElementById("root")
);
registerServiceWorker();
