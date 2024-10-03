import { Link } from "react-router-dom";
import TodoTile from "../components/TodoTile";
import { useEffect, useState } from "react";
import { getTodos, deleteTodo } from "../api/todos";
import { toast } from "react-toastify";

const Todos = () => {
  const [loading, setLoading] = useState(false);
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    try {
      setLoading(true);
      const response = await getTodos();
      console.log("Todos --->", response);
      if (response.status === 200) {
        setTodos(response.data);
      }
    } catch (error) {
      // toast.error("Error fetching todos");
      console.error("Error fetching todos:", error);
    } finally {
      setLoading(false);
    }
  };


  const deleteTodo = async ()=>{
    try {
      setLoading(true)
      const response = await deleteTodo()
      
      
    } catch (error) {
      console.log("Error deleting todo--->", error);
      toast.error("Error deleting todo!")
    }finally{
      setLoading(false)
    }
  }
  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-lg">
        <div className="flex justify-between align-middle mb-6 items-center">
          <h1 className="text-3xl font-bold text-gray-900  text-center">
            List of Todos
          </h1>
          <Link
            to="/add"
            className="bg-green-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-green-600 transition duration-300"
          >
            Add Todo
          </Link>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          {loading ? (
            <p className="text-center text-gray-500">Loading...</p>
          ) : todos.length > 0 ? (
            todos.map((todo, index) => (
              <div
                key={index}
                className="mb-4 p-4 border-b border-gray-200 flex justify-between items-center"
              >
                <TodoTile title={todo.title} status={todo.completed} />
                
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No todos to display</p>
          )}
          <TodoTile title="Get a girlfriend" status={true} />
        </div>
      </div>
    </div>
  );
};

export default Todos;
