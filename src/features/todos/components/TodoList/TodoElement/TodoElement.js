import React from "react";

const TodoItem = ({ todo, tryToggleTodo, tryDeleteTodo }) => {
  return (
    <li
      className="list-group-item flex-column d-flex justify-content-between align-items-center"
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
