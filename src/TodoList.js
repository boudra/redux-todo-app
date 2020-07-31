import React from "react";
import { connect } from "react-redux";

function TodoList({ todos, toggleTodo }) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <li>
          <input type="checkbox" onClick={e => toggleTodo(index)} value={todo.completed} />
          <p>{todo.text}</p>
        </li>
      ))}
    </ul>
  );
}

function mapStateToProps(state) {
  return {
    todos: state.todos,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    toggleTodo: (index) => dispatch({ type: "TOGGLE_TODO", payload: index }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
