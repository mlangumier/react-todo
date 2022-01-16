import React from "react";

const TodoItem = ({ todo, tryToggleTodo, tryDeleteTodo }) => {
  return (
    <li
      className="list-group-item d-flex flex-row justify-content-between align-items-center list-group"
      onClick={tryToggleTodo}
    >
      <span>{todo.name}</span>
      <span>
        <input
          type="checkbox"
          checked={todo.done}
          onChange={() => {}}
          className="mx-3"
        />
        <button
          className="btn btn-sm btn-outline-danger"
          onClick={(e) => {
            e.stopPropagation();
            tryDeleteTodo();
          }}
        >
          Delete
        </button>
      </span>
    </li>
  );
};

export default TodoItem;
