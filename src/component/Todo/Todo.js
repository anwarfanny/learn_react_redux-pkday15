import React from "react";
import { connect } from "react-redux";
import { toggleTodo } from "../../store/actions/actions";

const Todo = ({ id, complete, text, toggleTodo }) => {
  const onClick = () => {
    toggleTodo(id);
  };

  return (
    <li
      onClick={onclick}
      style={{ textDecoration: complete ? "line-through" : "none" }}
    >
      {text}
    </li>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleTodo: (id) => {
      dispatch(toggleTodo(id));
    },
  };
};
export default connect(nul, mapDispatchToProps)(Todo);
