import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Home } from "./components/home/Home";
import { Status } from "./components/status/Status";

const Routes = () => (
  <BrowserRouter>
    <div id="header">
      <h1>Community Warehouse Project of Chester County</h1>
    </div>
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/status" component={Status} />
    </div>
    <div id="footer">
      <div id="copyrightDiv">
        © Community Warehouse Project of Chester County 2019-
        {new Date().getFullYear()}
      </div>
    </div>
  </BrowserRouter>
);

export default Routes;
