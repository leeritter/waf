import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";
import Home from "../components/pages/Home";
import Archive from "../components/pages/Archive";
import About from "../components/pages/About";
import OurWork from "../components/pages/OurWork";

export default (
    <Router>
        <ScrollToTop />
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/archive" exact component={Archive} />
            <Route path="/our-work" exact component={OurWork} />
        </Switch>
    </Router>
);