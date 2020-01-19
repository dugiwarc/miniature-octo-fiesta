import React, { Fragment } from "react";
import { Route, Switch } from "react-router";
import Chat from "./chat/Chat";

import "./App.css";

const App = () => {
  console.log("REFRESH");
  return (
    <Fragment>
      <Switch>
        <Route exact path="/" component={Chat} />
        <Route exact path="/chat" component={Chat} />
      </Switch>
    </Fragment>
  );
};

export default App;
