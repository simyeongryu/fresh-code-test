import React from "react";
import Home from "../Routes/Home";
import { HashRouter, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <HashRouter>
        <Route exact path="/" component={Home} />
      </HashRouter>
    </>
  );
};

export default App;
