import React, { Component } from "react";
import TodoElement from "./TodoElement/TodoElement";
import { connect } from "react-redux";
import { fetchTodo, tryDeleteTodo, tryToggleTodo } from "../../store/actions";
import { filteredTodoDataSelector } from "../../store/selectors";

class TodoList extends Component {
  constructor(props) {
    super(props);
    props.fetchTodo();
  }

  render() {
    const { todoList, tryDeleteTodo, tryToggleTodo } = this.props;

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
  (state) => {
    return {
      todoList: filteredTodoDataSelector(state),
    };
  },
  {
    tryToggleTodo,
    tryDeleteTodo,
    fetchTodo,
  }
)(TodoList);
