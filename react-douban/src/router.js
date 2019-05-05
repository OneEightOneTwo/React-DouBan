import React from "react";
import { Router, Route, Switch } from "dva/router";

import HomePage from "./routes/HomePage/HomePage";
import Movie from "./routes/Movie/Movie/Movie";
import Read from "./routes/Read/Read/Reading";

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        {/* <Route path="/" exact component={IndexPage} /> */}
        <Route path="/" exact component={HomePage} />
        <Route path="/movie" exact component={Movie} />
        <Route path="/read" exact component={Read} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
