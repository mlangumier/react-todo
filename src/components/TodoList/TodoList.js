import React, { Component } from "react";
import TodoElement from "./TodoElement/TodoElement";
import { connect } from "react-redux";
import {
  VisibilityFilters,
  fetchTodo,
  tryDeleteTodo,
  tryToggleTodo,
} from "../../store/actions";

// function TodoList(props) {
class TodoList extends Component {
  constructor(props) {
    super(props);
    props.fetchTodo();
  }

  render() {
    const { todos, tryDeleteTodo, tryToggleTodo } = this.props;

    return (
      <ul className="list-group">
        {todos &&
          todos.map((todo, index) => (
            <TodoElement
              key={todo.name}
              todo={todo}
              tryDeleteTodo={() => tryDeleteTodo(index)}
              tryToggleTodo={() => tryToggleTodo(index)}
            />
          ))}
      </ul>
    );
  }
}

export default connect(
  (state) => {
    const filter = state.filterReducer;
    let todos;

    switch (filter) {
      case VisibilityFilters.SHOW_DONE: {
        todos = state.todoReducer.data.filter((todo) => todo.done);
        break;
      }
      case VisibilityFilters.SHOW_PENDING: {
        todos = state.todoReducer.data.filter((todo) => !todo.done);
        break;
      }
      default: {
        todos = state.todoReducer.data;
        break;
      }
    }

    return { todos };
  },
  {
    tryToggleTodo,
    tryDeleteTodo,
    fetchTodo,
  }
)(TodoList);
