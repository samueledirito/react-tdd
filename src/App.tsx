import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import Home from "screen/Home";
import DefaultLayout from "components/DefaultLayout";

const App: React.FC = () => {
  return (
    <DefaultLayout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Redirect to="/" />
      </Switch>
    </DefaultLayout>
  );
};

export default App;
