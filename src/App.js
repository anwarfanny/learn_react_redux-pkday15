import React from "react";
import AddTodo from "./component/AddTodo/AddTodo";
import TodoList from "./component/TodoList/TodoList";
import Footer from "./component/footer/footer";

function App() {
  return (
    <div>
      <AddTodo />
      <hr />
      <TodoList />
      <hr />
      <footer />
    </div>
  );
}

export default App;
