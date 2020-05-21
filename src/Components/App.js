import React from "react";
import Home from "../Routes/Home";
import Salads from "../Routes/Salads";
import Calendar from "../Routes/Calendar";

import { HashRouter, Route } from "react-router-dom";
import Header from "./Header";

const App = () => {
  return (
    <>
      <HashRouter>
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/salads" component={Salads} />
        <Route exact path="/calendar" component={Calendar} />
      </HashRouter>
    </>
  );
};

export default App;
