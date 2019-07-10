import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { NavBar } from "./components/navBar/NavBar";
import { Home } from "./components/home/Home";
import { HomeALT } from "./components/homeALT/HomeALT";
import { Status } from "./components/status/Status";

const Routes = () => (
  <BrowserRouter>
    <div id="header">
      <a href="/" title="Home"><img id="headerLogo" src="/images/cwpLogo.png" alt="Community Warehouse Project of Chester County Logo"/></a>
      <NavBar />
    </div>
    <div id="routerContent">
      <Route exact path="/" component={Home} />
      <Route exact path="/alternate" component={HomeALT} />
      <Route exact path="/status" component={Status} />
    </div>
    <div id="footer">
      <div id="copyrightDiv">
      © Community Warehouse Project of Chester County 2017 - {new Date().getFullYear()}<br/>(484) 473-4360‬
        {new Date().getFullYear()}
      </div>
      <div id="devDiv">
        Development by <a href="http://www.thisguywritescode.com/" target="_blank" title="Opens in a New Window" rel="noopener noreferrer">Jeff Kapochus</a><br />
        Design by Annae Wetherhold and Kristin Williams
      </div>
    </div>
  </BrowserRouter>
);

export default Routes;
