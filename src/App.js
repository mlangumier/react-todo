import "./App.css";
import Filters from "./components/Filters/Filters";
import InputTodo from "./components/InputTodo/InputTodo";
import TodoList from "./components/TodoList/TodoList";

function App() {
  return (
    <div className="p-5">
      <h4>Add a new entry</h4>
      <InputTodo />
      <div className="card">
        <div className="card-header d-flex flex-row align-items-center">
          <span className="flex-fill">Todo list</span>
          <Filters />
        </div>
        <div className="card-body">
          <TodoList />
        </div>
      </div>
    </div>
  );
}

export default App;
