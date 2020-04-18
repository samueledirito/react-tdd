import React from "react";
import { Route } from "react-router-dom";

const DefaultLayout = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(matchProps) => (
        <div className="DefaultLayout">
          <div data-testid="header" className="Header">
            Header
          </div>
          <Component {...matchProps} />
          <div data-testid="footer" className="Footer">
            Footer
          </div>
        </div>
      )}
    />
  );
};

export default DefaultLayout;
