import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { tryAddTodo } from "../../store/actions";

const InputTodo = () => {
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state?.todoReducer?.data);
  const ref = useRef("");

  const submitTodo = () => {
    dispatch(
      tryAddTodo({
        name: ref.current.value,
        done: false,
        index: todoList[todoList.length - 1]?.index + 1 || 0,
      })
    );
    ref.current.value = "";
  };

  return (
    <div className="d-flex mb-4">
      <input type="text" ref={ref} className="form-control mr-5" />
      <button
        type="button"
        className="btn btn-outline-success"
        onClick={submitTodo}
      >
        Add
      </button>
    </div>
  );
};

export default InputTodo;
