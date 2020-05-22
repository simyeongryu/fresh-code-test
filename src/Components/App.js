import React from "react";
import Home from "../Routes/Home";
import Salads from "../Routes/Salads";
import Calendar from "../Routes/Calendar";

import { HashRouter, Route, Switch } from "react-router-dom";
import Header from "./Header";

const App = () => {
  return (
    <>
      <HashRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/salads" component={Salads} />
          <Route path="/calendar" component={Calendar} />
          <Route to="/" />
        </Switch>
      </HashRouter>
    </>
  );
};

export default App;
