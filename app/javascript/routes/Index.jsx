import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import Archive from "../components/Archive";
import About from "../components/About";

export default (
    <Router>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/archive" exact component={Archive} />
        </Switch>
    </Router>
);