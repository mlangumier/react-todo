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
        todoList.map((todo, index) => (
          <TodoElement
            key={todo.name}
            todo={todo}
            tryDeleteTodo={() => dispatch(tryDeleteTodo(index))}
            tryToggleTodo={() => dispatch(tryToggleTodo(index))}
          />
        ))}
    </ul>
  );
};

export default TodoList;
