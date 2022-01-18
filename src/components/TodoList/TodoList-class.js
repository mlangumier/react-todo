import React, { Component } from "react";
import TodoElement from "./TodoElement/TodoElement";
import { connect } from "react-redux";
import { fetchTodo, tryToggleTodo, tryDeleteTodo } from "../../store/actions";
import { filteredTodoDataSelector } from "../../store/selectors";

class TodoListClass extends Component {
  constructor(props) {
    super(props);
    props.fetchTodo();
  }

  render() {
    const { tryDeleteTodo, tryToggleTodo, todoList } = this.props;
    return (
      <ul className="list-group">
        {todoList &&
          todoList.map((todo, index) => (
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
  (state, ownProps) => {
    const filter = ownProps.match.params.filter;
    return {
      todos: filteredTodoDataSelector(state, filter),
    };
  },
  { tryDeleteTodo, tryToggleTodo, fetchTodo }
)(TodoListClass);
