import { Link } from "react-router-dom";
import TodoTile from "../components/TodoTile";

const Todos = () => {
  return (
    <div>
      <h1>List of all todos</h1>
      <div className="todo-list">
        <TodoTile title="Code" />
        <TodoTile title="Eat" />
        <TodoTile title="Sleep" />
        <TodoTile title="Repeat" />
      </div>
      <Link to='/add' className="p-2 border bg-green-500 text-white rounded-full shadow-md hover:bg-green-700">Add Todo</Link>
    </div>
  );
};

export default Todos;
