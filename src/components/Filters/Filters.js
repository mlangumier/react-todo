import React from "react";
import { NavLink } from "react-router-dom";

const Filters = (props) => {
  return (
    <>
      <NavLink to="/all" className="btn btn-outline-primary mr-2">
        All
      </NavLink>
      <NavLink to="/done" className="btn btn-outline-primary mr-2">
        Done
      </NavLink>
      <NavLink to="/pending" className="btn btn-outline-primary">
        Pending
      </NavLink>
    </>
  );
};

export default Filters;
