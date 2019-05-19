import React from "react";
import { Route, Switch } from "react-router-dom";

import LandingPage from "../components/LandingPage";
import Resume from "../components/portfolio/Resume";
import Projects from "../components/portfolio/Projects";
import Contact from "../components/portfolio/Contact";
import AboutMe from "../components/portfolio/AboutMe";

export default function Routes() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/resume" component={Resume} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/aboutme" component={AboutMe} />
      </Switch>
    </div>
  );
}
