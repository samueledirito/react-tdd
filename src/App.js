import React from "react";
import { Switch, Redirect } from "react-router-dom";
import Home from "./screen/Home";
import DefaultLayout from "./components/DefaultLayout";

function App() {
  return (
    <Switch>
      <DefaultLayout
        path="/page"
        component={() => <div data-testid="content">Page</div>}
      />
      <DefaultLayout exact path="/" component={Home} />
      <Redirect to="/" />
    </Switch>
  );
}

export default App;
