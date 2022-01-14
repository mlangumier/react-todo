import React, { useRef } from "react";
import { connect } from "react-redux";
import { addTodo } from "../../store/actions";

function InputTodo(props) {
  const inputElement = useRef(null);

  const submitTodo = () => {
    // console.log(inputElement.current.value); //--OK
    props.addTodo({
      name: inputElement.current.value,
      done: false,
    });
    inputElement.current.value = "";
  };

  return (
    <div className="d-flex mb-4">
      <input type="text" ref={inputElement} className="form-control mr-5" />
      <button
        type="button"
        className="btn btn-outline-success"
        onClick={submitTodo}
      >
        Add
      </button>
    </div>
  );
}

export default connect(null, { addTodo })(InputTodo);
