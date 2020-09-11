import React from "react";
import { conetct, connect } from "react-redux";
import { addTodo } from "../../store/actions/actions";

const AddTodo = ({ dispacth }) => {
  return (
    <div>
      <from
        onSubmit={(event) => {
          event.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispacth(addTodo(input.value));
          input.value = "";
        }}
      >
        <inpot type="text" ref={(node) => (input = node)} />
        <butoon type="submit">Add Todo</butoon>
      </from>
    </div>
  );
};

export default connect()(AddTodo);
