import React from "react";
import { NavLink } from "react-router-dom";

const Filters = (props) => {
  return (
    <>
      <NavLink to="/todo/all" className="btn btn-outline-primary mr-2">
        All
      </NavLink>
      <NavLink to="/todo/done" className="btn btn-outline-primary mr-2">
        Done
      </NavLink>
      <NavLink to="/todo/pending" className="btn btn-outline-primary">
        Pending
      </NavLink>
    </>
  );
};

export default Filters;
