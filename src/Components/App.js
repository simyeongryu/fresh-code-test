import React from "react";
import Home from "../Routes/Home";
import { HashRouter, Route } from "react-router-dom";
import Header from "./Header";

const App = () => {
  return (
    <>
      <HashRouter>
        <Header />
        <Route exact path="/" component={Home} />
      </HashRouter>
    </>
  );
};

export default App;
