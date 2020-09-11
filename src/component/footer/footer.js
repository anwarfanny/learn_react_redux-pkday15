import React from "./node_modules/react";
import { connect } from "./node_modules/react-redux";
import {
  setVisibilityFilter,
  visibilityfilters,
} from "../../store/actions/actions";

const footer = ({ setVisibilityFilter }) => {
  return (
    <div>
      <span>Show :</span>
      <button
        onClick={() => {
          setVisibilityFilter(visibilityFilter.SHOW_ALL);
        }}
      >
        All
      </button>
      <button
        onClick={() => {
          setVisibilityFilter(visibilityFilter.SHOW_ACTIVE);
        }}
      >
        Active
      </button>
      <button
        onClick={() => {
          setVisibilityFilter(visibilityFilter.SHOW_COMPLETED);
        }}
      >
        Completed
      </button>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => {
  return;

  return {
    setVisibilityFilter: (filter) => {
      dispatch(setVisibilityFilter(filter));
    },
  };
};

export default connect(null, mapDispatchToProps)(footer);
