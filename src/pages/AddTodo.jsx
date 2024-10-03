import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { addTodo } from "../api/todos";
import { toast } from "react-toastify";

const AddTodo = () => {
  const [todo, setTodo] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleAddTodo = async (e) => {
    e.preventDefault();
    if (!todo.trim()) return; // Prevent empty submissions

    try {
      setLoading(true);
      const response = await addTodo({ title: todo });

      if (response.status === 201) {
        setTodo(""); // Clear input after successful submission
        toast.success("Todo added successfully")
        navigate("/"); // Redirect to homepage
      }
    } catch (error) {
      console.error("Error posting todo:", error);
      toast.error("Error adding todo")
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold mb-6 text-gray-900">Add a Todo</h1>
        <form onSubmit={handleAddTodo} className="space-y-4">
          <input
            disabled={loading}
            type="text"
            placeholder="Enter a todo..."
            className="w-full border border-gray-300 rounded-full p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            name="todo"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            required
          />
          <button
            type="submit"
            disabled={loading}
            className={`w-full p-3 rounded-full text-white transition ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300"
            }`}
          >
            {loading ? "Adding..." : "Add Todo"}
          </button>
        </form>
        <Link
          to="/"
          className="block mt-4 text-center text-blue-600 hover:underline"
        >
          Go to Todos
        </Link>
      </div>
    </div>
  );
};

export default AddTodo;
