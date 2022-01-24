import "./App.css";
import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

const LazyTodo = lazy(() => import("./features/todos"));

function App() {
  return (
    <Routes>
      <Route
        path="*"
        element={
          <Suspense fallback={<>...</>}>
            <LazyTodo />
          </Suspense>
        }
      />
    </Routes>
  );
}

export default App;
