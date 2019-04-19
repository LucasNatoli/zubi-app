import React from "react";
import { Route, Link } from "react-router-dom";

export default function RouteLink({ label, to, activeOnlyWhenExact }) {
  return (
    <Route
      path={to}
      exact={activeOnlyWhenExact}
      children={({ match }) => (
        <div className={match ? "active" : ""}>
          <Link className="nav-link" to={to}>
            {label}
          </Link>
        </div>
      )}
    />
  );
}