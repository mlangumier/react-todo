import React, { useEffect } from "react";
import TodoElement from "./TodoElement/TodoElement";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodo, tryDeleteTodo, tryToggleTodo } from "../../store/actions";
import { filteredTodoDataSelector } from "../../store/selectors";
import { useParams } from "react-router-dom";

const TodoList = () => {
  const dispatch = useDispatch();
  const filter = useParams().filter;

  const todoList = useSelector((state) =>
    filteredTodoDataSelector(filter, state?.todoReducer?.data)
  );

  useEffect(() => {
    dispatch(fetchTodo());
  }, [dispatch]);

  return (
    <ul className="list-group">
      {todoList &&
        todoList.map((todo) => (
          <TodoElement
            key={todo.index}
            todo={todo}
            tryDeleteTodo={() => dispatch(tryDeleteTodo(todo.index))}
            tryToggleTodo={() => dispatch(tryToggleTodo(todo.index))}
          />
        ))}
    </ul>
  );
};

export default TodoList;
