import React from "react";
import TodoElement from "./TodoElement/TodoElement";
import { connect } from "react-redux";
import { VisibilityFilters, toggleTodo, deleteTodo } from "../../store/actions";

const TodoList = ({ todos, deleteTodo, toggleTodo }) => {
  return (
    <ul className="list-group">
      {todos &&
        todos.map((todo, index) => (
          <TodoElement
            key={todo.name}
            todo={todo}
            deleteTodo={() => deleteTodo(index)}
            toggleTodo={() => toggleTodo(index)}
          />
        ))}
    </ul>
  );
};

export default connect(
  (state) => {
    // console.log("TodoList.js - state.filter :");
    // console.log(state);

    const filter = state.filterReducer;
    let todos;

    switch (filter) {
      case VisibilityFilters.SHOW_DONE: {
        todos = state.todoReducer.filter((todo) => todo.done);
        break;
      }
      case VisibilityFilters.SHOW_PENDING: {
        todos = state.todoReducer.filter((todo) => !todo.done);
        break;
      }
      default: {
        todos = state.todoReducer;
        break;
      }
    }
    //console.log("TodoList.js - how many todos: " + todos.length);

    return { todos };
  },
  {
    toggleTodo,
    deleteTodo,
  }
)(TodoList);
