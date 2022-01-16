import React, { Component } from "react";
import { connect } from "react-redux";
import { tryAddTodo } from "../../store/actions";

class InputTodo extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  submitTodo = () => {
    console.log(this.inputRef.current.value);
    this.props.tryAddTodo({
      name: this.inputRef.current.value,
      done: false,
    });
    this.inputRef.current.value = "";
  };

  render() {
    return (
      <div className="d-flex mb-4">
        <input type="text" ref={this.inputRef} className="form-control mr-5" />
        <button
          type="button"
          className="btn btn-outline-success"
          onClick={this.submitTodo}
        >
          Add
        </button>
      </div>
    );
  }
}

export default connect(null, { tryAddTodo })(InputTodo);
