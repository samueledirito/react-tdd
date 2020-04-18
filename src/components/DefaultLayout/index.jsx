import React from "react";
import { Route } from "react-router-dom";
import AppBar from "./AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";

const DefaultLayout = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(matchProps) => (
        <div className="DefaultLayout">
          <CssBaseline />
          <AppBar />
          <Component {...matchProps} />
        </div>
      )}
    />
  );
};

export default DefaultLayout;
