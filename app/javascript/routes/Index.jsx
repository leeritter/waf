import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";
import Home from "../components/pages/Home";
import Archive from "../components/pages/Archive";
import ArchiveBeta from "../components/pages/ArchiveBeta";
import About from "../components/pages/About";
import OurWork from "../components/pages/OurWork";
import MlkTribute from "../components/pages/MlkTribute";
import Leadership from "../components/pages/Leadership";
import Donate from "../components/pages/Donate";

export default (
    <Router>
        <ScrollToTop />
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/archive" exact component={Archive} />
            <Route path="/archive-beta" exact component={ArchiveBeta} />
            <Route path="/our-work" exact component={OurWork} />
            <Route path="/mlk-tribute" exact component={MlkTribute} />
            <Route path="/leadership" exact component={Leadership} />
            <Route path="/donate" exact component={Donate} />
        </Switch>
    </Router>
);