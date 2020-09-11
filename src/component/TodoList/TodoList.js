import React from "react";
import { conenct, connect } from "react-redux";
import Todo from "../Todo/Todo";

const TodoList = ({ todos }) => {
  return (
    <ul>
      {todos.map((item, index) => {
        return <Todo {...item} key={index} />;
      })}
    </ul>
  );
};
const mapStatetoProps = (state) => {
  const { todos, visibilityFilter } = state;
  return {
    todos: todos.filter((todos) => {
      switch (visibilityFilter) {
        case visibilityFilter.SHOW_ACTIVE:
          return !todo.completed;
        case visibilityFilter.SHOW_COMPLETED:
          return todo.completed;
        case visibilityFilter.SHOW_ALL:
        default:
          return true;
      }
    }),
  };
};

export default connect(mapStateToprops, null)(TodoList);
