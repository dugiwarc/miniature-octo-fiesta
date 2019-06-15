import React, { Fragment } from "react";
import { Route, Switch } from "react-router";
import Chat from "./chat/Chat";

import "./App.css";

const App = () => {
  console.log("REFRESH")
  return (
    <Fragment>
      <Route exact path="/" />
      <Switch>
        <Route exact path="/chat" component={Chat} />
      </Switch>
    </Fragment>
  );
};

export default App;
