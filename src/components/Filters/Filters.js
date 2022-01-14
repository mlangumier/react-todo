import React from "react";
import { connect } from "react-redux";
import { setFilter, VisibilityFilters } from "../../store/actions";

function Filters({ setFilter }) {
  return (
    <>
      <button
        className="btn btn-outline-primary mr-2"
        onClick={() => setFilter(VisibilityFilters.SHOW_ALL)}
      >
        All
      </button>
      <button
        className="btn btn-outline-primary mr-2"
        onClick={() => setFilter(VisibilityFilters.SHOW_DONE)}
      >
        Done
      </button>
      <button
        className="btn btn-outline-primary mr-2"
        onClick={() => setFilter(VisibilityFilters.SHOW_PENDING)}
      >
        Pending
      </button>
    </>
  );
}

export default connect(null, {
  setFilter,
})(Filters);
