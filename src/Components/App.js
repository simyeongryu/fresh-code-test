import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Home from "../Routes/Home";
import Salads from "../Routes/Salads";
import Detail from "../Routes/Detail";
import Header from "./Header";

const App = () => {
  return (
    <>
      <HashRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/salads" component={Salads} />
          <Route path="/:id" component={Detail} />
          <Route to="/" />
        </Switch>
      </HashRouter>
    </>
  );
};

export default App;
